
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
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-10 md:mb-14 text-foreground">
          Tech Stack & Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-14">
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
                    <CardTitle className="font-headline text-xl md:text-2xl text-foreground">{category.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 md:space-y-4">
                    {category.skills.map((skill) => (
                      <li key={skill.name} className="group">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <skill.icon className="h-5 w-5 text-foreground group-hover:text-accent transition-colors" />
                            <span className="font-medium text-sm md:text-base text-foreground/90">{skill.name}</span>
                          </div>
                          {skill.level && (
                             <Badge variant="secondary" className="text-xs">{skill.level}%</Badge>
                          )}
                        </div>
                        {skill.level && (
                          <Progress value={skill.level} aria-label={`${skill.name} proficiency ${skill.level}%`} className="h-1.5 md:h-2 group-hover:[&>div]:bg-accent/80 transition-colors" />
                        )}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedDiv>
          ))}
        </div>

        <AnimatedDiv className="mt-12 md:mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-headline font-semibold mb-6 text-foreground">
            My GitHub Contributions
          </h3>
          <div className="max-w-3xl mx-auto p-3 md:p-4 border border-border rounded-lg shadow-md bg-background gradient-border-hover-effect">
            <Image
              src="https://ghchart.rshah.org/57DD3C/vipulsinghh" 
              alt="GitHub Contributions Calendar for vipulsinghh"
              width={828} 
              height={128} 
              className="rounded-md w-full h-auto"
              data-ai-hint="github contributions calendar"
              unoptimized 
            />
            <p className="text-xs md:text-sm text-muted-foreground mt-2">A snapshot of my coding activity on GitHub.</p>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default SkillsSection;
