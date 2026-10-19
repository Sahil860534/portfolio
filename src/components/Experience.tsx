import React from 'react';
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const getTypeBadgeStyle = (type: string) => {
    switch (type) {
      case 'Internship':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-950/80 dark:text-purple-300 border-purple-200 dark:border-purple-800';
      case 'Training':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      default:
        return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/80 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800';
    }
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Professional Background</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Experience & Specialized Training
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
          A transparent, verified record of corporate training programs and technical internships.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto text-left">
        {/* Central Vertical Connector Line */}
        <div 
          className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 hidden sm:block" 
          aria-hidden="true" 
        />

        <div className="space-y-8 sm:space-y-12">
          {experienceTimeline.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`relative flex flex-col sm:flex-row gap-6 items-start ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Center Node Indicator */}
                <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-6 w-7 h-7 rounded-full bg-white dark:bg-slate-900 border-4 border-indigo-500 items-center justify-center z-10 shadow-sm" />

                {/* Content Card */}
                <div className="w-full sm:w-[calc(50%-2rem)] glass-card p-6 rounded-2xl hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-200">
                  {/* Role Type & Period Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${getTypeBadgeStyle(
                        item.type
                      )}`}
                    >
                      {item.type}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5 mb-3">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{item.company}</span>
                    <span className="text-slate-300 dark:text-slate-700">•</span>
                    <span className="text-slate-400 dark:text-slate-500 font-normal flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Key Responsibilities & Achievements */}
                  <div className="space-y-2 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1.5">
                      {item.achievements.map((ach, aIdx) => (
                        <li
                          key={aIdx}
                          className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills Learned Badges */}
                  <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                    {item.skillsGained.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
