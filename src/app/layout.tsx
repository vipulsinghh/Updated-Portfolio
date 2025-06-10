import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Vipul Kumar Singh - Freelance Developer',
  description: 'Portfolio of Vipul Kumar Singh, specializing in custom software, AI automation, and web app development.',
  // Favicon links will be added directly in the <head> below
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark overflow-x-hidden">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
        
        {/* Favicon Links */}
        <link rel="icon" href="/images/Portflio Profile Hero Sec.PNG" type="image/png" />
        <link rel="apple-touch-icon" href="/images/Portflio Profile Hero Sec.PNG" />
        {/* You might want to add other sizes or an .ico file for broader compatibility in the future, 
            but for modern browsers, a PNG linked this way is generally sufficient. */}
      </head>
      <body className={cn("font-body antialiased bg-background text-foreground overflow-x-hidden")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
