
"use client";
import Link from "next/link";
import { MenuIcon, XIcon, FileTextIcon } from "lucide-react"; 
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { navLinks, type NavLink } from "@/lib/data";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const resumeFileName = "/documents/Vipul_Kumar_Singh_Resume.pdf"; // You can change this if your file is named differently

  const renderNavLinks = (isMobile: boolean = false) =>
    navLinks.map((link) => (
      <Button
        key={link.href}
        variant="ghost"
        asChild
        className={cn(
          "font-medium text-foreground/80 hover:text-accent", 
          isMobile ? "w-full justify-start text-lg py-4" : "text-sm"
        )}
        onClick={() => isMobile && setIsMobileMenuOpen(false)}
      >
        <Link href={link.href}>
          {link.icon && <link.icon className="mr-2 h-4 w-4" />}
          {link.label}
        </Link>
      </Button>
    ));

  const resumeButton = (isMobile: boolean = false) => (
    <Button
      variant="default"
      asChild
      className={cn(
        "bg-accent text-background hover:bg-accent/90 font-semibold",
        isMobile ? "w-full justify-start text-lg py-4" : "text-sm px-4 py-2" 
      )}
      onClick={() => isMobile && setIsMobileMenuOpen(false)}
    >
      <a href="/documents/Vipul_Kumar_Singh_Resume.pdf" download>
        <FileTextIcon className="mr-2 h-4 w-4" />
        Resume
      </a>
    </Button>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center">
          {/* Desktop Resume Button */}
          <div className="hidden md:block">
            {resumeButton()}
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-1">
          {renderNavLinks()}
        </nav>

        <div className="md:hidden flex items-center">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-6 w-6 text-accent" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-6 border-l border-border/50">
              <div className="flex justify-between items-center mb-6">
                <div className="w-auto h-8"></div>
                <SheetClose asChild>
                   <Button variant="ghost" size="icon">
                    <XIcon className="h-6 w-6 text-accent" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-2">
                {/* Mobile Resume Button */}
                <div className="mb-2">
                 {resumeButton(true)}
                </div>
                {renderNavLinks(true)}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
