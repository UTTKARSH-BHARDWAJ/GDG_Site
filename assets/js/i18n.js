const TRANSLATIONS = {
    en: {
        metadata: {
            home: { title: "GDG on Campus Dronacharya College of Engineering" },
            activity: { title: "Recent Activities | GDG on Campus DCE" }
        },
        navigation: {
            home: "Home",
            recentActivities: "Recent Activities",
            annualActivities: "Flagship Campaigns",
            chapters: "Core Domains",
            codeOfConduct: "Code of Conduct",
            googleIOExtended: {
                title: "Solution Challenge",
                description: "Build a solution to one or more of the UN Sustainable Development Goals using Google technology."
            },
            cloudStudyJam: {
                title: "Google Cloud Campaign",
                description: "Learn cloud computing fundamentals, Kubernetes, BigQuery, and generative AI through hands-on Qwiklabs."
            },
            devfest: {
                title: "Compose Camp",
                description: "Learn how to build Android apps using Jetpack Compose, Google's modern toolkit for native UI."
            }
        },
        mainSection: {
            title: "Discover Google Technology\n at Dronacharya College of Engineering\n Learn, Share, Grow!",
            description: "GDG on Campus Dronacharya College of Engineering provides students with visibility, community, and resources in the tech field.",
            whoWeAre: "Who We Are",
            whoWeAreDescription: "Google Developer Groups on Campus (GDG on Campus) at Dronacharya College of Engineering is a student-led developer community backed by Google Developers. We help students bridge the gap between theory and practice, build software solutions for local problems, and establish networks in the tech industry. The club focuses on helping students access Google's latest developer technologies, learn together, build successful products together, and connect with other developer peers and industry mentors.",
            recruitmentQuote: "We are looking for campus friends who are willing to share their expertise on Android, Kotlin, Firebase, Flutter, GenAI, Gemini, TensorFlow, or Google Cloud. Whether it's your own project or you want to give a tech talk, as long as you have a passion for technology, don't hesitate! We need simple, friendly, and fun student-led talks.",
            recruitmentButton: "Submit Talk / Join Us",
            sistersProjects: {
                title: "Google Developer Ecosystem",
                wtm: {
                    title: "Women Techmakers",
                    description: "A community program dedicated to promoting women in tech, offering visibility, mentorship, and resources to help female student developers build confidence, master engineering skills, and achieve professional career goals."
                },
                gdsc: {
                    title: "GDG on Campus Chapters",
                    description: "Connecting student developers worldwide. Campus chapters help students learn Google technologies, collaborate on real-world projects, and transition seamlessly into professional GDG communities after graduation."
                },
                gde: {
                    title: "Google Developers Experts",
                    description: "An official Google network of certified technical professionals who share their expertise, deliver tech talks, and mentor student communities globally on Google developer tools."
                },
                learnMore: "Learn More"
            }
        },
        activitySection: {
            title: "Recent Activities",
            filterCity: "Technical Domain",
            filterType: "Campaign",
            filterCampus: "Participation",
            allCities: "Any Domain",
            allTypes: "Any Campaign",
            allParticipation: "Any Participation",
            campusOnly: "Members Only",
            nonCampusOnly: "Open to All",
            searchPlaceholder: "Search activities...",
            noEvents: "No events found matching the criteria",
            showingResults: "Showing {{count}} event results",
            calendar: {
                subscribe: "Subscribe to Calendar",
                title: "Subscribe to GDG on Campus DCE Calendar",
                desc: "Sync our events with your personal calendar to stay updated with the latest tech talks and hackathons.",
                google: "Add to Google Calendar",
                apple: "Add to Apple Calendar",
                ical: "Download iCal file"
            }
        },
        audienceTypeMap: {
            "In-person": "In-person",
            "Virtual": "Virtual",
            "Hybrid": "Hybrid"
        },
        eventCard: {
            live: "Live",
            hackathon: "Hackathon"
        },
        conductSection: {
            title: "Community Code of Conduct",
            desc: "GDG on Campus Dronacharya College of Engineering is dedicated to providing a harassment-free and inclusive experience for everyone, regardless of gender, sexual orientation, disability, physical appearance, body size, race, or religion.",
            reportTitle: "How to Report?",
            reportDesc: "If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of the DCE organizing team immediately, or email us. All reports will be handled with discretion and we will take appropriate actions.",
            safetyTitle: "Core Safety Rules",
            rules: [
                "Respect and Inclusion: We do not tolerate harassment of community participants in any form.",
                "Friendly Communication: Be kind, professional, and respectful to others. Personal attacks or dismissive behavior are unacceptable.",
                "Learn Together: We value student growth. Support each other regardless of programming background or tech experience."
            ],
            organizer: "Faculty Advisor: Dronacharya College of Engineering",
            hotline: "DCE Campus Helpdesk: contact@dronacharya.info",
            partnersTitle: "Partners and Sponsors Expectations",
            partnersDesc: "Sponsors and guest speaker setups are also subject to the anti-harassment policy. Student speakers and mentors should not use sexualized images, activities, or other material, and must maintain a professional learning environment.",
            importanceTitle: "Why is this policy important?",
            importanceDesc: "A safe community fosters learning. By outlining our guidelines, we ensure that every student at DCE, regardless of their background or coding experience, feels welcomed and encouraged to start their developer journey with us.",
            licenseTitle: "License and Release",
            licenseDesc: "This policy is adapted under the Creative Commons Zero license. It is based on the official Google Developer Groups Community Guidelines and the Dronacharya College of Engineering student code of conduct."
        },
        events: {
            hack0: {
                title: "hack-0-Relay 5.0",
                description: "A collaborative, fast-paced hackathon focusing on rapid prototyping and team relay coding challenges."
            },
            codeChaos: {
                title: "Code & Chaos",
                description: "Unleash your creativity in this chaotic coding marathon. Build innovative projects under unique constraints."
            }
        },
        footer: {
            disclaimer: "Disclaimer",
            disclaimerText: "GDG on Campus Dronacharya College of Engineering is an independent student group; our activities and opinions have no affiliation with Google Inc. For more information, see",
            communityUrl: "https://developers.google.com/community/gdg/",
            siteName: "GDG on Campus DCE",
            codeOfConduct: "Code of Conduct"
        }
    }
};

