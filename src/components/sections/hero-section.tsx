
'use client';
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import TypingAnimation from "@/components/ui/typing-animation";
import { ArrowRightIcon, BriefcaseIcon } from "lucide-react";
// No longer importing 3D components

export default function HeroSection() {
  const textsToType = [
    "Freelance Software Developer",
    "AI Automation Expert",
    "Web App Specialist",
    "Custom Software Solutions",
  ];

  return (
    <section id="hero" className="relative min-h-[calc(100vh-5rem)] flex items-center py-16 md:py-24 bg-background text-foreground">
      <div className="absolute inset-0 opacity-[0.03] overflow-hidden">
        {/* Optional: Add a subtle background pattern or texture here if desired later */}
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left side: Text */}
          <div className="md:text-left text-center">
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Vipul Kumar Singh
            </h1>
            <div className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground mb-8 h-10 md:h-16">
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

          {/* Right side: Static Image */}
          <div className="w-full flex justify-center items-center md:justify-end">
            <div className="relative w-[500px] h-[500px] rounded-full overflow-hidden shadow-xl border-4 border-accent">
              <Image
                src="/images/Portflio Profile Hero Sec.PNG"
                alt="Vipul Kumar Singh - Profile Picture"
                width={500}
                height={500}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
