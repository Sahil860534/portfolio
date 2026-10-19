# 💼 Sahil Rane — Professional Developer Portfolio

> **Modern, responsive, recruiter-optimized portfolio website built with React, TypeScript, Vite, and Tailwind CSS.**

[![React](https://img.shields.io/badge/React-18%2B-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-blue.svg)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4%2B-38bdf8.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0%2B-646cff.svg)](https://vitejs.dev/)

---

## 🌟 Highlights & Features

- **Recruiter-Friendly Presentation:** Tailored for Software Developer, .NET Developer, Python Developer, and AI Engineer roles.
- **Dark & Light Mode:** Default deep navy/black aesthetic with subtle gradients and an interactive theme switch toggle.
- **Interactive Project Case Studies:** Modal dialogs for all 5 featured projects with Problem, Solution, Architecture, Contributions, and Challenges.
- **Live GitHub Integration:** Direct link to your verified active project repository (`https://github.com/Sahil860534/ai-job-copilot`).
- **Verifiable Experience Timeline:** Chronological timeline distinguishing Training (.NET at Revature), Internships (Hyper Serve AI Solutions, Shree Industries), and Project Trainee (IBM SkillsBuild).
- **Single Source of Truth:** All portfolio information, skills, projects, and links are kept in `src/data/portfolioData.ts`.
- **Interactive Resume Modal:** ATS-optimized on-screen resume summary with print/PDF export support.
- **Client-Side Validated Contact Form:** Interactive form submission feedback with name, email, subject, and message validation.

---

## 📁 Project Structure

```
sahil-rane-portfolio/
├── index.html                  # HTML entry point with SEO metadata and Google Fonts
├── package.json                # Dependencies and build scripts
├── tailwind.config.js          # Tailwind CSS theme, colors, and animations
├── postcss.config.js           # PostCSS configuration
├── src/
│   ├── types/
│   │   └── portfolio.ts        # Strictly typed TypeScript data models
│   ├── data/
│   │   └── portfolioData.ts    # Centralized portfolio content & links
│   ├── context/
│   │   └── ThemeContext.tsx    # Dark/Light theme state manager
│   ├── components/
│   │   ├── Navbar.tsx          # Responsive navigation with theme toggle & resume CTA
│   │   ├── Hero.tsx            # Headline, quick intro, social links & terminal card
│   │   ├── About.tsx           # Bio narrative, core competencies & highlights
│   │   ├── Skills.tsx          # Categorized skill cards with filter pills
│   │   ├── Projects.tsx        # Project showcase with category filters & modal triggers
│   │   ├── ProjectModal.tsx    # Accessible case study modal dialog
│   │   ├── Experience.tsx      # Chronological timeline of trainings & internships
│   │   ├── Education.tsx       # B.E. Information Technology from SKNCOE Pune
│   │   ├── Achievements.tsx    # Hackathons, upskilling, and cricket sportsmanship
│   │   ├── Contact.tsx         # Validated contact form & direct reach-out options
│   │   ├── ResumeModal.tsx     # Printable ATS resume preview
│   │   ├── Footer.tsx          # Quick links, social icons & back-to-top button
│   │   └── Icons.tsx           # Brand SVG icons for GitHub & LinkedIn
│   ├── App.tsx                 # Root layout assembling all sections
│   ├── main.tsx                # Vite entry point
│   └── index.css               # Tailwind CSS directives and glassmorphism utilities
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```

---

## ✏️ How to Customize Your Information

All portfolio content is neatly separated from UI components inside:
📂 **[`src/data/portfolioData.ts`](file:///C:/Users/HP/.gemini/antigravity-ide/scratch/sahil-rane-portfolio/src/data/portfolioData.ts)**

Items marked for quick update:
1. **LinkedIn Profile:** Update `linkedin: "https://linkedin.com/in/sahil-rane"` with your exact profile URL.
2. **Project Repositories:** Update the `githubUrl` fields for projects 2 through 5 once pushed to your GitHub.
3. **Resume PDF File:** Place your compiled resume PDF in `public/Sahil_Rane_Resume.pdf` so visitors can download the file directly.
