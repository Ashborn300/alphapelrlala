import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Heart, Target, TrendingUp, Star, Sparkles } from "lucide-react";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import devperso1 from "@/assets/devperso-1.jpg";
import devperso2 from "@/assets/devperso-2.jpg";
import devperso3 from "@/assets/devperso-3.jpg";
import devperso4 from "@/assets/devperso-4.jpg";
import devperso5 from "@/assets/devperso-5.jpg";
import devperso6 from "@/assets/devperso-6.jpg";
import devperso7 from "@/assets/devperso-7.jpg";
import devperso8 from "@/assets/devperso-8.jpg";
import devperso9 from "@/assets/devperso-9.jpg";
import magazine from "@/assets/devperso-magazine.jpg";

const PersonalDevelopment = () => {
  const images = [
    devperso1, devperso2, devperso3, devperso4, devperso5,
    devperso6, devperso7, devperso8, devperso9
  ];

  const programs = [
    {
      icon: Heart,
      title: "Confiance en Soi et Estime de Soi",
      description: "Ateliers pratiques pour développer une image positive de soi et renforcer sa confiance personnelle."
    },
    {
      icon: TrendingUp,
      title: "Motivation et Inspiration",
      description: "Sessions dynamiques pour maintenir votre motivation et trouver l'inspiration au quotidien."
    },
    {
      icon: Target,
      title: "Gestion du Temps",
      description: "Techniques efficaces pour optimiser votre temps et augmenter votre productivité."
    },
    {
      icon: Star,
      title: "Rêver Grand et Atteindre ses Ambitions",
      description: "Programmes pour définir vos objectifs et mettre en place des stratégies pour les atteindre."
    },
    {
      icon: Sparkles,
      title: "Excellence Professionnelle",
      description: "Coaching pour développer vos compétences et exceller dans votre carrière."
    },
    {
      icon: Users,
      title: "Leadership Personnel",
      description: "Formation pour développer votre leadership et influencer positivement votre entourage."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${devperso3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white z-10">
          <FadeInOnScroll>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Développement Personnel
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fade-in-up">
              Transformez votre vie en développant votre potentiel intérieur et en cultivant l'excellence personnelle
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <FadeInOnScroll direction="right">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Révélez Votre Meilleur Vous-Même
                </h2>
                <p className="text-lg text-muted-foreground">
                  La <strong>Fondation Alpha Perla</strong> vous accompagne dans votre parcours de développement 
                  personnel à travers des ateliers, conférences et sessions de coaching qui transforment des vies.
                </p>
                <p className="text-lg text-muted-foreground">
                  Notre approche holistique combine confiance en soi, gestion du temps, motivation et excellence 
                  professionnelle pour vous aider à atteindre vos objectifs les plus ambitieux.
                </p>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll direction="left">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={magazine} 
                  alt="Alpha Perla - Magazine Un Plus" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeInOnScroll className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Nos Programmes de Développement
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des outils concrets pour transformer votre vie personnelle et professionnelle
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
              Nos Conférences et Ateliers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos sessions de développement personnel qui inspirent et transforment
            </p>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <FadeInOnScroll key={index} delay={index * 0.1}>
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <img 
                    src={image} 
                    alt={`Conférence Développement Personnel ${index + 1}`}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <FadeInOnScroll className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Témoignages de Transformation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des vies changées par nos programmes de développement personnel
            </p>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FadeInOnScroll delay={0.1}>
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-secondary fill-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "Les ateliers de confiance en soi m'ont transformée. J'ai découvert ma vraie valeur et j'ai maintenant le courage de poursuivre mes rêves."
                  </p>
                  <p className="font-semibold text-primary">Marie K.</p>
                  <p className="text-sm text-muted-foreground">Entrepreneure</p>
                </CardContent>
              </Card>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.2}>
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-secondary fill-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "La formation en gestion du temps a changé ma vie professionnelle. Je suis maintenant plus productive et épanouie."
                  </p>
                  <p className="font-semibold text-primary">Grace M.</p>
                  <p className="text-sm text-muted-foreground">Cadre d'entreprise</p>
                </CardContent>
              </Card>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.3}>
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-secondary fill-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "Les sessions de motivation m'ont aidée à surmonter mes obstacles et à atteindre mes objectifs les plus ambitieux."
                  </p>
                  <p className="font-semibold text-primary">Sarah N.</p>
                  <p className="text-sm text-muted-foreground">Étudiante</p>
                </CardContent>
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
              Prêt à Transformer Votre Vie ?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Rejoignez nos programmes de développement personnel et commencez votre voyage vers 
              l'excellence et l'épanouissement.
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

export default PersonalDevelopment;
