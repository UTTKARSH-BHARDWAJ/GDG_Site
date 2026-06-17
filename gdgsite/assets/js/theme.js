(function() {
    // Theme switching logic
    const getTheme = () => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) return storedTheme;
        return 'system';
    };

    const applyTheme = (theme) => {
        const root = document.documentElement;
        let isDark = false;

        if (theme === 'system') {
            isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        } else {
            isDark = theme === 'dark';
        }

        if (isDark) {
            root.classList.add('dark');
            root.style.colorScheme = 'dark';
        } else {
            root.classList.remove('dark');
            root.style.colorScheme = 'light';
        }
    };

    // Apply immediately to avoid flash of light mode
    const activeTheme = getTheme();
    applyTheme(activeTheme);

    // Bind event listeners on DOM load
    document.addEventListener('DOMContentLoaded', () => {
        const themeToggleBtn = document.getElementById('theme-toggle');
        if (!themeToggleBtn) return;

        // Update UI icon based on theme
        const updateToggleIcon = (theme) => {
            if (theme === 'dark') {
                themeToggleBtn.innerHTML = '☀️'; // Show sun to toggle to light
                themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
            } else if (theme === 'light') {
                themeToggleBtn.innerHTML = '🌙'; // Show moon to toggle to dark
                themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
            } else {
                themeToggleBtn.innerHTML = '🌓'; // Show half-filled to toggle
                themeToggleBtn.setAttribute('title', 'Switch to Light/Dark Mode (System)');
            }
        };

        updateToggleIcon(activeTheme);

        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = localStorage.getItem('theme') || 'system';
            let nextTheme = 'light';

            if (currentTheme === 'system') {
                nextTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark';
            } else if (currentTheme === 'light') {
                nextTheme = 'dark';
            } else {
                nextTheme = 'system';
            }

            localStorage.setItem('theme', nextTheme);
            applyTheme(nextTheme);
            updateToggleIcon(nextTheme);
            
            // Dispatch custom event for pages to hook into if needed
            window.dispatchEvent(new CustomEvent('theme-changed', { detail: nextTheme }));
        });

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            if (localStorage.getItem('theme') === 'system') {
                applyTheme('system');
            }
        });
    });
})();
