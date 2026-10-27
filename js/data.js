/**
 * CampusLaunch - Core Curated Data Store
 * Initial dataset for Newton School of Technology & First-Year Tech Students
 * All listings include verification status, official organizer links, and realistic schemas.
 */

const CAMPUS_LAUNCH_DATA = {
  platform: {
    name: "CampusLaunch",
    version: "1.0.0",
    targetInstitution: "Newton School of Technology, Pune",
    founder: "Shreya Sahi (First-Year CS & AI Student)",
    lastVerifiedGlobal: "October 2026",
    notice: "Sample hackathons are structured to reflect real platform feeds (Devfolio, Unstop, MLH). Always confirm deadlines on official portals."
  },

  hackathons: [
    {
      id: "hack-sih-2026",
      name: "Smart India Hackathon (SIH) 2026",
      organizer: "Ministry of Education & AICTE",
      badge: "National Flagship",
      format: "Hybrid",
      location: "Internal College Rounds -> Nodal Centers across India",
      startDate: "2026-11-20",
      endDate: "2026-11-22",
      deadline: "2026-11-05",
      prizePool: "₹1,00,000 per problem statement (₹50L+ Total)",
      eligibility: "Open to all regular college students (1st to 4th year). College nomination required.",
      beginnerFriendly: true,
      experienceLevel: "Beginner Friendly",
      domains: ["Open Innovation", "AI/ML", "Web Development", "Cybersecurity", "Smart Cities"],
      skills: ["Python", "React", "Mobile Apps", "IoT / Hardware", "APIs"],
      teamSize: "6 members (Mandatory at least 1 female teammate)",
      cost: "Free",
      officialLink: "https://www.sih.gov.in",
      lastVerified: "2026-10-24",
      isVerified: true,
      isDemo: true,
      description: "India's largest nationwide hackathon where students build technology solutions for government ministries, departments, and industries. Perfect for first-year teams looking to make national impact.",
      schedule: [
        { time: "Day 1 - 09:00 AM", event: "National Inception & Mentor Briefing" },
        { time: "Day 1 - 04:00 PM", event: "Mentoring Round 1 (Architecture Review)" },
        { time: "Day 2 - 10:00 AM", event: "Mid-way Progress Evaluation" },
        { time: "Day 3 - 02:00 PM", event: "Final Jury Presentation & Grand Finale" }
      ],
      submissionChecklist: [
        "Executive PPT deck using official SIH template",
        "Working software/hardware prototype demonstrating core user flow",
        "Public GitHub repository with comprehensive README and setup steps",
        "2-minute YouTube video demonstration of your solution"
      ]
    },
    {
      id: "hack-nst-pune-2026",
      name: "NST HackForge 2026",
      organizer: "Newton School of Technology & Developer Guild",
      badge: "Campus Spotlight",
      format: "In-Person",
      location: "Newton School of Technology Campus, Pune, Maharashtra",
      startDate: "2026-11-14",
      endDate: "2026-11-15",
      deadline: "2026-11-08",
      prizePool: "₹1,50,000 + Tech Gadgets & Startup Incubator Credits",
      eligibility: "First-year and sophomore college students. Freshers strongly encouraged!",
      beginnerFriendly: true,
      experienceLevel: "Super Beginner Friendly",
      domains: ["AI/ML", "Web Development", "EdTech", "FinTech"],
      skills: ["Python", "JavaScript", "HTML/CSS", "Flask / FastAPI", "UI Design"],
      teamSize: "2 - 4 members",
      cost: "Free",
      officialLink: "https://newtonschool.co",
      lastVerified: "2026-10-26",
      isVerified: true,
      isDemo: true,
      description: "An intensive 24-hour campus hackathon designed specially for first-year developers. Includes round-the-clock senior peer mentors, hands-on debugging rooms, and zero-intimidation judging.",
      schedule: [
        { time: "Saturday 10:00 AM", event: "Opening Ceremony & Problem Tracks Reveal" },
        { time: "Saturday 03:00 PM", event: "Mentorship Clinic: Git & Fast API Scaffolding" },
        { time: "Saturday Midnight", event: "Midnight Coding Sprints & Pizza Hour" },
        { time: "Sunday 11:00 AM", event: "Project Code Freeze & Expo Booths" }
      ],
      submissionChecklist: [
        "Deployed web application or local runnable prototype",
        "GitHub repository with commit history from all teammates",
        "3-minute pitch highlighting problem, target user, and tech stack"
      ]
    },
    {
      id: "hack-devfolio-eth-2026",
      name: "ETHIndia Fellowship & HackSprint",
      organizer: "Devfolio & Ethereum Foundation",
      badge: "Global Web3",
      format: "Online",
      location: "Virtual / Discord",
      startDate: "2026-11-28",
      endDate: "2026-11-30",
      deadline: "2026-11-12",
      prizePool: "$25,000 in Grants & Bounties",
      eligibility: "Students & developers worldwide. Dedicated tracks for beginner builders.",
      beginnerFriendly: true,
      experienceLevel: "Beginner Friendly",
      domains: ["Web Development", "AI/ML", "Decentralized Systems"],
      skills: ["JavaScript", "Solidity / Python", "Web3.js", "Next.js", "Tailwind"],
      teamSize: "1 - 4 members",
      cost: "Free",
      officialLink: "https://devfolio.co",
      lastVerified: "2026-10-25",
      isVerified: true,
      isDemo: true,
      description: "Asia's premier student-led hackathon ecosystem on Devfolio. First-timers receive starter templates, testnet faucet tokens, and hands-on workshops before coding begins.",
      schedule: [
        { time: "Nov 28 - 06:00 PM", event: "Virtual Kickoff & Starter Kit Walkthrough" },
        { time: "Nov 29 - 02:00 PM", event: "Smart Contract & UI Integration Check-in" },
        { time: "Nov 30 - 05:00 PM", event: "Submission Portal Close & Peer Voting" }
      ],
      submissionChecklist: [
        "Devfolio Project submission page with clean screenshots",
        "Contract verified on testnet or working Web application demo",
        "Open source repository license (MIT or Apache)"
      ]
    },
    {
      id: "hack-google-solution-2027",
      name: "Google Solution Challenge 2027",
      organizer: "Google Developer Student Clubs (GDSC)",
      badge: "Google Global",
      format: "Online",
      location: "Global Online Submission",
      startDate: "2027-01-15",
      endDate: "2027-03-31",
      deadline: "2027-01-30",
      prizePool: "$12,000 per top team + Mentorship from Google Engineers",
      eligibility: "College students enrolled in higher education. At least one team member in a GDSC chapter.",
      beginnerFriendly: true,
      experienceLevel: "Beginner Friendly",
      domains: ["AI/ML", "Web Development", "App Development", "Open Innovation"],
      skills: ["Flutter", "TensorFlow / Firebase", "Google Cloud", "Python", "React"],
      teamSize: "1 - 4 members",
      cost: "Free",
      officialLink: "https://developers.google.com/community/gdsc-solution-challenge",
      lastVerified: "2026-10-22",
      isVerified: true,
      isDemo: true,
      description: "Solve one or more of the United Nations 17 Sustainable Development Goals using Google technologies. Great for first-year builders passionate about social impact.",
      schedule: [
        { time: "January 2027", event: "Registration & Brainstorming Workshops" },
        { time: "February 2027", event: "Mid-point Mentoring by Google Tech Leads" },
        { time: "March 2027", event: "Global Submissions Close" }
      ],
      submissionChecklist: [
        "Working prototype utilizing at least one Google developer technology",
        "Clear alignment with UN 17 Sustainable Development Goals",
        "Demo video showing real user testing and feedback"
      ]
    },
    {
      id: "hack-unstop-talent-2026",
      name: "Unstop India Tech Prodigy Hackathon",
      organizer: "Unstop & Top Tech Employers",
      badge: "Hiring Track",
      format: "Online",
      location: "Unstop Platform (Virtual)",
      startDate: "2026-11-18",
      endDate: "2026-11-20",
      deadline: "2026-11-10",
      prizePool: "₹3,00,000 + PPI / Summer Internship Shortlists",
      eligibility: "B.Tech/BE/BCA/MCA undergraduate students (All batches eligible)",
      beginnerFriendly: true,
      experienceLevel: "Beginner Friendly",
      domains: ["Web Development", "AI/ML", "App Development"],
      skills: ["Python", "Java / C++", "JavaScript", "SQL", "REST APIs"],
      teamSize: "1 - 3 members",
      cost: "Free",
      officialLink: "https://unstop.com",
      lastVerified: "2026-10-26",
      isVerified: true,
      isDemo: true,
      description: "Combines an initial algorithmic coding qualifier with a 48-hour prototype sprint. High visibility among product startups and tech recruiters offering early freshman summer roles.",
      schedule: [
        { time: "Round 1 - Nov 12", event: "Online MCQs & 2 Easy-Medium Coding Challenges" },
        { time: "Round 2 - Nov 18", event: "48-Hour Hackathon Prototype Sprint" },
        { time: "Round 3 - Nov 24", event: "Virtual Demo to Industry Jury" }
      ],
      submissionChecklist: [
        "Code hosted on GitHub or GitLab with MIT license",
        "Architecture diagram detailing data flow",
        "README with local run instructions"
      ]
    },
    {
      id: "hack-mlh-global-2026",
      name: "MLH Global Hack Week: AI & Agents",
      organizer: "Major League Hacking (MLH)",
      badge: "Beginner Gold Standard",
      format: "Online",
      location: "Global Discord & Twitch Streams",
      startDate: "2026-12-04",
      endDate: "2026-12-11",
      deadline: "2026-12-03",
      prizePool: "Swag Packs, Digital Badges & $10,000 sponsor toolkits",
      eligibility: "Anyone, anywhere! Zero coding background required to start.",
      beginnerFriendly: true,
      experienceLevel: "Super Beginner Friendly",
      domains: ["AI/ML", "Web Development", "Open Innovation"],
      skills: ["Python", "Hugging Face", "Streamlit", "HTML/CSS", "Prompt Engineering"],
      teamSize: "Solo or Team up to 4",
      cost: "Free",
      officialLink: "https://ghw.mlh.io",
      lastVerified: "2026-10-20",
      isVerified: true,
      isDemo: true,
      description: "A week-long celebration of building where participants earn points by completing beginner challenges, watching live workshops, and shipping their first AI project.",
      schedule: [
        { time: "Day 1", event: "Kickoff & Python Setup with VS Code" },
        { time: "Day 3", event: "Building an AI Agent in 45 Minutes" },
        { time: "Day 5", event: "Deploying to Vercel / Hugging Face Spaces" },
        { time: "Day 7", event: "Community Showcase & Swag Giveaways" }
      ],
      submissionChecklist: [
        "Submit to Devpost with working demo link",
        "Complete at least 3 daily mini-challenges",
        "Share project on Twitter/LinkedIn with #GlobalHackWeek"
      ]
    },
    {
      id: "hack-pune-cyber-2026",
      name: "Pune CyberShield & Forensics Hackathon",
      organizer: "Pune Police Cyber Cell & Maharashtra Tech Consortium",
      badge: "Cyber Track",
      format: "In-Person",
      location: "COEP Technological University, Pune, Maharashtra",
      startDate: "2026-12-18",
      endDate: "2026-12-19",
      deadline: "2026-11-25",
      prizePool: "₹2,00,000 + Commendation Certificate & Cyber Badges",
      eligibility: "Engineering and technology students based in Maharashtra.",
      beginnerFriendly: false,
      experienceLevel: "Intermediate",
      domains: ["Cybersecurity", "AI/ML", "Web Development"],
      skills: ["Python", "Linux Basics", "Network Security", "Cryptography", "Bash"],
      teamSize: "2 - 4 members",
      cost: "Free",
      officialLink: "https://punepolice.gov.in",
      lastVerified: "2026-10-21",
      isVerified: true,
      isDemo: true,
      description: "Tackle real-world challenges in scam detection, deepfake identification, safe payment gateway simulations, and automated log analysis.",
      schedule: [
        { time: "Dec 18 - 09:00 AM", event: "Security Clearance & Problem Briefing" },
        { time: "Dec 18 - 07:00 PM", event: "Sandbox Testing & Red-Teaming Simulation" },
        { time: "Dec 19 - 01:00 PM", event: "Final Defense Presentation to Cyber Officers" }
      ],
      submissionChecklist: [
        "Security analysis report and threat model",
        "Executable defense script or prevention dashboard",
        "Defense presentation deck"
      ]
    },
    {
      id: "hack-flipkart-grid-2027",
      name: "Flipkart GRiD 7.0 Tech Challenge",
      organizer: "Flipkart",
      badge: "E-Commerce Flagship",
      format: "Hybrid",
      location: "Online Rounds -> Finals in Bengaluru",
      startDate: "2027-02-10",
      endDate: "2027-03-25",
      deadline: "2027-01-20",
      prizePool: "₹9,00,000 + Pre-Placement Interviews (PPIs)",
      eligibility: "All engineering students across India (Freshmen, Sophomores, Pre-final & Final year).",
      beginnerFriendly: true,
      experienceLevel: "Beginner Friendly",
      domains: ["Web Development", "AI/ML", "App Development"],
      skills: ["Algorithms", "System Design", "Python / Java", "Computer Vision"],
      teamSize: "2 - 3 members",
      cost: "Free",
      officialLink: "https://unstop.com/competitions/flipkart-grid",
      lastVerified: "2026-10-23",
      isVerified: true,
      isDemo: true,
      description: "Flipkart's premier engineering campus challenge with specialized tracks: Software Development, Information Security, and Robotics. First years can participate to benchmark against top peers.",
      schedule: [
        { time: "Level 1", event: "E-Commerce Tech Quiz & Logic Elimination" },
        { time: "Level 2", event: "Proof of Concept / Prototype Submission" },
        { time: "Level 3", event: "National Grand Finale & Live Jury Demo" }
      ],
      submissionChecklist: [
        "Architecture PDF detailing scalability for 100k requests/sec",
        "Working code repository with unit tests",
        "Demo video of the functional pipeline"
      ]
    }
  ],

  roadmapStages: [
    {
      id: "stage-1",
      stageNumber: 1,
      title: "Stage 1: Build Your Foundation",
      subtitle: "Master the fundamental building blocks of programming, logic, and developer tooling.",
      timeline: "Month 1 - 2 (Estimated 4-6 weeks)",
      whyItMatters: "Without solid fundamentals in Python, terminal navigation, and version control, attempting web frameworks or hackathons leads to frustrating bottlenecks. This stage turns you from a computer user into a developer.",
      tasks: [
        {
          id: "task-1-1",
          title: "Python Fundamentals & Logic Building",
          topics: "Variables, data types (strings, ints, floats, booleans), type casting, conditionals (if/elif/else)",
          whyItMatters: "Python is the primary language for AI/ML and the most beginner-accessible language for quick hackathon prototyping.",
          time: "10-12 hours",
          difficulty: "Beginner",
          resources: [
            { name: "Harvard CS50's Introduction to Programming with Python", url: "https://cs50.harvard.edu/python/", type: "Course" },
            { name: "Official Python Tutorial (Python.org)", url: "https://docs.python.org/3/tutorial/", type: "Docs" }
          ],
          exercise: "Build a Student Grade & GPA Calculator CLI that asks for subject marks, calculates averages, and prints performance bands."
        },
        {
          id: "task-1-2",
          title: "Loops, Functions & Data Structures in Python",
          topics: "For/while loops, function definitions, parameters, return values, lists, tuples, dictionaries, sets",
          whyItMatters: "90% of technical coding questions and data manipulations revolve around nested loops and dictionary lookup maps.",
          time: "12-15 hours",
          difficulty: "Beginner",
          resources: [
            { name: "freeCodeCamp Python for Everybody (Dr. Chuck)", url: "https://www.freecodecamp.org/learn/scientific-computing-with-python/", type: "Course" },
            { name: "Kaggle Python Micro-Course", url: "https://www.kaggle.com/learn/python", type: "Interactive" }
          ],
          exercise: "Create an In-Memory Contact Book & Task Manager CLI with CRUD actions (Add, View, Search, Delete tasks)."
        },
        {
          id: "task-1-3",
          title: "Problem Solving & Basic Debugging Skills",
          topics: "Reading tracebacks, using print statements / debugger, edge cases, writing clean modular functions",
          whyItMatters: "Debugging is 70% of software engineering. Knowing how to read an error trace prevents hours of frustration during a midnight hackathon sprint.",
          time: "8-10 hours",
          difficulty: "Beginner",
          resources: [
            { name: "Exercism Python Track (Guided Feedback)", url: "https://exercism.org/tracks/python", type: "Practice" },
            { name: "LeetCode Beginner 75 (Easy Array Problems)", url: "https://leetcode.com/problemset/all/?difficulty=EASY", type: "Practice" }
          ],
          exercise: "Solve 10 easy algorithmic problems (Palindrome check, Two Sum, Reverse String, Fibonacci sequence) on LeetCode or HackerRank."
        },
        {
          id: "task-1-4",
          title: "Command Line (Terminal) Fundamentals",
          topics: "Navigation (pwd, ls/dir, cd), file creation (touch/mkdir), file operations (cp, mv, rm), environment variables, running scripts",
          whyItMatters: "Every modern tool, cloud server, docker container, and Git operation runs through the command line.",
          time: "4-6 hours",
          difficulty: "Beginner",
          resources: [
            { name: "The Linux Command Line (free book / tutorial)", url: "https://linuxcommand.org/tlcl.php", type: "Guide" },
            { name: "MIT Missing Semester of Your CS Education: The Shell", url: "https://missing.csail.mit.edu/2020/shell-tools/", type: "Lecture" }
          ],
          exercise: "Create an entire project folder structure with 5 subdirectories and placeholder files purely using terminal commands in under 3 minutes."
        },
        {
          id: "task-1-5",
          title: "Git & GitHub Basics for Beginners",
          topics: "git init, clone, status, add, commit, push, pull, branches, merge conflicts, creating your GitHub account",
          whyItMatters: "You cannot submit a hackathon project or collaborate with teammates without Git. It is your developer passport.",
          time: "6-8 hours",
          difficulty: "Beginner",
          resources: [
            { name: "GitHub Skills: Introduction to GitHub", url: "https://skills.github.com/", type: "Interactive" },
            { name: "Git Immersion (Step-by-step walkthrough)", url: "https://gitimmersion.com/", type: "Interactive" }
          ],
          exercise: "Initialize a local git repo for your Python projects, push it to GitHub, create a feature branch, create a Pull Request, and merge it."
        }
      ]
    },
    {
      id: "stage-2",
      stageNumber: 2,
      title: "Stage 2: Start Building",
      subtitle: "Turn logic into interactive user interfaces, connect APIs, and ship functional full-stack projects.",
      timeline: "Month 2 - 3 (Estimated 4-6 weeks)",
      whyItMatters: "Having code on your computer is good, but building functional web applications allows mentors, judges, and recruiters to actually touch and test what you made.",
      tasks: [
        {
          id: "task-2-1",
          title: "Modern HTML5 & Semantic Web Structure",
          topics: "Semantic tags (<header>, <nav>, <main>, <section>, <article>), accessibility attributes, forms, inputs, metadata",
          whyItMatters: "Semantic HTML is the backbone of clean, accessible web applications and proper SEO indexing.",
          time: "6-8 hours",
          difficulty: "Beginner",
          resources: [
            { name: "MDN Web Docs: HTML Basics", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML", type: "Docs" },
            { name: "freeCodeCamp Responsive Web Design Certification", url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/", type: "Course" }
          ],
          exercise: "Build an accessible college club registration form with validation, proper input types, and semantic structure."
        },
        {
          id: "task-2-2",
          title: "Modern CSS3, Flexbox & Responsive Layouts",
          topics: "Box model, CSS variables (design tokens), Flexbox, CSS Grid, media queries for mobile responsiveness, transitions",
          whyItMatters: "Hackathon judges grade on presentation and UI polish. A well-styled app wins prizes over a messy CLI every time.",
          time: "12-15 hours",
          difficulty: "Beginner to Intermediate",
          resources: [
            { name: "Flexbox Froggy (Interactive Game)", url: "https://flexboxfroggy.com/", type: "Interactive" },
            { name: "CSS Grid Garden (Interactive Game)", url: "https://cssgridgarden.com/", type: "Interactive" },
            { name: "Kevin Powell's Responsive Design Series", url: "https://www.youtube.com/@KevinPowell", type: "Videos" }
          ],
          exercise: "Code a fully responsive 3-column landing page for an NST campus study group with a mobile hamburger navigation."
        },
        {
          id: "task-2-3",
          title: "JavaScript Fundamentals & DOM Manipulation",
          topics: "Variables (let/const), arrow functions, array methods (map, filter, reduce), DOM selectors, event listeners, localStorage",
          whyItMatters: "JavaScript gives life to web pages. It lets you capture button clicks, update numbers dynamically, and persist user choices.",
          time: "15-20 hours",
          difficulty: "Intermediate",
          resources: [
            { name: "JavaScript.info (The Modern JavaScript Tutorial)", url: "https://javascript.info/", type: "Tutorial" },
            { name: "MDN JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide", type: "Docs" }
          ],
          exercise: "Build an interactive Habit Tracker web app where users can add habits, check them off daily, and save state in localStorage."
        },
        {
          id: "task-2-4",
          title: "Working with APIs & Asynchronous JavaScript",
          topics: "fetch() API, async/await, JSON parsing, promises, error handling, status codes (200, 404, 500)",
          whyItMatters: "Almost every hackathon project connects to an AI endpoint (OpenAI, Gemini), weather API, or database backend using fetch().",
          time: "8-10 hours",
          difficulty: "Intermediate",
          resources: [
            { name: "MDN: How to Use Fetch and Promises", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous", type: "Docs" },
            { name: "Public APIs for Developers (Free testing endpoints)", url: "https://github.com/public-apis/public-apis", type: "Resource" }
          ],
          exercise: "Build a Pune Weather & Air Quality Dashboard that fetches real-time data from OpenWeatherMap API and displays dynamic forecast cards."
        },
        {
          id: "task-2-5",
          title: "Basic Data Structures & Algorithms (Foundation)",
          topics: "Time & Space complexity (Big-O notation), Arrays, Strings, Hash Maps, Two-Pointers, Stack & Queue basics",
          whyItMatters: "Lays the groundwork for second-year technical interview rounds, online assessments, and efficient software engineering.",
          time: "15-20 hours",
          difficulty: "Intermediate",
          resources: [
            { name: "NeetCode.io (Roadmap & Video Solutions)", url: "https://neetcode.io/", type: "Practice" },
            { name: "Striver's A2Z DSA Sheet (Beginner Track)", url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/", type: "Sheet" }
          ],
          exercise: "Complete 20 Easy DSA questions covering Arrays and Hash Maps (e.g., Valid Anagram, Contains Duplicate, Best Time to Buy and Sell Stock)."
        }
      ]
    },
    {
      id: "stage-3",
      stageNumber: 3,
      title: "Stage 3: Explore and Participate",
      subtitle: "Join hackathons, explore AI/ML fundamentals, collaborate in teams, and build proof-of-concepts.",
      timeline: "Month 3 - 5 (Estimated 6-8 weeks)",
      whyItMatters: "First year is the golden window for trial and error without placement pressure. Entering hackathons teaches teamwork, time management, and problem scoping faster than any classroom.",
      tasks: [
        {
          id: "task-3-1",
          title: "Join Your First Beginner-Friendly Hackathon",
          topics: "Registering on Devfolio/Unstop, team formation, understanding problem statements, 24h sprint planning",
          whyItMatters: "Overcomes imposter syndrome. Even if you don't win, building under time pressure accelerates your learning curve by 10x.",
          time: "24-48 hours (Weekend)",
          difficulty: "Beginner Friendly",
          resources: [
            { name: "CampusLaunch Hackathon Discovery Hub", url: "#hackathons", type: "Internal" },
            { name: "MLH Hackathon Guide for Beginners", url: "https://mlh.io/guide", type: "Guide" }
          ],
          exercise: "Team up with 2-3 fellow NST students, sign up for an upcoming verified hackathon, and build an MVP that addresses a campus problem."
        },
        {
          id: "task-3-2",
          title: "AI & Machine Learning Foundations",
          topics: "NumPy, Pandas for data processing, Matplotlib/Seaborn visualization, Scikit-Learn basics, Prompt engineering & API integration",
          whyItMatters: "AI is currently the most prominent track in tech hackathons. Adding a simple intelligent layer to your web app multiplies its impact.",
          time: "18-24 hours",
          difficulty: "Intermediate",
          resources: [
            { name: "Kaggle Learn: Intro to Machine Learning", url: "https://www.kaggle.com/learn/intro-to-machine-learning", type: "Interactive" },
            { name: "Google Machine Learning Crash Course", url: "https://developers.google.com/machine-learning/crash-course", type: "Course" },
            { name: "3Blue1Brown Neural Networks Series", url: "https://www.3blue1brown.com/topics/neural-networks", type: "Videos" }
          ],
          exercise: "Train a simple Machine Learning model to predict student exam performance or house prices, and deploy an interactive prediction web UI with Streamlit or Flask."
        },
        {
          id: "task-3-3",
          title: "Collaborative Git & GitHub Workflows",
          topics: "Feature branches (git checkout -b), pull requests, code reviews, resolving merge conflicts, git rebase vs merge",
          whyItMatters: "Solo coding is easy; teamwork breaks without clean Git conventions. Essential for team hackathons and open-source contributions.",
          time: "6-8 hours",
          difficulty: "Intermediate",
          resources: [
            { name: "Atlassian Git Workflows Tutorial", url: "https://www.atlassian.com/git/tutorials/comparing-workflows", type: "Guide" },
            { name: "First Contributions (Practice PRs on GitHub)", url: "https://firstcontributions.github.io/", type: "Hands-on" }
          ],
          exercise: "Create a shared repository with a classmate, submit a PR adding a feature to each other's code, review the code, and merge cleanly."
        },
        {
          id: "task-3-4",
          title: "Participate in Regular Coding Contests",
          topics: "Weekly contests on LeetCode/CodeChef, time-pressured problem solving, debugging under timer",
          whyItMatters: "Sharpens fast logical thinking, edge case identification, and builds familiarity with contest environments.",
          time: "2-3 hours / week",
          difficulty: "Intermediate",
          resources: [
            { name: "CodeChef Starters (Beginner Friendly)", url: "https://www.codechef.com/contests", type: "Contest" },
            { name: "LeetCode Biweekly & Weekly Contests", url: "https://leetcode.com/contest/", type: "Contest" }
          ],
          exercise: "Participate in at least two live weekend contests and solve at least the first 2 questions within the contest window."
        },
        {
          id: "task-3-5",
          title: "Engage with Campus & Developer Communities",
          topics: "Joining Google Developer Student Clubs, NST Tech Clubs, attending local tech meetups in Pune, tech talks",
          whyItMatters: "Your network is your opportunity pipeline. Finding driven seniors and co-founders in year 1 pays dividends for the next 4 years.",
          time: "Ongoing (4 hours / month)",
          difficulty: "Beginner",
          resources: [
            { name: "GDG Pune (Google Developer Groups)", url: "https://gdg.community.dev/gdg-pune/", type: "Community" },
            { name: "MLH Community Discord", url: "https://discord.gg/mlh", type: "Discord" }
          ],
          exercise: "Attend 1 local technical workshop or campus club event and connect with 3 new peers interested in forming a hackathon squad."
        }
      ]
    },
    {
      id: "stage-4",
      stageNumber: 4,
      title: "Stage 4: Prepare for Opportunities",
      subtitle: "Package your projects, build an impressive portfolio, craft a technical resume, and target freshman internships.",
      timeline: "Month 5 - 8 (Estimated 6-8 weeks)",
      whyItMatters: "Tech opportunities don't come from grades alone. High-impact GitHub profiles, polished live project demos, and a concise 1-page resume set you apart from thousands of applicants.",
      tasks: [
        {
          id: "task-4-1",
          title: "Build a Professional GitHub Profile & READMEs",
          topics: "GitHub profile README (stats, tech stack badges, pinned repositories), writing descriptive READMEs with GIFs and live links",
          whyItMatters: "Recruiters and hackathon judges look at your pinned repos first. A repo with no README looks abandoned; one with screenshots looks professional.",
          time: "6-8 hours",
          difficulty: "Beginner to Intermediate",
          resources: [
            { name: "GitHub Profile README Generator", url: "https://rahuldkjain.github.io/gh-profile-readme-generator/", type: "Tool" },
            { name: "Make a README (Standard best practices)", url: "https://www.makeareadme.com/", type: "Guide" }
          ],
          exercise: "Polish your personal GitHub profile and ensure your top 3 projects have clear problem descriptions, architecture diagrams, live demo URLs, and setup instructions."
        },
        {
          id: "task-4-2",
          title: "Deploy a Live Personal Portfolio Website",
          topics: "Deploying on Vercel/Netlify/GitHub Pages, custom domains, showcasing hackathons, projects, skills, and contact links",
          whyItMatters: "A live portfolio gives you a single link to share on your resume, LinkedIn, and hackathon registration forms.",
          time: "10-14 hours",
          difficulty: "Intermediate",
          resources: [
            { name: "Vercel Deployment Docs (Zero Config)", url: "https://vercel.com/docs", type: "Docs" },
            { name: "GitHub Pages Documentation", url: "https://pages.github.com/", type: "Docs" }
          ],
          exercise: "Deploy your personal developer portfolio with 3 featured projects, about me, hackathon achievements, and contact details."
        },
        {
          id: "task-4-3",
          title: "Craft a Clean 1-Page Technical Resume",
          topics: "Standard ATS-friendly templates (Jake's Resume / Overleaf LaTeX), action verbs, quantifying project impact (XYZ formula: Accomplished X, measured by Y, by doing Z)",
          whyItMatters: "Freshman resumes fail when filled with high-school fluff. Technical recruiters want to see projects, hackathon prototypes, and technical tools.",
          time: "5-7 hours",
          difficulty: "Beginner",
          resources: [
            { name: "Overleaf Jake's Resume LaTeX Template", url: "https://www.overleaf.com/latex/templates/jakes-resume/syzsqbzwxvdn", type: "Template" },
            { name: "Harvard Office of Career Services Resume Guide", url: "https://careerservices.fas.harvard.edu/resources/create-a-strong-resume/", type: "Guide" }
          ],
          exercise: "Draft your 1-page PDF technical resume highlighting your first-year projects, skills, hackathon experience, and education at Newton School of Technology."
        },
        {
          id: "task-4-4",
          title: "Apply for Student Developer Programs & Perks",
          topics: "GitHub Student Developer Pack (free cloud hosting, domain, JetBrains, copilot), Microsoft Learn Student Ambassador, Google Summer of Code (GSoC)",
          whyItMatters: "Offers thousands of dollars worth of free developer tools, cloud hosting credits, and global mentorship networks for college students.",
          time: "4-6 hours",
          difficulty: "Beginner",
          resources: [
            { name: "GitHub Student Developer Pack", url: "https://education.github.com/pack", type: "Benefits" },
            { name: "Google Summer of Code (GSoC) Student Guide", url: "https://google.github.io/gsocguides/student/", type: "Guide" },
            { name: "MLH Fellowship", url: "https://fellowship.mlh.io/", type: "Program" }
          ],
          exercise: "Submit your college ID to claim the GitHub Student Developer Pack and explore 3 tools (free domain, cloud credits, IDE licenses)."
        },
        {
          id: "task-4-5",
          title: "Technical Mock Interviews & Cold Outreach",
          topics: "Behavioral storytelling (STAR method), explaining your hackathon projects clearly, connecting with NST alumni and engineers on LinkedIn",
          whyItMatters: "Being able to articulate the technical tradeoffs you made during a hackathon is what turns interviews into offers.",
          time: "8-10 hours",
          difficulty: "Intermediate",
          resources: [
            { name: "Pramp (Free Peer Mock Interviews)", url: "https://www.pramp.com/", type: "Practice" },
            { name: "Tech Interview Handbook", url: "https://www.techinterviewhandbook.org/", type: "Guide" }
          ],
          exercise: "Conduct a 45-minute mock interview with a peer where you explain your hackathon project architecture and solve 1 easy algorithmic question on a whiteboard."
        }
      ]
    }
  ],

  learningResources: [
    {
      id: "res-python-cs50p",
      title: "CS50P: Harvard's Introduction to Programming with Python",
      category: "Python",
      author: "Prof. David J. Malan, Harvard University",
      description: "An exceptional, comprehensive introduction to Python for students with or without prior programming experience. Teaches functions, variables, conditionals, loops, exceptions, libraries, unit tests, file I/O, regular expressions, and object-oriented programming.",
      difficulty: "Beginner",
      estimatedTime: "9 Weeks (Self-paced, ~6 hrs/week)",
      language: "English (Captions in 15+ languages)",
      link: "https://cs50.harvard.edu/python/",
      isFree: true,
      costBadge: "100% Free & Verified",
      verifiedDate: "2026-10-25",
      tags: ["Python", "Fundamentals", "Harvard", "CS50", "Interactive Problem Sets"]
    },
    {
      id: "res-python-official",
      title: "Official Python 3 Documentation & Tutorial",
      category: "Python",
      author: "Python Software Foundation",
      description: "The authoritative, up-to-date guide and standard library documentation. The best habit for first-year engineers is learning to read official language docs.",
      difficulty: "Beginner to Advanced",
      estimatedTime: "Reference / Ongoing",
      language: "English (Multilingual docs)",
      link: "https://docs.python.org/3/tutorial/",
      isFree: true,
      costBadge: "100% Free & Verified",
      verifiedDate: "2026-10-24",
      tags: ["Python", "Official Docs", "Standard Library", "Syntax Reference"]
    },
    {
      id: "res-js-modern-info",
      title: "JavaScript.info - The Modern JavaScript Tutorial",
      category: "JavaScript",
      author: "Ilya Kantor & Open Source Community",
      description: "From the basics to advanced topics with simple, but detailed explanations. Covers everything from variables and data structures to closures, prototypes, async/await, and DOM manipulation.",
      difficulty: "Beginner to Intermediate",
      estimatedTime: "30-40 Hours",
      language: "English",
      link: "https://javascript.info/",
      isFree: true,
      costBadge: "100% Free & Verified",
      verifiedDate: "2026-10-22",
      tags: ["JavaScript", "ES6+", "Async/Await", "DOM", "Clean Code"]
    },
    {
      id: "res-web-mdn",
      title: "MDN Web Docs: Learn Web Development",
      category: "Web Development",
      author: "Mozilla Developer Network",
      description: "The industry standard learning platform for HTML, CSS, client-side APIs, and modern responsive layouts. High-quality interactive examples and browser compatibility tables.",
      difficulty: "Beginner to Intermediate",
      estimatedTime: "Self-Paced Guides",
      language: "English",
      link: "https://developer.mozilla.org/en-US/docs/Learn",
      isFree: true,
      costBadge: "100% Free & Verified",
      verifiedDate: "2026-10-24",
      tags: ["HTML5", "CSS3", "JavaScript", "MDN", "Web Standards"]
    },
    {
      id: "res-web-fcc-responsive",
      title: "freeCodeCamp: Responsive Web Design Certification",
      category: "Web Development",
      author: "freeCodeCamp Foundation",
      description: "300 hours of hands-on, browser-based coding challenges. Build 5 practical certification projects including a tribute page, survey form, product landing page, and portfolio.",
      difficulty: "Beginner",
      estimatedTime: "40-60 Hours",
      language: "English",
      link: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
      isFree: true,
      costBadge: "100% Free & Verified",
      verifiedDate: "2026-10-23",
      tags: ["CSS Grid", "Flexbox", "Responsive", "Certifications", "Hands-on"]
    },
    {
      id: "res-dsa-neetcode",
      title: "NeetCode: Algorithms & Data Structures Roadmap",
      category: "Data Structures & Algorithms",
      author: "NeetCode",
      description: "Structured visual roadmap covering Arrays, Two Pointers, Sliding Window, Trees, Graphs, and Dynamic Programming with clear LeetCode problem mappings and video walkthroughs.",
      difficulty: "Beginner to Advanced",
      estimatedTime: "3-4 Months",
      language: "English",
      link: "https://neetcode.io/roadmap",
      isFree: true,
      costBadge: "100% Free & Verified",
      verifiedDate: "2026-10-25",
      tags: ["DSA", "LeetCode", "Video Explanations", "Roadmap", "Interviews"]
    },
    {
      id: "res-dsa-striver",
      title: "Striver's A2Z DSA Course & Sheet",
      category: "Data Structures & Algorithms",
      author: "takeUforward (Raj Vikramaditya)",
      description: "Step-by-step curriculum starting from C++/Java basics and time complexity up to advanced graphs and tries. Highly popular among Indian college students.",
      difficulty: "Beginner to Advanced",
      estimatedTime: "3-6 Months",
      language: "English / Hinglish",
      link: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
      isFree: true,
      costBadge: "100% Free & Verified",
      verifiedDate: "2026-10-20",
      tags: ["DSA", "Competitive Programming", "C++", "Java", "Placements"]
    },
    {
      id: "res-git-skills",
      title: "GitHub Skills: Hands-on Interactive Courses",
      category: "Git & GitHub",
      author: "GitHub Education",
      description: "Learn Git and GitHub by building real repositories with immediate automated bot feedback. Covers markdown, pull requests, resolving merge conflicts, and GitHub Pages.",
      difficulty: "Beginner",
      estimatedTime: "3-5 Hours total",
      language: "English",
      link: "https://skills.github.com/",
      isFree: true,
      costBadge: "100% Free & Verified",
      verifiedDate: "2026-10-22",
      tags: ["Git", "GitHub", "Version Control", "Open Source", "Interactive"]
    },
    {
      id: "res-git-missing",
      title: "MIT The Missing Semester: Version Control (Git)",
      category: "Git & GitHub",
      author: "MIT CSAIL (Anish, Jon, Jose)",
      description: "Teaches the data model behind Git (directed acyclic graph of commits, snapshots, and references) so you never fear git commands again.",
      difficulty: "Beginner to Intermediate",
      estimatedTime: "2 Hours",
      language: "English",
      link: "https://missing.csail.mit.edu/2020/version-control/",
      isFree: true,
      costBadge: "100% Free & Verified",
      verifiedDate: "2026-10-21",
      tags: ["MIT", "Git Internals", "Command Line", "Developer Tools"]
    },
    {
      id: "res-ai-kaggle",
      title: "Kaggle Learn: Intro to Machine Learning & Python",
      category: "AI & Machine Learning",
      author: "Kaggle (Google)",
      description: "Bite-sized micro-courses with executable Jupyter notebooks. Learn data manipulation, training decision trees, random forests, and model validation in just a few hours.",
      difficulty: "Beginner",
      estimatedTime: "5 Hours",
      language: "English",
      link: "https://www.kaggle.com/learn",
      isFree: true,
      costBadge: "100% Free & Verified",
      verifiedDate: "2026-10-24",
      tags: ["Machine Learning", "Pandas", "Scikit-Learn", "Kaggle", "Data Science"]
    },
    {
      id: "res-ai-3blue1brown",
      title: "3Blue1Brown: Neural Networks Visual Series",
      category: "AI & Machine Learning",
      author: "Grant Sanderson",
      description: "The most beautiful visual intuition for deep learning, backpropagation, gradient descent, and linear algebra in the world.",
      difficulty: "Beginner to Intermediate",
      estimatedTime: "4 Hours",
      language: "English",
      link: "https://www.3blue1brown.com/topics/neural-networks",
      isFree: true,
      costBadge: "100% Free & Verified",
      verifiedDate: "2026-10-23",
      tags: ["Neural Networks", "Deep Learning", "Math Intuition", "Visual Animations"]
    },
    {
      id: "res-math-3b1b",
      title: "Essence of Linear Algebra",
      category: "Mathematics for Computer Science",
      author: "3Blue1Brown",
      description: "Geometric and visual understanding of matrices, vectors, dot and cross products, eigenvalues, and basis transforms fundamental for AI/ML and Computer Graphics.",
      difficulty: "Beginner to Intermediate",
      estimatedTime: "3.5 Hours",
      language: "English",
      link: "https://www.3blue1brown.com/topics/linear-algebra",
      isFree: true,
      costBadge: "100% Free & Verified",
      verifiedDate: "2026-10-22",
      tags: ["Linear Algebra", "Mathematics", "Vectors", "Matrices", "Visuals"]
    },
    {
      id: "res-hack-mlh-guide",
      title: "The Ultimate Hackathon Hacker Guide",
      category: "Hackathon Preparation",
      author: "Major League Hacking (MLH)",
      description: "Step-by-step blueprint on how hackathons work, packing lists, hacking safely, pitch strategies, working with API mentors, and demo day tactics.",
      difficulty: "Beginner",
      estimatedTime: "1-2 Hours",
      language: "English",
      link: "https://mlh.io/guide",
      isFree: true,
      costBadge: "100% Free & Verified",
      verifiedDate: "2026-10-25",
      tags: ["Hackathons", "Beginners", "Preparation", "Team Building", "Demo Day"]
    },
    {
      id: "res-resume-jake",
      title: "Jake's Resume Template (Overleaf LaTeX)",
      category: "Resume & Internship Preparation",
      author: "Jake Gutierrez & Open Source Community",
      description: "The most widely recognized, clean, ATS-compliant single-page resume template used by software engineers at top tech companies worldwide.",
      difficulty: "Beginner",
      estimatedTime: "2-3 Hours",
      language: "English",
      link: "https://www.overleaf.com/latex/templates/jakes-resume/syzsqbzwxvdn",
      isFree: true,
      costBadge: "100% Free & Verified",
      verifiedDate: "2026-10-23",
      tags: ["Resume", "LaTeX", "ATS-Friendly", "Career", "Internships"]
    },
    {
      id: "res-career-handbook",
      title: "Tech Interview Handbook by Yangshun Tay",
      category: "Resume & Internship Preparation",
      author: "Yangshun Tay (Meta Staff Engineer)",
      description: "Free curated guide for busy engineers: coding interview preparation, behavioral answers, resume tips, and negotiation guidelines for internships.",
      difficulty: "Beginner to Advanced",
      estimatedTime: "Ongoing reference",
      language: "English",
      link: "https://www.techinterviewhandbook.org/",
      isFree: true,
      costBadge: "100% Free & Verified",
      verifiedDate: "2026-10-24",
      tags: ["Interviews", "Behavioral", "Coding Prep", "Guides", "Best Practices"]
    }
  ],

  communityOpportunities: [
    {
      id: "opp-nst-genai",
      title: "NST Pune Generative AI & LLM Hands-on Workshop",
      category: "Technical Workshop",
      organizer: "Newton School of Technology AI Club",
      format: "In-Person",
      location: "Auditorium Hall B, NST Pune Campus",
      date: "2026-11-07",
      deadline: "2026-11-05",
      status: "Verified",
      description: "A 3-hour practical session for freshmen on building their first RAG (Retrieval Augmented Generation) pipeline with Python, LangChain, and open-source models.",
      link: "https://newtonschool.co",
      contact: "aiclub@newtonschool.co (Official Campus Rep)"
    },
    {
      id: "opp-gdg-pune-devfest",
      title: "GDG DevFest Pune 2026",
      category: "College Tech Event",
      organizer: "Google Developer Group Pune",
      format: "In-Person",
      location: "Pune, Maharashtra",
      date: "2026-11-29",
      deadline: "2026-11-15",
      status: "Verified",
      description: "Annual community-run tech conference bringing together 1,000+ developers, tech leaders, and students for sessions on Cloud, Android, Web, and AI.",
      link: "https://gdg.community.dev/gdg-pune/",
      contact: "organizers@gdgpune.dev"
    },
    {
      id: "opp-gsoc-2027",
      title: "Google Summer of Code (GSoC) 2027 Early Mentorship",
      category: "Open-Source Program",
      organizer: "Google Open Source",
      format: "Online",
      location: "Global Remote",
      date: "2027-02-20",
      deadline: "2027-03-15",
      status: "Verified",
      description: "A global, online program focused on bringing new contributors into open source software development. Mentorship stipend provided by Google.",
      link: "https://summerofcode.withgoogle.com",
      contact: "g.co/gsoc"
    },
    {
      id: "opp-codechef-starters",
      title: "CodeChef Starters Weekly Contest Series",
      category: "Coding Competition",
      organizer: "CodeChef",
      format: "Online",
      location: "CodeChef Platform",
      date: "Every Wednesday 08:00 PM IST",
      deadline: "Weekly",
      status: "Verified",
      description: "Tailored specially for college students (Div 4 / Div 3) to build problem-solving muscle and benchmark ranking among thousands of peers.",
      link: "https://www.codechef.com/contests",
      contact: "help@codechef.com"
    },
    {
      id: "opp-teammate-board-1",
      title: "Looking for 2 Teammates for Smart India Hackathon (SIH)",
      category: "Project Collaboration",
      organizer: "Shreya Sahi (NST 1st Year CS)",
      format: "Hybrid / Campus",
      location: "Newton School of Technology, Pune",
      date: "Forming Squad Now",
      deadline: "2026-11-04",
      status: "Verified",
      description: "Seeking 1 frontend developer (HTML/CSS/React) and 1 Python/ML enthusiast to build a smart civic grievance routing dashboard for SIH 2026.",
      link: "#submit-opportunity",
      contact: "shreya.sahi@student.newtonschool.co (Verified NST Student)"
    }
  ],

  toolkit: {
    guides: [
      {
        id: "guide-how-it-works",
        title: "How Hackathons Actually Work (The 24-48h Lifecycle)",
        icon: "⚡",
        summary: "Understand what happens from the opening ceremony to final judging so there are zero surprises.",
        content: `
### What is a Hackathon?
A hackathon is an invention marathon. Teams brainstorm an innovative solution to a problem statement, write code, build a minimum viable product (MVP), and present it to industry judges in 24 to 48 hours.

### The Typical Hackathon Timeline:
1. **Kickoff & Problem Reveal (Hour 0 - 2):** Organizers announce specific problem tracks and sponsor bounties. Mentors introduce themselves.
2. **Brainstorming & Scoping (Hour 2 - 4):** Teams agree on an idea, sketch the UI, divide roles, and initialize the GitHub repo.
3. **Core Development Sprint 1 (Hour 4 - 12):** Build the critical core functionality first. Do not waste time on login pages or edge cases.
4. **Mentor Review Round (Hour 12 - 16):** Industry mentors visit your desk/channel. Pay attention: their feedback often mirrors judge questions!
5. **Sprint 2 & Integration (Hour 16 - 20):** Connect the frontend to the backend or AI model. Test end-to-end user journeys.
6. **Code Freeze & Presentation Prep (Hour 20 - 23):** Stop coding new features! Polish the demo flow, record a backup video, and rehearse your 3-minute pitch.
7. **Expo & Live Judging (Hour 24+):** Deliver your pitch, answer judge inquiries, and demonstrate the working prototype.
        `
      },
      {
        id: "guide-find-teammates",
        title: "How to Find the Ideal First-Year Teammates",
        icon: "🤝",
        summary: "Assemble a balanced squad that complements your strengths instead of having 4 people fighting over the same file.",
        content: `
### The Ideal 4-Person Hackathon Squad:
- **The Frontend / UI Lead:** Builds clean, responsive screens, hooks up buttons, and ensures visual polish.
- **The Backend / AI Lead:** Handles the Python scripts, API endpoints, database, or LLM integrations.
- **The System Integrator / Data Lead:** Cleans datasets, handles external APIs, and tests the end-to-end logic.
- **The Pitcher / Product Lead:** Validates user pain points, builds the slide deck, and delivers a compelling, charismatic demo.

### Where to Find Teammates at NST Pune:
- **Campus Slack / Discord / WhatsApp Groups:** Post your skills, what project idea excites you, and what role you're looking to fill.
- **Pre-Hackathon Team Mixer Rooms:** Most hackathons host dedicated Discord channels like #find-a-team.
- **The Rule of Complimentary Skills:** Never form a team of 4 pure frontend devs or 4 pure machine learning devs. Diversity in skillset wins hackathons.
        `
      },
      {
        id: "guide-select-problem",
        title: "How to Select a Winning Problem Statement",
        icon: "🎯",
        summary: "Pick a problem that is feasible in 24 hours, solves real pain, and stands out to judges.",
        content: `
### The Problem Selection Matrix:
1. **Real-World Pain Point:** Does this problem affect real humans today? (e.g., student hostel mess waste, local clinic appointment queues, rural crop disease).
2. **Feasibility in 24 Hours:** Can a functional proof of concept be demonstrated live without waiting for 10,000 real users?
3. **The 'Wow' Factor / Demo Moment:** Is there a clear moment in your demo where the judge says "That is really clever!"?

### Common Rookie Traps to Avoid:
- ❌ Building another generic E-commerce store or clone of Instagram.
- ❌ Trying to train a foundation LLM from scratch in 24 hours.
- ❌ Spending 6 hours deciding what to build instead of locking in an idea by Hour 3.
        `
      },
      {
        id: "guide-build-mvp",
        title: "Building an MVP in 24 Hours Without Over-engineering",
        icon: "🛠️",
        summary: "Ship what matters. Strip out vanity features and focus on the primary user journey.",
        content: `
### The 80/20 Rule for Hackathons:
80% of judge scores come from:
1. A clear problem statement.
2. A working prototype demonstrating the core value proposition.
3. A confident explanation of impact and scalability.

### What to Cut from your MVP:
- 🚫 Complex multi-factor authentication (hardcode a simple user session or pass mock auth).
- 🚫 Extensive admin settings panels that nobody will click during a 3-minute demo.
- 🚫 Pixel-perfect responsiveness on 20 different screen sizes (optimize for the laptop screen you are presenting on).
        `
      },
      {
        id: "guide-pitch-presentation",
        title: "How to Deliver a Winning 3-Minute Pitch & Demo",
        icon: "🎤",
        summary: "Judges evaluate dozens of projects. The team with the best story and clear demo wins.",
        content: `
### The Winning 3-Minute Pitch Formula:
- **0:00 - 0:30 | The Hook & Problem:** Tell a quick relatable story. "Meet Rahul, a first-year student who spends 4 hours every week searching across 15 websites for college hackathons..."
- **0:30 - 1:00 | The Solution & Architecture:** "We built CampusLaunch. Here is how our intelligent recommendation engine matches students to verified opportunities."
- **1:00 - 2:15 | The Live Product Demo:** Walk through the primary happy path. Show the UI, click the key buttons, show real output.
- **2:15 - 2:45 | Tech Stack, Challenges & Learnings:** Highlight what you built during the hackathon and how you overcame a real technical bug.
- **2:45 - 3:00 | Future Roadmap & Closing:** Mention potential monetization, campus adoption, and thank the judges.
        `
      }
    ],

    worksheets: [
      {
        id: "ws-team-formation",
        title: "Hackathon Team Formation Worksheet",
        type: "Checklist & Role Allocator",
        items: [
          { label: "Designated Team Captain / Communicator", desc: "Responsible for submitting forms on time and speaking with mentors." },
          { label: "Frontend / UI Developer", desc: "Responsible for screens, forms, responsive display, and visual polish." },
          { label: "Backend / API Developer", desc: "Responsible for data processing, server logic, or ML integration." },
          { label: "Product & Presentation Specialist", desc: "Responsible for slide deck, problem validation, and timekeeping." },
          { label: "GitHub Shared Repository Created", desc: "All members invited as collaborators with write access." },
          { label: "Emergency Communication Channel", desc: "WhatsApp/Telegram group with active phone numbers for midnight syncs." }
        ]
      },
      {
        id: "ws-idea-validation",
        title: "Idea Validation & Feasibility Worksheet",
        type: "Scoring Matrix",
        questions: [
          "Who is the exact user that will use this product within 5 minutes of release?",
          "What is the single most compelling feature that solves their #1 headache?",
          "Can we build a realistic mockup or working demo of this feature by tomorrow morning?",
          "Does our solution make clever use of at least one sponsor technology or API?",
          "If our live API goes down or wifi fails, do we have offline mock data ready for the demo?"
        ]
      },
      {
        id: "ws-pitch-deck",
        title: "The Ultimate 5-Slide Winning Pitch Deck Outline",
        type: "Slide Blueprint",
        slides: [
          { slide: "Slide 1: Title & One-Liner", content: "Catchy project name, one-sentence punchy description, team member names & university." },
          { slide: "Slide 2: The Urgent Problem", content: "Real pain point backed by 1-2 relatable statistics or student anecdotes." },
          { slide: "Slide 3: Our Solution (The Secret Sauce)", content: "High-level value proposition and system architecture flow diagram." },
          { slide: "Slide 4: Live Demo Screen / Video Backup", content: "Embedded video link or immediate transition to live browser demonstration." },
          { slide: "Slide 5: Business Impact, Tech Stack & Roadmap", content: "Tech stack badges, future phases, and closing gratitude." }
        ]
      }
    ]
  }
};

// Freeze data to prevent accidental runtime mutation
if (typeof Object.freeze === 'function') {
  Object.freeze(CAMPUS_LAUNCH_DATA);
}
