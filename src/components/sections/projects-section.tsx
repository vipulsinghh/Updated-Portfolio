import { projectsData } from "@/lib/data";
import ProjectCard3D from "@/components/ui/project-card-3d";
import AnimatedDiv from "../ui/animated-div";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-background"> {/* Adjusted background */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12 text-primary">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <AnimatedDiv 
              key={project.id}
              delay={`delay-${index * 100}`}
              animationClasses={{
                visible: 'opacity-100 translate-y-0 rotate-0',
                hidden: 'opacity-0 translate-y-10 rotate-[-5deg]'
              }}
              className="transform transition-all duration-500 ease-out hover:scale-105"
            >
              <ProjectCard3D project={project} />
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
