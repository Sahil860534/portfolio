import React, { useEffect } from 'react';
import { X, Printer, FileText, Mail, MapPin } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo, experienceData, educationData, projectsData } from '../data/portfolioData';

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
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 text-left max-h-[90vh] flex flex-col">
        {/* Header Controls */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-teal-600 to-cyan-500 text-white flex items-center justify-center font-bold text-xs">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 id="resume-modal-title" className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                Sahil Rane — Resume Summary
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Fresher Software Developer • 2025 Graduate
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-200/80 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
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
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto font-sans bg-white text-slate-900 text-xs sm:text-sm">
          {/* Resume Header */}
          <div className="border-b-2 border-teal-600 pb-4">
            <h1 className="text-2xl font-extrabold text-slate-900">
              {personalInfo.name}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-teal-700 mt-0.5">
              {personalInfo.roleTitle}
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-600 mt-2">
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-teal-600" />
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-1">
                <GithubIcon className="w-3 h-3 text-teal-600" />
                github.com/Sahil860534
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-teal-600" />
                {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-teal-800 border-b border-slate-200 pb-1 mb-2">
              Education
            </h2>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold text-slate-900">{educationData.degree}</p>
                <p className="text-slate-600">{educationData.institution}</p>
              </div>
              <span className="font-semibold text-teal-700">{educationData.period}</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              Coursework: {educationData.coursework.join(', ')}
            </p>
          </div>

          {/* Experience & Training */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-teal-800 border-b border-slate-200 pb-1 mb-2">
              Experience & Training
            </h2>
            <div className="space-y-3">
              {experienceData.map((item) => (
                <div key={item.id}>
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-bold text-slate-900">{item.role}</span>
                      <span className="text-slate-600"> — {item.company}</span>
                      <span className="ml-2 text-[10px] font-bold px-1.5 py-0.5 rounded bg-teal-50 text-teal-700 border border-teal-200">
                        {item.type}
                      </span>
                    </div>
                    <span className="text-slate-500 font-medium text-xs">{item.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 mt-1 text-slate-600 text-xs pl-1">
                    {item.highlights.map((ach, aIdx) => (
                      <li key={aIdx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-teal-800 border-b border-slate-200 pb-1 mb-2">
              Featured Projects
            </h2>
            <div className="space-y-3">
              {projectsData.map((proj) => (
                <div key={proj.id}>
                  <div className="flex justify-between items-start font-bold text-slate-900">
                    <span>
                      {proj.title} <span className="text-xs font-normal text-slate-500">({proj.technologies.slice(0, 4).join(', ')})</span>
                    </span>
                    <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="text-teal-600 text-xs font-semibold hover:underline">
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
          <span>💡 PDF direct download link is also available</span>
          <button
            onClick={onClose}
            className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
