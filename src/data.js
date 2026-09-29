export const profile = {
  name: 'Kier Daryl Abiad',
  email: 'kier.abiad@gmail.com',
  github: 'https://github.com/kierabiad',
  linkedin: 'https://www.linkedin.com/in/kier-abiad/',
  resume: '/Abiad_KierDaryl_RESUME.pdf',
};

export const experience = [
  {
    company: 'MIND YOU',
    location: 'BGC, Taguig, PH',
    role: 'AI Software Engineer',
    date: 'May 2025 — Sep 2026',
    type: 'Professional experience',
    points: [
      'Engineered a Slack-to-Google Chat migration tool that securely transferred 40+ channel conversation logs and attachments with 100% data integrity, eliminating manual migration risk.',
      'Built a scalable Django + Docker backend from scratch, reducing environment inconsistency incidents to zero.',
      'Delivered Jira feature tickets on deadline and contributed to constructive sprint retrospectives in a cross-functional agile team.',
      'Maintained a clean, well-documented codebase, reducing code-review cycles and enabling faster onboarding for new contributors.',
    ],
    tags: ['Python', 'Django', 'Docker', 'Agile'],
  },
  {
    company: 'MIND YOU',
    location: 'BGC, Taguig, PH',
    role: 'Developer Intern',
    date: 'Feb 2026 — May 2026',
    type: 'Internship',
    points: [
      'Engineered a custom Slack-to-Google Chat migration tool to securely transfer legacy conversation logs and attachments with full data integrity.',
      'Established a production-ready Docker environment that standardized local and deployment configurations across the engineering team.',
      'Improved code readability and reduced technical debt through codebase maintenance and documentation.',
      'Participated in daily standups and sprint planning, sharing consistent updates on feature development.',
    ],
    tags: ['Docker', 'Migration tooling', 'Documentation'],
  },
  {
    company: 'MALAYAN INSURANCE CO., INC.',
    location: 'Binondo, Manila, PH',
    role: 'IT Infrastructure Security Intern',
    date: 'May 2024 — Aug 2024',
    type: 'Internship',
    points: [
      'Implemented and maintained cybersecurity controls across enterprise systems to reduce vulnerability exposure.',
      'Administered Active Directory, Remote Assistance, and cross-department technical requests while maintaining 100% uptime for internal IT operations.',
      'Managed Microsoft licensing and system configurations to support compliance and operational continuity.',
    ],
    tags: ['Active Directory', 'Cybersecurity', 'IT infrastructure'],
  },
  {
    company: 'DE LA SALLE UNIVERSITY',
    location: 'Dasmariñas, PH',
    role: 'I.T Department Intern',
    date: 'Dec 2018 — Feb 2019',
    type: 'Internship',
    points: [
      'Performed computer hardware diagnostics and repairs in a school environment.',
      'Collaborated on structured cabling, including Ethernet cable termination using RJ45 connectors.',
    ],
    tags: ['Hardware diagnostics', 'Networking'],
  },
];

export const skillGroups = [
  { name: 'Languages', icon: 'code', items: ['Python', 'JavaScript', 'Java', 'C', 'C++', 'C#', 'SQL'] },
  { name: 'Web & frameworks', icon: 'window', items: ['Django', 'React', 'Next.js', 'Laravel', 'Celery', 'REST API'] },
  { name: 'Databases', icon: 'database', items: ['PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'SQLite'] },
  { name: 'Cloud & DevOps', icon: 'cloud', items: ['Docker', 'Git / GitHub', 'Vercel', 'Railway', 'AWS (Foundations)'] },
  { name: 'AI & data', icon: 'spark', items: ['TensorFlow', 'OpenCV', 'scikit-learn', 'NumPy', 'Pandas', 'Matplotlib'] },
  { name: 'AI tooling', icon: 'terminal', items: ['MCP', 'OpenRouter', 'Qdrant', 'GitHub Copilot', 'Google Colab'] },
];

export const projects = [
  {
    number: '02',
    category: 'MACHINE LEARNING',
    title: 'A clearer picture of crop health.',
    subtitle: 'Bacterial blight detection',
    description: 'A CNN-based deep learning model for detecting severe bacterial blight in crops, optimized for accuracy, inference speed, and memory efficiency in precision agriculture.',
    tags: ['Deep learning', 'CNN', 'Computer vision'],
    visual: 'vision',
  },
  {
    number: '03',
    category: 'APPLICATION DEVELOPMENT',
    title: 'A better first sign-in.',
    subtitle: 'Firebase authentication',
    description: 'An account-management application with email registration, verification, and password recovery. Administrators can view and update user information in the database.',
    tags: ['Firebase', 'Authentication', 'Account management'],
    visual: 'auth',
  },
  {
    number: '04',
    category: 'WEB DEVELOPMENT',
    title: 'From browsing to checkout.',
    subtitle: 'Clothing e-commerce',
    description: 'An online clothing store with a browsable product catalog, style and size options, a shopping cart, and a streamlined checkout experience.',
    tags: ['E-commerce', 'Shopping cart', 'Web application'],
    visual: 'shop',
  },
];
