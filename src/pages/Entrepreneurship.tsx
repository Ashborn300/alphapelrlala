import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Award, Target, Lightbulb, Briefcase } from "lucide-react";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import entrepreneur1 from "@/assets/entrepreneur-1.jpg";
import entrepreneur2 from "@/assets/entrepreneur-2.jpg";
import entrepreneur3 from "@/assets/entrepreneur-3.jpg";
import entrepreneur4 from "@/assets/entrepreneur-4.jpg";
import entrepreneur5 from "@/assets/entrepreneur-5.jpg";
import entrepreneur6 from "@/assets/entrepreneur-6.jpg";
import entrepreneur7 from "@/assets/entrepreneur-7.jpg";
import entrepreneur8 from "@/assets/entrepreneur-8.jpg";
import entrepreneur9 from "@/assets/entrepreneur-9.jpg";
import entrepreneur10 from "@/assets/entrepreneur-10.jpg";

const Entrepreneurship = () => {
  const images = [
    entrepreneur1, entrepreneur2, entrepreneur3, entrepreneur4, entrepreneur5,
    entrepreneur6, entrepreneur7, entrepreneur8, entrepreneur9, entrepreneur10
  ];

  const programs = [
    {
      icon: Users,
      title: "Mentorat et Coaching Personnalisé",
      description: "Accompagnement individuel par des expertes pour développer vos compétences entrepreneuriales et votre leadership."
    },
    {
      icon: Briefcase,
      title: "Formation aux Opportunités d'Affaires",
      description: "Identification et exploitation des opportunités d'affaires au Congo et à l'international."
    },
    {
      icon: Target,
      title: "Développement de Projets",
      description: "Accompagnement complet dans la conception, le financement et la mise en œuvre de vos projets entrepreneuriaux."
    },
    {
      icon: Award,
      title: "Soutien aux Projets Sociaux",
      description: "Aide au développement de projets à impact social et communautaire."
    },
    {
      icon: Lightbulb,
      title: "Innovation et Créativité",
      description: "Ateliers pour stimuler l'innovation et développer des solutions créatives aux défis entrepreneuriaux."
    },
    {
      icon: TrendingUp,
      title: "Stratégies de Croissance",
      description: "Outils et techniques pour développer et pérenniser votre entreprise."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${entrepreneur1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white z-10">
          <FadeInOnScroll>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Entrepreneuriat et Leadership Féminin
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fade-in-up">
              Empowering African Women through Mentorship, Training, and Business Development
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeInOnScroll className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Notre Engagement pour l'Entrepreneuriat Féminin
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              La <strong>Fondation Alpha Perla</strong> croit fermement que l'autonomisation économique des femmes 
              est un moteur essentiel du développement durable en Afrique. À travers notre programme d'entrepreneuriat 
              féminin, nous offrons un accompagnement complet pour transformer vos idées en entreprises prospères.
            </p>
            <p className="text-lg text-muted-foreground">
              Nos programmes combinent mentorat personnalisé, formations pratiques, et mise en réseau pour 
              créer un écosystème favorable à la réussite entrepreneuriale des femmes africaines.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeInOnScroll className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Nos Programmes d'Accompagnement
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des solutions complètes pour développer votre potentiel entrepreneurial
            </p>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <FadeInOnScroll key={index} delay={index * 0.1}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-secondary/10 rounded-lg flex-shrink-0">
                        <program.icon className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-primary">
                          {program.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {program.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeInOnScroll className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Nos Événements et Conférences
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos conférences et ateliers dédiés au leadership féminin
            </p>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <FadeInOnScroll key={index} delay={index * 0.1}>
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <img 
                    src={image} 
                    alt={`Conférence Entrepreneuriat Féminin ${index + 1}`}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <FadeInOnScroll className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Impact et Réussites
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des femmes qui transforment leur communauté à travers l'entrepreneuriat
            </p>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FadeInOnScroll delay={0.1}>
              <Card className="text-center p-8 border-0 shadow-lg">
                <div className="text-5xl font-bold text-secondary mb-2">200+</div>
                <div className="text-muted-foreground">Femmes Accompagnées</div>
              </Card>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.2}>
              <Card className="text-center p-8 border-0 shadow-lg">
                <div className="text-5xl font-bold text-secondary mb-2">50+</div>
                <div className="text-muted-foreground">Entreprises Créées</div>
              </Card>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.3}>
              <Card className="text-center p-8 border-0 shadow-lg">
                <div className="text-5xl font-bold text-secondary mb-2">85%</div>
                <div className="text-muted-foreground">Taux de Réussite</div>
              </Card>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <FadeInOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prête à Démarrer Votre Aventure Entrepreneuriale ?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Rejoignez notre communauté de femmes entrepreneures et bénéficiez d'un accompagnement 
              sur mesure pour concrétiser vos ambitions.
            </p>
            <Button asChild size="lg" variant="secondary" className="font-semibold">
              <a href="/contact">
                Contactez-Nous
              </a>
            </Button>
          </FadeInOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Entrepreneurship;
