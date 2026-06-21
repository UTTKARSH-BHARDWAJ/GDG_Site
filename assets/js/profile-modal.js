(function () {
    const profiles = {
        "nishant-yadav": {
            name: "Nishant Yadav",
            role: "GDGoC Lead",
            img: "assets/img/organizer_nishant.png",
            socials: { linkedin: " #", twitter: " #", github: "#", instagram: "#" },
            about: "Passionate developer and community leader dedicated to fostering technical growth among peers. As the GDG on Campus Lead, I orchestrate workshops, hackathons, and study jams that bridge the gap between academic theory and industry practice. Specializing in Python ecosystems and modern frontend frameworks, I aim to build inclusive tech environments.",
            skills: ["Python", "TensorFlow", "React", "Node.js", "Google Cloud Platform", "UI/UX Design", "Public Speaking"],
            achievements: [
                { title: "Tech Mentor", desc: "Guided 50+ students in Web Dev" },
                { title: "Open Source Contributor", desc: "Merged 20+ PRs in major repos" }
            ],
            activity: [
                {  title: "Merged Pull Request", time: "2 days ago", desc: "Contributed to GDG-Web-Portal repository with performance optimizations." },
                {  title: "Flutter Workshop Speaker", time: "1 week ago", desc: "Presented on State Management patterns to 40+ students." },
                { title: "Google Cloud Certification", time: "2 weeks ago", desc: "Successfully completed the Associate Cloud Engineer certification." }
            ]
        },
        "manas-thakur": {
            name: "Manas Thakur",
            role: "Technical Lead",
            img: "assets/img/organizer_manas.png",
            socials: { linkedin: "#", twitter: "#", github: "#", instagram: "#" },
            about: "Backend-focused engineer who keeps GDG on Campus's internal tools running smoothly. Manas leads the technical roadmap for club projects, reviews code from contributors, and mentors juniors picking up their first frameworks.",
            skills: ["Node.js", "Express", "MongoDB", "Docker", "System Design", "Mentoring"],
            achievements: [
                {  title: "Infra Owner", desc: "Maintains the club's internal dashboard and bot tooling" },
                {  title: "Mentorship Lead", desc: "Onboarded 15+ new contributors to the tech team" }
            ],
            activity: [
                {  title: "Dashboard Update", time: "3 days ago", desc: "Shipped a new attendance tracking feature for events." },
                { title: "Code Review Session", time: "1 week ago", desc: "Walked new members through the club's GitHub workflow." }
            ]
        },
        "sohan-rout": {
            name: "Sohan Rout",
            role: "Technical Lead",
            img: "assets/img/organizer_sohan.png",
            socials: { linkedin: "#", twitter: "#", github: "#", instagram: "#" },
            about: "Mobile developer who leads Android and Flutter initiatives at GDG on Campus. Sohan designs the technical curriculum for app-building workshops and keeps the team's projects shipping on schedule.",
            skills: ["Kotlin", "Flutter", "Firebase", "Jetpack Compose", "API Design"],
            achievements: [
                {  title: "App Architect", desc: "Led development of the club's companion event app" },
                { title: "Compose Camp Winner", desc: "Top team finish in a Google Compose hackathon" }
            ],
            activity: [
                {  title: "Release Shipped", time: "4 days ago", desc: "Pushed v2.0 of the club's event check-in app to testers." },
                {  title: "Compose Workshop", time: "2 weeks ago", desc: "Co-hosted a Jetpack Compose hands-on session." }
            ]
        },
        "uttkarsh-bhardwaj": {
            name: "Uttkarsh Bhardwaj",
            role: "Technical Volunteer",
            img: "assets/img/organizer_uttkarsh.png",
            socials: { linkedin: "https://www.linkedin.com/in/uttkarsh-bhardwaj-58aa03337/", twitter: "https://x.com/UTTKARSH911", github: "https://github.com/UTTKARSH-BHARDWAJ" },
            about: "Frontend-leaning volunteer who helps build and maintain the club's website and event pages. Uttkarsh enjoys turning design mockups into working interfaces and is currently exploring accessibility best practices.",
            skills: ["HTML/CSS", "JavaScript", "React", "Figma to Code", "Accessibility"],
            achievements: [
                {  title: "Site Contributor", desc: "Built the activities filter UI on the events page" },
                {  title: "Accessibility Advocate", desc: "Audited the site for keyboard navigation issues" }
            ],
            activity: [
                {  title: "UI Fix", time: "5 days ago", desc: "Patched a layout bug on the mobile activities page." },
                {  title: "Accessibility Pass", time: "3 weeks ago", desc: "Improved color contrast across event cards." }
            ]
        },
        "ankit-yadav": {
            name: "Ankit Yadav",
            role: "Technical Volunteer",
            img: "assets/img/organizer_ankit.png",
            socials: { linkedin: "#", twitter: "#", github: "#", instagram: "#" },
            about: "Data and machine learning enthusiast supporting the club's technical workshops. Ankit has been building small ML demos to help first-year students see practical applications of the concepts they're learning.",
            skills: ["Python", "Pandas", "scikit-learn", "Data Visualization", "Jupyter"],
            achievements: [
                { title: "ML Demo Builder", desc: "Built three beginner-friendly ML notebooks for workshops" },
                {  title: "Kaggle Contributor", desc: "Top 15% finish in a campus-wide data challenge" }
            ],
            activity: [
                {  title: "Notebook Published", time: "1 week ago", desc: "Shared a beginner notebook on classification models." },
                {  title: "ML Basics Talk", time: "1 month ago", desc: "Gave an intro talk on supervised learning to new members." }
            ]
        },
        "amol-kumar": {
            name: "Amol Kumar",
            role: "Technical Volunteer",
            img: "assets/img/organizer_amol.png",
            socials: { linkedin: "#", twitter: "#", github: "#", instagram: "#" },
            about: "Cloud and DevOps volunteer who handles deployment and infrastructure for club projects. Amol keeps build pipelines healthy and is the go-to person whenever something needs to go live quickly.",
            skills: ["Google Cloud Platform", "Docker", "CI/CD", "Linux", "GitHub Actions"],
            achievements: [
                { title: "Cloud Volunteer", desc: "Manages hosting for two club-built web apps" },
                {  title: "Pipeline Builder", desc: "Set up automated deployments for the events site" }
            ],
            activity: [
                {  title: "CI Pipeline Fix", time: "2 days ago", desc: "Resolved a failing deployment step in the build pipeline." },
                {  title: "Server Migration", time: "3 weeks ago", desc: "Migrated a project's hosting to Google Cloud Run." }
            ]
        },
        "megha-yadav": {
            name: "Megha Yadav",
            role: "Social & Outreach Team Lead",
            img: "assets/img/organizer_megha.png",
            socials: { linkedin: "#", twitter: "#", instagram: "#" },
            about: "Leads the social media strategy and community outreach for GDG on Campus. Megha plans the content calendar, coordinates announcements across platforms, and works to keep students excited about upcoming events.",
            skills: ["Social Media Strategy", "Instagram Marketing", "Copywriting", "Analytics", "Team Coordination"],
            achievements: [
                {  title: "Growth Lead", desc: "Grew the club's Instagram following by 40% this year" },
                {  title: "Content Calendar Owner", desc: "Plans and schedules all event announcements" }
            ],
            activity: [
                {  title: "Campaign Launch", time: "2 days ago", desc: "Kicked off the announcement series for the next hackathon." },
                {  title: "Content Planning", time: "1 week ago", desc: "Finalized the social media calendar for next month." }
            ]
        },
        "ariyan-pal": {
            name: "Ariyan Pal",
            role: "Social & Outreach Team Lead",
            img: "assets/img/organizer_ariyan.png",
            socials: { linkedin: "#", twitter: "#", instagram: "#" },
            about: "Handles partnerships and external outreach for the club. Ariyan builds relationships with sponsors and nearby tech communities, and is usually the first point of contact for cross-college collaborations.",
            skills: ["Partnership Building", "Public Relations", "Negotiation", "Email Outreach", "Event Planning"],
            achievements: [
                { title: "Partnership Builder", desc: "Secured sponsorship for two flagship events" },
                {  title: "Cross-Campus Liaison", desc: "Coordinated a joint meetup with a neighboring GDG chapter" }
            ],
            activity: [
                {  title: "Sponsor Outreach", time: "4 days ago", desc: "Reached out to potential sponsors for the upcoming fest." },
                {  title: "Joint Meetup", time: "1 month ago", desc: "Helped organize a collaborative session with another campus chapter." }
            ]
        },
        "savita-kumari": {
            name: "Savita Kumari",
            role: "Social & Outreach Volunteer",
            img: "assets/img/organizer_savita.png",
            socials: { linkedin: "#", twitter: "#", instagram: "#" },
            about: "Supports event-day logistics and community engagement. Savita is often the friendly face greeting attendees and making sure every session runs on time.",
            skills: ["Event Coordination", "Community Engagement", "Volunteer Management", "Scheduling"],
            achievements: [
                {  title: "Logistics Volunteer", desc: "Coordinated check-in for 5+ campus events" },
                {  title: "Community Builder", desc: "Helped welcome and onboard new club members" }
            ],
            activity: [
                {  title: "Event Check-in", time: "6 days ago", desc: "Managed the registration desk for a recent workshop." },
                {  title: "Member Onboarding", time: "2 weeks ago", desc: "Welcomed and guided new members during orientation." }
            ]
        },
        "kartikey": {
            name: "Kartikey",
            role: "Social & Outreach Volunteer",
            img: "assets/img/organizer_kartikey.png",
            socials: { linkedin: "#", twitter: "#", instagram: "#" },
            about: "Writes and curates content for the club's outreach channels. Kartikey enjoys turning event recaps into engaging posts that highlight what attendees learned.",
            skills: ["Content Writing", "Copyediting", "Storytelling", "Social Listening"],
            achievements: [
                {  title: "Recap Writer", desc: "Authored event recap posts for the last three meetups" },
                {  title: "Newsletter Contributor", desc: "Helped draft the club's monthly update email" }
            ],
            activity: [
                {  title: "Recap Published", time: "3 days ago", desc: "Wrote a recap post summarizing the latest workshop." },
                {  title: "Newsletter Draft", time: "2 weeks ago", desc: "Contributed sections to the upcoming newsletter." }
            ]
        },
        "sushant-jha": {
            name: "Sushant Jha",
            role: "Socials & Outreach Volunteer",
            img: "assets/img/organizer_sushant.png",
            socials: { linkedin: "#", twitter: "#", instagram: "#" },
            about: "Covers events through photography and short-form video. Sushant captures the energy of workshops and hackathons so the club can share it across social platforms.",
            skills: ["Event Photography", "Video Editing", "Reels/Shorts", "Lightroom"],
            achievements: [
                {  title: "Event Photographer", desc: "Shot photo coverage for 6+ campus events" },
                {  title: "Reel Creator", desc: "Produced highlight reels for two major hackathons" }
            ],
            activity: [
                {  title: "Photo Coverage", time: "5 days ago", desc: "Captured event photos at the latest tech talk." },
                {  title: "Highlight Reel", time: "3 weeks ago", desc: "Edited and published a recap reel from the hackathon." }
            ]
        },
        "ujjwal-verma": {
            name: "Ujjwal Verma",
            role: "Graphics & PR Lead",
            img: "assets/img/organizer_ujjwal.png",
            socials: { linkedin: "#", instagram: "#" },
            about: "Owns the visual identity of GDG on Campus. Ujjwal designs the posters, social templates, and brand guidelines that keep every event looking consistent and polished.",
            skills: ["Brand Identity", "Figma", "Adobe Illustrator", "Typography", "Design Systems"],
            achievements: [
                { title: "Brand Owner", desc: "Defined the club's current visual identity and templates" },
                {  title: "Design Lead", desc: "Directed the creative for the annual flagship event" }
            ],
            activity: [
                {  title: "Template Refresh", time: "1 week ago", desc: "Updated the club's social media template set." },
                {  title: "Event Branding", time: "1 month ago", desc: "Designed the full visual identity for the annual fest." }
            ]
        },
        "manav-tuli": {
            name: "Manav Tuli",
            role: "PR & Graphics Team Lead",
            img: "assets/img/organizer_manav.png",
            socials: { linkedin: "#", instagram: "#" },
            about: "Leads video and motion design for the club, turning event footage into polished aftermovies and promo content that capture attention before and after every event.",
            skills: ["Premiere Pro", "After Effects", "Motion Graphics", "Color Grading", "Storyboarding"],
            achievements: [
                { title: "Aftermovie Director", desc: "Produced aftermovies for two flagship events" },
                { title: "Promo Lead", desc: "Created teaser content that boosted event sign-ups" }
            ],
            activity: [
                { title: "Aftermovie Released", time: "2 weeks ago", desc: "Published the aftermovie for the latest hackathon." },
                { title: "Promo Teaser", time: "1 month ago", desc: "Edited a teaser video for the upcoming flagship event." }
            ]
        },
        "rekha-rathore": {
            name: "Rekha Rathore",
            role: "Graphics & PR Volunteer",
            img: "assets/img/organizer_rekha.png",
            socials: { linkedin: "#", instagram: "#" },
            about: "Designs posters and illustrated assets for club events. Rekha has a hand-drawn, illustrative style that brings a distinct personality to the club's social posts.",
            skills: ["Illustration", "Procreate", "Poster Design", "Color Theory"],
            achievements: [
                {  title: "Poster Designer", desc: "Designed posters for 4+ campus workshops" },
                { title: "Illustration Contributor", desc: "Created custom illustrations for the event microsite" }
            ],
            activity: [
                {  title: "Poster Designed", time: "4 days ago", desc: "Finished the poster artwork for the next workshop." },
                {  title: "Illustration Set", time: "3 weeks ago", desc: "Delivered a set of custom illustrations for the website." }
            ]
        },
        "anamika-prajapati": {
            name: "Anamika Prajapati",
            role: "Graphics & PR Volunteer",
            img: "assets/img/organizer_anamika.png",
            socials: { linkedin: "#", instagram: "#" },
            about: "Focuses on UI and layout design for the club's digital materials, from slide decks to web banners. Anamika cares about clean, readable layouts that scale across devices.",
            skills: ["UI Design", "Figma", "Layout Design", "Slide Design"],
            achievements: [
                {  title: "Deck Designer", desc: "Designed slide templates used across club presentations" },
                {  title: "Layout Specialist", desc: "Redesigned the event banner layout for better readability" }
            ],
            activity: [
                {  title: "Slide Deck", time: "6 days ago", desc: "Designed the presentation deck for the latest tech talk." },
                {  title: "Banner Redesign", time: "1 month ago", desc: "Refreshed the homepage banner layout." }
            ]
        },
        "aryan-rajput": {
            name: "Aryan Rajput",
            role: "Graphics & PR Volunteer",
            img: "assets/img/organizer_aryan.png",
            socials: { linkedin: "#", instagram: "#" },
            about: "Creates the day-to-day social media graphics that keep the club's feed active — countdowns, quote cards, and quick announcement templates.",
            skills: ["Canva", "Social Graphics", "Template Design", "Quick Turnaround Design"],
            achievements: [
                {  title: "Template Builder", desc: "Built a reusable announcement template kit" },
                {  title: "Rapid Turnaround", desc: "Delivered same-day graphics for last-minute announcements" }
            ],
            activity: [
                { icon: "🗂️", title: "Countdown Graphics", time: "3 days ago", desc: "Designed the countdown series for the upcoming event." },
                { icon: "⏱️", title: "Quick Announcement", time: "2 weeks ago", desc: "Turned around a same-day graphic for a schedule change." }
            ]
        }
    };

    const socialIcons = {
        linkedin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>',
        twitter: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
        github: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
        instagram: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>'
    };

    const overlay = document.getElementById("profileModalOverlay");
    const closeBtn = document.getElementById("profileModalClose");
    let lastFocusedEl = null;

    function openProfile(id) {
        const data = profiles[id];
        if (!data) return;

        document.getElementById("profileModalPhoto").src = data.img;
        document.getElementById("profileModalPhoto").alt = data.name;
        document.getElementById("profileModalName").textContent = data.name;
        document.getElementById("profileModalRole").textContent = data.role;
        document.getElementById("profileModalAbout").textContent = data.about;

        const socialsEl = document.getElementById("profileModalSocials");
        socialsEl.innerHTML = "";
        Object.keys(data.socials || {}).forEach(function (key) {
            if (!socialIcons[key]) return;
            const a = document.createElement("a");
            a.href = data.socials[key];
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.setAttribute("aria-label", key);
            a.innerHTML = socialIcons[key];
            socialsEl.appendChild(a);
        });

        const skillsEl = document.getElementById("profileModalSkills");
        skillsEl.innerHTML = "";
        (data.skills || []).forEach(function (skill) {
            const span = document.createElement("span");
            span.className = "profile-skill-pill";
            span.textContent = skill;
            skillsEl.appendChild(span);
        });

        const achievementsEl = document.getElementById("profileModalAchievements");
        achievementsEl.innerHTML = "";
        (data.achievements || []).forEach(function (item) {
            const wrap = document.createElement("div");
            wrap.className = "profile-achievement-item";
            wrap.innerHTML =
                '<div class="profile-achievement-icon">' + item.icon + '</div>' +
                '<div><p class="profile-achievement-title">' + item.title + '</p>' +
                '<p class="profile-achievement-desc">' + item.desc + '</p></div>';
            achievementsEl.appendChild(wrap);
        });

        const activityEl = document.getElementById("profileModalActivity");
        activityEl.innerHTML = "";
        (data.activity || []).forEach(function (item) {
            const wrap = document.createElement("div");
            wrap.className = "profile-timeline-item";
            wrap.innerHTML =
                '<div class="profile-timeline-icon">' + item.icon + '</div>' +
                '<div class="profile-timeline-card">' +
                '<div class="profile-timeline-head">' +
                '<p class="profile-timeline-title">' + item.title + '</p>' +
                '<span class="profile-timeline-time">' + item.time + '</span>' +
                '</div>' +
                '<p class="profile-timeline-desc">' + item.desc + '</p>' +
                '</div>';
            activityEl.appendChild(wrap);
        });

        lastFocusedEl = document.activeElement;
        overlay.classList.add("active");
        overlay.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        closeBtn.focus();
    }

    function closeProfile() {
        overlay.classList.remove("active");
        overlay.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
        if (lastFocusedEl) lastFocusedEl.focus();
    }

    document.addEventListener("click", function (e) {
        const link = e.target.closest("[data-profile-id]");
        if (link) {
            e.preventDefault();
            openProfile(link.getAttribute("data-profile-id"));
        }
    });

    closeBtn.addEventListener("click", closeProfile);

    overlay.addEventListener("click", function (e) {
        if (e.target === overlay) closeProfile();
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && overlay.classList.contains("active")) {
            closeProfile();
        }
    });
})();