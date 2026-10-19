import React, { useState } from 'react';
import { 
  Server, 
  Code2, 
  Bot, 
  Database, 
  Layout, 
  Wrench, 
  Check, 
  Sparkles 
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return Server;
      case 'Code2':
        return Code2;
      case 'Bot':
        return Bot;
      case 'Database':
        return Database;
      case 'Layout':
        return Layout;
      case 'Wrench':
        return Wrench;
      default:
        return Code2;
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Technical Repertoire</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Skills & Technologies
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
          Interview-verified technical competencies across backend architecture, programming languages, databases, and AI tooling.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-200/70 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            All Disciplines ({skillCategories.length})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-200/70 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Categorized Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        {filteredCategories.map((cat) => {
          const Icon = getCategoryIcon(cat.icon);
          return (
            <div
              key={cat.id}
              className="glass-card p-6 rounded-2xl flex flex-col justify-between hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-200 group"
            >
              <div>
                {/* Card Title & Icon */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors"
                    >
                      <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </span>
                      {skill.levelBadge && (
                        <span className="text-[10px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300">
                          {skill.levelBadge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Foundation Note */}
              <div className="pt-4 mt-6 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center gap-1.5 text-[11px] text-slate-400 dark:text-slate-500">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>Verified in academic coursework or active projects</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
