import React, { useEffect } from 'react';
import { X, Printer, FileText, Mail, MapPin } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo, experienceTimeline, educationData, projectsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 text-left max-h-[92vh] flex flex-col">
        {/* Header Controls */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 id="resume-modal-title" className="text-base font-bold text-slate-900 dark:text-white">
                Sahil Rane — Curriculum Vitae
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                ATS-Optimized Developer Resume Summary
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-200/80 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document */}
        <div className="p-6 sm:p-10 space-y-8 overflow-y-auto font-sans bg-white text-slate-900">
          {/* Resume Header */}
          <div className="border-b-2 border-indigo-600 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-sm font-semibold text-indigo-700 mt-0.5">
              Software Developer | .NET Developer | Python & AI Enthusiast
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-600 mt-3">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-indigo-600" />
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-1">
                <GithubIcon className="w-3.5 h-3.5 text-indigo-600" />
                github.com/Sahil860534
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-800 border-b border-slate-200 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Information Technology engineer (2025 Graduate) with hands-on technical training and internship experience in building 
              scalable backend APIs with C# / ASP.NET Core, Python automation tools, and agentic AI architectures using LangGraph and ChromaDB. 
              Eager to apply clean coding principles, database design, and fast problem-solving in a full-time software engineering role.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-800 border-b border-slate-200 pb-1 mb-2">
              Education
            </h2>
            <div className="flex justify-between items-start text-xs sm:text-sm">
              <div>
                <p className="font-bold text-slate-900">{educationData.degree}</p>
                <p className="text-slate-600">{educationData.institution}, Pune</p>
              </div>
              <span className="font-semibold text-indigo-700">{educationData.year}</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              Coursework: Data Structures & Algorithms, Object-Oriented Programming, DBMS, Computer Networks, Software Engineering.
            </p>
          </div>

          {/* Technical Skills Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-800 border-b border-slate-200 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <p>
                <strong className="text-slate-800">Programming Languages:</strong> C#, Python, JavaScript, SQL
              </p>
              <p>
                <strong className="text-slate-800">Backend:</strong> ASP.NET Core Web API, Entity Framework Core, ADO.NET, REST APIs
              </p>
              <p>
                <strong className="text-slate-800">Databases:</strong> SQL Server, MySQL, MongoDB, SQLite
              </p>
              <p>
                <strong className="text-slate-800">AI & Frameworks:</strong> LLMs, LangGraph, LangChain, RAG, Prompt Engineering
              </p>
              <p>
                <strong className="text-slate-800">Frontend:</strong> React.js, HTML5, CSS3, Tailwind CSS
              </p>
              <p>
                <strong className="text-slate-800">Tools & DevOps:</strong> Git, GitHub, Docker, Swagger, Postman, VS Code
              </p>
            </div>
          </div>

          {/* Experience & Training */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-800 border-b border-slate-200 pb-1 mb-2">
              Experience & Specialized Training
            </h2>
            <div className="space-y-4">
              {experienceTimeline.map((item) => (
                <div key={item.id} className="text-xs sm:text-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-bold text-slate-900">{item.role}</span>
                      <span className="text-slate-600"> — {item.company}</span>
                      <span className="ml-2 text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                        {item.type}
                      </span>
                    </div>
                    <span className="text-slate-500 font-medium text-xs">{item.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 mt-1 text-slate-600 text-xs pl-1">
                    {item.achievements.map((ach, aIdx) => (
                      <li key={aIdx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-800 border-b border-slate-200 pb-1 mb-2">
              Featured Projects
            </h2>
            <div className="space-y-3">
              {projectsData.slice(0, 3).map((proj) => (
                <div key={proj.id} className="text-xs sm:text-sm">
                  <div className="flex justify-between items-start font-bold text-slate-900">
                    <span>
                      {proj.title} <span className="text-xs font-normal text-slate-500">({proj.technologies.slice(0, 4).join(', ')})</span>
                    </span>
                    <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 text-xs font-semibold hover:underline">
                      GitHub
                    </a>
                  </div>
                  <p className="text-slate-600 text-xs mt-0.5">{proj.shortDescription}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer Notice */}
        <div className="px-6 py-3 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
          <span>💡 Tip: Place your finalized PDF in <code>public/Sahil_Rane_Resume.pdf</code> for direct link downloads.</span>
          <button
            onClick={onClose}
            className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
