export const profile = {
  name: 'Senuri Kaveesha',
  title: 'Software Engineer | Applied ML & LLM Systems',
  location: 'Kandana, Sri Lanka',
  phone: '+94 71 685 7716',
  email: 'senurikaveesha39@gmail.com',
  github: 'https://github.com/SenuriKaveesha39',
  linkedin: 'https://www.linkedin.com/in/senuri-kaveesha-1a1832215/',
  summary:
    'Machine Learning Engineer with 2+ years of hands-on experience designing, training, and deploying production-grade ML and LLM-based systems — from RAG pipelines to full-stack AI products, with a growing focus on finance and tax domain applications.',
  roles: [
    'Applied ML Engineer',
    'LLM Systems Builder',
    'Full-Stack AI Developer',
    'NLP & RAG Specialist',
  ],
};

export const stats = [
  { value: '98%', label: 'Query success rate achieved in production-like SQL generation' },
  { value: '70%', label: 'Reduction in manual query-writing time via automation' },
  { value: '20%', label: 'Inference latency cut through model serialization tuning' },
  { value: '91%', label: 'Facial expression recognition accuracy in published research' },
];

export const skillGroups = [
  {
    key: 'core-ml',
    title: 'Core ML & AI',
    blurb: 'Modeling, evaluation, and language systems',
    items: [
      'Machine Learning', 'Applied ML', 'Model Evaluation', 'NLP', 'LLMs',
      'RAG Systems', 'TensorFlow', 'PyTorch', 'scikit-learn',
      'Feature Engineering', 'Model Optimization',
    ],
  },
  {
    key: 'data',
    title: 'Data & Analytics',
    blurb: 'Turning raw data into reliable pipelines',
    items: [
      'SQL (Complex Queries, Optimization)', 'Data Validation & Accuracy Checks',
      'Pandas', 'NumPy', 'Schema Design & Data Pipelines', 'ETL / ELT',
    ],
  },
  {
    key: 'deploy',
    title: 'Deployment & Reliability',
    blurb: 'Getting models from notebook to production',
    items: [
      'Pilot-to-Production AI Delivery', 'Docker', 'Kubernetes', 'AWS (ECR)',
      'Monitoring', 'Latency Optimization', 'Troubleshooting',
    ],
  },
  {
    key: 'backend',
    title: 'Backend & ML Systems',
    blurb: 'Serving intelligence through robust APIs',
    items: [
      'FastAPI', 'Flask', 'REST APIs for ML Services', 'Celery', 'Redis',
      'Model Deployment & Monitoring',
    ],
  },
];

export const personalSkills = [
  'Analytical Reasoning', 'Team Collaboration', 'Quick Adaptation to Change', 'Precision in Task Management',
];

export const experience = [
  {
    role: 'Associate Software Engineer',
    company: 'Veracity Digital (Pvt) Ltd',
    period: 'January 2026 — Present',
    current: true,
    points: [
      'Designed and developed software systems, including real-time intelligent web apps for real-world applications.',
      'Built and maintained scalable microservices using Python (backend) and React (frontend), ensuring seamless system integration and performance.',
      'Implemented AI model development and deployment pipelines, covering training, versioning, testing, and production deployment.',
    ],
    tech: ['Python', 'React', 'Microservices', 'Model Versioning'],
  },
  {
    role: 'Junior AI Engineer',
    company: 'Parallax Technologies',
    period: 'April 2025 — January 2026',
    points: [
      'Partnered with product and engineering teams to deploy production-ready AI solutions integrated into customer-facing applications.',
      'Reduced inference latency by 20% by optimizing model serialization.',
      'Optimized LLM-powered services using Python, TensorFlow, and PyTorch to support real business workflows and product features.',
      'Translated complex model outputs into actionable insights and deployable system behavior.',
    ],
    tech: ['Python', 'TensorFlow', 'PyTorch', 'LLM Services'],
  },
  {
    role: 'Trainee Software Engineer — R&D (AI & ML)',
    company: 'CodeGen International (Pvt) Ltd',
    period: 'July 2024 — January 2025',
    points: [
      'Lia Project — lowered manual query-writing time by 70% by automating SQL generation from user-provided databases.',
      'Tuned prompt logic, validation layers, and error handling to reach a 98% query success rate in production-like environments.',
      'Engineered an automated table-structure creation system that lifted query efficiency by 75%.',
      'Integrated LLM services using OpenAI and LangChain, working closely with engineering and QA teams to ensure reliability and adoption.',
      'Lia — QA Automation: increased system reliability and UX by automating 95% of AI response validations.',
    ],
    tech: ['Python (Asyncio, Aiohttp)', 'FastAPI', 'Next.js', 'OpenAI', 'LangChain', 'Pinecone', 'Redis'],
  },
];