(function() {
    const getLang = () => {
        const storedLang = localStorage.getItem('language');
        if (storedLang && TRANSLATIONS[storedLang]) return storedLang;
        
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang) {
            const shortLang = browserLang.split('-')[0];
            if (TRANSLATIONS[browserLang]) return browserLang;
            if (TRANSLATIONS[shortLang]) return shortLang;
        }
        
        return 'en';
    };

    const setLang = (lang) => {
        if (!TRANSLATIONS[lang]) return;
        localStorage.setItem('language', lang);
        document.documentElement.setAttribute('lang', lang);
        translatePage(lang);
    };

    const translatePage = (lang) => {
        const dict = TRANSLATIONS[lang];
        
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = key.split('.').reduce((obj, k) => obj ? obj[k] : null, dict);
            
            if (translation) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.setAttribute('placeholder', translation);
                } else {
                    if (translation.includes('\n')) {
                        // Safe newline-to-br: use DOM API instead of innerHTML
                        el.textContent = '';
                        const parts = translation.split('\n');
                        parts.forEach((part, i) => {
                            el.appendChild(document.createTextNode(part));
                            if (i < parts.length - 1) {
                                el.appendChild(document.createElement('br'));
                            }
                        });
                    } else {
                        el.textContent = translation;
                    }
                }
            }
        });

        const resultsEl = document.getElementById('showing-results-text');
        if (resultsEl) {
            const count = resultsEl.getAttribute('data-count') || '0';
            const showingTemplate = dict.activitySection ? dict.activitySection.showingResults : null;
            if (showingTemplate) {
                resultsEl.textContent = showingTemplate.replace('{{count}}', count);
            }
        }

        const langItems = document.querySelectorAll('.lang-item');
        langItems.forEach(item => {
            if (item.getAttribute('data-lang') === lang) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        const langBtnText = document.getElementById('lang-btn-text');
        if (langBtnText) {
            const langNames = {
                en: 'EN',
                zh: '繁中',
                'zh-CN': '简中',
                ja: '日本語',
                ko: '한국어'
            };
            langBtnText.textContent = langNames[lang] || lang.toUpperCase();
        }

        window.dispatchEvent(new CustomEvent('language-changed', { detail: lang }));
    };

    window.i18n = {
        getLang,
        setLang,
        translatePage,
        t: (key) => {
            const lang = getLang();
            return key.split('.').reduce((obj, k) => obj ? obj[k] : null, TRANSLATIONS[lang]) || key;
        }
    };

    document.addEventListener('DOMContentLoaded', () => {
        const initialLang = getLang();
        setLang(initialLang);

        const langItems = document.querySelectorAll('.lang-item');
        langItems.forEach(item => {
            item.addEventListener('click', () => {
                const selectedLang = item.getAttribute('data-lang');
                setLang(selectedLang);
                const dropdown = document.querySelector('.lang-dropdown');
                if (dropdown) dropdown.classList.remove('active');
            });
        });

        const langBtn = document.getElementById('lang-select-btn');
        const langDropdown = document.querySelector('.lang-dropdown');
        if (langBtn && langDropdown) {
            langBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                langDropdown.classList.toggle('active');
            });

            document.addEventListener('click', () => {
                langDropdown.classList.remove('active');
            });
        }
        
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

        const annualDropdownBtn = document.getElementById('annual-dropdown-btn');
        const navDropdown = document.querySelector('.nav-dropdown');
        if (annualDropdownBtn && navDropdown) {
            annualDropdownBtn.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    navDropdown.classList.toggle('active');
                }
            });
        }
    });
})();
