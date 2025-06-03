
import { Code2Icon, ServerIcon, BrainCircuitIcon, DatabaseIcon, TerminalIcon, BriefcaseIcon, GraduationCapIcon, UsersIcon, DollarSignIcon, GithubIcon, LinkedinIcon, GlobeIcon, BarChartIcon, LayersIcon, BotIcon, PaletteIcon, MailIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface NavLink {
  href: string;
  label: string;
  icon?: LucideIcon;
}

export const navLinks: NavLink[] = [
  { href: "#hero", label: "Home" },
  { href: "#ai-assistant", label: "AI Assistant", icon: BotIcon },
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
    id: "paytm-clone",
    title: "Paytm Wallet Clone",
    description: "Implemented user authentication and authorization. Designed relational database schema using MongoDB and integrated API.",
    longDescription: "Implemented user authentication and authorization features for a Paytm wallet clone. Designed a relational database schema using MongoDB and integrated necessary APIs for core wallet functionalities.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "API Integration"],
    imageUrl: "https://placehold.co/600x400.png",
    imageAiHint: "digital wallet payment",
    githubUrl: "https://github.com/vipulsinghh",
    liveDemoUrl: "#",
  },
  {
    id: "twitter-clone",
    title: "Twitter Clone",
    description: "Developed REST APIs for data retrieval and updates. Implemented real-time push notifications using Socket.IO and React.",
    longDescription: "Developed REST APIs for data retrieval and updates for a Twitter clone. Implemented real-time push notifications using Socket.IO and React to enhance user engagement and provide instant updates.",
    techStack: ["React", "Node.js", "Express.js", "Socket.IO", "REST APIs"],
    imageUrl: "https://placehold.co/600x400.png",
    imageAiHint: "social media feed",
    githubUrl: "https://github.com/vipulsinghh",
    liveDemoUrl: "#",
  },
  {
    id: "personal-portfolio-website",
    title: "Personal Portfolio Website",
    description: "Enhanced skills in HTML, CSS, JavaScript, and responsive design. Implemented dynamic content and optimized for user experience.",
    longDescription: "This very website, showcasing skills and projects. Enhanced skills in HTML, CSS, JavaScript, and responsive design. Implemented dynamic content and optimized for user experience using Next.js, Tailwind CSS, and Genkit.",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Genkit"],
    imageUrl: "https://placehold.co/600x400.png",
    imageAiHint: "portfolio site",
    githubUrl: "https://github.com/vipulsinghh",
    liveDemoUrl: "#",
  },
  {
    id: "micro-instagram-backend",
    title: "Micro Instagram Backend",
    description: "Developed RESTful APIs for user and post management. Implemented features like user authentication, authorization, and data validation for a robust backend system.",
    longDescription: "Developed RESTful APIs for user and post management for a micro Instagram backend. Implemented features like user authentication, authorization, and data validation to ensure a robust and secure backend system.",
    techStack: ["Node.js", "Express.js", "MongoDB", "JWT", "API Design"],
    imageUrl: "https://placehold.co/600x400.png",
    imageAiHint: "photo API backend",
    githubUrl: "https://github.com/vipulsinghh",
  },
  {
    id: "image-entities-extraction",
    title: "Image Entities Extraction",
    description: "Developed a dimension extraction pipeline using Google Vision API and CNNs. Achieved 65% accuracy on 200,000 samples.",
    longDescription: "Developed a dimension extraction pipeline using Google Vision API and Convolutional Neural Networks (CNNs). Processed a large dataset of 200,000 samples and achieved 65% accuracy in extracting entities.",
    techStack: ["Python", "Google Vision API", "TensorFlow", "Keras", "CNNs"],
    imageUrl: "https://placehold.co/600x400.png",
    imageAiHint: "AI image analysis",
    githubUrl: "https://github.com/vipulsinghh",
  },
  {
    id: "ai-trip-matching-app",
    title: "AI-Powered Group Trip Matching App",
    description: "Developed a platform for personalized trip recommendations using AI/ML. Designed UI/UX with Figma and implemented features.",
    longDescription: "Developed a platform for personalized group trip recommendations using AI/ML algorithms. Designed the UI/UX with Figma and implemented core features including user profiling, matching logic, and trip planning capabilities.",
    techStack: ["Python", "Scikit-learn", "Next.js", "Firebase", "Figma"],
    imageUrl: "https://placehold.co/600x400.png",
    imageAiHint: "travel planning AI",
    githubUrl: "https://github.com/vipulsinghh",
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
