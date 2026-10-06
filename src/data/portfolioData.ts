import {
  ContactInfo,
  ProjectItem,
  SkillCategory,
  LanguageItem,
  CertificationItem,
  EducationItem,
  ActivityItem,
  MetricHighlight,
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'SYED MOHAMED MUFFASIL S U',
  shortName: 'Syed Mohamed Muffasil',
  tagline: 'CS Freshman · ML Enthusiast',
  headline: 'Building Intelligent No-Code ML Workflows & Vibe Coding Tools',
  avatarImage: '/src/assets/images/avatar_syed_real_1791263381839.jpg',
  summary:
    'Results-oriented Computer Science freshman skilled in Python, Machine Learning, and AutoML platform development. Proven ability to automate data preprocessing, model selection, hyperparameter tuning, and deployment for non-technical users. Expert in design thinking, prompt engineering, and problem-solving to deliver no-code ML solutions, reducing workflow time by 80% and driving technical innovation.',
  contact: {
    phone: '+91 9445667278',
    email: 'sidmuffasil@gmail.com',
    linkedin: 'https://linkedin.com/in/syed-mohamed-muffasil-s-u-05243b383',
    linkedinDisplay: 'linkedin.com/in/syed-mohamed',
    location: 'Coimbatore, Tamil Nadu, India',
  } as ContactInfo,
};

export const METRIC_HIGHLIGHTS: MetricHighlight[] = [
  {
    value: '80%',
    label: 'Workflow Time Reduced',
    context: 'Accelerated ML model lifecycle for non-technical users via intuitive no-code pipelines',
  },
  {
    value: '+60%',
    label: 'Prompt Output Quality Boost',
    context: 'Benchmarked across 20+ design scenarios in custom interactive vibe coding tools',
  },
  {
    value: '10+',
    label: 'Active Alpha Testers',
    context: 'Refined and iterated AutoML platform with direct user feedback and design thinking',
  },
  {
    value: '5+',
    label: 'Tutorials & Frameworks Published',
    context: 'Created Business Canva Model and prompt engineering guides on YouTube & LinkedIn',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'automl-platform',
    title: 'Web-based AutoML Platform',
    year: '2025',
    role: 'Lead Developer & ML Designer',
    techStack: ['Python', 'HTML', 'CSS', 'AutoML', 'Scikit-Learn', 'Design Thinking'],
    summary:
      'Developed end-to-end prototype automating data preprocessing, model selection, hyperparameter tuning, and deployment for non-technical users.',
    bullets: [
      'Developed end-to-end prototype automating data preprocessing, model selection, hyperparameter tuning, and deployment; served 10+ testers with intuitive no-code interface.',
      'Applied design thinking via user interviews and iterative prototyping; reduced ML workflow time by 80% for beginners using Python/HTML/CSS.',
      'Demonstrated flexibility and adaptability in refining features based on user feedback.',
    ],
    metrics: [
      { value: '80%', label: 'Reduction in ML workflow time for beginners' },
      { value: '10+', label: 'Active testers engaged during alpha validation' },
      { value: '100%', label: 'Automated preprocessing to deployment pipeline' },
    ],
    imagePath: '/src/assets/images/project_automl_platform_1791262609620.jpg',
    hasInteractiveDemo: true,
    demoType: 'automl',
  },
  {
    id: 'vibecoding-prototypes',
    title: 'Prompt Engineering & Vibe Coding Prototypes',
    year: '2025',
    role: 'Creator & Tool Architect',
    techStack: ['Python', 'HTML', 'CSS', 'Prompt Engineering', 'Vibe Coding', 'Replit'],
    summary:
      'Built interactive web tools for rapid AI prompt generation and vibe coding, tested on 20+ design scenarios to boost creative and technical output.',
    bullets: [
      'Built interactive web tools with HTML/CSS/Python for rapid AI prompt generation; tested on 20+ design scenarios, boosting output quality by 60%.',
      'Leveraged team leadership to collaborate on iterations; shared tutorials on LinkedIn/YouTube.',
      'Designed structured meta-prompt frameworks that adapt to software architecture, UI components, and ML logic.',
    ],
    metrics: [
      { value: '+60%', label: 'Output quality boost across design scenarios' },
      { value: '20+', label: 'Design scenarios rigorously tested and validated' },
      { value: '2 Platforms', label: 'Knowledge shared across YouTube & LinkedIn' },
    ],
    imagePath: '/src/assets/images/project_vibecoding_tools_1791262622825.jpg',
    hasInteractiveDemo: true,
    demoType: 'vibecoding',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming',
    skills: [
      {
        name: 'Python',
        description: 'Core ML pipelines, data transformation, script automation, prototyping',
        level: 'Primary Language',
      },
      {
        name: 'HTML',
        description: 'Semantic markup, accessible layout structures, web tooling',
        level: 'Proficient',
      },
      {
        name: 'CSS',
        description: 'Responsive styling, custom interfaces, modern design systems',
        level: 'Proficient',
      },
    ],
  },
  {
    title: 'Tools & Environments',
    skills: [
      {
        name: 'VS Code',
        description: 'Primary IDE for full-stack prototyping, extensions, and workspace management',
      },
      {
        name: 'Replit',
        description: 'Cloud prototyping, quick experimentation, collaborative sandboxes',
      },
      {
        name: 'Google Colab',
        description: 'GPU-accelerated ML model experimentation, exploratory data analysis',
      },
      {
        name: 'Lovable',
        description: 'Rapid UI acceleration, vibe coding, and prototype iteration',
      },
    ],
  },
  {
    title: 'Core Methodologies',
    skills: [
      {
        name: 'Prompt Engineering',
        description: 'Structured context architectures, few-shot conditioning, chain-of-thought system prompts',
      },
      {
        name: 'Vibe Coding',
        description: 'Intuitive AI-assisted development, rapid concept-to-working-code iteration loops',
      },
      {
        name: 'Design Thinking',
        description: 'User-centered research, interview synthesis, empathy-driven prototype refinements',
      },
      {
        name: 'Problem Solving',
        description: 'Analytical decomposition of technical bottlenecks into streamlined automated flows',
      },
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      {
        name: 'Team Leadership',
        description: 'Guiding cross-functional collaboration on prototypes and community tutorials',
      },
      {
        name: 'Flexibility',
        description: 'Quickly pivoting based on tester feedback and emerging AI advancements',
      },
      {
        name: 'Creative Thinking',
        description: 'Synthesizing ML concepts into approachable no-code visual experiences',
      },
    ],
  },
];

