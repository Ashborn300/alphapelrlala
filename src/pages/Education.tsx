import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Award, BookOpen, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import formation1 from "@/assets/formation-1.jpg";
import formation2 from "@/assets/formation-2.jpg";
import formation3 from "@/assets/formation-3.jpg";
import formation4 from "@/assets/formation-4.jpg";
import formation5 from "@/assets/formation-5.jpg";
import formation6 from "@/assets/formation-6.jpg";
import formation7 from "@/assets/formation-7.jpg";
import formation8 from "@/assets/formation-8.jpg";
import masterFormationImage from "@/assets/master-formation.jpg";

const Education = () => {
  const formations = [
    {
      title: "Formations Professionnelles",
      description: "Programmes de formation dans plusieurs domaines professionnels pour développer des compétences recherchées sur le marché.",
      icon: GraduationCap,
    },
    {
      title: "Ateliers et Séminaires",
      description: "Sessions interactives pour jeunes et femmes sur des thématiques variées : leadership, gestion, entrepreneuriat.",
      icon: Users,
    },
    {
      title: "Alphabétisation",
      description: "Programmes d'alphabétisation pour permettre à tous d'accéder à l'éducation de base et aux opportunités.",
      icon: BookOpen,
    },
    {
      title: "Master Class",
      description: "Rencontres avec des experts reconnus dans leurs domaines pour partager expérience et expertise.",
      icon: Award,
    },
  ];

  const gallery = [
    { image: formation1, alt: "Formation coiffure" },
    { image: formation2, alt: "Formation beauté" },
    { image: formation3, alt: "Formation maquillage" },
    { image: formation4, alt: "Atelier formation" },
    { image: formation5, alt: "Session de formation" },
    { image: formation6, alt: "Conférence" },
    { image: formation7, alt: "Formation collective" },
    { image: formation8, alt: "Intervention publique" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${masterFormationImage})`,
        }}
        className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center"
      >
        <div className="container mx-auto px-4 text-center text-white z-10">
          <GraduationCap className="h-16 w-16 mx-auto mb-6 text-secondary" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Éducation & Formation
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fade-in-up">
            La Fondation Alpha Perla s'engage à offrir des opportunités d'apprentissage
            et de développement professionnel pour tous
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Notre Mission Éducative
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              L'éducation est au cœur de notre mission. Nous croyons fermement que l'accès
              à une formation de qualité est la clé du développement personnel et professionnel.
              C'est pourquoi nous organisons des formations, ateliers et séminaires adaptés
              aux besoins des jeunes et des femmes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              De l'alphabétisation aux masterclass avec des experts reconnus, nous couvrons
              un large éventail de domaines pour permettre à chacun d'acquérir les compétences
              nécessaires pour réussir dans le monde professionnel moderne.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {formations.map((formation, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-6">
                  <formation.icon className="h-12 w-12 mb-4 text-secondary" />
                  <h3 className="text-2xl font-bold mb-3 text-primary">
                    {formation.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {formation.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Nos Formations en Images
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos différentes sessions de formation et l'impact de nos programmes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">500+</div>
              <div className="text-xl text-muted-foreground">Personnes Formées</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">50+</div>
              <div className="text-xl text-muted-foreground">Sessions Organisées</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">20+</div>
              <div className="text-xl text-muted-foreground">Domaines de Formation</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Rejoignez Nos Programmes de Formation
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Développez vos compétences et réalisez vos ambitions avec nos formations
            professionnelles adaptées à vos besoins
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
            >
              <Link to="/contact">
                S'inscrire à une Formation
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link to="/programs">Voir Tous les Programmes</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Education;
