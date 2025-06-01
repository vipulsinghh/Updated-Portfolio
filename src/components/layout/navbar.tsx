"use client";
import Link from "next/link";
import { MenuIcon, XIcon, UserCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { navLinks, type NavLink } from "@/lib/data";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderNavLinks = (isMobile: boolean = false) =>
    navLinks.map((link) => (
      <Button
        key={link.href}
        variant="ghost"
        asChild
        className={cn(
          "font-medium text-foreground/80 hover:text-primary", // Adjusted text color for dark theme
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

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50"> {/* Adjusted for dark theme */}
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
          {/* You can replace UserCircle with a custom logo if you have one */}
          {/* <Image src="/logo-dark.png" alt="Logo" width={32} height={32} /> */}
          <UserCircle className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold font-headline text-primary">
            Vipul Kumar Singh
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {renderNavLinks()}
        </nav>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-6 w-6 text-primary" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-6 border-l border-border/50">
              <div className="flex justify-between items-center mb-6">
                 <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <UserCircle className="h-8 w-8 text-primary" />
                    <span className="text-xl font-bold font-headline text-primary">VKS</span>
                  </Link>
                <SheetClose asChild>
                   <Button variant="ghost" size="icon">
                    <XIcon className="h-6 w-6 text-primary" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-2">
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
