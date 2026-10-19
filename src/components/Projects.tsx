import React, { useState } from 'react';
import { 
  FolderGit2, 
  Sparkles, 
  ArrowUpRight, 
  Bot, 
  Globe 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import type { Project, ProjectCategory } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = ['All', 'AI & LLMs', 'Web Applications'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  const getCategoryIcon = (category: ProjectCategory) => {
    switch (category) {
      case 'AI & LLMs':
        return Bot;
      case 'Web Applications':
        return Globe;
      default:
        return FolderGit2;
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Featured Engineering</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Hands-on Projects & AI Applications
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
          End-to-end applications demonstrating multi-agent workflows, vector RAG retrieval, backend APIs, and database engineering.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : 'bg-slate-200/70 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        {filteredProjects.map((project) => {
          const CategoryIcon = getCategoryIcon(project.category);
          const isLive = project.id === 'ai-job-copilot';

          return (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                {/* Top Bar: Icon, Category & Featured Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <CategoryIcon className="w-5 h-5" />
                  </div>

                  <div className="flex items-center gap-1.5">
                    {isLive && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800/80">
                        Live on GitHub
                      </span>
                    )}
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Title & Tagline */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium mt-1 mb-3">
                  {project.tagline}
                </p>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Key Features Quick List */}
                <div className="mb-4 space-y-1.5">
                  {project.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                      <span className="text-indigo-500 font-bold shrink-0">•</span>
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 rounded-md text-[10px] text-slate-400 dark:text-slate-500">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 group-hover:underline"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label={`GitHub repo for ${project.title}`}
                  title={isLive ? "View repository on GitHub" : "Repository link [replaceable in portfolioData.ts]"}
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
