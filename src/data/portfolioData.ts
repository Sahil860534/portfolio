import type { Project, SkillGroup, ExperienceItem, EducationItem } from '../types/portfolio';

export const personalInfo = {
  name: "Sahil Rane",
  roleTitle: "Fresher Software Developer | .NET & Python",
  headline: "Aspiring Software Developer passionate about .NET, Python & AI",
  shortBio: "Recent 2025 B.E. in Information Technology graduate from Pune with hands-on project experience in ASP.NET Core Web API, C#, Python, and applied AI tools. Looking for an entry-level Software Developer, .NET Developer, or Python Developer role.",
  email: "ranesahil555@gmail.com",
  github: "https://github.com/Sahil860534",
  linkedin: "https://linkedin.com/in/sahil-rane", // [NOTE: Update with your exact LinkedIn handle]
  location: "Pune, Maharashtra, India",
  college: "Shri Kashibai Navale College of Engineering, Pune",
  degree: "B.E. in Information Technology (2021 – 2025)",
  status: "Immediate Joiner (2025 Batch)",
  resumeFileName: "Sahil_Rane_Resume.pdf",
};

export const skillsData: SkillGroup[] = [
  {
    title: "Programming Languages",
    skills: ["C#", "Python", "SQL", "JavaScript"]
  },
  {
    title: "Backend & .NET",
    skills: ["ASP.NET Core Web API", "Entity Framework Core", "RESTful APIs", "ADO.NET", "LINQ"]
  },
  {
    title: "Databases",
    skills: ["SQL Server (T-SQL)", "MySQL", "SQLite", "MongoDB"]
  },
  {
    title: "AI & Modern Tools",
    skills: ["LangGraph", "ChromaDB RAG", "Python LLM APIs", "LangChain"]
  },
  {
    title: "Frontend Basics",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    title: "Tools & Workflow",
    skills: ["Git & GitHub", "Docker (Basics)", "Swagger", "Postman", "VS Code"]
  }
];

