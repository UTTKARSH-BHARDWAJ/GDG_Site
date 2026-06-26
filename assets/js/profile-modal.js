(function () {
    const profiles = {
        "ashima-mehta": {
            name: "Dr. Ashima Mehta",
            role: "Faculty Lead",
            img: "assets/img/Ashima-Mehta.avif",
            socials: { linkedin: "https://www.linkedin.com/in/dr-ashima-mehta-71216177/", googleScholar: "https://scholar.google.com/citations?user=kI14h4EAAAAJ&hl=en", researchGate: "https://www.researchgate.net/scientific-contributions/Dr-Ashima-Mehta-2250190485" },
            about: "Faculty Lead for GDG on Campus Dronacharya College of Engineering.",
            skills: ["Leadership", "Mentoring", "Education"],
            achievements: [],
            activity: []
        },
        "nishant-yadav": {
            name: "Nishant Yadav",
            role: "GDGoC Lead",
            img: "assets/img/organizer_nishant.png",
            socials: { linkedin:"https://www.linkedin.com/in/nishant-yadav-914684289", leetcode:  "https://leetcode.com/u/nishantyadav_tech/", github: "https://github.com/nishantyadav-tech", portfolio:"https://nishant-tech.vercel.app/" , email: "nishantyadav.tech@gmail.com", instagram: "https://www.instagram.com/nishant__ydvvv?igsh=dzMzeXZpNXA0NGcx" },
            about: "Passionate developer and community leader dedicated to fostering technical growth among peers. As the GDG on Campus Lead, I orchestrate workshops, hackathons, and study jams that bridge the gap between academic theory and industry practice. Specializing in Python ecosystems and modern frontend frameworks, I aim to build inclusive tech environments.",
            skills: ["HTML5","CSS3","JavaScript","React.js","Responsive Design","UI/UX","Node.js","Express.js","REST APIs","JWT Authentication","Databases","MongoDB","MySQL","Many More"],
            achievements: [
                { icon: "-->",title: "Research Paper(ICT4SD conference - AI in Fake News Detection)", desc: "" },
                { icon: "-->", title: "GDG on Campus Lead", desc: "Led the GDG on Campus chapter, organizing events and mentoring aspiring developers." }
            ],
            activity: [
                {  icon: ">", title: "Project", time: "1 week ago", desc: "Smart Study Planner" },
                { icon: ">", title: "Data Structures & Algorithms", time: "2 weeks ago", desc: "Successfully Solved 200+ Problems on LeetCode" }
            ]
        },
        "manas-thakur": {
            name: "Manas Thakur",
            role: "Technical Lead",
            img: "assets/img/organizer_manas.png",
            socials: { linkedin: "https://www.linkedin.com/in/manasthakur30/", twitter: "https://x.com/menace_thakur" },
            about: "My work spans LLMs, MCP-style workflows, RAG, and modern model stacks like OpenAI, Anthropic, Hugging Face, and vLLM for practical agentic systems.",
            skills: ["Agentic AI","Tool use", "RAG", "LLMs","Many More"],
            achievements: [
                {  icon: "-->", title: "SIH Winner", desc: " SIH 2023 Winner for automated lithology classification using AI/DL." },
                {  icon: "-->", title: "Engineers Day Idea Competition (DCE)", desc: ": 2nd place for designing a fire-resistant system for car accidents" }
            ],
            activity: [
                {  icon: ">", title: "Article", time: "1 week ago", desc: "Is TensorFlow Dying? The Truth Behind AI's Most Debated Framework" },
                { icon: ">", title: "Research Internship", time: "1 month ago", desc: "Daegu, South Korea– Onsite Worked on advanced computer vision and anomaly detection architectures including YOLO, ResNet, CNN-based models,and Amazon PatchCore for industrial inspection systems." }
            ]
        },
        "sohan-rout": {
            name: "Sohan Rout",
            role: "Technical Lead",
            img: "assets/img/organizer_sohan.png",
            socials: { linkedin: " https://www.linkedin.com/in/sohan-rout/", twitter: " https://x.com/SohanRout06", github: " https://github.com/Sohan-Rout"},
            about: "Product-focused developer building scalable web applications with strong fundamentals in performance, UX, and system design. Experienced in Next.js, Supabase, and modern frontend architecture.",
            skills: ["JavaScript", "TypeScript", "SQL", "Python", "HTML", "CSS", "Tailwind CSS", "Next.js", "PostgreSQL", "MySql", "ChatGpt", "Claude", "DeepSeek", "Kimi", "Manus", "GLM", "Git", "GitHub", "Figma", "Supabase", "C++", "C", "Java","Many More"],
            achievements: [
                {  icon: "-->", title: " Research paper", desc: "Building Smart Cities with Smart Supply-Demand Hub and Intelligent Energy Systems -Presented at ICESD, BHU 2025" },
                { icon: "-->", title: " DSA visualiser", desc: "DSA learning platform where the user can learn DSA visually and track their progress." },
                { icon: "-->", title: " StreamUI", desc: " Developed a Next.js UI library for SaaS startups.Developed an NPM package with all the required dependencies." }],
            activity: [
                {  icon: ">", title: "Project", time: "4 days ago", desc: "Building agentic workflows using n8n and zapier" },
                {  icon: ">", title: "Full Stack Engineer Intern @ Thumbpin", time: "2 months ago", desc: "Contributing across multiple layers of the product. Responsible for building and managing efficient data pipelines, optimizing frontend performance for better user experience, and designing intuitive UI/UX interfaces. Working on improving application scalability, reducing load times, and ensuring seamless integration between backend systems and frontend components." }
            ]
        },
        "uttkarsh-bhardwaj": {
            name: "Uttkarsh Bhardwaj",
            role: "Technical Volunteer",
            img: "assets/img/organizer_uttkarsh.png",
            socials: { linkedin: "https://www.linkedin.com/in/uttkarsh-bhardwaj-58aa03337/", twitter: "https://x.com/UTTKARSH911", github: "https://github.com/UTTKARSH-BHARDWAJ" },
            about: "Analytical AI/ML undergraduate with expertise in predictive analytics, time-series forecasting, and NLP algorithms. Proficient in Python, Scikit-learn, and PyTorch, passionate about translating complex data sets into highly accurate, automated machine learning pipelines that solve real-world challenges.",
            skills: ["Python", "SQL", "C", "Java", "JavaScript", "HTML/CSS", "Prompt Engineering", "XGBoost", "Facebook Prophet", "Numpy", "Pandas", "Scikit-learn", "NLP", "PyTorch","Many More"],
            achievements: [
                {  icon: "-->", title: "Hackathon Winner", desc: " Hackathon (Smart AI)." },
                {  icon: "-->", title: "LeetCode ", desc: "Successfully solved 200+ problems on LeetCode." }
            ],
            activity: [
                {  icon: ">", title: "Internship", time: "2 weeks ago", desc: "Selected as an SWE &ML Intern at LensKart." },
                {  icon: ">", title: "Open Source Contribution", time: "3 weeks ago", desc: "Contribution to an open Source Computer Vision Project" }
            ]
        },
        "ankit-yadav": {
            name: "Ankit Yadav",
            role: "Technical Volunteer",
            img: "assets/img/organizer_ankit.png",
            socials: { linkedin: "https://www.linkedin.com/in/ankit-yadav-60b4aa331/", twitter: "https://x.com/Workwithan28579", github: "https://github.com/ankit230506", instagram: "https://www.instagram.com/ankit_007_.y?igsh=MXYzdDI0cGZ3d3Vydw==" },
            about: "Hello everyone, I am Ankit Yadav, a passionate Computer Science student with a keen interest in Machine Learning and Data Science. I enjoy exploring the vast world of AI and its applications in solving real-world problems. With a strong foundation in programming and data analysis, I am eager to contribute to innovative projects and collaborate with like-minded individuals in the tech community.",
            skills: ["Python", "Pandas", "scikit-learn", "Data Visualization", "Jupyter","Git", "GitHub","Many More"],
            achievements: [
                { icon: "-->", title: "Leadership", desc: "Aspire Leadership Cohort 3 Aspire Institute Harvard Business School Competitively selected for an intensive leadership development program" },
                {  icon: "-->", title: "Infosys Intern", desc: "BFSI Fraud Detection System using Machine Learning" }
            ],
            activity: [
                {  icon: ">", title: "Internship", time: "1 week ago", desc: "AIML Intern @ Airport Authority of India" },
                {  icon: ">", title: "Working On", time: "1 month ago", desc: "Climate_Change_Storuteller under Liquid Galaxy" }
            ]
        },
        "amol-kumar": {
            name: "Amol Kumar",
            role: "Technical Volunteer",
            img: "assets/img/organizer_amol.png",
            socials: { linkedin: "https://www.linkedin.com/in/amol-kumar-865a2237a", twitter: "https://x.com/AmolKumar430722", github: "https://github.com/amolkumar4003-cmyk", instagram: "https://www.instagram.com/terimummykadamaadhunywar_?igsh=MXFubGdzYnY1bHlheg==" ,  leetcode: " https://leetcode.com/u/amolkr_4003/"},
            about: "​Aspiring Machine Learning Engineer and dedicated CSIT student with a strong foundation in algorithmic problem-solving, data analysis, and C/Python programming. Passionate about applying AI and machine learning models to solve real-world engineering challenges, specifically in cognitive systems and autonomous logistics.",
            skills: ["Python", "C", "NumPy", "Pandas", "Git", "GitHub", "Data Structures & Algorithms","Many More"],
            achievements: [
                { icon: "-->", title: "​3RD PLACE", desc: " Secured a podium finish with team Drona at the Smart AI 2.0 hackathon, leveraging AI-driven solutions and team synergy." },
                {  icon: "-->", title: "​RESEARCH CONTRIBUTIONS", desc: "Authored and presented Brain vs Bot: How AI Dependency is Impacting Human Critical Thinking at IIT Mandi’s multidisciplinary research summit, contributing to the discourse on human-AI cognitive synergy." },
                {  icon: "-->", title: "TOP 50 FINISH", desc: "Led team Logic Leap in the Code & Chaos Hackathon, managing fast-paced development and technical implementation."}
            ],
            activity: [
                {  icon: ">", title: "Optimization", time: "2 days ago", desc: "Exploring advanced data structure optimization to improve the computational efficiency of ML algorithms. " },
                {  icon: ">", title: "Innovation Engagement", time: "3 weeks ago", desc: "​Engaging with the broader innovation ecosystem through events like India Innovates 2026 and the National Social Summit 2026." },
                {  icon: ">", title: "Strategic Prompt Engineering", time:"4 week ago", desc: "Refined advanced prompting techniques during the Google Student Ambassador Pitch Night, focusing on optimizing AI-driven outputs for complex problem-solving and engineering workflows."}  ]
        },
        "megha-yadav": {
            name: "Megha Yadav",
            role: "Social & Outreach Team Lead",
            img: "assets/img/organizer_megha.png",
            socials: { linkedin: "https://www.linkedin.com/in/jehmegh/", github:"https://github.com/meghayay"},
            about: "UI/UX Designer with a strong focus on UX research, user behavior analysis, and human-centered design. Passionate about translating research insights into intuitive interfaces through wireframing, prototyping, usability testing, and scalable design systems.",
            skills: ["Figma", "Framer", "Adobe XD", "FigJam", "Miro", "Photoshop", "Illustrator", "Wireframing", "Interactive Prototyping", "Usability Testing","Many More"],
            achievements: [
                {  icon: "-->", title: "FINALIST ", desc: " Yukti Innovation." },
                {  icon: "-->", title: "FINALIST ", desc: "Smart India Hackathon." },
                {  icon: "-->", title: "ATTENDED" , desc: "IDE Bootcamp,  NEF Innovation Awards"}
            ],
            activity: [
                {  icon: ">", title: "Building", time: "latest", desc: "Working on AI-powered design workflows and advanced interaction design techniques." },
                {  icon: ">", title: "Win", time: "1 week ago", desc: "Winner @ Crack the Code 2.0." }
            ]
        },
        "ariyan-pal": {
            name: "Ariyan Pal",
            role: "Social & Outreach Team Lead",
            img: "assets/img/organizer_ariyan.png",
            socials: { linkedin: "https://www.linkedin.com/in/ariyan-pal/",github: "https://github.com/AriyanPal08", instagram: " https://www.instagram.com/__a__maniac__?igsh=MXBscWJnNGRzemx6cw==" },
            about: "Sophomore with a strong interest in Python programming, including its libraries and frameworks. Enthusiastic about contributing to open-source projects and eager to gain hands-on experience as an intern to broaden my technical horizons. ",
            skills: ["HTML", "CSS", "JavaScript", "Python", " OpenCV" , "STL" , "Matplotlib" , "Numpy", " GitHub", "VS Code", "Figma", "Postman", "Sublime Text","Rasberry Pi 4", "Pi3" , "Arduino UNO", "MEGA" , "esp 32" , "Pixhawk"," Team collaboration" , "Communication Skills" , "Problem Solving" ,"Many More"],
            achievements: [
                { icon: "-->", title: "NIDAR FINALIST", desc: "with Project Wingman — developed a Raspberry Pi 4 based UAV system using YOLO for realtime human detection, MAVLink integration, and Mission Planner for autonomous tracking, telemetry, and geo-localized target reporting." },
                {  icon: "-->", title: "FINALIST IN SMART INDIA HACKATHON", desc: "Developed a real-time navigation system for underground SIMBA Drills using ARuco marker detection and IMU sensors for precise position tracking in GPS-denied conditions. Tech Stack: Python, Frontend Development, 3D Printing, Sensor Detection using Arduino UNO" }
                ],
            activity: [
                {  icon: ">", title: "Research Internship", time: "4 days ago", desc: "Currently pursuing Research Internship at IIT Delhi at the Department of Energy  Science and Engineering as working on the project of Evaluation Fuel Requirement" },
                {  icon: ">", title: "Developing", time: "1 month ago", desc: "I am currently bridging the gap between dynamic software algorithms and physical hardware systems. By developing an automated, Python-based different  engines for different projects" }
            ]
        },
        "savita-kumari": {
            name: "Savita Kumari",
            role: "Social & Outreach Volunteer",
            img: "assets/img/organizer_savita.png",
            socials: { linkedin: "https://www.linkedin.com/in/savisavi", github:" https://github.com/savitaa.0712" },
            about: "Frontend Developer passionate about building scalable, responsive, and user-centric web applications with modern technologies and clean design principles.",
            skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Redux Toolkit", "REST APIs", "Git", "GitHub","Many More"],
            achievements: [
                {  icon: "-->", title: "FINALIST", desc: "Finalist at Hack Nova where I Improved frontend performance and responsiveness." },
                {  icon: "-->", title: "PROJECT", desc: "Designed reusable UI components to streamline development workflows." },
                {  icon: "-->", title: "CODE CONTRIBUTOR", desc: "Contributed to code reviews and frontend best practices in collaborative projects." }
            ],
            activity: [
                {  icon: ">", title: "Exploring", time: "6 days ago", desc: " Exploring advanced React patterns and Next.js features for scalable applications." },
                {  icon: ">", title: "Experimenting", time: "2 weeks ago", desc: " Experimenting with modern UI architectures and component-driven development" }
            ]
        },
        "kartikey": {
            name: "Kartikey",
            role: "Social & Outreach Volunteer",
            img: "assets/img/IMG_20251210_082535.jpg",
            socials: { linkedin: "https://www.linkedin.com/in/kartikey-5a063a313", github:"https://github.com/kartikey-0326" },
            about: "I am Kartikey, a Computer Science Engineering student passionate about Software Development, Problem Solving, and building impactful tech solutions. I am exploring Web Development, Data Structures & Algorithms, and emerging technologies while continuously improving my technical skills.",
            skills: ["HTML ", "CSS", "JavaScript", "React.js" , "MySQL" , "Git", "GitHub", "Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "Problem Solving","Many More"],
            achievements: [
                {  icon: "-->", title: "RESEARCH PAPER", desc: "Presented a research paper titled “Advancements and Emerging Challenges in Cloud Computing” at the International Conference on Science, Engineering & Technology (ICSET), Abu Dhabi, UAE (2025)." },
                {  icon: "-->", title: "SUMMER SCHOOL", desc: "Completed Core Java Technology (J2SDK 1.7) Summer School Program by Dronacharya College of Engineering." },
                {  icon: "-->", title: "NSS", desc: "Participated in the National Integration Camp (NSS) 2025 organized by Maharshi Dayanand University." }
            ],
            activity: [
                { icon: ">", title: "Summer Classes", time: "1 week ago", desc: "Currently attending Summer Classes on Full Stack Web Development at Dronacharya College of Engineering, enhancing practical development skills through hands-on learning and projects" },
                {  icon: ">", title: "Reinventing the Future 2025", time: "1 month ago", desc: " Participated in “Reinventing the Future 2025” event presented by Aditya Birla Group." },
                {  icon: ">", title: "Projects", time: "1.5 months ago", desc: "Built projects including Buyoh – Retail Platform Landing Page and Netflix Clone using modern web technologies." }
            ]
        },
        "sushant-jha": {
            name: "Sushant Jha",
            role: "Socials & Outreach Volunteer",
            img: "assets/img/organizer_sushant.png",
            socials: { linkedin: "https://www.linkedin.com/in/sushant-jha-4aa7541bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
            about: "Robotics & Drone Engineer with a strong focus on UAV development, autonomous systems, embedded electronics, and AI-powered robotics. Passionate about building innovative solutions for disaster management, surveillance, and real-world automation challenges. Experienced in drone design, flight control systems, computer vision integration, sensor interfacing, and robotic system development.",
            skills: ["UAV Systems & Multirotor Dynamics", "Flight Control & PID Tuning", "Autonomous Navigation", "Human-Aware & Safety-Oriented Robotics","Arduino (Uno, Mega)", "STM32 ", "ESP32", "NVIDIA Jetson", "Sensor Integration (IMU, GPS, LiDAR/Ultrasonic, Environmental Sensors) ","Many More"],
            achievements: [
                {  icon: "-->", title: "FINALIST", desc: " NIDAR 2025 (NATIONAL INNOVATION & DRONE APPLICATIONS CHALLENGE) FOR WINGMAN" },
                {  icon: "-->", title: "VOLUNTEER", desc: "GOOGLE GENERATIVE AI WORKSHOP " }
            ],
            activity: [
                {  icon: ">", title: "Research Internship", time: "1 week ago", desc: "Pursuing a research Internship at Drdo,Dqrs *Agentic Al for Heterogeneous Swarm Coordination of Amphibious Multi-Modal Robots in GPS-Denied Environments*" },
                {  icon: ">", title: "Drone Development", time: "3 weeks ago", desc: "Participated in India's biggest Drone development competition, Nidar we developed two disaster management drones, integrating mavlink for drone communication and worked on different tech stacks for example Ros, Mavlink etc" }
            ]
        },
        "ujjwal-verma": {
            name: "Ujjwal Verma",
            role: "Graphics & PR Lead",
            img: "assets/img/organizer_ujjwal.png",
            socials: { linkedin: "https://www.linkedin.com/in/ujjwalverma3115/", twitter: "https://x.com/Ujjwal3115"},
            about: "I am an Agentic AI Engineer & Technical Partner specializing in Multi-Agent Workflows, Distributed GenAI, and Full-Stack Development. As a Computer Science (AIML) student at Dronacharya College of Engineering, I craft innovative solutions at the intersection of enterprise architecture and cutting-edge artificial intelligence.",
            skills: ["Tailwind CSS", "Figma", "Canva", "LLMs (OpenAI, Gemini)", "RAG", "Agentic AI (CrewAI, LangGraph)", "ComfyUI", "Higgsfield AI", "Prompt Engineering", "Vector DBs (ChromaDB, Pinecone)", "PyTorch", "Deep Learning", "OpenCV", "Scikit-Learn", "TensorFlow", "YOLO", "Many More"],
            achievements: [
                { icon: "-->", title: "GATE DA Qualified", desc: "AIR 7528 (2026)" },
                { icon: "-->", title: "HarkerRank", desc: "Problem Solving & SQL 5 Star Badge" }
            ],
            activity: [
                { icon: ">", title: "Agentic AI Developer Intern", time: "1 week ago", desc: "Currently an Agentic AI Developer Intern at JK Papers, building enterprise workflows" },
                { icon: ">", title: "Technical Partner & CTO", time: "1 month ago", desc: "Technical Partner & CTO at Veldon Lab, where I architect distributed sub-services and custom video pipelines." }
            ]
        },
        "manav-tuli": {
            name: "Manav Tuli",
            role: "PR & Graphics Team Lead",
            img: "assets/img/organizer_manav.png",
            socials: { linkedin: "https://www.linkedin.com/in/manav-tuli-422322326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: " https://www.instagram.com/_manav.mt_?igsh=N3ZyaWkwZThncmd1", github: "https://github.com/manavtulimt", twitter: "https://x.com/Manav07747923" },
            about: "Computer Science undergraduate pursuing a B.Tech with demonstrated expertise in the MERN Stack, Python backend development, and scalable workflow automation using tools like n8n. Experienced in engineering full-stack architectures and intelligent software systems including ESG analytics engines and AI-driven computer vision solutions. A proven community leader with strong problem-solving capacities, cross-functional collaboration skills, and event execution management.",
            skills: ["Python", "JavaScript", "HTML", "CSS", "SQL","YOLOv8", "Express.js", "React", "Node.js", "Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab", "n8n", "Figma", "Adobe Photoshop", "After Effects", "Canva","Many More"],
            achievements: [
                { icon: "-->", title: "Campus Ambassador || E-Cell IIT Bombay", desc: "Promoted national entrepreneurship initiatives within the college hub, amplifying event participation rates by coordinating large-scale promotional campaigns and resource booths." },
                { icon: "-->", title: "Certification", desc: "CS50’s Introduction to Programming with Python– Harvard University (edX platform)" }
            ],
            activity: [
                { icon: ">", title: "Hackathon", time: "2 weeks ago", desc: "Published the aftermovie for the latest hackathon." },
                { icon: ">", title: "Video editing", time: "1 month ago", desc: "Edited a teaser video for the upcoming flagship event." }
            ]
        },
        "rekha-rathore": {
            name: "Rekha Rathore",
            role: "Graphics & PR Volunteer",
            img: "assets/img/organizer_rekha.png",
            socials: { linkedin: "https://www.linkedin.com/in/rekha-h-rathore/",github: "https://github.com/Rekha115",portfolio: "https://rekha-portfolio-1bww.vercel.app/" },
            about: "Hi, I’m Rekha, an aspiring UI/UX Designer and Frontend Developer passionate about creating user-friendly and visually appealing digital experiences. I enjoy designing intuitive interfaces, building responsive websites, and continuously learning new technologies to enhance my skills. I believe in combining creativity with problem-solving to deliver impactful solutions.",
            skills: ["Figma", "HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap" , "Git & Github" , "Python" , "Django","Many More"],
            achievements: [
                { icon: "-->", title: "Internship", desc: "Selected for the Uno Minda Internship Program." },
                { icon: "-->", title: "UI/UX Design Internship", desc: "Secured a UI/UX Design Internship at SkillCraft Technology." },
                { icon: "-->", title: "Web Development Project", desc: "Designed and developed multiple responsive web projects using modern frontend technologies." }
            ],
            activity: [
                { icon: ">", title: "UI/UX Design Projects", time: "Goning On", desc: "Working on UI/UX design projects and interactive prototypes using Figma." },
                { icon: ">", title: "Internship", time: "1 week ago", desc: "Participated in the Uno Minda Internship Program and industry-focused learning sessions." } ,
                { icon: ">", title: "UI/UX Design Internship", time: "1 month ago", desc: "Building responsive web applications and improving frontend development skills through hands-on projects." },
            ]
        },
        "anamika-prajapati": {
            name: "Anamika Prajapati",
            role: "Graphics & PR Volunteer",
            img: "assets/img/organizer_anamika.png",
            socials: { linkedin: "https://www.linkedin.com/in/anamika-prajapati-0a420a383", github: "https://github.com/anamikaprajapati8076-source" },
            about: "Hi, I'm Anamika Prajapati, a B.Tech student in Electronics and Computer Science with an interest in technology, design, and creative problem-solving. I enjoy combining creativity with technical skills to create meaningful digital experiences. I am passionate about learning new technologies, contributing to projects, and continuously improving my skills in both development and design",
            skills: ["C", "Python", "Figma", "HTML", "CSS", "Canva", "Git & Github", "VSCode","Many More"],
            achievements: [
                { icon: "-->", title: "Internship Certificate", desc: "Junior Creative Intern, Om Sai Industries." },
                { icon: "-->", title: "Research Participation ", desc: " Bio Manthan International Conference 2025." },
                { icon: "-->", title: "Appreciation Certificate ", desc: " GDG Hackathon Volunteering." }
            ],
            activity: [
                { icon: ">", title: "Learninig", time: "6 days ago", desc: "Enhancing programming skills in C and Python." },
                { icon: ">", title: "Web Development", time: "1 month ago", desc: "Building foundational web development projects using HTML and CSS.." },
                { icon: ">", title: "Connecting", time: "2 months ago", desc: "Participating in technical events, conferences, and volunteering activities to gain practical experience." }
            ]
        },
        "aryan-rajput": {
            name: "Aryan Rajput",
            role: "Graphics & PR Volunteer",
            img: "assets/img/organizer_aryan.png",
            socials: { linkedin: "https://www.linkedin.com/in/aryan-kumar-rajput-13b308343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", instagram: "https://www.instagram.com/aryan12.22?igsh=MTBuYTB2N2lmdTFxNQ%3D%3D&utm_source=ig_contact_invite" , github:"https://github.com/aryank2212", twitter:"https://x.com/aryan22_12?s=21" },
            about: "I'm Aryan Kumar, a CSE student interested in AI, software development, LLMs, Agentic AI, self-hosted infrastructure and whatever I find interesting to try on internet. ",
            skills: ["AfterFX","Premier pro","Cinematography","Motion Graphics","C/C++","Python","Numpy","pandas","Matplotlib","PyTorch","RAG","LLMs","Many More"],
            achievements: [
                { icon: "-->", title: "Won Hackathon(2nd Place)", desc: "Developed the AI decision-making system for autonomous swarm drone project featuring terrain mapping, object detection even camouflaged, and aircraft target recognition capabilities using a YOLO models fine-tuned on custom datasets and military vehicle imagery for simulation and research purposes. " },
                { icon: "-->", title: "Built Infer", desc: "A Python-based multi-agent AI framework capable of task planning, agent allocation, execution, and output verification for LLM-driven workflows" }
            ],
            activity: [
                { icon: ">", title: "Building", time: "Now", desc: "I was actively developing Infer, a modular multi-agent AI framework" },
                { icon: ">", title: "Research", time: "2 weeks ago", desc: "Researching LLM architectures, reasoning systems, and Agentic AI workflows." },
                { icon: ">", title: "Optimizing", time: "1 month ago", desc: "Expanding and optimizing a self-hosted homelab environment for AI and infrastructure projects." }
            ]
        }
    };

    const socialIcons = {
        linkedin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>',
        googleScholar: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>',
        researchGate: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.586 0c-.818 0-1.508.19-2.073.565-.564.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.89v5.294c0 .321.037.606.112.853.076.248.194.463.355.644.161.18.361.32.6.422.24.103.525.154.856.154s.614-.051.853-.154a1.764 1.764 0 0 0 .599-.422c.162-.181.278-.396.355-.644.075-.247.112-.532.112-.853V4.464h-.057l-1.921 1.956v-.517h3.19v4.204c0 .817-.19 1.508-.564 2.073-.377.564-.936.97-1.68 1.213-.745.242-1.554.364-2.428.364-1.229 0-2.228-.21-2.997-.629-.77-.42-1.353-.984-1.751-1.694-.397-.71-.596-1.501-.596-2.375V4.671c0-1.229.21-2.228.63-2.998.419-.77.983-1.352 1.693-1.75A4.475 4.475 0 0 1 19.586 0zm-11.41 0c-1.365 0-2.455.434-3.27 1.303C4.09 2.172 3.682 3.328 3.682 4.77v4.613c0 1.443.408 2.598 1.224 3.468.816.868 1.906 1.302 3.27 1.302s2.456-.434 3.27-1.302c.816-.87 1.224-2.025 1.224-3.468V4.771c0-1.442-.408-2.598-1.224-3.468-.814-.869-1.905-1.303-3.27-1.303zm.04 11.233c-.702 0-1.258-.258-1.666-.776-.409-.517-.614-1.24-.614-2.167V4.77c0-.926.205-1.65.614-2.167.408-.518.964-.776 1.666-.776.7 0 1.254.258 1.662.776.408.517.613 1.24.613 2.167v4.612c0 .927-.205 1.65-.613 2.167-.408.518-.962.776-1.662.776zM.165 16.486v1.942l3.473-1.782v-2.001L.165 16.486zm23.67 0l-3.472-1.841v2.001l3.472 1.782v-1.942z"/></svg>',
        twitter: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
        github: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
        instagram: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
        leetcode: '<svg width="18" height="18" viewBox="0 0 24 24" fill="#FFA116"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>',
        portfolio: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm6.93 9h-3.095a15.72 15.72 0 0 0-1.38-5.02A8.025 8.025 0 0 1 18.93 11zM12 4c1.54 0 3.36 2.41 3.86 7H8.14C8.64 6.41 10.46 4 12 4zM5.07 13h3.095a15.72 15.72 0 0 0 1.38 5.02A8.025 8.025 0 0 1 5.07 13zM5.07 11a8.025 8.025 0 0 1 4.475-5.02A15.72 15.72 0 0 0 8.165 11H5.07zm6.93 9c-1.54 0-3.36-2.41-3.86-7h7.72c-.5 4.59-2.32 7-3.86 7zm2.455-1.98A15.72 15.72 0 0 0 15.835 13h3.095a8.025 8.025 0 0 1-4.475 5.02z"/></svg>',
        email: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 4.236-8 4.882-8-4.882V6l8 4.882L20 6v2.236z"/></svg>',
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