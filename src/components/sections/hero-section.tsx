import Link from "next/link";
import { Button } from "@/components/ui/button";
import TypingAnimation from "@/components/ui/typing-animation";
import { ArrowRightIcon, BriefcaseIcon } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  const textsToType = [
    "Freelance Software Developer",
    "AI Automation Expert",
    "Web App Specialist",
    "Custom Software Solutions",
  ];

  return (
    <section id="hero" className="relative min-h-[calc(100vh-5rem)] flex items-center py-16 md:py-24 bg-background text-foreground">
      <div className="absolute inset-0 opacity-[0.03] overflow-hidden">
         {/* Subtle background pattern or animation could go here if desired */}
         {/* Example: A very faint grid or dot pattern */}
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="md:text-left text-center">
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Vipul Kumar Singh
            </h1>
            <div className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground mb-8 h-10">
              <TypingAnimation texts={textsToType} className="text-accent font-headline" />
            </div>
            <p className="text-lg text-muted-foreground mb-12">
              Crafting innovative software solutions with a focus on AI automation and modern web technologies. Let&apos;s build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
              <Button 
                size="lg" 
                asChild 
                className="bg-primary text-primary-foreground hover:bg-primary/90 animate-hero-pulse px-8 py-3"
              >
                <Link href="#projects">
                  <BriefcaseIcon className="mr-2 h-5 w-5" />
                  View My Work
                </Link>
              </Button>
              <Button 
                variant="link" 
                size="lg" 
                asChild 
                className="text-muted-foreground hover:text-primary px-8 py-3"
              >
                <Link href="#connect">
                  Get In Touch
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center perspective">
            {/* Placeholder for 3D Cube */}
            <Image 
              src="https://placehold.co/400x400.png/000000/FFFFFF?text=3D+Cube" 
              alt="3D Rotating Cube Placeholder" 
              width={400} 
              height={400}
              className="rounded-lg object-contain"
              data-ai-hint="3d rotating cube animation dark glossy"
            />
            {/* 
              A more complex 3D element would go here. For example, using three.js or a CSS animation.
              For a simple CSS 3D effect (non-interactive spinning cube):
              <div className="w-64 h-64 relative preserve-3d animate-spin-slow">
                <div className="absolute w-full h-full bg-slate-700/50 border border-slate-500 flex items-center justify-center transform translate-z-32">Front</div>
                <div className="absolute w-full h-full bg-slate-700/50 border border-slate-500 flex items-center justify-center transform rotate-y-90 translate-z-32">Right</div>
                <div className="absolute w-full h-full bg-slate-700/50 border border-slate-500 flex items-center justify-center transform rotate-y-180 translate-z-32">Back</div>
                <div className="absolute w-full h-full bg-slate-700/50 border border-slate-500 flex items-center justify-center transform rotate-y-270 translate-z-32">Left</div>
                <div className="absolute w-full h-full bg-slate-700/50 border border-slate-500 flex items-center justify-center transform rotate-x-90 translate-z-32">Top</div>
                <div className="absolute w-full h-full bg-slate-700/50 border border-slate-500 flex items-center justify-center transform rotate-x-270 translate-z-32">Bottom</div>
              </div>
              And add `animate-spin-slow` to tailwind.config.ts keyframes and animation.
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