export const LANGUAGES: LanguageItem[] = [
  { name: 'Tamil', level: 'Native', proficiency: 100 },
  { name: 'English', level: 'Fluent', proficiency: 92 },
  { name: 'Hindi', level: 'Conv. (Conversational)', proficiency: 72 },
  { name: 'Urdu', level: 'Speaking', proficiency: 65 },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'AI Fundamentals',
    issuer: 'IBM',
    year: '2025',
    skillsCovered: [
      'Artificial Intelligence Principles',
      'Machine Learning Concepts',
      'Ethical AI & Fairness',
      'Natural Language & Computer Vision Basics',
    ],
  },
  {
    title: 'Intro to ML',
    issuer: 'Databricks',
    year: '2025',
    skillsCovered: [
      'Supervised & Unsupervised Learning',
      'Model Evaluation & Hyperparameter Tuning',
      'Feature Engineering Pipelines',
      'MLOps & Production Deployment Basics',
    ],
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: 'B.E. Computer Science and Design',
    institution: 'SNS College of Technology, Coimbatore',
    period: '2025 – 2029',
    status: 'In Progress',
    coursework: [
      'Machine Learning (ML)',
      'Data Structures & Algorithms (DSA)',
      'Design Thinking',
      'AI Fundamentals',
    ],
    details:
      'Pursuing an interdisciplinary curriculum combining core computer science engineering with user experience design, algorithmic rigor, and intelligent systems.',
  },
  {
    degree: 'HSC (Bio-Maths) & SSLC',
    institution: 'Carmel Garden Matric Hr Sec School, Coimbatore',
    period: 'Completed',
    status: 'Completed',
    details:
      'Rigorous foundation in mathematics, analytical problem solving, and science disciplines.',
  },
];

export const AWARDS_AND_ACTIVITIES: ActivityItem[] = [
  {
    title: 'Business Canva Model & AI Tutorials',
    platform: 'YouTube & LinkedIn',
    description:
      'Content Creator on YouTube & LinkedIn — created 5+ Business Canva Model tutorials and shared prompt engineering & AI tool tutorials reaching a growing audience of learners.',
    reach: '5+ Tutorials & Growing Community',
    topics: [
      'Business Canva Model Strategy',
      'Prompt Engineering Workflows',
      'AI Tools for Rapid Prototyping',
      'No-Code ML Education',
    ],
  },
];