export const publications = [
  {
    title: 'Adaptive Video Game Content Generation Through Player Centered Modeling',
    venue: 'IEEE International Conference on Advancements in Computing (ICAC), 2025',
    period: 'Jan 2024 — April 2025',
    points: [
      'Achieved 91% facial expression recognition accuracy with a CNN-based real-time system.',
      'Delivered adaptive music responses in under 500ms.',
      'Resulted in a playable prototype used in user feedback experiments.',
    ],
    link: 'https://ieeexplore.ieee.org/document/11361432',
    linkLabel: 'View on IEEE Xplore',
  },
];

export const currentResearch = [
  {
    title: 'Predicting Semantic Merge Conflicts Before They Happen',
    status: 'In Progress · 2026',
    summary:
      'Exploring an AI system that catches "silent" merge conflicts — cases where two branches each merge cleanly by Git\'s standards, but the combined result quietly breaks behavior that neither branch broke on its own.',
    points: [
      "Most existing tools only react after the fact: Git flags a textual conflict, or a semantic break is caught after the merge through tests or CI.",
      'This work targets the gap before either of those — predicting a likely conflict, explaining the reasoning in plain English, and suggesting a fix while the branches are still separate.',
      'Reframes the workflow from detect-and-resolve after merge to predict-and-prevent before merge.',
    ],
  },
];

export const projects = [
  {
    title: 'Conversational AI Agent with Continuous Learning',
    period: '2024',
    description:
      'A neural network-based chatbot using NLP that adapts from user input in real time, with a feedback loop that keeps improving response quality over time.',
    highlights: [
      'Adaptive learning loop improved response accuracy by 30%',
      'Custom feedback mechanism for continual model refinement',
    ],
    tech: ['Python', 'NLP', 'Neural Networks'],
    links: [
      { label: 'chatbot_AI', href: 'https://github.com/SenuriKaveesha/chatbot_AI' },
      { label: 'Chatbot2', href: 'https://github.com/SenuriKaveesha/Chatbot2' },
    ],
    featured: true,
  },
  {
    title: 'Cloud-Native Monitoring Application',
    period: '2024',
    description:
      'A real-time system monitoring tool tracking CPU, memory, and disk performance with sub-2-second refresh, containerized and deployed on AWS/Kubernetes.',
    highlights: [
      'Live metrics with <2s latency refresh rate',
      'Containerized with Docker, orchestrated via Kubernetes, shipped through AWS ECR',
    ],
    tech: ['Python', 'Flask', 'psutil', 'Docker', 'Kubernetes', 'AWS (ECR)'],
    links: [{ label: 'monitoring_App', href: 'https://github.com/SenuriKaveesha/monitoring_App' }],
    featured: true,
  },
  {
    title: 'Data Mining & ML Prediction Web App',
    period: '2023 · Group project',
    description:
      'Refined data mining and machine learning algorithms into an interactive Streamlit application, extracting actionable insights through pattern recognition and trend analysis.',
    highlights: [
      'Streamlined prediction accuracy by 20%',
      'Boosted operational efficiency by 15%',
    ],
    tech: ['Python', 'Streamlit', 'Google Colab'],
    links: [
      { label: 'FDM_Mini_Project', href: 'https://github.com/IT21925290/FDM_Mini_Project' },
      { label: 'IRWA_Project', href: 'https://github.com/IT21925290/IRWA_Project' },
    ],
  },
  {
    title: 'Garbage Management System',
    period: '2023 · Group project',
    description:
      'A full-stack management system built for the Balangoda local council to streamline waste collection scheduling and reporting.',
    highlights: [
      'End-to-end MERN-style stack with a Next.js layer',
      'Delivered for a real municipal client use case',
    ],
    tech: ['HTML5', 'CSS3', 'MongoDB', 'Node.js', 'Express', 'React', 'MySQL', 'Next.js'],
    links: [{ label: 'Repository', href: 'https://github.com/SLIITITP/y2_s2_wd_it_01-itp_wd_b01_g_09' }],
  },
];

