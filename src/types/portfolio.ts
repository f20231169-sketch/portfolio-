export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  industry: string;
  problem: string;
  whatIDid: string[];
  keySkills: string[];
  image: string;
  accentColor: string;
  caseStudy: {
    problemStatement: string;
    insight: string;
    approach: string;
    productThinking: string;
    mvp: string;
    metrics: string[];
    outcomeLearning: string;
    architecturePillars?: { title: string; desc: string }[];
  };
}

export interface SkillCategory {
  number: string;
  category: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  number: string;
  role: string;
  organization: string;
  period: string;
  type: string;
  description: string;
  keyContributions: string[];
}

export interface EducationItem {
  number: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  highlights: string[];
}
