import React from 'react';
import { GraduationCap, Code2, Sparkles, BookOpen } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-10 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-800">
          <Sparkles className="w-3.5 h-3.5" />
          <span>About Me</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Who I Am & What I Do
        </h2>
      </div>

      <div className="glass-card p-6 sm:p-8 rounded-2xl text-left space-y-6">
        <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            I am a recent <strong>Bachelor of Engineering in Information Technology (2025)</strong> graduate from{' '}
            <strong>Shri Kashibai Navale College of Engineering, Pune</strong>. As an aspiring software engineer, 
            I have dedicated my academic years and internship experiences to building solid foundations in object-oriented programming, 
            database management, and backend web application development.
          </p>

          <p>
            My main technical focus is on <strong>C# / ASP.NET Core Web API</strong> and <strong>Python</strong>. Through intensive .NET training 
            at <strong>Revature</strong>, I gained experience with Entity Framework Core, SQL Server, and RESTful API architecture, while also 
            building hands-on projects with modern Python and AI libraries.
          </p>

          <p>
            As a fresher, I am eager to join a development team where I can apply my programming skills, learn from senior engineers, 
            and write reliable, well-tested code for real users.
          </p>
        </div>

        {/* 3 Quick Fresher Fact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="p-4 rounded-xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1">
            <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold text-xs">
              <GraduationCap className="w-4 h-4" />
              <span>B.E. IT (2025 Batch)</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Shri Kashibai Navale College of Engineering, Pune
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1">
            <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold text-xs">
              <Code2 className="w-4 h-4" />
              <span>Backend & .NET Stack</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              C#, ASP.NET Core Web API, SQL Server, Entity Framework
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1">
            <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold text-xs">
              <BookOpen className="w-4 h-4" />
              <span>Hands-on Projects</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Real projects in .NET, Python, and Multi-Agent AI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
