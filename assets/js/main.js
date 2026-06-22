(function() {
    document.addEventListener('DOMContentLoaded', () => {
        // Main Header Mobile Menu
        const menuBtn = document.getElementById('menu-toggle-btn');
        const navLinks = document.getElementById('nav-links-menu');
        if (menuBtn && navLinks) {
            menuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        }

        // Floating mobile navigation menu handler
        const floatingNavTrigger = document.getElementById('floating-nav-trigger');
        const floatingNavMenu = document.getElementById('floating-nav-menu');
        if (floatingNavTrigger && floatingNavMenu) {
            floatingNavTrigger.addEventListener('click', (e) => {
                e.stopPropagation();
                floatingNavMenu.classList.toggle('active');
                floatingNavTrigger.classList.toggle('active');
            });

            document.addEventListener('click', (e) => {
                if (!e.target.closest('#floating-nav-container')) {
                    floatingNavMenu.classList.remove('active');
                    floatingNavTrigger.classList.remove('active');
                }
            });
        }
    });
})();
