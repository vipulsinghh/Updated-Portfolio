
"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GithubIcon, ExternalLinkIcon } from 'lucide-react';
import type { Project } from '@/lib/data';
import { cn } from '@/lib/utils';

interface ProjectCard3DProps {
  project: Project;
}

const ProjectCard3D: React.FC<ProjectCard3DProps> = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div
      className="group perspective w-full h-[24rem] sm:h-80 md:h-96 rounded-xl gradient-border-hover-effect" // Adjusted height for mobile
      onClick={handleFlip}
      onFocus={handleFlip}
      onBlur={() => setIsFlipped(false)}
      tabIndex={0}
      role="button"
      aria-pressed={isFlipped}
      aria-label={`Flip card for project ${project.title}`}
    >
      <div
        className={cn(
          "relative w-full h-full rounded-xl shadow-xl transition-transform duration-700 preserve-3d",
          isFlipped ? "rotate-y-180" : ""
        )}
      >
        {/* Front of the card */}
        <div className="absolute inset-0 backface-hidden rounded-xl">
          <Card className="w-full h-full flex flex-col overflow-hidden bg-card border-transparent"> {/* Border transparent to show gradient */}
            {project.imageUrl && (
              <div className="relative w-full h-1/2">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                  data-ai-hint={project.imageAiHint}
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>
            )}
            <CardHeader className={cn("flex-grow p-4", project.imageUrl ? "pt-4" : "pt-6")}>
              <CardTitle className="font-headline text-xl text-foreground group-hover:text-accent transition-colors">{project.title}</CardTitle>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{project.description}</p>
            </CardHeader>
            <CardFooter className="p-4 pt-0">
                <Button variant="link" className="text-sm p-0 h-auto text-accent hover:text-accent/80">
                  Click to see details <ExternalLinkIcon className="ml-1 h-3 w-3" />
                </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Back of the card */}
        <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-xl">
          <Card className="w-full h-full flex flex-col p-4 bg-card border-transparent"> {/* Border transparent */}
            <CardTitle className="font-headline text-xl text-foreground mb-2">{project.title}</CardTitle>
            <CardContent className="flex-grow space-y-3 overflow-y-auto scrollbar-thin scrollbar-thumb-muted-foreground/50 scrollbar-track-transparent pr-2 text-sm">
              <p className="text-card-foreground">{project.longDescription || project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-2 pt-4">
              {project.githubUrl && (
                <Button variant="outline" size="sm" asChild className="border-accent text-accent hover:bg-accent/10">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <GithubIcon className="mr-2 h-4 w-4" /> GitHub
                  </Link>
                </Button>
              )}
              {project.liveDemoUrl && (
                <Button variant="default" size="sm" asChild className="bg-accent text-background hover:bg-accent/90">
                  <Link href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <ExternalLinkIcon className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard3D;
