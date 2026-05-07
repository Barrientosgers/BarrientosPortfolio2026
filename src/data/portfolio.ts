/**
 * Central portfolio data file
 * --------------------------
 * Edit this single file to update all site content. Keep the shape
 * simple: strings, arrays, and small objects. Comments explain each
 * section and show where to add images (place images in `src/assets`).
 *
 * Goals:
 * - Update the whole site by editing only this file.
 * - Keep data well-documented and beginner-friendly.
 */

// ----------------------
// Profile / Site meta
// ----------------------
export const profile = {
  // Display name shown in the header
  name: 'Gerson Barrientos',
  // Short subtitle shown in the hero eyebrow
  subtitle: 'Software Engineer | AI Systems Engineer | Cloud & Reliability',
  // Small location string used in the aside card
  location: 'Redmond, WA',
  // Path to a profile image (optional). Put image files in `src/assets/`.
  // Example: '/src/assets/profile.jpg'
  // If you add images, use the public path or import them where needed.
  image: '/src/assets/profile.jpg', // <-- optional; comment out if not used
};

// ----------------------
// Navigation (header links)
// ----------------------
export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Beyond Engineering', href: '#beyond' },
  { label: 'Contact', href: '#contact' },
];

// ----------------------
// Hero stats (small cards under hero)
// ----------------------
export const heroStats = [
  { value: 'Distributed systems', label: 'Reliable software under pressure' },
  { value: 'Cloud + QA', label: 'Testing and release confidence across the stack' },
  { value: 'AI systems', label: 'Practical, responsible use of LLMs' },
];

// ----------------------
// About copy
// ----------------------
export const aboutCopy =
  `I’m a software engineer based in Redmond, WA. I’ve worked at Google, Amazon, and Super Purposes, and I like building systems that stay reliable under real-world pressure. My background spans cloud platforms, QA automation, distributed systems, and responsible AI applications. I also hold a master’s degree in AI Software Engineering from WGU.`;

// ----------------------
// Skills (grouped for SkillCard component)
// To add a new skill group: add an object with title and skills array.
// ----------------------
export const skillGroups = [
  {
    title: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Google Cloud', 'AWS', 'Kubernetes', 'Docker', 'CI/CD'],
  },
  {
    title: 'AI/ML',
    skills: ['Vertex AI', 'Machine Learning', 'LLMs', 'AI Systems'],
  },
  {
    title: 'Testing',
    skills: ['Selenium WebDriver', 'QA Automation', 'Manual Testing', 'Regression Testing'],
  },
  {
    title: 'Systems',
    skills: ['Distributed Systems', 'APIs', 'Microservices', 'Observability', 'Reliability'],
  },
];

// ----------------------
// Experience
// Each item becomes an ExperienceCard. To add a role, append an object.
// ----------------------
export const experiences = [
  {
    company: 'Google',
    role: 'Technical Support Engineer',
    period: 'Experience highlights',
    bullets: [
      'Diagnosed complex production issues, isolated likely root causes, and translated findings into clear next steps for engineering partners.',
      'Improved reliability by documenting repeatable debugging workflows and strengthening incident handoff details.',
      'Worked across teams to unblock customers quickly while protecting system quality and supportability.',
    ],
  },
  {
    company: 'Amazon',
    role: 'Quality Assurance Engineer',
    period: 'Experience highlights',
    bullets: [
      'Built and maintained regression coverage to catch issues early and keep releases stable.',
      'Validated system behavior across cloud-backed services, APIs, and browser-based workflows.',
      'Collaborated with developers and product partners to improve test signal, release confidence, and operational clarity.',
    ],
  },
  {
    company: 'Super Purposes',
    role: 'Software Engineer',
    period: 'Experience highlights',
    bullets: [
      'Developed product features with an emphasis on reliability, maintainability, and smooth user experience.',
      'Supported distributed application behavior through careful debugging, API work, and iterative delivery.',
      'Partnered with cross-functional stakeholders to move from problem definition to production-ready solutions.',
    ],
  },
];

// ----------------------
// Projects
// To add a new project: copy an existing project object and change fields.
// Keep `name` unique (used as React key). Use `featured: true` for one highlighted card.
// You can add an `image` field with a path under `src/assets/` for screenshots.
// ----------------------
export const projects = [
  {
    featured: true,
    name: 'AI Support Triage Assistant',
    description:
      'A support workflow prototype that classifies incoming issues, suggests next actions, and surfaces the right context for faster handoff.',
    stack: ['Python', 'LLMs', 'APIs', 'Vertex AI'],
    status: 'Prototype',
    focus: ['LLM routing and triage', 'Context shaping for responders', 'Practical support workflow design'],
    github: 'https://github.com/your-github/ai-support-triage-assistant',
    live: 'https://example.com',
    // image: '/src/assets/ai-support.png', // <-- optional screenshot path
  },
  {
    name: 'Cloud Reliability Dashboard',
    description:
      'A dashboard concept for tracking service health, latency trends, and incident signals across cloud-native workloads.',
    stack: ['TypeScript', 'Google Cloud', 'Observability', 'React'],
    status: 'Concept',
    focus: ['Service health visibility', 'Latency and incident signals', 'Operational clarity'],
    github: 'https://github.com/your-github/cloud-reliability-dashboard',
    live: 'https://example.com',
  },
  {
    name: 'LLM Local Pipeline with Docker',
    description:
      'A containerized local pipeline for experimenting with LLM workflows, reproducible environments, and model evaluation.',
    stack: ['Docker', 'Python', 'LLMs', 'Automation'],
    status: 'Prototype',
    focus: ['Reproducible setup', 'Containerized workflow', 'Evaluation and iteration'],
    github: 'https://github.com/your-github/llm-local-pipeline',
    live: 'https://example.com',
  },
  {
    name: 'CleanTrack Apartment Task Manager',
    description:
      'A lightweight task manager for households and apartment teams with clear assignments, reminders, and progress visibility.',
    stack: ['TypeScript', 'React', 'APIs', 'Productivity'],
    status: 'App concept',
    focus: ['Simple task ownership', 'Reminder-friendly UX', 'Progress visibility'],
    github: 'https://github.com/your-github/cleantrack',
    live: 'https://example.com',
  },
  {
    name: 'Browser Extension for Web Compatibility',
    description:
      'A browser extension concept that checks common compatibility issues and helps teams spot client-side problems faster.',
    stack: ['JavaScript', 'Browser APIs', 'QA Automation'],
    status: 'Utility',
    focus: ['Compatibility checks', 'Browser API usage', 'QA automation support'],
    github: 'https://github.com/your-github/web-compat-extension',
    live: 'https://example.com',
  },
];

// ----------------------
// Beyond Engineering (endurance sports section)
// ----------------------
export const beyondEngineering =
  'I train for endurance sports including Ironman, running, triathlons, and mountaineering. That work reinforces the same values I bring to engineering: discipline, consistency, resilience, and the ability to solve hard problems one step at a time.';

// ----------------------
// Contact and social links
// ----------------------
export const contact = {
  email: 'gersonbarrientos62@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gersonbarrientos/',
  github: 'https://github.com/Barrientosgers',
};

// Default export (optional) — convenient single import if you prefer:
export default {
  profile,
  navigation,
  heroStats,
  aboutCopy,
  skillGroups,
  experiences,
  projects,
  beyondEngineering,
  contact,
};
