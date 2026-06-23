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

        // Timeline Scroll Logic
        const timeline = document.getElementById('events-grid');
        const timelineProgress = document.getElementById('timeline-progress');
        const timelineItems = document.querySelectorAll('.timeline-item');

        if (timeline && timelineProgress && timelineItems.length > 0) {
            const updateTimeline = () => {
                const scrollY = window.scrollY;
                const windowHeight = window.innerHeight;
                const timelineRect = timeline.getBoundingClientRect();
                const timelineTop = timelineRect.top + scrollY;
                const timelineHeight = timelineRect.height;

                let progress = 0;
                // Trigger earlier (85% down the viewport instead of 60%)
                const activationLine = scrollY + (windowHeight * 0.85);

                if (activationLine > timelineTop) {
                    progress = ((activationLine - timelineTop) / timelineHeight) * 100;
                }

                progress = Math.max(0, Math.min(100, progress));
                timelineProgress.style.height = progress + '%';

                timelineItems.forEach((item, index) => {
                    const itemRect = item.getBoundingClientRect();
                    const itemTop = itemRect.top + scrollY;
                    const markerOffset = itemRect.height / 2; 
                    
                    // Always activate the first card, and activate others when reached
                    if (index === 0 || activationLine > (itemTop + markerOffset)) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
            };

            updateTimeline();
            window.addEventListener('scroll', updateTimeline, { passive: true });
        }
    });
})();

// Event Modal Logic
window.openEventModal = function() {
    const modal = document.getElementById('eventModalOverlay');
    if (modal) {
        modal.classList.add('active');
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
    }
};

window.closeEventModal = function() {
    const modal = document.getElementById('eventModalOverlay');
    if (modal) {
        modal.classList.remove('active');
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
    }
};

// Close modal when clicking outside of the content
document.addEventListener('DOMContentLoaded', () => {
    const overlays = [
        { id: 'eventModalOverlay', closeFn: window.closeEventModal },
        { id: 'codeChaosModalOverlay', closeFn: window.closeCodeChaosModal },
        { id: 'devthonModalOverlay', closeFn: window.closeDevthonModal },
        { id: 'gsocModalOverlay', closeFn: window.closeGsocModal },
        { id: 'smashKartsModalOverlay', closeFn: window.closeSmashKartsModal },
        { id: 'hackORelayModalOverlay', closeFn: window.closeHackORelayModal },
        { id: 'geminiModalOverlay', closeFn: window.closeGeminiModal }
    ];

    overlays.forEach(overlayData => {
        const modalOverlay = document.getElementById(overlayData.id);
        if (modalOverlay) {
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay) {
                    if (typeof overlayData.closeFn === 'function') {
                        overlayData.closeFn();
                    }
                }
            });
        }
    });
});

// Code & Chaos Modal Logic
window.openCodeChaosModal = function() {
    const modal = document.getElementById('codeChaosModalOverlay');
    if (modal) {
        modal.classList.add('active');
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
    }
};

window.closeCodeChaosModal = function() {
    const modal = document.getElementById('codeChaosModalOverlay');
    if (modal) {
        modal.classList.remove('active');
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
    }
};

// Devthon Modal Logic
window.openDevthonModal = function() {
    const modal = document.getElementById('devthonModalOverlay');
    if (modal) {
        modal.classList.add('active');
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
    }
};

window.closeDevthonModal = function() {
    const modal = document.getElementById('devthonModalOverlay');
    if (modal) {
        modal.classList.remove('active');
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
    }
};

// Gateway to GSoC Modal Logic
window.openGsocModal = function() {
    const modal = document.getElementById('gsocModalOverlay');
    if (modal) {
        modal.classList.add('active');
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
    }
};

window.closeGsocModal = function() {
    const modal = document.getElementById('gsocModalOverlay');
    if (modal) {
        modal.classList.remove('active');
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
    }
};

// Smash Karts Modal Logic
window.openSmashKartsModal = function() {
    const modal = document.getElementById('smashKartsModalOverlay');
    if (modal) {
        modal.classList.add('active');
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
    }
};

window.closeSmashKartsModal = function() {
    const modal = document.getElementById('smashKartsModalOverlay');
    if (modal) {
        modal.classList.remove('active');
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
    }
};

// Hack-O-Relay Modal Logic
window.openHackORelayModal = function() {
    const modal = document.getElementById('hackORelayModalOverlay');
    if (modal) {
        modal.classList.add('active');
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
    }
};

window.closeHackORelayModal = function() {
    const modal = document.getElementById('hackORelayModalOverlay');
    if (modal) {
        modal.classList.remove('active');
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
    }
};

// Google Gemini Fun Night Modal Logic
window.openGeminiModal = function() {
    const modal = document.getElementById('geminiModalOverlay');
    if (modal) {
        modal.classList.add('active');
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
    }
};

window.closeGeminiModal = function() {
    const modal = document.getElementById('geminiModalOverlay');
    if (modal) {
        modal.classList.remove('active');
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
    }
};
