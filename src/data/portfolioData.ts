import type { Project, SkillCategory, ExperienceItem, EducationItem, AchievementItem } from '../types/portfolio';

export const personalInfo = {
  name: "Sahil Rane",
  roleTitle: "Software Developer | .NET Developer | AI Enthusiast",
  headline: "Building Software Solutions with .NET, Python & AI",
  shortBio: "Information Technology graduate (2025) with hands-on experience across full-stack development with C#/.NET Core, Python automation, and modern agentic AI architectures. Focused on engineering scalable backend APIs, reliable data layers, and pragmatic AI applications.",
  email: "ranesahil555@gmail.com",
  github: "https://github.com/Sahil860534",
  // Clearly marked for easy updating:
  linkedin: "https://linkedin.com/in/sahil-rane", // [NOTE: Replace with your exact LinkedIn username URL]
  location: "Pune, Maharashtra, India",
  college: "Shri Kashibai Navale College of Engineering, Pune",
  degree: "Bachelor of Engineering in Information Technology (2025)",
  availability: "Available for Full-Time Roles (Open to Relocate)",
  resumeFileName: "Sahil_Rane_Resume.pdf", // Place your resume PDF in the /public folder
};

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend Development",
    icon: "Server",
    description: "Architecting modular, secure, and high-performance Web APIs and business logic.",
    skills: [
      { name: "ASP.NET Core Web API", levelBadge: "Core" },
      { name: "Entity Framework Core", levelBadge: "ORM" },
      { name: "ADO.NET", levelBadge: "Data" },
      { name: "REST APIs", levelBadge: "Architecture" },
      { name: "Dependency Injection", levelBadge: "Design Pattern" },
      { name: "LINQ", levelBadge: "Querying" }
    ]
  },
  {
    id: "programming",
    title: "Programming Languages",
    icon: "Code2",
    description: "Strong foundation in typed OOP, scripting, and declarative query languages.",
    skills: [
      { name: "C#", levelBadge: "Primary" },
      { name: "Python", levelBadge: "Primary" },
      { name: "JavaScript", levelBadge: "ES6+" },
      { name: "SQL", levelBadge: "RDBMS" }
    ]
  },
  {
    id: "ai",
    title: "AI & Automation",
    icon: "Bot",
    description: "Building production-aware agentic workflows, RAG systems, and structured LLM outputs.",
    skills: [
      { name: "LLMs & APIs", levelBadge: "Integration" },
      { name: "LangGraph", levelBadge: "Multi-Agent" },
      { name: "LangChain", levelBadge: "Framework" },
      { name: "Prompt Engineering", levelBadge: "Guardrails" },
      { name: "ChromaDB RAG", levelBadge: "Vector Store" },
      { name: "Autonomous Agents", levelBadge: "Reflection" }
    ]
  },
  {
    id: "databases",
    title: "Databases & Storage",
    icon: "Database",
    description: "Relational modeling, indexing, schema optimization, and NoSQL stores.",
    skills: [
      { name: "SQL Server (T-SQL)", levelBadge: "Enterprise" },
      { name: "MySQL", levelBadge: "Relational" },
      { name: "MongoDB", levelBadge: "Document" },
      { name: "SQLite", levelBadge: "Embedded" }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: "Layout",
    description: "Developing responsive, accessible, and interactive component-driven interfaces.",
    skills: [
      { name: "React.js", levelBadge: "SPA" },
      { name: "HTML5", levelBadge: "Semantic" },
      { name: "CSS3 / Tailwind CSS", levelBadge: "Styling" },
      { name: "Responsive Design", levelBadge: "Mobile-First" }
    ]
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    icon: "Wrench",
    description: "Version control, containerization basics, API documentation, and debugging.",
    skills: [
      { name: "Git & GitHub", levelBadge: "VCS" },
      { name: "Docker", levelBadge: "Containers" },
      { name: "Swagger / OpenAPI", levelBadge: "API Docs" },
      { name: "Kubernetes (Basics)", levelBadge: "Orchestration" },
      { name: "Visual Studio & VS Code", levelBadge: "IDE" },
      { name: "Postman", levelBadge: "Testing" }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "ai-job-copilot",
    title: "AI Job Application Copilot",
    tagline: "Autonomous Multi-Agent System with LangGraph, ChromaDB RAG & Reflection Loops",
    category: "AI & LLMs",
    shortDescription: "A multi-agent AI system that analyzes job descriptions, retrieves verified candidate experience via ChromaDB RAG, drafts STAR-methodology resume bullets and cover letters, and validates outputs using a cyclic reflection loop.",
    problem: "Tailoring application materials to dense job descriptions is tedious and prone to generic clichés. Standard LLM prompts frequently hallucinate skills or fabricate achievements that cannot be verified.",
    solution: "Architected a LangGraph state machine featuring 4 specialized agents (Analyzer, Matcher, Writer, and Critic). Experience chunks are indexed into ChromaDB for factual grounding. A self-correcting reflection loop audits claims for faithfulness before human approval.",
    technologies: ["Python", "LangGraph", "ChromaDB", "Pydantic v2", "Streamlit", "SQLite"],
    keyFeatures: [
      "Multi-agent StateGraph coordinating typed state transitions across agents",
      "Semantic similarity search via ChromaDB vector embeddings for factual grounding",
      "Cyclic reflection loop between Writer and Critic agents to eliminate hallucinations",
      "Human-in-the-Loop review checkpoint before committing applications to database",
      "SQLite tracking database for application lifecycle (Saved, Applied, Interview)",
      "Quantitative benchmark suite evaluating Faithfulness, Keyword Recall, and STAR compliance"
    ],
    myContribution: [
      "Engineered the complete LangGraph cyclical workflow and state machine in Python",
      "Implemented ChromaDB vector indexing and retrieval for candidate experience chunks",
      "Defined strict Pydantic v2 schemas for deterministic JSON outputs without hallucinations",
      "Created an interactive Streamlit UI with human review and revision capabilities"
    ],
    challengesAndLearnings: [
      "Balancing agent autonomy with deterministic outputs by utilizing strict schema validation",
      "Fine-tuning critic prompt thresholds to prevent infinite reflection loops",
      "Handling state persistence across user pauses using checkpointing mechanisms"
    ],
    githubUrl: "https://github.com/Sahil860534/ai-job-copilot", // Live GitHub repo!
    featured: true,
    architectureHighlights: [
      "Analyzer Agent: Structured skill & requirement extraction",
      "Matcher Agent: ChromaDB semantic similarity score",
      "Writer Agent: STAR-format bullet formulation",
      "Critic Agent: Hallucination & keyword audit loop",
      "HITL Review Gate: Human candidate approval checkpoint"
    ]
  },
  {
    id: "beast-assistant",
    title: "Intelligent Virtual Assistant (BEAST)",
    tagline: "Voice & Text Driven Desktop Intelligence with NLP & SQL Integration",
    category: "AI & LLMs",
    shortDescription: "An intelligent conversational assistant designed to process natural language voice and text commands, automate routine computer tasks, manage reminders, and query stored operational records in SQL.",
    problem: "Developers and workstation users lose productivity constantly switching context for routine tasks, searching files, querying local databases, or setting task reminders manually.",
    solution: "Engineered an extensible desktop assistant engine in Python combining NLP intent classification, text-to-speech feedback, SQL database logging, and direct system automation hooks.",
    technologies: ["Python", "NLP", "Speech Recognition", "pyttsx3", "SQL / SQLite", "System APIs"],
    keyFeatures: [
      "Dual voice and text input channels with conversational audio feedback",
      "Natural language intent parser routing commands to modular handler functions",
      "SQL database integration for logging activity, reminders, and historical queries",
      "System automation tools for app launching, web searches, and quick notes",
      "Configurable offline mode with local speech synthesis"
    ],
    myContribution: [
      "Developed the core command execution dispatcher and NLP intent matching logic",
      "Designed the relational SQL schema for command history and reminder schedules",
      "Integrated microphone audio capture with noise threshold cancellation and TTS output"
    ],
    challengesAndLearnings: [
      "Tuning ambient audio thresholds to minimize false trigger words",
      "Structuring modular intent handlers to make adding new command skills seamless",
      "Safely sanitizing natural language inputs before translating them into SQL queries"
    ],
    githubUrl: "https://github.com/Sahil860534/BEAST-Virtual-Assistant", // [NOTE: Replace with your exact repository link]
    featured: true
  },
  {
    id: "film-script-flow",
    title: "Film Script Flow — Unfiltered Creativity",
    tagline: "AI-Powered Screenplay & Story Development Platform Powered by LLaMA",
    category: "AI & LLMs",
    shortDescription: "An AI-powered creative writing copilot utilizing a LLaMA model and structured prompt pipelines to assist writers with scene breakdowns, character arcs, dialogue drafting, and screenplay formatting.",
    problem: "Screenwriters and creators face creative bottlenecks when trying to flesh out scene beats, maintain consistent character voices, or format standard screenplay scripts quickly.",
    solution: "Built a specialized creative studio application integrating LLaMA LLM endpoints with context-aware prompts tuned specifically for narrative pacing, dramatic tension, and industry screenplay standards.",
    technologies: ["Python", "LLaMA API", "Prompt Engineering", "Streamlit", "JSON State"],
    keyFeatures: [
      "Multi-stage screenplay generation: Logline -> Synopsis -> Beat Sheet -> Scene Dialogue",
      "Character persona memory preserving individual voices and emotional stakes",
      "Scene re-writing tools to adjust tone (e.g. comedic, noir, high-tension, dramatic)",
      "Standard screenplay format export preview"
    ],
    myContribution: [
      "Engineered multi-turn prompt templates with few-shot industry screenplay examples",
      "Implemented API connectivity and response streaming with rate limit handling",
      "Designed the interactive UI for character profiles and scene flow management"
    ],
    challengesAndLearnings: [
      "Maintaining long-context story consistency across multiple dialogue exchanges",
      "Formatting raw LLM outputs reliably into standardized screenplay indentation"
    ],
    githubUrl: "https://github.com/Sahil860534/FilmScriptFlow", // [NOTE: Replace with your exact repository link]
    featured: true
  },
  {
    id: "market-pulse",
    title: "Market Pulse — Property Cost Estimation",
    tagline: "Real Estate Valuation Platform with Python Prediction & MySQL Storage",
    category: "Web Applications",
    shortDescription: "An end-to-end property pricing estimation web application that enables buyers and real estate agents to forecast property rates based on location parameters, square footage, and historical records.",
    problem: "Prospective home buyers and property investors lack immediate, transparent cost estimates tailored to specific urban zones, leading to pricing confusion.",
    solution: "Created an intuitive web application backed by a Python estimation service and MySQL database storing verified property records, locality weights, and historical sale averages.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Python", "MySQL", "REST Endpoints"],
    keyFeatures: [
      "Interactive property evaluation calculator with location dropdowns and property attributes",
      "Python mathematical regression/estimation module calculating realistic market price ranges",
      "MySQL database storing property listings, area coefficients, and user search history",
      "Responsive front-end dashboard with comparative cost breakdown visualizations"
    ],
    myContribution: [
      "Designed and normalized MySQL tables for property features, localities, and pricing tiers",
      "Built the client-side form controls and asynchronous fetch requests to backend endpoints",
      "Implemented the Python prediction logic connecting database weights to input metrics"
    ],
    challengesAndLearnings: [
      "Cleaning and normalizing disparate location data to ensure reliable predictions",
      "Connecting a Python algorithmic layer smoothly with traditional web front-end requests"
    ],
    githubUrl: "https://github.com/Sahil860534/Market-Pulse-Property-Estimator", // [NOTE: Replace with your exact repository link]
    featured: false
  },
  {
    id: "auto-ease-hub",
    title: "Auto-Ease Hub",
    tagline: "Comprehensive Vehicle Rental, Purchase & Test-Drive Scheduling Portal",
    category: "Web Applications",
    shortDescription: "A full-fledged automotive dealership portal supporting vehicle rentals with date-range selection, test-drive booking schedules, inventory discovery, and purchase inquiries.",
    problem: "Dealerships often operate with fragmented systems for test drives, rental reservations, and direct sales, frustrating customers and causing administrative overhead.",
    solution: "Developed an all-in-one web portal with role-based access, inventory search with dynamic filters, real-time slot booking for test-drives, and rental date conflict validation.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    keyFeatures: [
      "Comprehensive vehicle catalog with filtering by brand, fuel type, transmission, and price",
      "Test-drive scheduling calendar preventing double-booking of available demo cars",
      "Rental cost calculator computing fees based on daily rates and requested date spans",
      "Administrative dashboard for inventory management and customer booking status tracking"
    ],
    myContribution: [
      "Architected the complete MySQL database schema for vehicles, customers, bookings, and rentals",
      "Built server-side validation, session authentication, and SQL query parameterization",
      "Created the client-side interactive booking forms with date validation logic"
    ],
    challengesAndLearnings: [
      "Designing relational constraints to prevent overlapping rental dates for the same vehicle ID",
      "Securing user input against SQL injection and cross-site scripting vulnerabilities"
    ],
    githubUrl: "https://github.com/Sahil860534/Auto-Ease-Hub", // [NOTE: Replace with your exact repository link]
    featured: false
  }
];