export const copywritingSamples = [
  {
    type: 'Landing Page',
    product: 'FlowAI',
    context: 'Hero and feature section for an AI workflow-automation SaaS. Spec work.',
    content: {
      eyebrow: 'Now in public beta',
      headline: 'Your busywork, automated before your coffee gets cold.',
      subheadline:
        'FlowAI watches how your team works, then builds the automations for you — no flowcharts, no dev time, no guesswork.',
      ctaPrimary: 'Start automating free',
      ctaSecondary: 'Watch a 2-min demo',
      features: [
        {
          title: 'Set it up in one sentence',
          body: 'Tell FlowAI what you want automated in plain English. It builds the workflow, you approve it.',
        },
        {
          title: 'Plays well with your stack',
          body: 'Connects to 40+ tools out of the box, from Slack to Salesforce — no API keys required.',
        },
        {
          title: 'Gets smarter with every run',
          body: 'FlowAI learns from the edits you make and quietly improves the workflow next time.',
        },
      ],
      closer: "Join 2,400+ teams who stopped doing the same task twice.",
    },
  },
  {
    type: 'Product Description',
    product: 'SmartNote AI',
    context: 'App-store style product page copy for an AI note-taking app. Spec work.',
    content: {
      title: 'SmartNote AI — notes that organize themselves',
      tagline: 'Capture the thought. Let SmartNote handle the rest.',
      description:
        "SmartNote AI turns scattered thoughts into structured notes automatically. Speak, type, or paste in a messy brain-dump, and SmartNote tags it, links it to related notes, and files it away before you've finished your sentence. No more digging through 40 untitled notes to find the one idea you actually needed.",
      features: [
        {
          title: 'Auto-tagging & smart folders',
          body: 'Every note finds its place without you lifting a finger.',
        },
        {
          title: 'Voice-to-structured-note in seconds',
          body: 'Ramble into your phone, get back a clean summary with action items.',
        },
        {
          title: 'Ask your notes anything',
          body: "Search by meaning, not just keywords — try 'what did I decide about pricing last month?'",
        },
      ],
      closer: 'Available on iOS, Android, and web. Free to start.',
    },
  },
  {
    type: 'Marketing Email',
    product: 'FlowAI',
    context: 'Day-3 onboarding nudge for trial users who haven’t built an automation yet. Spec work.',
    content: {
      subject: "You're one sentence away from your first automation",
      preview: 'Most FlowAI users save 3+ hours in their first week. Here’s how to get there today.',
      greeting: 'Hi [First Name],',
      paragraphs: [
        "Quick one — you signed up for FlowAI a few days ago but haven't built your first automation yet. That's usually the moment people either become FlowAI power users, or quietly forget we exist. Let's make it the first one.",
        'Here’s the fastest way in: open FlowAI, type what you want to automate in plain English — something like "send me a Slack message when a high-value deal closes in HubSpot" — and let FlowAI build it. Takes about 90 seconds.',
      ],
      cta: 'Build my first automation',
      signoff: 'If you get stuck, just reply to this email — a real person (not a bot) will help you set it up.\n\n— The FlowAI Team',
      ps: 'P.S. Teams that automate one workflow in their first week are 4x more likely to stick around. Might as well be you.',
    },
  },
];

export const copywritingApproach =
  'I focus on clear, audience-first copy that turns technical features into meaningful benefits. My background in AI and software engineering helps me understand complex products quickly and communicate them in language that feels simple, human, and persuasive.';

export const education = {
  degree: 'BSc (Hons) in Information Technology — Specializing in Data Science',
  school: 'Sri Lanka Institute of Information Technology (SLIIT)',
  period: '2021 — 2025',
};

export const certifications = [
  {
    name: 'Programming for Everybody (Getting Started with Python)',
    issuer: 'University of Michigan',
  },
  {
    name: 'OCI 2025 Certified AI Foundations Associate',
    issuer: 'Oracle Cloud Infrastructure',
  },
];

export const activities = [
  'IEEE Student Member, SLIIT',
  'Leo Club at SLIIT',
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'copywriting', label: 'Copywriting' },
  { id: 'research', label: 'Research' },
  { id: 'contact', label: 'Contact' },
];
