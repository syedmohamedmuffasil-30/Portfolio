export interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
  linkedinDisplay: string;
  location: string;
}

export interface MetricHighlight {
  value: string;
  label: string;
  context: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  role: string;
  techStack: string[];
  summary: string;
  bullets: string[];
  metrics: { value: string; label: string }[];
  imagePath: string;
  hasInteractiveDemo: boolean;
  demoType: 'automl' | 'vibecoding';
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    description?: string;
    level?: string;
  }[];
}

export interface LanguageItem {
  name: string;
  level: string;
  proficiency: number; // percentage for visual bar matching resume
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  skillsCovered: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: 'In Progress' | 'Completed';
  coursework?: string[];
  details?: string;
}

export interface ActivityItem {
  title: string;
  platform: string;
  description: string;
  reach: string;
  topics: string[];
}
