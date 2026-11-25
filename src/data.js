export const profile = {
  name: 'Kier Daryl Abiad',
  headline: 'Software Engineer',
  bio: 'I build backend systems, full-stack web apps, and AI-powered tools with Python, Django, React, and Docker.',
  location: 'Imus City, Cavite, Philippines',
  email: 'kier.abiad@gmail.com',
  phone: '+63 962 661 4618',
  phoneHref: 'tel:+639626614618',
  github: 'https://github.com/kierabiad',
  linkedin: 'https://www.linkedin.com/in/kier-abiad/',
  resume: '/Abiad_KierDaryl_RESUME.pdf',
};

export const education = {
  degree: 'Bachelor of Science in Computer Science',
  school: 'Technological Institute of the Philippines',
  location: 'Manila, Philippines',
  date: 'Aug 2025',
  gpa: '1.77',
};

export const businessProject = {
  title: 'Abiad Residences',
  url: 'https://abiadresidences.vercel.app/',
  image: '/abiad-residences.webp',
  darkImage: '/abiad-residences-dark.webp',
  logo: '/abiad-residences-logo.svg',
  description: 'I built this website for our family’s rental business in Cavite. Prospective tenants can browse homes in Silang and General Trias, see actual property photos, get directions, and request a viewing.',
  tags: ['Family business', 'Rental listings', 'Vercel'],
};

export const certifications = [
  {
    title: 'AI Engineer for Developers Associate',
    issuer: 'DataCamp',
    issued: 'Oct 2026',
    expires: 'Sep 2028',
    url: 'https://www.datacamp.com/certificate/AIEDA0015327409161',
  },
  {
    title: 'Claude Academy: Claude Code 101',
    issuer: 'Anthropic',
    issued: 'Sep 2026',
    url: 'https://academy.claude.com/verify/5b702b7a7692be25204b16a820aca3a6',
  },
  {
    title: 'Claude Academy: Claude 101',
    issuer: 'Anthropic',
    issued: 'Sep 2026',
    url: 'https://academy.claude.com/verify/7b8e37e17bd715c635fcf32b74b9f89c',
  },
  {
    title: 'AWS Concept',
    issuer: 'DataCamp',
    issued: 'Mar 2024',
    url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/008f3f365c25729968537ead0f732a7123b3b0c8',
  },
  {
    title: 'Understanding Cloud Computing',
    issuer: 'DataCamp',
    issued: 'Feb 2024',
    url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/f0fca45fe14182bcde116abc190783ebb7fa7bcf',
  },
  {
    title: 'Certificate of Completion - Java Programming: Complete Beginner to Advanced',
    issuer: 'Udemy',
    issued: 'Feb 2021',
    url: 'https://www.udemy.com/certificate/UC-cd17dbca-fbe1-43e8-b4b2-7198bff03a11/',
  },
];

export const repositories = [
  {
    name: 'Mock_Logs',
    description: 'Django logging and analytics with PostgreSQL, Redis, and Celery for asynchronous processing.',
    language: 'Python',
  },
  {
    name: 'chatbot',
    description: 'A Streamlit chatbot that uses TF-IDF and cosine similarity to find answers to Dota 2 questions.',
    language: 'Python',
  },
  {
    name: 'zoho_aichat',
    description: 'A Node.js integration that brings Zoho Survey feedback and Gemini-assisted workflows into Slack.',
    language: 'JavaScript',
  },
  {
    name: 'kdportfolio',
    description: 'The source code for this portfolio, built with React and Vite.',
    language: 'JavaScript',
  },
];

export const experience = [
  {
    company: 'MIND YOU',
    location: 'BGC, Taguig, PH',
    role: 'AI Software Engineer',
    date: 'May 2026 — Dec 2026',
    type: 'Independent contractor',
    points: [
      'Engineered a Slack-to-Google Chat migration tool that securely transferred 40+ channel conversation logs and attachments with 100% data integrity, eliminating manual migration risk.',
      'Built a scalable Django + Docker backend from scratch, reducing environment inconsistency incidents to zero.',
      'Delivered Jira feature tickets on deadline and contributed to constructive sprint retrospectives in a cross-functional agile team.',
      'Maintained a clean, well-documented codebase, reducing code-review cycles and enabling faster onboarding for new contributors.',
    ],
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
  },
  {
    company: 'DE LA SALLE UNIVERSITY',
    location: 'Dasmariñas, PH',
    role: 'IT Department Intern',
    date: 'Dec 2018 — Feb 2019',
    type: 'Internship',
    points: [
      'Performed computer hardware diagnostics and repairs in a school environment.',
      'Collaborated on structured cabling, including Ethernet cable termination using RJ45 connectors.',
    ],
  },
];

export const skillGroups = [
  { name: 'Languages', items: ['Python', 'JavaScript', 'Java', 'C', 'C++', 'C#', 'SQL'] },
  { name: 'Web & frameworks', items: ['Django', 'React', 'Next.js', 'Laravel', 'Celery', 'REST API'] },
  { name: 'Databases', items: ['PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'SQLite'] },
  { name: 'Cloud & DevOps', items: ['Docker', 'Git / GitHub', 'Vercel', 'Railway', 'AWS (Foundations)'] },
  { name: 'AI & data', items: ['TensorFlow', 'OpenCV', 'scikit-learn', 'NumPy', 'Pandas', 'Matplotlib'] },
  { name: 'AI tooling', items: ['MCP', 'OpenRouter', 'Qdrant', 'GitHub Copilot', 'Google Colab'] },
];

export const projects = [
  {
    title: 'Bacterial blight detection',
    description: 'A CNN-based deep learning model for detecting severe bacterial blight in crops, optimized for accuracy, inference speed, and memory efficiency in precision agriculture.',
    tags: ['Deep learning', 'CNN', 'Computer vision'],
  },
  {
    title: 'Firebase authentication',
    description: 'An account-management application with email registration, verification, and password recovery. Administrators can view and update user information in the database.',
    tags: ['Firebase', 'Authentication', 'Account management'],
  },
  {
    title: 'Clothing e-commerce',
    description: 'An online clothing store with a browsable product catalog, style and size options, a shopping cart, and a streamlined checkout experience.',
    tags: ['E-commerce', 'Shopping cart', 'Web application'],
  },
];
