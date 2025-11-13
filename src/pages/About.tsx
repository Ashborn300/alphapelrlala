import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, BookOpen } from "lucide-react";
import aboutImage from "@/assets/about-bg.jpg";
import aboutEvent1 from "@/assets/about-event1.jpg";
import aboutEvent2 from "@/assets/about-event2.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Autonomisation",
      description:
        "Nous croyons que chaque femme et chaque jeune possède le potentiel de réussir et de contribuer au développement de sa communauté.",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "Nous visons l'excellence dans tous nos programmes et encourageons nos bénéficiaires à atteindre les plus hauts standards.",
    },
    {
      icon: Eye,
      title: "Innovation",
      description:
        "Nous développons des approches innovantes pour répondre aux défis contemporains du développement en Afrique.",
    },
    {
      icon: BookOpen,
      title: "Éducation",
      description:
        "L'éducation est au cœur de notre mission. Nous croyons qu'elle est la clé du développement durable.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${aboutImage})`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            À Propos de la Fondation Alpha Perla
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up">
            Découvrez l'histoire, la mission et les valeurs d'Alpha Perla
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Target className="h-16 w-16 mx-auto mb-6 text-secondary" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Mission de la Fondation Alpha Perla
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                La <strong>Fondation Alpha Perla</strong> œuvre pour l'autonomisation des femmes,
                le développement de la jeunesse et la promotion de l'excellence
                en Afrique. <strong>Alpha Perla</strong> crée des opportunités éducatives, sociales,
                culturelles et personnelles pour permettre à chacun de réaliser
                son plein potentiel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Eye className="h-16 w-16 mx-auto mb-6 text-secondary" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Vision de la Fondation Alpha Perla
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Être un acteur clé du développement humain, social et personnel
                en Afrique, en valorisant les talents, la culture, le leadership
                et l'excellence des femmes et des jeunes du continent. <strong>Alpha Perla</strong>
                aspire à une Afrique où chaque femme et chaque jeune a accès
                aux ressources nécessaires pour s'épanouir pleinement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Valeurs d'Alpha Perla
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident les actions de la Fondation Alpha Perla au quotidien
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="pt-6">
                  <value.icon className="h-12 w-12 mx-auto mb-4 text-secondary" />
                  <h3 className="text-xl font-bold mb-3 text-primary">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Réalisations de la Fondation Alpha Perla
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des moments marquants des événements et cérémonies de reconnaissance organisés par Alpha Perla
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <img 
                src={aboutEvent1} 
                alt="Cérémonie de reconnaissance - Fondation Alpha Perla" 
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <img 
                src={aboutEvent2} 
                alt="Photo de groupe lauréates - Fondation Alpha Perla" 
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardContent className="pt-8">
                <div className="text-center mb-6">
                  <BookOpen className="h-16 w-16 mx-auto mb-4 text-secondary" />
                  <h2 className="text-3xl font-bold mb-4 text-primary">
                    Madame Écrit
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Figure de la fondation et auteure
                  </p>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Madame, figure inspirante de la Fondation Alpha Perla, est
                    une auteure passionnée qui utilise sa plume pour toucher les
                    cœurs et transformer les vies.
                  </p>
                  <p>
                    Son premier ouvrage,{" "}
                    <strong className="text-primary">
                      "Les larmes d'une femme meurtrie sécheront-elles"
                    </strong>
                    , relate l'histoire poignante d'une fille de la République
                    Démocratique du Congo qui a vécu tant d'atrocités dans sa
                    vie. Ce livre témoigne de la résilience et de l'espoir.
                  </p>
                  <p>
                    Elle prépare actuellement son second ouvrage qui sera publié
                    prochainement, poursuivant sa mission d'inspiration et de
                    partage de connaissances auprès des jeunes et des femmes
                    d'Afrique.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
