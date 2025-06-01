import Image from "next/image";
import { experienceData, type ExperienceItem } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedDiv from "@/components/ui/animated-div";
import { CheckIcon } from "lucide-react";

const ExperienceCard: React.FC<{ item: ExperienceItem, index: number }> = ({ item, index }) => {
  const Icon = item.icon;
  return (
    <AnimatedDiv 
      className="mb-8"
      delay={`delay-${index * 150}`}
      animationClasses={{
        visible: 'opacity-100 translate-x-0',
        hidden: index % 2 === 0 ? 'opacity-0 -translate-x-16' : 'opacity-0 translate-x-16'
      }}
    >
      <Card className="overflow-hidden bg-card border-border hover:border-accent hover:shadow-accent/20 hover:shadow-lg transition-shadow duration-300"> {/* Removed glassmorphic */}
        <CardHeader className="flex flex-row items-start gap-4 space-y-0 p-6">
          {item.companyLogoUrl && (
             <Image
              src={item.companyLogoUrl}
              alt={`${item.company} logo`}
              width={64}
              height={64}
              className="rounded-lg border border-border"
              data-ai-hint={item.companyLogoAiHint}
            />
          )}
          {!item.companyLogoUrl && Icon && <Icon className="h-12 w-12 text-accent mt-1"/>} {/* Accent for icon */}
          <div className="flex-grow">
            <CardTitle className="font-headline text-xl text-primary">{item.role}</CardTitle>
            <CardDescription className="text-md font-medium text-foreground">{item.company}</CardDescription>
            <p className="text-xs text-muted-foreground">{item.duration}</p>
          </div>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <ul className="space-y-2 text-sm text-muted-foreground">
            {item.responsibilities.map((resp, i) => (
              <li key={i} className="flex items-start">
                <CheckIcon className="h-4 w-4 text-accent mr-2 mt-0.5 shrink-0" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </AnimatedDiv>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12 text-primary">
          Professional Experience
        </h2>
        <div className="max-w-3xl mx-auto">
          {experienceData.map((item, index) => (
            <ExperienceCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