export const projectsData: Project[] = [
  {
    id: "invoice-management",
    title: "Invoice Management System (InvoiceOS)",
    tagline: "Full-Stack Invoice & Payment Platform with ASP.NET Core 8 & React",
    category: "Full Stack & .NET",
    shortDescription: "A full-stack web application designed to manage business invoices, payment tracking (partial/full), dynamic line items, and analytics with role-based security.",
    problem: "Small businesses and freelance contractors frequently struggle to track invoices, calculate tax/totals reliably, and record payment histories across scattered spreadsheets.",
    solution: "Developed a clean ASP.NET Core 8 REST API backend connected to SQL Server using Entity Framework Core, integrated with a responsive React frontend and JWT role-based authentication.",
    technologies: ["C#", "ASP.NET Core 8", "React", "SQL Server", "Entity Framework Core", "JWT Auth", "REST API", "Tailwind CSS"],
    keyFeatures: [
      "Full CRUD operations for invoices with line-item tax and total calculation",
      "Partial and full payment recording with complete payment history logs",
      "JWT-based user authentication and Role-Based Access Control (RBAC)",
      "Dashboard analytics displaying revenue summaries and invoice status (Paid, Pending, Overdue)"
    ],
    myContribution: [
      "Built the backend Web API controllers, service layers, and DTO validations in C#",
      "Configured Entity Framework Core code-first models, migrations, and relationships in SQL Server",
      "Developed the React frontend pages for creating invoices, recording payments, and viewing status"
    ],
    githubUrl: "https://github.com/Sahil860534/P2_Invoice_Management",
    featured: true,
    isLiveGithub: true
  },
  {
    id: "ai-job-copilot",
    title: "AI Job Application Copilot",
    tagline: "Multi-Agent Application Assistant with LangGraph & ChromaDB RAG",
    category: "Python & AI",
    shortDescription: "A Python multi-agent assistant that analyzes job descriptions, searches candidate experiences using ChromaDB vector search, and drafts grounded STAR resume bullets.",
    problem: "Tailoring resumes to match job descriptions is repetitive, and generic AI prompts often hallucinate unverified skills that don't match the candidate's actual background.",
    solution: "Created an autonomous multi-agent workflow using LangGraph that retrieves verified experience chunks from ChromaDB and audits draft bullets through a critic reflection loop.",
    technologies: ["Python", "LangGraph", "ChromaDB", "Streamlit", "Pydantic v2", "SQLite"],
    keyFeatures: [
      "LangGraph StateGraph coordinating Analyzer, Matcher, Writer, and Critic agents",
      "ChromaDB semantic search for grounding all generated bullet points in real experience",
      "Critic reflection loop to verify claims and prevent hallucinations",
      "Human-in-the-Loop review checkpoint with Streamlit UI and SQLite persistence"
    ],
    myContribution: [
      "Implemented the LangGraph state transitions and agent prompt pipelines in Python",
      "Integrated ChromaDB vector store for chunking and semantic retrieval of resume points",
      "Created an interactive Streamlit interface allowing users to review and approve drafted content"
    ],
    githubUrl: "https://github.com/Sahil860534/ai-job-copilot",
    featured: true,
    isLiveGithub: true
  },
  {
    id: "beast-assistant",
    title: "Intelligent Virtual Assistant (BEAST)",
    tagline: "Voice & Text Desktop Assistant with NLP & SQL Logging",
    category: "Python & AI",
    shortDescription: "A Python desktop assistant that takes natural language voice and text commands to automate routine computer tasks and log queries in a local database.",
    problem: "Repetitive desktop actions like opening applications, searching local notes, or managing quick reminders require frequent manual context switching.",
    solution: "Built a modular Python desktop assistant combining speech recognition, intent matching, speech synthesis, and SQLite database logging.",
    technologies: ["Python", "Speech Recognition", "pyttsx3", "SQLite", "NLP Basics"],
    keyFeatures: [
      "Voice and text command input with natural speech synthesis responses",
      "Intent parser dispatching commands to specific system automation modules",
      "SQLite database to maintain command history, reminders, and activity logs"
    ],
    myContribution: [
      "Developed the command execution dispatcher and keyword/intent matching logic in Python",
      "Designed the SQLite database schema for storing user tasks, notes, and command history"
    ],
    githubUrl: "https://github.com/Sahil860534", // [Replace with specific repo if pushed separately]
    featured: false,
    isLiveGithub: false
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "revature",
    role: ".NET Full Stack Developer Trainee",
    company: "Revature",
    type: "Training",
    period: "2024",
    description: "Intensive training program focused on enterprise software development using C#, ASP.NET Core, and Microsoft technologies.",
    highlights: [
      "Trained in C#, Object-Oriented Programming (OOP) concepts, and REST API development",
      "Built backend data layers using ASP.NET Core Web API, Entity Framework Core, and SQL Server",
      "Practiced database querying, LINQ, and unit testing basics in an agile team setup"
    ],
    technologies: ["C#", "ASP.NET Core", "Entity Framework Core", "SQL Server", "REST APIs"]
  },
  {
    id: "ibm-skillsbuild",
    role: "AI & Cloud Project Trainee",
    company: "IBM SkillsBuild",
    type: "Training",
    period: "2023 - 2024",
    description: "Foundational training covering artificial intelligence concepts, cloud fundamentals, and practical Python project implementation.",
    highlights: [
      "Learned core concepts of natural language processing and conversational assistants",
      "Built the Intelligent Virtual Assistant project as a practical milestone"
    ],
    technologies: ["Python", "NLP Basics", "Cloud Fundamentals", "SQLite"]
  }
];

export const educationData: EducationItem = {
  degree: "Bachelor of Engineering in Information Technology",
  institution: "Shri Kashibai Navale College of Engineering (SKNCOE)",
  location: "Pune, Maharashtra, India",
  period: "2021 – 2025 (Graduated)",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Object-Oriented Programming (OOP)",
    "Computer Networks",
    "Software Engineering"
  ]
};
