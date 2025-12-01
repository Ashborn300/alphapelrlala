import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import { BookOpen, Users, Briefcase, Heart, Globe, Award, Lightbulb, Music } from "lucide-react";

const Projects = () => {
  const projects = [];

  const categories = [
    "Tous",
    "Éducation",
    "Entrepreneuriat",
    "Social",
    "Culture",
    "Développement",
    "Excellence"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <FadeInOnScroll>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Nos Projets
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Découvrez l'ensemble des projets et initiatives de la Fondation Alpha Perla 
                pour l'autonomisation, l'excellence et le développement durable en RDC.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <FadeInOnScroll key={project.id} delay={index * 100}>
                  <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20 overflow-hidden h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className={`absolute top-4 right-4 ${project.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                        {project.status}
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <Badge variant="secondary" className="bg-white/90 text-foreground">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`${project.color} p-3 rounded-lg text-white`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors flex-1">
                          {project.title}
                        </h3>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                </FadeInOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <FadeInOnScroll>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Rejoignez-nous dans notre mission
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Participez à nos projets et contribuez au développement et à l'autonomisation 
                des communautés en RDC.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Nous Contacter
                </a>
                <a
                  href="https://pay.lygosapp.com/link/3f683587-6b52-403e-992c-71f3407e677f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                >
                  Faire un Don
                </a>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
