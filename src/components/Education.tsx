import React from 'react';
import { GraduationCap, MapPin, Sparkles, BookOpen, Award } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Academic Foundation</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Education & Formal Training
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
          Rigorous engineering curriculum providing deep foundations in computer science theory and software engineering.
        </p>
      </div>

      {/* Main Education Showcase Card */}
      <div className="max-w-4xl mx-auto text-left">
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 relative overflow-hidden group">
          {/* Decorative ambient gradient */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10 group-hover:bg-indigo-500/20 transition-all duration-300" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/20 shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-0.5">
                  Degree Program
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {educationData.degree}
                </h3>
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mt-0.5">
                  {educationData.institution}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 text-xs text-slate-500 dark:text-slate-400 shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-semibold">
                {educationData.year}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {educationData.location}
              </span>
            </div>
          </div>

          {/* Details & Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            {/* Academic Highlights */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-indigo-500" />
                <span>Academic Highlights</span>
              </h4>
              <ul className="space-y-2">
                {educationData.highlights.map((item, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Relevant Coursework */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-purple-500" />
                <span>Relevant Core Coursework</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {educationData.relevantCoursework.map((course, cIdx) => (
                  <span
                    key={cIdx}
                    className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
