import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Youtube, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center text-primary-foreground z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Contactez la Fondation Alpha Perla
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up">
            La Fondation Alpha Perla est à votre écoute pour répondre à vos questions
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* WhatsApp Contact */}
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6 text-primary">
                Contactez Fondation Alpha Perla sur WhatsApp
              </h2>
              <Card className="border-0 shadow-xl bg-gradient-to-br from-[#25D366]/10 to-background">
                <CardContent className="pt-6 pb-8 flex flex-col items-center justify-center min-h-[400px] text-center">
                  <MessageCircle className="h-16 w-16 mb-6 text-[#25D366]" />
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    Discutez avec nous sur WhatsApp
                  </h3>
                  <p className="text-muted-foreground mb-8 max-w-md">
                    Contactez-nous directement via WhatsApp pour une réponse rapide et instantanée.
                  </p>
                  <Button 
                    asChild 
                    size="lg" 
                    className="text-lg px-8 py-6 bg-[#25D366] hover:bg-[#25D366]/90 text-white"
                  >
                    <a href="https://wa.me/243977074034" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Ouvrir WhatsApp
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    +243 977 074 034
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Email Contact */}
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6 text-primary">
                Envoyez un Message à Fondation Alpha Perla
              </h2>
              <Card className="border-0 shadow-xl">
                <CardContent className="pt-6 pb-8 flex flex-col items-center justify-center min-h-[400px] text-center">
                  <Mail className="h-16 w-16 mb-6 text-secondary" />
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    Contactez-nous par Email
                  </h3>
                  <p className="text-muted-foreground mb-8 max-w-md">
                    Cliquez sur le bouton ci-dessous pour nous envoyer un email. Nous vous répondrons dans les plus brefs délais.
                  </p>
                  <Button asChild size="lg" className="text-lg px-8 py-6">
                    <a href="mailto:contact@fondationalphaperla.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Envoyer un Email
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    contact@fondationalphaperla.com
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">
                  Coordonnées de la Fondation Alpha Perla
                </h2>
                <p className="text-muted-foreground mb-8">
                  N'hésitez pas à contacter la <strong>Fondation Alpha Perla</strong> par email ou à visiter nos
                  bureaux à Kinshasa ou Lubumbashi, RDC.
                </p>
              </div>

              {/* Kinshasa Office */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-primary flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-secondary" />
                    Bureau de Kinshasa
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    N°44, Boulevard Sendwe
                    <br />
                    4ème niveau, Immeuble Addi Construct
                    <br />
                    Kinshasa, RDC
                  </p>
                </CardContent>
              </Card>

              {/* Lubumbashi Office */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-primary flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-secondary" />
                    Bureau de Lubumbashi
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Avenue Kasai, coin Kambove
                    <br />
                    N°1249
                    <br />
                    Lubumbashi, RDC
                  </p>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-primary flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-secondary" />
                    Email
                  </h3>
                  <a
                    href="mailto:contact@fondationalphaperla.com"
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    contact@fondationalphaperla.com
                  </a>
                </CardContent>
              </Card>

              {/* YouTube */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-destructive text-white">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Youtube className="h-5 w-5 mr-2" />
                    Notre Chaîne YouTube
                  </h3>
                  <a
                    href="https://youtube.com/@fondationalphaperla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-white transition-colors underline"
                  >
                    @fondationalphaperla
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
