import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Terminal, 
  CheckCircle2, 
  GraduationCap, 
  MapPin 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-14 px-4 sm:px-6 lg:px-8 bg-grid-pattern"
    >
      {/* Subtle ambient blur */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[300px] bg-teal-500/10 dark:bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Authentic Fresher Intro */}
        <div className="lg:col-span-7 flex flex-col text-left space-y-5">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open for Entry-Level Roles • 2025 Graduate</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h2 className="text-base sm:text-lg font-semibold text-teal-600 dark:text-teal-400">
              Hi, I'm Sahil Rane 👋
            </h2>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Aspiring Software Developer with <span className="text-gradient">.NET, Python & AI</span> skills.
            </h1>
          </div>

          {/* Honest Fresher Pitch */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
            Recent <strong>B.E. in Information Technology (2025)</strong> graduate from Shri Kashibai Navale College of Engineering, Pune. 
            I have built real full-stack and AI projects using <strong>C#, ASP.NET Core Web API, React, Python</strong>, and <strong>SQL Server</strong>. 
            Eager to start my career as a fresher software engineer and contribute actively to production software.
          </p>

          {/* Key Quick Facts */}
          <div className="flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400 pt-1">
            <span className="flex items-center gap-1.5 font-medium">
              <GraduationCap className="w-4 h-4 text-teal-500" />
              SKNCOE Pune (2025)
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-4 h-4 text-teal-500" />
              Pune, India (Open to Relocate)
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 shadow-md shadow-teal-600/20 active:scale-95 transition-all"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/80 shadow-sm transition-all active:scale-95"
            >
              <FileText className="w-4 h-4 text-teal-500" />
              <span>View Resume</span>
            </button>
          </div>

          {/* Socials & Email */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 border border-slate-200 dark:border-slate-700 transition-all hover:scale-105"
              aria-label="GitHub Profile"
              title="GitHub: Sahil860534"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 border border-slate-200 dark:border-slate-700 transition-all hover:scale-105"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-500 font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>{personalInfo.email}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Clean Code Card */}
        <div className="lg:col-span-5 text-left">
          <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden font-mono text-xs">
            <div className="px-4 py-2.5 bg-slate-950 border-b border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                <Terminal className="w-3.5 h-3.5 text-teal-400" />
                <span>SahilRane.cs</span>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded">
                Fresher
              </span>
            </div>

            <div className="p-4 space-y-2 text-slate-300 leading-relaxed font-mono">
              <p className="text-slate-500">// Ready to learn, build, and contribute</p>
              <p>
                <span className="text-cyan-400">var</span> candidate = <span className="text-cyan-400">new</span>{' '}
                <span className="text-amber-300">FresherDeveloper</span> &#123;
              </p>
              <p className="pl-4">
                Name = <span className="text-emerald-300">"Sahil Rane"</span>,
              </p>
              <p className="pl-4">
                Degree = <span className="text-emerald-300">"B.E. Information Technology"</span>,
              </p>
              <p className="pl-4">
                Batch = <span className="text-cyan-300">2025</span>,
              </p>
              <p className="pl-4">
                Skills = <span className="text-cyan-400">new</span>[] &#123;{' '}
                <span className="text-emerald-300">"C#"</span>, <span className="text-emerald-300">"ASP.NET Core"</span>,{' '}
                <span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"SQL Server"</span> &#125;,
              </p>
              <p className="pl-4">
                Training = <span className="text-emerald-300">"Revature (.NET Full Stack)"</span>,
              </p>
              <p className="pl-4">
                OpenToOpportunities = <span className="text-cyan-400">true</span>
              </p>
              <p>&#125;;</p>
            </div>

            <div className="px-4 py-2 bg-slate-950/80 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Available to join immediately
              </span>
              <span>C# • Python</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
