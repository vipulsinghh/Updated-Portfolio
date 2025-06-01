
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import ChatbotSection from "@/components/sections/chatbot-section";
import ConnectSection from "@/components/sections/connect-section"; 
import EducationSection from "@/components/sections/education-section";
import SkillsSection from "@/components/sections/skills-section";
import ProjectsSection from "@/components/sections/projects-section";
import ExperienceSection from "@/components/sections/experience-section";
import PricingSection from "@/components/sections/pricing-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground"> {/* Ensured text-foreground is default */}
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ChatbotSection />
        <ConnectSection /> 
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
