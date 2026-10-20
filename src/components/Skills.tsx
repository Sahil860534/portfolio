import React from 'react';
import { Sparkles, Code, Server, Database, Bot, Layout, Wrench } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getIcon = (title: string) => {
    switch (title) {
      case 'Programming Languages':
        return Code;
      case 'Backend & .NET':
        return Server;
      case 'Databases':
        return Database;
      case 'AI & Modern Tools':
        return Bot;
      case 'Frontend Basics':
        return Layout;
      default:
        return Wrench;
    }
  };

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-800">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Technical Skills</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Skills & Technologies
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
          Technologies I have practiced and used in academic coursework, training, and hands-on projects.
        </p>
      </div>

      {/* Grid of Skill Groups */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
        {skillsData.map((group, index) => {
          const Icon = getIcon(group.title);
          return (
            <div
              key={index}
              className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-teal-500/40 dark:hover:border-teal-500/40 transition-all duration-200"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className="p-2 rounded-lg bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 border border-teal-200/60 dark:border-teal-800/60">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
