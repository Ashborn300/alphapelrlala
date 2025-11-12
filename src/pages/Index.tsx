import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { GraduationCap, Users, Heart, Award, BookOpen, TrendingUp, Globe, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import missionImage from "@/assets/mission.jpg";
import excellence1 from "@/assets/excellence1.jpg";
import excellence2 from "@/assets/excellence2.jpg";
import excellence3 from "@/assets/excellence3.jpg";
import excellence4 from "@/assets/excellence4.jpg";
import social1 from "@/assets/social1.jpg";
import social2 from "@/assets/social2.jpg";
import social3 from "@/assets/social3.jpg";
import social4 from "@/assets/social4.jpg";
const Index = () => {
  const stats = [{
    label: "Femmes Formées",
    value: "500+",
    icon: Users
  }, {
    label: "Programmes",
    value: "15+",
    icon: GraduationCap
  }, {
    label: "Partenaires",
    value: "30+",
    icon: Heart
  }, {
    label: "Années d'Expérience",
    value: "5+",
    icon: Award
  }];
  const services = [{
    icon: GraduationCap,
    title: "Éducation & Formation",
    description: "Formations professionnelles, ateliers et séminaires pour jeunes et femmes. Alphabétisation et masterclass."
  }, {
    icon: TrendingUp,
    title: "Entrepreneuriat Féminin",
    description: "Mentorat, coaching et accompagnement pour le développement de projets entrepreneuriaux."
  }, {
    icon: Users,
    title: "Développement Personnel",
    description: "Ateliers de confiance en soi, gestion du temps, et coaching pour atteindre vos ambitions."
  }, {
    icon: Heart,
    title: "Action Sociale",
    description: "Soutien aux communautés défavorisées, déplacés de guerre et projets humanitaires."
  }, {
    icon: Award,
    title: "Événements Culturels",
    description: "Organisation de trophées et cérémonies célébrant l'excellence africaine."
  }, {
    icon: Globe,
    title: "Gestion de Patrimoine",
    description: "Conception de projets, vente immobilière et services de tourisme."
  }];
  const testimonials = [{
    name: "Marie Kalala",
    role: "Entrepreneure",
    content: "La Fondation Alpha Perla m'a aidée à développer mon entreprise. Les formations sont exceptionnelles et le mentorat m'a permis d'atteindre mes objectifs."
  }, {
    name: "Sarah Mukendi",
    role: "Participante aux formations",
    content: "J'ai gagné en confiance en moi grâce aux ateliers de développement personnel. Une expérience transformatrice!"
  }, {
    name: "Joséphine Ngoma",
    role: "Bénéficiaire",
    content: "Le soutien de la fondation a changé ma vie. Je suis maintenant capable de subvenir aux besoins de ma famille."
  }];
  const faqs = [{
    question: "Qui peut bénéficier des programmes de la fondation?",
    answer: "Nos programmes sont ouverts à toutes les femmes et jeunes désireux de développer leurs compétences, qu'ils soient en début de carrière ou en reconversion professionnelle."
  }, {
    question: "Comment puis-je participer aux formations?",
    answer: "Vous pouvez nous contacter via email ou visiter nos bureaux à Kinshasa ou Lubumbashi. Nous organisons régulièrement des sessions de formation que nous annonçons sur notre chaîne YouTube."
  }, {
    question: "La fondation offre-t-elle des services de mentorat?",
    answer: "Oui, nous offrons des programmes de mentorat personnalisés pour accompagner les femmes dans leurs projets entrepreneuriaux et professionnels."
  }, {
    question: "Comment puis-je soutenir la fondation?",
    answer: "Vous pouvez soutenir nos initiatives en devenant partenaire, en participant à nos événements, ou en nous contactant pour discuter des opportunités de collaboration."
  }];
  return <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.65)), url(${heroImage})`
    }} className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-[#7c6318]/70">
        <div className="container mx-auto px-4 pt-24 text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">T
Transformer l'Afrique<br />
            <span className="text-secondary">Transformer l'Afrique</span>
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto animate-fade-in-up opacity-90 md:text-2xl">
            La Fondation Alpha Perla œuvre pour l'autonomisation des femmes, le
            développement de la jeunesse et la promotion de l'excellence en
            Afrique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button asChild size="lg" variant="default">
              <Link to="/programs">
                Découvrir nos Programmes
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">Nous Contacter</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary animate-fade-in-up">
              À Propos de la Fondation Alpha Perla
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in leading-relaxed">
              La Fondation Alpha Perla est une organisation dédiée à l'autonomisation des femmes et au développement de la jeunesse en Afrique. Fondée avec la vision de créer un impact durable, nous œuvrons pour offrir des opportunités éducatives, professionnelles et entrepreneuriales à celles et ceux qui aspirent à transformer leur avenir.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in leading-relaxed">
              À travers nos programmes de formation, de mentorat et d'accompagnement, nous cultivons l'excellence, le leadership et l'esprit d'entreprise. Notre engagement se manifeste dans chaque initiative que nous menons, chaque vie que nous touchons, et chaque communauté que nous servons.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-in-up">
              <Button asChild size="lg" variant="default">
                <Link to="/about">
                  En Savoir Plus
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in">
                <CardContent className="pt-6">
                  <stat.icon className="h-12 w-12 mx-auto mb-4 text-secondary" />
                  <h3 className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Notre Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                La Fondation Alpha Perla est dédiée à créer des opportunités
                éducatives, sociales, culturelles et personnelles pour permettre
                à chacun de réaliser son plein potentiel.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Nous croyons en l'autonomisation des femmes et des jeunes comme
                moteur du développement durable en Afrique. À travers nos
                programmes, nous cultivons le leadership, l'excellence et
                l'entrepreneuriat.
              </p>
              <Button asChild variant="default">
                <Link to="/about">
                  En Savoir Plus
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="animate-fade-in">
              <img src={missionImage} alt="Fondation Alpha Perla - Perla Coaching" className="rounded-2xl shadow-2xl w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Nos Domaines d'Activité
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des programmes variés pour répondre aux besoins de développement
              de nos communautés
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 animate-scale-in">
                <CardContent className="pt-6">
                  <service.icon className="h-12 w-12 mb-4 text-secondary group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold mb-3 text-primary">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>)}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="default" size="lg">
              <Link to="/programs">
                Voir Tous les Programmes
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Fondation Alpha Perla
            </h2>
            <p className="text-2xl font-semibold text-secondary mb-4">
              Votre partenaire vers l'excellence
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nous célébrons et récompensons l'excellence à travers nos programmes de reconnaissance. 
              Chaque année, nous honorons les femmes et jeunes qui se distinguent par leur détermination, 
              leur leadership et leur contribution au développement de nos communautés.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <img src={excellence1} alt="Cérémonie de remise de prix - Fondation Alpha Perla" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <img src={excellence2} alt="Reconnaissance d'excellence - Fondation Alpha Perla" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <img src={excellence3} alt="Événement Fondation Alpha Perla" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <img src={excellence4} alt="Lauréates Fondation Alpha Perla" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Social & Humanitarian Action Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Action Sociale et Humanitaire
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              La Fondation Alpha Perla s'engage activement auprès des communautés vulnérables à travers des initiatives humanitaires concrètes et durables.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 mb-4 text-secondary" />
                <h3 className="text-xl font-bold mb-3 text-primary">
                  Soutien aux Communautés Défavorisées
                </h3>
                <p className="text-muted-foreground">
                  Distribution de vivres, vêtements et produits de première nécessité aux familles dans le besoin.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 mb-4 text-secondary" />
                <h3 className="text-xl font-bold mb-3 text-primary">
                  Aide aux Déplacés de Guerre
                </h3>
                <p className="text-muted-foreground">
                  Assistance humanitaire et accompagnement psychosocial des personnes déplacées par les conflits.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 mb-4 text-secondary" />
                <h3 className="text-xl font-bold mb-3 text-primary">
                  Accompagnement des Femmes Victimes de Violences
                </h3>
                <p className="text-muted-foreground">
                  Soutien médical, psychologique et juridique pour les femmes victimes de violences.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in">
              <CardContent className="pt-6">
                <BookOpen className="h-12 w-12 mb-4 text-secondary" />
                <h3 className="text-xl font-bold mb-3 text-primary">
                  Projets Liés à la Santé
                </h3>
                <p className="text-muted-foreground">
                  Sensibilisation à l'hygiène, campagnes de prévention et accès aux soins de santé.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <img src={social1} alt="Distribution d'aide humanitaire - Fondation Alpha Perla" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <img src={social2} alt="Visite dans les écoles - Fondation Alpha Perla" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <img src={social3} alt="Soutien aux communautés - Fondation Alpha Perla" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <img src={social4} alt="Action sociale - Fondation Alpha Perla" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Témoignages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ce que disent les femmes que nous accompagnons
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-secondary/10 rounded-full mb-4">
                      <Users className="h-8 w-8 text-secondary" />
                    </div>
                    <p className="text-muted-foreground italic mb-4">
                      "{testimonial.content}"
                    </p>
                  </div>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-primary">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Questions Fréquentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trouvez les réponses à vos questions
            </p>
          </div>
          <div className="max-w-3xl mx-auto animate-fade-in">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-card border-0 rounded-lg px-6 shadow-md">
                  <AccordionTrigger className="text-left font-semibold hover:text-secondary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
            Rejoignez-Nous dans Notre Mission
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in-up">
            Ensemble, nous pouvons créer un avenir meilleur pour les femmes et
            les jeunes d'Afrique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Devenir Partenaire</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/programs">Participer à nos Programmes</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;