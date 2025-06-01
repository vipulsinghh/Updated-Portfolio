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
    <section id="hero" className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-16 md:py-24 bg-gradient-to-br from-background via-secondary to-background">
      <div className="absolute inset-0 opacity-5 overflow-hidden">
         {/* Subtle background pattern or animation could go here */}
      </div>
      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6">
            Vipul Kumar Singh
          </h1>
          <div className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground mb-8 h-10">
            <TypingAnimation texts={textsToType} className="text-accent font-headline" />
          </div>
          <p className="text-lg text-muted-foreground mb-12">
            Crafting innovative software solutions with a focus on AI automation and modern web technologies. Let&apos;s build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" asChild className="animate-hero-pulse">
              <Link href="#projects">
                <BriefcaseIcon className="mr-2 h-5 w-5" />
                View My Work
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#connect"> {/* Updated href */}
                Get In Touch
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      {/* Optional: Image or illustration */}
      {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl opacity-20">
        <Image src="https://placehold.co/1200x400.png" alt="Abstract background" width={1200} height={400} data-ai-hint="abstract tech background" />
      </div> */}
    </section>
  );
};

export default HeroSection;
