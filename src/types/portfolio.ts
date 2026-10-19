export type ProjectCategory = 'All' | 'AI & LLMs' | 'Backend & .NET' | 'Web Applications';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  shortDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  keyFeatures: string[];
  myContribution: string[];
  challengesAndLearnings: string[];
  githubUrl: string; // Clearly marked if placeholder or real
  demoUrl?: string;
  featured: boolean;
  architectureHighlights?: string[];
  screenshotNote?: string;
}

export interface SkillItem {
  name: string;
  levelBadge?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: 'Training' | 'Internship' | 'Project Trainee';
  period: string;
  location: string;
  description: string;
  achievements: string[];
  skillsGained: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
  status: string;
  highlights: string[];
  relevantCoursework: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Hackathon' | 'Upskilling' | 'Interests';
  description: string;
  icon: string;
}
