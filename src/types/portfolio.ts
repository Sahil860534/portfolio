export type ProjectCategory = 'All' | 'Full Stack & .NET' | 'Python & AI';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full Stack & .NET' | 'Python & AI';
  shortDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  keyFeatures: string[];
  myContribution: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  isLiveGithub?: boolean;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: 'Training' | 'Internship';
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  coursework: string[];
}
