import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import EducationSection from "@/components/sections/education-section";
import SkillsSection from "@/components/sections/skills-section";
import ProjectsSection from "@/components/sections/projects-section";
import ExperienceSection from "@/components/sections/experience-section";
import PricingSection from "@/components/sections/pricing-section";
import ChatbotSection from "@/components/sections/chatbot-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <PricingSection />
        <ChatbotSection />
      </main>
      <Footer />
    </div>
  );
}
