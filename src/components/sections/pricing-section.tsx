
import Link from "next/link";
import { pricingData, type PricingTier } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2Icon, StarIcon } from "lucide-react";
import AnimatedDiv from "@/components/ui/animated-div";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";


const PricingCard: React.FC<{ tier: PricingTier, index: number }> = ({ tier, index }) => {
  const Icon = tier.icon || CheckCircle2Icon;
  return (
    <AnimatedDiv 
      delay={`delay-${index * 100}`}
      animationClasses={{
        visible: 'opacity-100 scale-100',
        hidden: 'opacity-0 scale-90'
      }}
      className={cn("flex", tier.popular ? "transform md:scale-105" : "")}
    >
      <Card className={cn(
        "flex flex-col w-full bg-card border-border hover:shadow-accent/30 hover:shadow-xl transition-all duration-300 gradient-border-hover-effect rounded-xl", 
        tier.popular ? "border-accent ring-2 ring-accent shadow-accent/20" : "hover:border-accent/70"
      )}>
        {tier.popular && (
          <Badge variant="default" className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-sm font-semibold">
            <StarIcon className="w-4 h-4 mr-1 fill-current" /> Popular
          </Badge>
        )}
        <CardHeader className="items-center text-center pb-4">
          <Icon className="h-12 w-12 text-accent mb-4" />
          <CardTitle className="font-headline text-2xl text-foreground">{tier.title}</CardTitle>
          <CardDescription className="text-accent text-3xl font-bold pt-2">{tier.price}</CardDescription>
          <p className="text-sm text-muted-foreground pt-1">{tier.description}</p>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-2 text-sm text-muted-foreground">
            {tier.features.map((feature, i) => (
              <li key={i} className="flex items-center">
                <CheckCircle2Icon className="h-4 w-4 text-accent mr-2 shrink-0" /> 
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full font-semibold" 
            variant={tier.popular ? "default" : "outline"} 
            asChild
            style={tier.popular ? { backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--background))'} : {borderColor: 'hsl(var(--accent))', color: 'hsl(var(--accent))'}}
          >
            <Link href="#connect">{tier.ctaText}</Link>
          </Button>
        </CardFooter>
      </Card>
    </AnimatedDiv>
  );
};

const PricingSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background"> 
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12 text-foreground">
          Freelance Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {pricingData.map((tier, index) => (
            <PricingCard key={tier.title} tier={tier} index={index} />
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-12">
          Need something different? <Link href="#connect" className="text-accent hover:underline">Let&apos;s discuss your custom project!</Link>
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
