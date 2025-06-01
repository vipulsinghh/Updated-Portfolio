
import { educationData, type EducationItem } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedDiv from "@/components/ui/animated-div";
import { CheckCircle } from "lucide-react";

const EducationTimelineItem: React.FC<{ item: EducationItem, index: number }> = ({ item, index }) => {
  const Icon = item.icon || CheckCircle;
  return (
    <AnimatedDiv
      className="relative pl-8 py-4 group"
      delay={`delay-${index * 100}`}
      animationClasses={{
        visible: 'opacity-100 translate-x-0',
        hidden: 'opacity-0 -translate-x-10'
      }}
    >
      <div className="absolute left-0 top-5 h-full w-px bg-border group-last:h-0"></div>
      <div className="absolute left-[-0.4rem] top-5 transform translate-x-[-50%]">
        <div className="w-4 h-4 rounded-full bg-accent border-2 border-background ring-2 ring-accent group-hover:scale-125 transition-transform"></div> 
      </div>
      <Card className="ml-4 bg-card border-border group-hover:shadow-2xl transition-shadow duration-300 group-hover:border-accent gradient-border-hover-effect rounded-xl"> 
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="font-headline text-xl text-foreground">{item.degree}</CardTitle>
            <span className="text-sm text-muted-foreground">{item.year}</span>
          </div>
          <p className="text-md font-medium text-accent">{item.institution}</p>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{item.description}</p>
        </CardContent>
      </Card>
    </AnimatedDiv>
  );
};

const EducationSection = () => {
  return (
    <section id="education" className="py-16 md:py-24 bg-background"> 
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12 text-foreground">
          My Academic Journey
        </h2>
        <div className="relative max-w-3xl mx-auto">
          {educationData.map((item, index) => (
            <EducationTimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
