import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import event1 from "@/assets/event1.jpg";
import event2 from "@/assets/event2.jpg";
import event3 from "@/assets/event3.jpg";
import event4 from "@/assets/event4.jpg";
import event5 from "@/assets/event5.jpg";
import event6 from "@/assets/event6.jpg";

const CulturalEvents = () => {
  const events = [
    {
      image: event1,
      title: "Conférence sur le Leadership Féminin",
      description: "Une conférence inspirante mettant en lumière les dynamiques de femmes debout et leur impact dans la société.",
      date: "2024",
      location: "Kinshasa"
    },
    {
      image: event2,
      title: "Cérémonie de Remise de Prix",
      description: "Célébration des réussites exceptionnelles et reconnaissance des leaders communautaires.",
      date: "2024",
      location: "Kinshasa"
    },
    {
      image: event3,
      title: "Événement de Networking",
      description: "Moment de partage et de connexion entre les membres de la communauté.",
      date: "2024",
      location: "Kinshasa"
    },
    {
      image: event4,
      title: "Rassemblement Communautaire",
      description: "Rencontre des leaders et bénéficiaires de nos programmes sociaux.",
      date: "2024",
      location: "Kinshasa"
    },
    {
      image: event5,
      title: "Session de Formation",
      description: "Formation interactive sur le leadership et le développement personnel.",
      date: "2024",
      location: "Kinshasa"
    },
    {
      image: event6,
      title: "Action Sociale Communautaire",
      description: "Intervention directe auprès des communautés pour un impact durable.",
      date: "2024",
      location: "Kinshasa"
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
                  Événements Culturels
                </h1>
              </FadeInOnScroll>
              
              <FadeInOnScroll delay={200}>
                <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                  Découvrez nos événements culturels et communautaires qui célèbrent l'excellence, 
                  le leadership et l'impact social de la Fondation Alpha Perla.
                </p>
              </FadeInOnScroll>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <FadeInOnScroll key={index} delay={index * 100}>
                  <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-3 text-foreground">{event.title}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{event.description}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
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
              <h2 className="text-3xl font-bold mb-6">Rejoignez Nos Événements</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Participez à nos prochains événements culturels et communautaires pour faire partie 
                de notre mission de transformation sociale.
              </p>
              <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                <Link to="/contact">Nous Contacter</Link>
              </Button>
            </FadeInOnScroll>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CulturalEvents;
