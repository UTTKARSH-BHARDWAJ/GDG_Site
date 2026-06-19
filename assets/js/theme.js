(function() {
    // Theme switching logic
    const getTheme = () => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark' || storedTheme === 'light') return storedTheme;
        return 'light'; // Default to light mode when opened
    };

    const applyTheme = (theme) => {
        const root = document.documentElement;
        const isDark = theme === 'dark';

        if (isDark) {
            root.classList.add('dark');
            root.style.colorScheme = 'dark';
        } else {
            root.classList.remove('dark');
            root.style.colorScheme = 'light';
        }
    };

    // Apply immediately to avoid flash of light/dark mode
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
            } else {
                themeToggleBtn.innerHTML = '🌙'; // Show moon to toggle to dark
                themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
            }
        };

        updateToggleIcon(activeTheme);

        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = getTheme();
            const nextTheme = currentTheme === 'light' ? 'dark' : 'light';

            localStorage.setItem('theme', nextTheme);
            applyTheme(nextTheme);
            updateToggleIcon(nextTheme);
            
            // Dispatch custom event for pages to hook into if needed
            window.dispatchEvent(new CustomEvent('theme-changed', { detail: nextTheme }));
        });
    });
})();
