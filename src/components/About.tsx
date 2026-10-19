import React from 'react';
import { 
  GraduationCap, 
  Server, 
  Cpu, 
  CheckCircle, 
  Briefcase, 
  Sparkles 
} from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      subtitle: "B.E. Information Technology",
      description: "Shri Kashibai Navale College of Engineering, Pune (Graduated 2025)",
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      icon: Server,
      title: "Backend Focus",
      subtitle: ".NET & Python Core",
      description: "ASP.NET Core Web APIs, Entity Framework, ADO.NET, and Python scripts",
      color: "text-indigo-500",
      bg: "bg-indigo-500/10"
    },
    {
      icon: Cpu,
      title: "AI Workflows",
      subtitle: "Multi-Agent & RAG",
      description: "LangGraph orchestration, ChromaDB vector indexing, and reflection loops",
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
    {
      icon: Briefcase,
      title: "Practical Experience",
      subtitle: "Trainings & Internships",
      description: "Revature (.NET), Hyper Serve AI (R&D), IBM SkillsBuild, Shree Industries",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    }
  ];

  const coreStrengths = [
    {
      title: "Clean API Architecture",
      desc: "Structured separation of concerns with Controller-Service-Repository patterns, dependency injection, and clean DTO validation."
    },
    {
      title: "Deterministic AI Workflows",
      desc: "Designing RAG pipelines and Pydantic schemas that constrain LLM creativity, strictly preventing hallucinated answers in production."
    },
    {
      title: "Relational & Document Data Modeling",
      desc: "Practical hands-on database modeling in SQL Server, MySQL, and SQLite with query optimization and Entity Framework ORM."
    },
    {
      title: "Curious & Adaptive Mindset",
      desc: "Strong aptitude for rapidly learning enterprise frameworks, reading official documentation, and tackling complex debugging problems."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
          <Sparkles className="w-3.5 h-3.5" />
          <span>About Sahil Rane</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Engineered for Clean Code & Practical Innovation
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
          A look into my academic background, technical focus areas, and development philosophy.
        </p>
      </div>

      {/* Main Grid: Narrative + Highlight Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Narrative Story */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="glass-card p-6 sm:p-8 rounded-2xl space-y-5">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
              <span>Who I Am</span>
            </h3>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              I am a 2025 graduate with a <strong>Bachelor of Engineering in Information Technology</strong> from{' '}
              <strong>Shri Kashibai Navale College of Engineering, Pune</strong>. During my academic journey and practical 
              training programs, I developed a strong passion for backend systems, web development, and applied artificial intelligence.
            </p>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              My technical foundation centers around <strong>C# and ASP.NET Core</strong> for building robust REST APIs and data access layers, 
              paired with <strong>Python</strong> for automated tasks and modern AI pipelines. Through immersive training at 
              <strong> Revature</strong> and hands-on AI research at <strong>Hyper Serve AI Solutions</strong>, I have worked with multi-agent orchestration, 
              vector search (ChromaDB), and structured prompt architectures.
            </p>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              As an entry-level software engineer, I bring relentless curiosity, an analytical problem-solving approach, and an eagerness 
              to contribute to high-impact engineering teams building scalable software solutions.
            </p>

            {/* Core Competency Chips */}
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
              <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-3">
                Core Competencies:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "ASP.NET Core",
                  "C# OOP",
                  "Python",
                  "LangGraph RAG",
                  "SQL Server",
                  "Entity Framework",
                  "RESTful Web APIs",
                  "React.js",
                  "Git Workflow"
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Development Philosophy / Strengths */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coreStrengths.map((item, idx) => (
              <div
                key={idx}
                className="glass-card p-4 sm:p-5 rounded-xl border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between space-y-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 4 Key Pillar Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-card p-5 rounded-2xl hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-200 text-left flex items-start gap-4 group"
              >
                <div className={`p-3 rounded-xl ${item.bg} ${item.color} shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    {item.title}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.subtitle}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
