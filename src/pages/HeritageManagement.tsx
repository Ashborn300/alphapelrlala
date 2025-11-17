import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Users, Award, Target } from "lucide-react";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import patrimoine1 from "@/assets/patrimoine1.jpg";
import patrimoine2 from "@/assets/patrimoine2.jpg";
import patrimoine3 from "@/assets/patrimoine3.jpg";
import patrimoine4 from "@/assets/patrimoine4.jpg";

const HeritageManagement = () => {
  const services = [
    {
      icon: Building2,
      title: "Gestion des Biens",
      description: "Conseil stratégique pour la gestion optimale de votre patrimoine immobilier et financier."
    },
    {
      icon: Users,
      title: "Conseil Personnalisé",
      description: "Accompagnement sur mesure adapté à vos besoins spécifiques en gestion de patrimoine."
    },
    {
      icon: Award,
      title: "Excellence du Service",
      description: "Des experts dédiés pour garantir la préservation et la croissance de votre patrimoine."
    },
    {
      icon: Target,
      title: "Stratégie Long Terme",
      description: "Planification stratégique pour assurer la pérennité de votre patrimoine familial."
    }
  ];

  const gallery = [
    {
      image: patrimoine1,
      title: "Leadership et Vision",
      description: "Notre équipe de direction dédiée à l'excellence en gestion de patrimoine."
    },
    {
      image: patrimoine2,
      title: "Accompagnement Client",
      description: "Moments privilégiés de conseil et d'accompagnement personnalisé."
    },
    {
      image: patrimoine3,
      title: "Expertise Professionnelle",
      description: "Des conseillers expérimentés à votre service."
    },
    {
      image: patrimoine4,
      title: "Gestion Administrative",
      description: "Rigueur et professionnalisme dans la gestion de vos affaires."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary-glow py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNNiAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-10"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <FadeInOnScroll>
                <Button asChild variant="ghost" size="sm" className="mb-6 text-white hover:bg-white/10">
                  <Link to="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Retour à l'accueil
                  </Link>
                </Button>
              </FadeInOnScroll>
              
              <FadeInOnScroll delay={100}>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Gestion de Patrimoine
                </h1>
              </FadeInOnScroll>
              
              <FadeInOnScroll delay={200}>
                <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                  Des solutions expertes pour la préservation, la valorisation et la transmission 
                  de votre patrimoine avec excellence et professionnalisme.
                </p>
              </FadeInOnScroll>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <FadeInOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Nos Services</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Une expertise complète pour répondre à tous vos besoins en gestion de patrimoine
                </p>
              </div>
            </FadeInOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <FadeInOnScroll key={index} delay={index * 100}>
                  <Card className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-bold text-lg mb-3">{service.title}</h3>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </CardContent>
                  </Card>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <FadeInOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Notre Expertise en Images</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Découvrez notre équipe et notre approche professionnelle
                </p>
              </div>
            </FadeInOnScroll>

            <div className="grid md:grid-cols-2 gap-8">
              {gallery.map((item, index) => (
                <FadeInOnScroll key={index} delay={index * 100}>
                  <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-primary-glow/5 to-background">
          <div className="container mx-auto px-4 text-center">
            <FadeInOnScroll>
              <h2 className="text-3xl font-bold mb-6">Besoin de Conseils ?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Nos experts sont à votre disposition pour vous accompagner dans la gestion 
                et la valorisation de votre patrimoine.
              </p>
              <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                <Link to="/contact">Prendre Rendez-vous</Link>
              </Button>
            </FadeInOnScroll>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HeritageManagement;
