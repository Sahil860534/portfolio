import React from 'react';
import { Calendar, Sparkles } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Training & Internships</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Practical Experience
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
          Corporate training and internship experiences building full-stack and AI software.
        </p>
      </div>

      {/* Clean Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
        {experienceData.map((item) => (
          <div
            key={item.id}
            className="glass-card p-5 rounded-2xl flex flex-col justify-between hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all duration-200"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60">
                  {item.type}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                  <Calendar className="w-3 h-3" />
                  {item.period}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {item.role}
              </h3>
              <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5 mb-2.5">
                {item.company}
              </p>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                {item.description}
              </p>

              <ul className="space-y-1.5 mb-4">
                {item.highlights.map((point, pIdx) => (
                  <li key={pIdx} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-1.5">
                    <span className="text-indigo-500 font-bold shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech badges */}
            <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/80 flex flex-wrap gap-1">
              {item.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
