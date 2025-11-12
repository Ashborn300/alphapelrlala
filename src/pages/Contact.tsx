import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Youtube } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé!",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center text-primary-foreground z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Contactez-Nous
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up">
            Nous sommes à votre écoute pour répondre à vos questions
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6 text-primary">
                Envoyez-nous un Message
              </h2>
              <Card className="border-0 shadow-xl">
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Nom Complet
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="votre.email@exemple.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Sujet
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Sujet de votre message"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Votre message..."
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Envoyer le Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">
                  Nos Coordonnées
                </h2>
                <p className="text-muted-foreground mb-8">
                  N'hésitez pas à nous contacter par email ou à visiter nos
                  bureaux à Kinshasa ou Lubumbashi.
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
                    href="mailto:fondationalphaperla@gmail.com"
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    fondationalphaperla@gmail.com
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
