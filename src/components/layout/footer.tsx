
import Link from "next/link";
import { socialLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Vipul Kumar Singh. All rights reserved.
        </p>
        <div className="flex items-center space-x-2">
          {socialLinks.map((link) => (
            <Button variant="ghost" size="icon" asChild key={link.name}>
              <Link href={link.url} target="_blank" rel="noopener noreferrer">
                <link.icon className="h-5 w-5 text-muted-foreground hover:text-accent" />
                <span className="sr-only">{link.name}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
