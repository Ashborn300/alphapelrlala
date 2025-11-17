import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Home, Lightbulb } from "lucide-react";
import social1 from "@/assets/social1.jpg";
import social2 from "@/assets/social2.jpg";
import social3 from "@/assets/social3.jpg";
import social4 from "@/assets/social4.jpg";
import social5 from "@/assets/social5.jpg";
import social6 from "@/assets/social6.jpg";
import social7 from "@/assets/social7.jpg";

const SocialAction = () => {
  const initiatives = [
    {
      icon: Users,
      title: "Soutien aux Communautés Défavorisées",
      description: "Accompagnement et aide matérielle aux populations vulnérables"
    },
    {
      icon: Heart,
      title: "Aide aux Déplacés de Guerre",
      description: "Assistance d'urgence et réinsertion des personnes déplacées"
    },
    {
      icon: Home,
      title: "Accompagnement des Femmes Victimes de Violences",
      description: "Soutien psychologique et juridique aux femmes en détresse"
    },
    {
      icon: Lightbulb,
      title: "Projets de Santé et Environnement",
      description: "Initiatives pour la santé communautaire et la protection de l'environnement"
    }
  ];

  const images = [social1, social2, social3, social4, social5, social6, social7];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center text-primary-foreground z-10">
          <Heart className="h-20 w-20 mx-auto mb-6 animate-fade-in-up" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Action Sociale et Humanitaire
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fade-in-up">
            La Fondation Alpha Perla s'engage auprès des communautés vulnérables pour créer un impact social positif et durable
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Notre Mission Humanitaire
            </h2>
            <p className="text-lg text-muted-foreground">
              Nous œuvrons pour améliorer les conditions de vie des populations défavorisées à travers des actions concrètes de solidarité, d'accompagnement et de soutien. Notre approche holistique vise à restaurer la dignité et l'espoir.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-secondary/10 rounded-lg flex-shrink-0">
                      <initiative.icon className="h-8 w-8 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-primary">
                        {initiative.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {initiative.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
            Nos Actions sur le Terrain
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 aspect-square"
              >
                <img
                  src={image}
                  alt={`Action sociale ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
              L'Impact de Notre Action
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                À travers nos programmes d'action sociale, nous avons touché des milliers de vies en apportant une aide concrète aux personnes dans le besoin. Nos interventions couvrent l'aide alimentaire, le soutien médical, l'assistance juridique et l'accompagnement psychosocial.
              </p>
              <p className="text-lg">
                Nous travaillons en étroite collaboration avec les communautés locales pour identifier leurs besoins prioritaires et développer des solutions adaptées et durables. Notre approche participative garantit que chaque action répond aux besoins réels des bénéficiaires.
              </p>
              <p className="text-lg">
                La Fondation Alpha Perla croit fermement que chaque personne mérite dignité, respect et opportunités. C'est pourquoi nous continuons à innover dans nos méthodes d'intervention pour maximiser notre impact social.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Rejoignez Notre Cause
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ensemble, nous pouvons faire la différence dans la vie de ceux qui en ont le plus besoin. Contactez-nous pour savoir comment vous pouvez contribuer.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <a href="/contact">Nous Contacter</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SocialAction;
