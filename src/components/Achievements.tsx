import React from 'react';
import { Trophy, Award, Target, Sparkles } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy':
        return Trophy;
      case 'Award':
        return Award;
      case 'Target':
        return Target;
      default:
        return Award;
    }
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Extracurricular & Milestones</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Achievements & Personal Interests
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
          Collaborative hackathons, continuous self-guided upskilling, and active team sports.
        </p>
      </div>

      {/* Grid of 3 Verified Achievement Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {achievementsData.map((item) => {
          const Icon = getIcon(item.icon);
          return (
            <div
              key={item.id}
              className="glass-card p-6 rounded-2xl hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-1">
                  {item.category}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-200/60 dark:border-slate-800/80 text-[11px] text-slate-400 dark:text-slate-500">
                Verified Personal Milestone
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
