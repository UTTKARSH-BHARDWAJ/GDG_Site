const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = parseInt(process.argv[2] || '3000', 10);

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.webp': 'image/webp',
};

// Sensitive paths that should never be served
const BLOCKED_PATHS = [
    '/.git',
    '/.env',
    '/server.js',
    '/package.json',
    '/package-lock.json',
    '/node_modules',
    '/vercel.json',
    '/.gitignore',
];

/**
 * Set security headers on every response
 */
const setSecurityHeaders = (res) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    res.setHeader('Content-Security-Policy', "frame-ancestors 'none'");
};

const server = http.createServer((req, res) => {
    // Only allow GET and HEAD methods
    if (req.method !== 'GET' && req.method !== 'HEAD') {
        setSecurityHeaders(res);
        res.statusCode = 405;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Method Not Allowed');
        return;
    }

    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

    // Clean up and decode request path
    let safeUrl;
    try {
        safeUrl = decodeURIComponent(req.url.split('?')[0]);
    } catch (e) {
        // Malformed URI encoding
        setSecurityHeaders(res);
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Bad Request');
        return;
    }

    // Strip null bytes (null byte injection prevention)
    safeUrl = safeUrl.replace(/\0/g, '');

    if (safeUrl === '/') {
        safeUrl = '/index.html';
    }

    // Block access to sensitive files and directories
    const lowerUrl = safeUrl.toLowerCase();
    for (const blocked of BLOCKED_PATHS) {
        if (lowerUrl === blocked || lowerUrl.startsWith(blocked + '/')) {
            setSecurityHeaders(res);
            res.statusCode = 403;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Forbidden');
            return;
        }
    }

    // Resolve the file path and normalize it
    const filePath = path.resolve(__dirname, '.' + safeUrl);

    // Directory traversal prevention: ensure resolved path is within project root
    if (!filePath.startsWith(path.resolve(__dirname) + path.sep) && filePath !== path.resolve(__dirname)) {
        setSecurityHeaders(res);
        res.statusCode = 403;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Forbidden');
        return;
    }

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            // SPA fallback for extensionless routes
            if (safeUrl.indexOf('.') === -1) {
                console.log(`Fallback to /index.html for ${req.url}`);
                const fallbackPath = path.join(__dirname, '/index.html');
                fs.readFile(fallbackPath, (fallbackErr, content) => {
                    setSecurityHeaders(res);
                    if (fallbackErr) {
                        res.statusCode = 404;
                        res.setHeader('Content-Type', 'text/plain');
                        res.end('Not Found');
                    } else {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'text/html; charset=utf-8');
                        res.end(content);
                    }
                });
                return;
            }

            setSecurityHeaders(res);
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Not Found');
            return;
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        fs.readFile(filePath, (readErr, content) => {
            setSecurityHeaders(res);
            if (readErr) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Internal Server Error');
                return;
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', contentType);
            res.end(content);
        });
    });
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