export const experienceTimeline: ExperienceItem[] = [
  {
    id: "hyper-serve",
    role: "Research & Development Intern",
    company: "Hyper Serve AI Solutions",
    type: "Internship",
    period: "2024 - 2025",
    location: "Pune, India",
    description: "Engaged in hands-on research and prototyping of next-generation autonomous AI workflows and enterprise agent architectures.",
    achievements: [
      "Researched multi-agent orchestration frameworks including LangGraph and LangChain for structured business workflows",
      "Designed and tested cyclic reflection loops to audit LLM responses and minimize hallucination in domain-specific tasks",
      "Integrated vector embeddings and retrieval-augmented generation (RAG) pipelines for grounding knowledge retrieval"
    ],
    skillsGained: ["Agentic AI", "LangGraph", "LangChain", "Vector Databases", "Prompt Engineering", "Python"]
  },
  {
    id: "revature",
    role: ".NET Full Stack Developer Trainee",
    company: "Revature",
    type: "Training",
    period: "2024",
    location: "India",
    description: "Completed intensive, enterprise-grade software engineering training focusing on modern Microsoft technologies, clean backend architectures, and database design.",
    achievements: [
      "Trained in C#, Object-Oriented Programming (OOP) principles, SOLID design, and data structures",
      "Engineered RESTful services using ASP.NET Core Web API with dependency injection and middleware configuration",
      "Developed data access layers using Entity Framework Core (Code-First & Database-First) and ADO.NET with SQL Server",
      "Participated in agile sprints, team code reviews, and API testing using Swagger and Postman"
    ],
    skillsGained: ["C#", "ASP.NET Core Web API", "Entity Framework Core", "SQL Server", "REST APIs", "ADO.NET", "LINQ"]
  },
  {
    id: "ibm-skillsbuild",
    role: "AI & Cloud Project Trainee",
    company: "IBM SkillsBuild",
    type: "Project Trainee",
    period: "2023 - 2024",
    location: "Online / Pune",
    description: "Participated in an immersive technical training program covering artificial intelligence fundamentals, natural language processing, and cloud solutions.",
    achievements: [
      "Studied core natural language processing techniques, intent classification, and conversational UI design",
      "Developed and delivered the Intelligent Virtual Assistant project as a practical milestone application",
      "Explored cloud deployment concepts and modern containerization principles"
    ],
    skillsGained: ["NLP", "Python", "Conversational AI", "Cloud Concepts", "Database Queries"]
  },
  {
    id: "shree-industries",
    role: "Frontend Development Intern",
    company: "Shree Industries",
    type: "Internship",
    period: "2023",
    location: "Pune, India",
    description: "Contributed to front-end development, creating responsive web pages and reusable client UI components.",
    achievements: [
      "Developed modular UI components using React.js, HTML5, and CSS3 according to design specifications",
      "Collaborated with senior developers to integrate REST API endpoints and handle dynamic state rendering",
      "Ensured cross-browser compatibility and optimized mobile responsiveness across handheld screens"
    ],
    skillsGained: ["React.js", "JavaScript", "HTML5", "CSS3", "UI/UX Best Practices", "Git"]
  }
];

