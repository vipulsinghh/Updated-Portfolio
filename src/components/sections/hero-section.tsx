
'use client';
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import TypingAnimation from "@/components/ui/typing-animation";
import { ArrowRightIcon, BriefcaseIcon, HandIcon, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";
import { socialLinks } from "@/lib/data"; // To get GitHub and LinkedIn URLs if needed, though direct use is fine here.

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
    <section id="hero" className="relative min-h-[calc(100vh-5rem)] flex items-center py-16 md:py-24 bg-background text-foreground">
      <div className="absolute inset-0 opacity-[0.03] overflow-hidden">
        {/* Future: Add subtle background patterns like faint stars or grid lines if desired */}
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left side: Text */}
          <div className="md:text-left text-center">
            <div className="inline-flex items-center gap-2 bg-card text-sm text-accent px-3 py-1.5 rounded-full mb-4 border border-accent/30 shadow-sm">
              <HandIcon className="h-4 w-4" />
              <span>Hi there! I'm Vipul</span>
            </div>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-6 leading-tight">
              Vipul Kumar Singh
            </h1>
            <div className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground mb-8 h-10 md:h-16">
              <TypingAnimation texts={textsToType} className="text-accent font-headline" />
            </div>
            <p className="text-lg text-muted-foreground mb-10"> {/* Adjusted margin for new icons */}
              Crafting innovative software solutions with a focus on AI automation and modern web technologies. Let&apos;s build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 mb-6"> {/* Added margin bottom */}
              <Button
                size="lg"
                asChild
                className="bg-accent text-background hover:bg-accent/90 font-semibold animate-hero-pulse px-8 py-3 gradient-border-hover-effect rounded-lg"
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
                className="text-accent border-accent hover:bg-accent/10 hover:text-accent/90 font-semibold px-8 py-3 rounded-lg"
              >
                <Link href="#connect">
                  Get In Touch
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            {/* Social and Contact Icons */}
            <div className="flex justify-center md:justify-start items-center space-x-4">
              {heroSocialLinks.map((link) => (
                <Button variant="ghost" size="icon" asChild key={link.name} className="text-muted-foreground hover:text-accent">
                  <Link href={link.url} target={link.url.startsWith('http') ? '_blank' : undefined} rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined} aria-label={link.name}>
                    <link.icon className="h-6 w-6" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Right side: Image */}
          <div className="w-full flex justify-center items-center md:justify-end">
            <div className="relative w-[500px] h-[500px] rounded-full overflow-hidden shadow-xl border-4 border-accent/50 gradient-border-hover-effect">
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
