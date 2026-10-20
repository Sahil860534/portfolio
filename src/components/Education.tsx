import React from 'react';
import { GraduationCap, MapPin, Sparkles, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Education</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Academic Qualification
        </h2>
      </div>

      <div className="glass-card p-6 rounded-2xl text-left border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-indigo-600/20">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              {educationData.period}
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {educationData.degree}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
              {educationData.institution}
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1 mt-0.5">
              <MapPin className="w-3 h-3" />
              {educationData.location}
            </p>
          </div>
        </div>

        {/* Coursework */}
        <div className="sm:max-w-xs space-y-1.5">
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
            <span>Core Subjects:</span>
          </span>
          <div className="flex flex-wrap gap-1">
            {educationData.coursework.map((course, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