export const educationData: EducationItem = {
  degree: "Bachelor of Engineering in Information Technology",
  institution: "Shri Kashibai Navale College of Engineering",
  location: "Pune, Maharashtra, India",
  year: "Graduated: 2025",
  status: "Completed (2021 – 2025)",
  highlights: [
    "Affiliated with Savitribai Phule Pune University (SPPU)",
    "Consistent academic focus across core computer science & information technology disciplines",
    "Active participant in technical symposiums, engineering hackathons, and software clubs"
  ],
  relevantCoursework: [
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Object-Oriented Programming (OOP)",
    "Computer Networks & Security",
    "Software Engineering & Agile",
    "Cloud Computing & Web Technologies"
  ]
};

export const achievementsData: AchievementItem[] = [
  {
    id: "hackathon",
    title: "Engineering Hackathon Participation",
    category: "Hackathon",
    description: "Collaborated in high-intensity engineering hackathons, developing practical software prototypes and pitching algorithmic solutions under strict time constraints.",
    icon: "Trophy"
  },
  {
    id: "continuous-upskilling",
    title: "Continuous Technical Upskilling & Hands-on Projects",
    category: "Upskilling",
    description: "Committed to ongoing hands-on learning across modern tech ecosystems—from C#/.NET Core enterprise patterns to multi-agent LangGraph architectures and containerization.",
    icon: "Award"
  },
  {
    id: "cricket-teamwork",
    title: "Cricket & Sportsmanship",
    category: "Interests",
    description: "Passionate cricket enthusiast. Active participation has instilled strong teamwork, strategic adaptability under pressure, and disciplined collaborative execution.",
    icon: "Target"
  }
];
