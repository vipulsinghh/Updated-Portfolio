
import Image from "next/image";
import { skillsData, type SkillCategory } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import AnimatedDiv from "@/components/ui/animated-div";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-card"> 
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12 text-foreground">
          Tech Stack & Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skillsData.map((category, catIndex) => (
            <AnimatedDiv 
              key={category.name}
              delay={`delay-${catIndex * 100}`}
              animationClasses={{
                visible: 'opacity-100 scale-100',
                hidden: 'opacity-0 scale-90'
              }}
            >
              <Card className="h-full bg-background border-border hover:border-accent/70 hover:shadow-accent/20 hover:shadow-lg transition-shadow gradient-border-hover-effect rounded-xl"> 
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <category.icon className="h-8 w-8 text-accent" />
                    <CardTitle className="font-headline text-2xl text-foreground">{category.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {category.skills.map((skill) => (
                      <li key={skill.name} className="group">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <skill.icon className="h-5 w-5 text-foreground group-hover:text-accent transition-colors" />
                            <span className="font-medium text-foreground/90">{skill.name}</span>
                          </div>
                          {skill.level && (
                             <Badge variant="secondary" className="text-xs">{skill.level}%</Badge>
                          )}
                        </div>
                        {skill.level && (
                          <Progress value={skill.level} aria-label={`${skill.name} proficiency ${skill.level}%`} className="h-2 group-hover:[&>div]:bg-accent/80 transition-colors" />
                        )}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedDiv>
          ))}
        </div>

        <AnimatedDiv className="mt-16 text-center">
          <h3 className="text-2xl font-headline font-semibold mb-6 text-foreground">
            My GitHub Contributions
          </h3>
          <div className="max-w-3xl mx-auto p-4 border border-border rounded-lg shadow-md bg-background gradient-border-hover-effect">
            <Image
              src="https://ghchart.rshah.org/13A3A4/yourusername" // Using a service that allows color customization
              alt="GitHub Contributions Calendar"
              width={828} // Standard GitHub chart width
              height={128} // Standard GitHub chart height
              className="rounded-md w-full h-auto"
              data-ai-hint="github contributions calendar"
              unoptimized // Important for external URLs not in next.config.js images domain
            />
            <p className="text-sm text-muted-foreground mt-2">Replace 'yourusername' with your actual GitHub username in the URL above, or configure a more dynamic solution.</p>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default SkillsSection;
