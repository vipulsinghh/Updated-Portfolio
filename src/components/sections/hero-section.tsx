
'use client';
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import TypingAnimation from "@/components/ui/typing-animation";
import { ArrowRightIcon, BriefcaseIcon, HandIcon, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";
// import { socialLinks } from "@/lib/data"; // Not strictly needed here as links are hardcoded below

export default function HeroSection() {
  const textsToType = [
    "Freelance Software Developer",
    "AI Automation Expert",
    "Web App Specialist",
    "Custom Software Solutions",
  ];

  const heroSocialLinks = [
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

  return (
    <section id="hero" className="relative min-h-[calc(100vh-5rem)] flex items-center py-12 md:py-20 bg-background text-foreground">
      <div className="absolute inset-0 opacity-[0.03] overflow-hidden">
        {/* Future: Add subtle background patterns like faint stars or grid lines if desired */}
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side: Text */}
          <div className="md:text-left text-center">
            <div className="inline-flex items-center gap-2 bg-card text-sm text-accent px-3 py-1.5 rounded-full mb-4 border border-accent/30 shadow-sm">
              <HandIcon className="h-4 w-4" />
              <span>Hi there! I'm Vipul</span>
            </div>
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 leading-tight">
              Vipul Kumar Singh
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl font-medium text-foreground mb-6 h-8 sm:h-10 lg:h-12">
              <TypingAnimation texts={textsToType} className="text-accent font-headline" />
            </div>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              Crafting innovative software solutions with a focus on AI automation and modern web technologies. Let&apos;s build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 mb-6">
              <Button
                size="lg"
                asChild
                className="bg-accent text-background hover:bg-accent/90 font-semibold animate-hero-pulse px-6 py-3 sm:px-8 gradient-border-hover-effect rounded-lg w-full sm:w-auto"
              >
                <Link href="#projects">
                  <BriefcaseIcon className="mr-2 h-5 w-5" />
                  View My Work
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="text-accent border-accent hover:bg-accent/10 hover:text-accent/90 font-semibold px-6 py-3 sm:px-8 rounded-lg w-full sm:w-auto"
              >
                <Link href="#connect">
                  Get In Touch
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            {/* Social and Contact Icons */}
            <div className="flex justify-center md:justify-start items-center space-x-3 sm:space-x-4">
              {heroSocialLinks.map((link) => (
                <Button variant="ghost" size="icon" asChild key={link.name} className="text-muted-foreground hover:text-accent h-9 w-9 sm:h-10 sm:w-10">
                  <Link href={link.url} target={link.url.startsWith('http') ? '_blank' : undefined} rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined} aria-label={link.name}>
                    <link.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Right side: Image */}
          <div className="w-full flex justify-center items-center md:justify-end mt-8 md:mt-0">
            <div className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden shadow-xl border-4 border-accent/50 gradient-border-hover-effect">
              <Image
                src="/images/Portflio Profile Hero Sec.PNG"
                alt="Vipul Kumar Singh - Profile Picture"
                layout="fill"
                objectFit="cover"
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
