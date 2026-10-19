import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  Copy 
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
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glow effects */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-indigo-500/15 dark:bg-indigo-600/20 blur-[130px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-purple-500/10 dark:bg-violet-600/15 blur-[120px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Introductions and Actions */}
        <div className="lg:col-span-7 flex flex-col text-left space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/80 text-indigo-700 dark:text-indigo-300 shadow-sm animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{personalInfo.availability}</span>
          </div>

          {/* Heading and Intro */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-2 tracking-wide">
              <span>Hi, I'm {personalInfo.name}</span>
              <span className="inline-block animate-wave text-xl origin-bottom-right">👋</span>
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Building Software Solutions with{' '}
              <span className="text-gradient">.NET, Python & AI</span>.
            </h1>
          </div>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            Information Technology engineer (<span className="font-semibold text-slate-900 dark:text-white">2025 Graduate</span>) 
            specializing in <span className="text-indigo-600 dark:text-indigo-400 font-medium">ASP.NET Core</span> backend APIs, 
            <span className="text-indigo-600 dark:text-indigo-400 font-medium"> Python</span> automation, and pragmatic 
            <span className="text-indigo-600 dark:text-indigo-400 font-medium"> Agentic AI / RAG</span> pipelines. 
            Passionate about architecting clean, maintainable systems from database models to scalable endpoints.
          </p>

          {/* Primary Call to Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 active:scale-95 transition-all"
            >
              <span>Explore My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm hover:shadow transition-all active:scale-95"
            >
              <Download className="w-4 h-4 text-indigo-500" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Social Links & Quick Connect */}
          <div className="pt-4 flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Connect:
            </span>
            <div className="flex items-center gap-2.5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-700/80 transition-all hover:scale-110"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-700/80 transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-700/80 transition-all hover:scale-110"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>

              <button
                onClick={copyEmail}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80 transition-all"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500 font-semibold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>{personalInfo.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Developer Visual / Simulated IDE Terminal */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            {/* Ambient backing glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-lg opacity-30 dark:opacity-40 animate-pulse-subtle -z-10" />

            {/* Terminal Card */}
            <div className="rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden text-left font-mono text-xs">
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>DeveloperProfile.cs</span>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                  Ready
                </span>
              </div>

              {/* Code Snippet Body */}
              <div className="p-4 sm:p-5 space-y-2 text-slate-300 leading-relaxed font-mono">
                <p className="text-slate-500">// Sahil Rane - Technical Specifications</p>
                <p>
                  <span className="text-indigo-400">public class</span>{' '}
                  <span className="text-amber-300">SoftwareEngineer</span>
                </p>
                <p className="pl-4">
                  <span className="text-indigo-400">public string</span> Name ={' '}
                  <span className="text-emerald-300">"{personalInfo.name}"</span>;
                </p>
                <p className="pl-4">
                  <span className="text-indigo-400">public string</span> Education ={' '}
                  <span className="text-emerald-300">"B.E. IT (SKNCOE 2025)"</span>;
                </p>
                <p className="pl-4">
                  <span className="text-indigo-400">public string[]</span> PrimaryStack = &#123;
                </p>
                <p className="pl-8 text-cyan-300">
                  "ASP.NET Core", "C#", "Python", "SQL Server", "LangGraph RAG"
                </p>
                <p className="pl-4">&#125;;</p>
                <p className="pl-4">
                  <span className="text-indigo-400">public async Task</span>{' '}
                  <span className="text-amber-300">BuildSolutionAsync</span>() &#123;
                </p>
                <p className="pl-8 text-slate-400">
                  <span className="text-indigo-400">await</span> CleanArchitecture.Enforce();
                </p>
                <p className="pl-8 text-slate-400">
                  <span className="text-indigo-400">await</span> AgenticAI.Orchestrate();
                </p>
                <p className="pl-4">&#125;</p>
              </div>

              {/* Terminal Bottom Status */}
              <div className="px-4 py-2.5 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Build: Succeeded (0 Errors)</span>
                </span>
                <span className="text-indigo-400">UTF-8 • C# 12 / .NET 8</span>
              </div>
            </div>

            {/* Floating Tech Badges */}
            <div className="absolute -bottom-4 -left-3 sm:-left-6 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-100 animate-float">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              <span>ASP.NET Core Web API</span>
            </div>

            <div className="absolute -top-3 -right-2 sm:-right-4 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-100 animate-float" style={{ animationDelay: '1.5s' }}>
              <Sparkles className="w-3.5 h-3.5 text-violet-500" />
              <span>Multi-Agent LangGraph</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
