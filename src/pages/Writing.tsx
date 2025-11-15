import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ShoppingCart, Quote, Heart } from "lucide-react";
import bookImage from "@/assets/book.jpg";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import author1 from "@/assets/author-1.jpg";
import author2 from "@/assets/author-2.jpg";
import author3 from "@/assets/author-3.jpg";
import author4 from "@/assets/author-4.jpg";
import author5 from "@/assets/author-5.jpg";
import author6 from "@/assets/author-6.jpg";
import author7 from "@/assets/author-7.jpg";
import author8 from "@/assets/author-8.jpg";
import author9 from "@/assets/author-9.jpg";
import author10 from "@/assets/author-10.jpg";

const Writing = () => {
  const [quantity, setQuantity] = useState(1);

  const handleOrder = () => {
    const message = `Bonjour, je souhaite commander ${quantity} exemplaire(s) du livre "Les larmes d'une femme meurtrie sècheront-elles" de Alpha Perla Mboyo.`;
    window.open(`https://wa.me/243977074034?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                Écriture et Publication
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Découvrez l'œuvre littéraire d'Alpha Perla Mboyo, une voix qui résonne pour la justice et l'humanité.
              </p>
            </div>
          </div>
        </section>

        {/* Book Details Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              {/* Book Image */}
              <div className="animate-fade-in">
                <div className="overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 sticky top-24">
                  <img 
                    src={bookImage} 
                    alt="Alpha Perla Mboyo - Les larmes d'une femme meurtrie sècheront-elles" 
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Book Information */}
              <div className="animate-fade-in-up space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                    Les larmes d'une femme meurtrie sècheront-elles
                  </h2>
                  <p className="text-xl text-muted-foreground mb-2">
                    Par <span className="font-semibold text-primary">Alpha Perla Mboyo</span>
                  </p>
                </div>

                <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                  <div className="flex items-start space-x-3 mb-4">
                    <Quote className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground italic">
                      "Un témoignage poignant inspiré par les atrocités se déroulant à l'est de la République Démocratique du Congo. À travers ces pages, l'auteure donne une voix aux femmes meurtries et appelle à la compassion et à l'action."
                    </p>
                  </div>
                </Card>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-primary flex items-center">
                    <BookOpen className="h-6 w-6 mr-2" />
                    À propos de l'ouvrage
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cet ouvrage littéraire puissant explore les douleurs et les espoirs des femmes affectées par les conflits dans l'est de la RDC. Alpha Perla Mboyo, avec une plume sensible et engagée, nous plonge dans des récits qui interpellent notre conscience collective.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Plus qu'un simple livre, c'est un cri du cœur pour la paix, la dignité humaine et la reconnaissance des souffrances endurées par tant de femmes courageuses.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-primary flex items-center">
                    <Heart className="h-6 w-6 mr-2" />
                    Thèmes abordés
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">Les violences faites aux femmes dans les zones de conflit</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">La résilience et l'espoir face à l'adversité</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">L'appel à la justice et à la paix</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">La force des femmes congolaises</span>
                    </li>
                  </ul>
                </div>

                {/* Order Section */}
                <Card className="p-6 bg-gradient-to-br from-secondary/5 to-primary/5 border-secondary/20">
                  <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                    <ShoppingCart className="h-6 w-6 mr-2" />
                    Commander l'ouvrage
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Procurez-vous votre exemplaire et soutenez la voix de celles qui n'ont pas été entendues.
                  </p>
                  <div className="flex items-center space-x-4 mb-6">
                    <label className="text-muted-foreground font-medium">Quantité:</label>
                    <div className="flex items-center space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="h-10 w-10"
                      >
                        -
                      </Button>
                      <span className="text-2xl font-bold text-primary min-w-[3rem] text-center">
                        {quantity}
                      </span>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setQuantity(quantity + 1)}
                        className="h-10 w-10"
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <Button 
                    onClick={handleOrder}
                    size="lg" 
                    className="w-full bg-secondary hover:bg-secondary/90 text-white"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Commander via WhatsApp
                  </Button>
                </Card>

                {/* Author Section */}
                <Card className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-6">À propos de l'auteure</h3>
                  
                  {/* Author Carousel */}
                  <div className="mb-6">
                    <Carousel 
                      className="w-full max-w-lg mx-auto"
                      plugins={[
                        Autoplay({
                          delay: 2500,
                        }),
                      ]}
                    >
                      <CarouselContent>
                        {[author1, author2, author3, author4, author5, author6, author7, author8, author9, author10].map((image, index) => (
                          <CarouselItem key={index}>
                            <div className="overflow-hidden rounded-xl">
                              <img 
                                src={image} 
                                alt={`Alpha Perla Mboyo - Photo ${index + 1}`}
                                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-primary">Alpha Perla Mboyo</span> est une femme engagée, présidente fondatrice de la Fondation Alpha Perla. Passionnée de littérature, elle utilise sa plume pour défendre les droits humains et sensibiliser aux injustices sociales. Son œuvre reflète son engagement profond pour l'excellence, l'éducation et l'action humanitaire.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Partagez cette œuvre importante
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Aidez-nous à faire entendre ces voix et à sensibiliser le monde aux réalités vécues par les femmes de l'est du Congo.
              </p>
              <Button 
                asChild
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a 
                  href="https://wa.me/243977074034?text=Bonjour,%20je%20souhaite%20commander%20le%20livre%20%22Les%20larmes%20d'une%20femme%20meurtrie%20s%C3%A8cheront-elles%22%20de%20Alpha%20Perla%20Mboyo."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Commander maintenant
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Writing;
