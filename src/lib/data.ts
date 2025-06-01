
import { Code2Icon, ServerIcon, BrainCircuitIcon, DatabaseIcon, TerminalIcon, BriefcaseIcon, GraduationCapIcon, UsersIcon, DollarSignIcon, GithubIcon, LinkedinIcon, GlobeIcon, BarChartIcon, LayersIcon, BotIcon, PaletteIcon, MailIcon, MessageCircleIcon } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface NavLink {
  href: string;
  label: string;
  icon?: LucideIcon;
}

export const navLinks: NavLink[] = [
  { href: "#hero", label: "Home" },
  { href: "#ai-assistant", label: "AI Assistant", icon: BotIcon }, // New AI Assistant link
  { href: "#connect", label: "Connect", icon: MailIcon },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
];

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  description: string;
  icon?: LucideIcon;
}

export const educationData: EducationItem[] = [
  {
    degree: "Master of Computer Applications",
    institution: "XYZ University",
    year: "2017-2019",
    description: "Focused on advanced software development principles and application design.",
    icon: GraduationCapIcon,
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "ABC College",
    year: "2014-2017",
    description: "Comprehensive study of core computer science concepts.",
    icon: GraduationCapIcon,
  },
];

export interface Skill {
  name: string;
  icon: LucideIcon;
  level?: number; // Optional: 1-100 for progress bar
}

export interface SkillCategory {
  name: string;
  icon: LucideIcon;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    name: "Frontend",
    icon: PaletteIcon,
    skills: [
      { name: "Next.js", icon: Code2Icon, level: 95 },
      { name: "React", icon: Code2Icon, level: 90 },
      { name: "TypeScript", icon: Code2Icon, level: 90 },
      { name: "JavaScript", icon: Code2Icon, level: 95 },
      { name: "Tailwind CSS", icon: Code2Icon, level: 85 },
      { name: "HTML5 & CSS3", icon: Code2Icon, level: 90 },
    ],
  },
  {
    name: "Backend",
    icon: ServerIcon,
    skills: [
      { name: "Node.js", icon: ServerIcon, level: 85 },
      { name: "Python", icon: ServerIcon, level: 80 },
      { name: "Firebase", icon: DatabaseIcon, level: 90 },
      { name: "REST APIs", icon: ServerIcon, level: 88 },
    ],
  },
  {
    name: "AI/ML",
    icon: BrainCircuitIcon,
    skills: [
      { name: "Genkit", icon: BotIcon, level: 80 },
      { name: "AI Automation", icon: BrainCircuitIcon, level: 75 },
      { name: "LangChain", icon: LayersIcon, level: 70 },
    ],
  },
  {
    name: "Tools & Others",
    icon: TerminalIcon,
    skills: [
      { name: "Git & GitHub", icon: GithubIcon, level: 90 },
      { name: "Docker", icon: TerminalIcon, level: 70 },
      { name: "CI/CD", icon: TerminalIcon, level: 65 },
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  imageUrl?: string;
  imageAiHint?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "proj1",
    title: "AI Powered E-commerce Platform",
    description: "Personalized shopping experience using AI recommendations.",
    longDescription: "Developed an e-commerce platform with AI-driven product recommendations, intelligent search, and automated customer support chatbot. Leveraged Next.js for frontend, Firebase for backend, and Genkit for AI features.",
    techStack: ["Next.js", "Firebase", "Genkit", "TypeScript"],
    imageUrl: "https://placehold.co/600x400.png",
    imageAiHint: "ecommerce ai",
    githubUrl: "https://github.com",
    liveDemoUrl: "#",
  },
  {
    id: "proj2",
    title: "Workflow Automation Tool",
    description: "Custom tool to automate repetitive business tasks.",
    longDescription: "Built a web application that allows businesses to design and automate custom workflows. Integrated various third-party APIs and used Node.js for the backend logic.",
    techStack: ["React", "Node.js", "MongoDB", "Python"],
    imageUrl: "https://placehold.co/600x400.png",
    imageAiHint: "workflow automation",
    githubUrl: "https://github.com",
  },
  {
    id: "proj3",
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for analyzing complex datasets.",
    longDescription: "Created a dynamic data visualization dashboard using D3.js and React, enabling users to explore and understand large datasets through interactive charts and graphs.",
    techStack: ["React", "D3.js", "Python", "Flask"],
    imageUrl: "https://placehold.co/600x400.png",
    imageAiHint: "data dashboard",
    liveDemoUrl: "#",
  },
];

export interface ExperienceItem {
  role: string;
  company: string;
  companyLogoUrl?: string;
  companyLogoAiHint?: string;
  duration: string;
  responsibilities: string[];
  icon?: LucideIcon;
}

export const experienceData: ExperienceItem[] = [
  {
    role: "Freelance Software Developer",
    company: "Self-Employed",
    companyLogoUrl: "https://placehold.co/100x100.png",
    companyLogoAiHint: "freelancer logo",
    duration: "2021 - Present",
    responsibilities: [
      "Developed custom software solutions for various clients.",
      "Implemented AI-powered automation for business processes.",
      "Designed and built responsive web applications using modern frameworks.",
      "Managed full project lifecycle from requirements gathering to deployment.",
    ],
    icon: BriefcaseIcon,
  },
  {
    role: "Software Engineer",
    company: "Tech Solutions Inc.",
    companyLogoUrl: "https://placehold.co/100x100.png",
    companyLogoAiHint: "tech company",
    duration: "2019 - 2021",
    responsibilities: [
      "Contributed to the development of enterprise-level web applications.",
      "Collaborated with cross-functional teams in an Agile environment.",
      "Worked on backend development using Node.js and Python.",
      "Participated in code reviews and mentored junior developers.",
    ],
    icon: BriefcaseIcon,
  },
];

export interface PricingTier {
  title: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  icon?: LucideIcon;
  popular?: boolean;
}

export const pricingData: PricingTier[] = [
  {
    title: "Custom Software Development",
    price: "Contact for Quote",
    description: "Tailored software solutions to meet your unique business needs.",
    features: ["Requirement Analysis", "Custom Design & Development", "Scalable Architecture", "Ongoing Support"],
    ctaText: "Get a Quote",
    icon: Code2Icon,
  },
  {
    title: "AI Automation",
    price: "Contact for Quote",
    description: "Leverage AI to automate tasks and improve efficiency.",
    features: ["Process Assessment", "AI Model Integration", "Custom Automation Scripts", "Performance Monitoring"],
    ctaText: "Discuss AI Solutions",
    icon: BrainCircuitIcon,
    popular: true,
  },
  {
    title: "Web App Development",
    price: "Contact for Quote",
    description: "Modern, responsive, and high-performance web applications.",
    features: ["Full-Stack Development", "Responsive Design", "API Integration", "Deployment & Maintenance"],
    ctaText: "Start Your Project",
    icon: GlobeIcon,
  },
];


export const socialLinks = [
  { name: "GitHub", url: "https://github.com/vipulsinghh", icon: GithubIcon },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/vipul-kumar-singh-779118193/", icon: LinkedinIcon },
];

    
