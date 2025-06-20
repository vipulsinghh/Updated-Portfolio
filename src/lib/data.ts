
import { Code2Icon, ServerIcon, BrainCircuitIcon, DatabaseIcon, TerminalIcon, BriefcaseIcon, GraduationCapIcon, UsersIcon, DollarSignIcon, GithubIcon, LinkedinIcon, GlobeIcon, BarChartIcon, LayersIcon, BotIcon, PaletteIcon, MailIcon, MessageCircleIcon, PhoneIcon, FileTextIcon, FileCode2Icon, TypeIcon, Globe2Icon, AtomIcon, ToyBrickIcon, ServerCogIcon, NetworkIcon, WindIcon, FileCodeIcon, TerminalSquareIcon, DatabaseZapIcon, BrainCogIcon, EyeIcon, MessageCircleHeartIcon, LeafIcon, DatabaseBackupIcon, CloudCogIcon, ContainerIcon, CloudIcon, ShipWheelIcon, WrenchIcon, GitForkIcon, CpuIcon, BinaryIcon, HardDriveIcon, RouterIcon, MicroscopeIcon, UsersRoundIcon, MessagesSquareIcon, HandshakeIcon, PuzzleIcon, AwardIcon, BoxIcon } from 'lucide-react';
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
    degree: "B.Tech. (CSE)",
    institution: "Sharda University",
    year: "Expected 2025",
    description: "Pursuing a Bachelor of Technology in Computer Science and Engineering, focusing on core software engineering principles and advanced computing topics.",
    icon: GraduationCapIcon,
  },
  {
    degree: "Minor in AI",
    institution: "IIT Ropar",
    year: "Expected 2025 (Pursuing)",
    description: "Completing a minor degree in Artificial Intelligence, gaining specialized knowledge in machine learning, data science, and AI applications.",
    icon: BrainCircuitIcon,
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
    name: "Programming Languages",
    icon: Code2Icon,
    skills: [
      { name: "C++", icon: FileCode2Icon, level: 85 },
      { name: "Python", icon: ToyBrickIcon, level: 80 },
      { name: "JavaScript", icon: Code2Icon, level: 95 },
      { name: "TypeScript", icon: TypeIcon, level: 90 },
    ],
  },
  {
    name: "Web Development",
    icon: Globe2Icon,
    skills: [
      { name: "Next.js", icon: BoxIcon, level: 95 },
      { name: "React", icon: AtomIcon, level: 90 },
      { name: "Node.js", icon: ServerIcon, level: 85 },
      { name: "Express.js", icon: ServerCogIcon, level: 80 },
      { name: "API Design", icon: NetworkIcon, level: 88 },
      { name: "Tailwind CSS", icon: WindIcon, level: 85 },
      { name: "HTML5 & CSS3", icon: FileCodeIcon, level: 90 },
    ],
  },
  {
    name: "AI & Machine Learning",
    icon: BrainCircuitIcon,
    skills: [
      { name: "Genkit", icon: BotIcon, level: 80 },
      { name: "Prompt Programming", icon: TerminalSquareIcon, level: 80 },
      { name: "Data Handling", icon: DatabaseZapIcon, level: 75 },
      { name: "Neural Networks & LLMs", icon: BrainCogIcon, level: 75 },
      { name: "Computer Vision (CV)", icon: EyeIcon, level: 70 },
      { name: "Natural Language Processing (NLP)", icon: MessageCircleHeartIcon, level: 70 },
    ],
  },
  {
    name: "Databases",
    icon: DatabaseIcon,
    skills: [
      { name: "MongoDB", icon: LeafIcon, level: 85 },
      { name: "PostgreSQL", icon: DatabaseBackupIcon, level: 75 },
      { name: "MySQL", icon: DatabaseBackupIcon, level: 70 },
    ],
  },
  {
    name: "DevOps, Cloud & Tools",
    icon: CloudCogIcon,
    skills: [
      { name: "Docker", icon: ContainerIcon, level: 70 },
      { name: "AWS", icon: CloudIcon, level: 65 },
      { name: "Kubernetes", icon: ShipWheelIcon, level: 60 },
      { name: "Jenkins", icon: WrenchIcon, level: 60 },
      { name: "GitLab CI/CD", icon: GitForkIcon, level: 65 },
      { name: "Git & GitHub", icon: GithubIcon, level: 90 },
    ],
  },
  {
    name: "Core CS & CP",
    icon: CpuIcon,
    skills: [
      { name: "Data Structures & Algorithms", icon: BinaryIcon, level: 90 },
      { name: "Operating Systems", icon: HardDriveIcon },
      { name: "Networking Fundamentals", icon: RouterIcon },
      { name: "DBMS Concepts", icon: DatabaseIcon },
      { name: "Computer Architecture", icon: MicroscopeIcon },
    ],
  },
  {
    name: "Professional Skills",
    icon: UsersRoundIcon,
    skills: [
      { name: "Communication", icon: MessagesSquareIcon },
      { name: "Teamwork", icon: HandshakeIcon },
      { name: "Problem-solving", icon: PuzzleIcon },
      { name: "Leadership", icon: AwardIcon },
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
    longDescription: "Implemented user authentication and authorization features for a Paytm wallet clone. Designed a relational database schema using MongoDB and integrated necessary APIs for core wallet functionalities such as balance management, peer-to-peer transfers, and transaction history.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
    imageUrl: "https://i.pinimg.com/564x/d2/3c/bf/d23cbf926d0672238d35ff3486a8c7a3.jpg",
    imageAiHint: "payment app interface",
    githubUrl: "https://github.com/vipulsinghh/Paytm_Clone_Basic",
    liveDemoUrl: "#",
  },
  {
    id: "twitter-clone",
    title: "Twitter Clone",
    description: "Developed REST APIs for data retrieval and updates. Implemented real-time push notifications using Socket.IO and React.",
    longDescription: "Developed REST APIs for data retrieval and updates for a Twitter clone. Implemented real-time push notifications using Socket.IO and React to enhance user engagement and provide instant updates for tweets, DMs, and notifications. Features include tweeting, following users, and a live feed.",
    techStack: ["React", "Node.js", "Express.js", "Socket.IO", "MongoDB"],
    imageUrl: "https://store-images.s-microsoft.com/image/apps.45406.9007199266244427.4d45042b-d7a5-4a83-be66-97779553b24d.2a88a418-b96d-44a6-ad4f-5e0ee6289b2c",
    imageAiHint: "social media feed",
    githubUrl: "https://github.com/vipulsinghh/twitter-clone",
    liveDemoUrl: "#",
  },
  {
    id: "personal-portfolio-website-project",
    title: "Personal Portfolio Website (This Site)",
    description: "Enhanced skills in HTML, CSS, JavaScript, and responsive design. Implemented dynamic content and optimized for user experience.",
    longDescription: "The portfolio website you are currently viewing. Designed and developed to showcase my skills and projects. It features a responsive design using Tailwind CSS and ShadCN UI components, interactive UI elements, an AI chatbot powered by Genkit for answering visitor questions, and dynamic content sections for projects, experience, and skills. Hosted on Firebase.",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "ShadCN UI", "Genkit", "Firebase"],
    imageUrl: "/images/Portflio Profile Hero Sec.PNG",
    imageAiHint: "developer portfolio",
    githubUrl: "https://github.com/vipulsinghh/Portfolio_Website",
    liveDemoUrl: "#",
  },
  {
    id: "micro-instagram-backend",
    title: "Micro Instagram Backend",
    description: "Developed RESTful APIs for user and post management. Implemented features like user authentication, authorization, and data validation for a robust backend system.",
    longDescription: "Developed RESTful APIs for user and post management for a micro Instagram backend. Implemented features like user authentication (JWT-based), authorization, data validation, image uploads, and relationship management (followers/following). Focused on creating a scalable and secure backend architecture.",
    techStack: ["Node.js", "Express.js", "MongoDB", "JWT", "Multer"],
    imageUrl: "https://download.logo.wine/logo/Instagram/Instagram-Logo.wine.png",
    imageAiHint: "photo sharing app",
    githubUrl: "https://github.com/vipulsinghh/Micro-Instagram_Backend",
  },
  {
    id: "image-entities-extraction",
    title: "Image Entities Extraction",
    description: "Developed a dimension extraction pipeline using Google Vision API and CNNs. Achieved 65% accuracy on 200,000 samples.",
    longDescription: "Developed a dimension extraction pipeline using Google Vision API for initial object detection and Convolutional Neural Networks (CNNs) for fine-tuning entity recognition from images. Processed a large dataset of 200,000 samples and achieved 65% accuracy in extracting specific dimensional entities for an industrial application.",
    techStack: ["Python", "Google Vision API", "TensorFlow", "Keras", "CNNs", "OpenCV"],
    imageUrl: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-66ab7658502ef_listing_image_ml_challenge__1_.jpg?d=200x200",
    imageAiHint: "machine learning diagram",
    githubUrl: "https://github.com/vipulsinghh/Image_Dimension_Extraction",
  },
  {
    id: "ai-trip-matching-app",
    title: "AI-Powered Group Trip Matching App",
    description: "Developed a platform for personalized trip recommendations using AI/ML. Designed UI/UX with Figma and implemented features.",
    longDescription: "Developed a platform for personalized group trip recommendations using AI/ML algorithms to match users with similar travel preferences, budgets, and interests. Designed the UI/UX with Figma and implemented core features including user profiling, a collaborative trip planning interface, and a matching logic based on compatibility scores.",
    techStack: ["Python", "Scikit-learn", "Next.js", "Firebase", "Figma"],
    imageUrl: "https://iplan.ai/wp-content/uploads/2022/02/destinations.png",
    imageAiHint: "travel planning app",
    githubUrl: "https://github.com/vipulsinghh/AI_Trip_Matcher",
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
    role: "Web Developer",
    company: "Neophyte Consulting Services",
    companyLogoUrl: "https://placehold.co/100x100.png",
    companyLogoAiHint: "consulting logo",
    duration: "Apr 2024 - Jun 2024",
    responsibilities: [
      "Learned and applied skills in the MERN stack (MongoDB, Express.js, React, Node.js).",
      "Developed full-stack web applications, managed databases, created RESTful APIs, and built dynamic, responsive user interfaces.",
    ],
    icon: BriefcaseIcon,
  },
  {
    role: "AIML Associate Intern",
    company: "Techgyan Technologies",
    companyLogoUrl: "https://placehold.co/100x100.png",
    companyLogoAiHint: "tech company logo",
    duration: "Jun 2023 - Aug 2023",
    responsibilities: [
      "Developed a predictive Machine Learning model improving data analytics by 20%.",
      "Collaborated with a team of 4 to design and implement a project management tool.",
      "Refined algorithmic efficiency for project workflows, reducing process time by 15%.",
    ],
    icon: BrainCircuitIcon,
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

export const heroSocialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/vipulsinghh",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vipul-kumar-singh-779118193/",
    icon: LinkedinIcon,
  },
  {
    name: "Email",
    url: "mailto:vipulsingh0110@gmail.com",
    icon: MailIcon,
  },
  {
    name: "Phone",
    url: "tel:+917972883854",
    icon: PhoneIcon,
  },
];
