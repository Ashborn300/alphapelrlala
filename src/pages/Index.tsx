import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsSection from "@/components/NewsSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { GraduationCap, Users, Heart, Award, BookOpen, TrendingUp, Globe, ChevronRight, Youtube, Facebook } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
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
import bookImage from "@/assets/book.jpg";
import masterFormationImage from "@/assets/master-formation.jpg";
import laureats1 from "@/assets/laureats1.jpg";
import laureats2 from "@/assets/laureats2.jpg";
import laureats3 from "@/assets/laureats3.jpg";
import laureats4 from "@/assets/laureats4.jpg";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";
import gallery6 from "@/assets/gallery6.jpg";
import excellentiaImage from "@/assets/excellentia-2025.jpg";
const Index = () => {
  const stats = [{
    label: "Femmes Formées",
    value: 500,
    suffix: "+",
    icon: Users
  }, {
    label: "Programmes",
    value: 15,
    suffix: "+",
    icon: GraduationCap
  }, {
    label: "Partenaires",
    value: 30,
    suffix: "+",
    icon: Heart
  }, {
    label: "Années d'Expérience",
    value: 5,
    suffix: "+",
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
    description: "Conception de projets et services de tourisme."
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
  }, {
    name: "Grace Tshiala",
    role: "Diplômée en leadership",
    content: "Les programmes de leadership m'ont permis de prendre des responsabilités dans ma communauté. Je suis reconnaissante pour cette opportunité."
  }, {
    name: "Élisabeth Mwamba",
    role: "Formatrice certifiée",
    content: "Grâce à l'alphabétisation et aux masterclass, j'ai acquis des compétences que je transmets maintenant à d'autres femmes."
  }, {
    name: "Rachelle Kabongo",
    role: "Jeune entrepreneure",
    content: "L'accompagnement personnalisé et les ressources mises à disposition m'ont aidée à concrétiser mon projet d'entreprise."
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="text-secondary">Fondation Alpha Perla - Transformer l'Afrique</span>
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
          <FadeInOnScroll className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
              À Propos de la Fondation Alpha Perla
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              La <strong>Fondation Alpha Perla</strong> est une organisation dédiée à l'autonomisation des femmes et au développement de la jeunesse en Afrique. Fondée avec la vision de créer un impact durable, la <strong>Fondation Alpha Perla</strong> œuvre pour offrir des opportunités éducatives, professionnelles et entrepreneuriales à celles et ceux qui aspirent à transformer leur avenir.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              À travers nos <Link to="/programs" className="text-secondary hover:underline">programmes de formation</Link>, de mentorat et d'accompagnement, nous cultivons l'excellence, le leadership et l'esprit d'entreprise. Notre engagement se manifeste dans chaque initiative que nous menons, chaque vie que nous touchons, et chaque communauté que nous servons.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button asChild size="lg" variant="default">
                <Link to="/about">
                  En Savoir Plus
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FadeInOnScroll key={index} delay={index * 100}>
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-6">
                    <stat.icon className="h-12 w-12 mx-auto mb-4 text-secondary" />
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </h3>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInOnScroll direction="right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Mission de la Fondation Alpha Perla
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                La <strong>Fondation Alpha Perla</strong> est dédiée à créer des opportunités
                éducatives, sociales, culturelles et personnelles pour permettre
                à chacun de réaliser son plein potentiel.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Nous croyons en l'autonomisation des femmes et des jeunes comme
                moteur du développement durable en Afrique. À travers nos
                <Link to="/programs" className="text-secondary hover:underline ml-1">programmes</Link>, la <strong>Fondation Alpha Perla</strong> cultive le leadership, l'excellence et
                l'entrepreneuriat.
              </p>
              <Button asChild variant="default">
                <Link to="/about">
                  En Savoir Plus
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </FadeInOnScroll>
            <FadeInOnScroll direction="left">
              <img src={missionImage} alt="Fondation Alpha Perla - Perla Coaching" className="rounded-2xl shadow-2xl w-full h-auto" />
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Excellentia Event Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <FadeInOnScroll className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary flex items-center justify-center gap-3">
              <span className="text-4xl">🌟</span>
              COMMUNIQUÉ OFFICIEL
              <span className="text-4xl">🌟</span>
            </h2>
          </FadeInOnScroll>
          
          <FadeInOnScroll className="max-w-5xl mx-auto">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="h-full min-h-[400px]">
                    <img 
                      src={excellentiaImage} 
                      alt="Trophée Congolese Woman Excellentia - 3ème édition 2025" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-background to-muted/30">
                    <p className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                      La <strong className="text-primary">FONDATION Alpha Perla</strong> a l'honneur de vous présenter la <strong className="text-secondary">3ᵉ édition</strong> du <strong className="text-primary">TROPHÉE CONGOLESE WOMAN EXCELLENTIA – AFRIQUE-CENTRALE</strong>
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">📅</span>
                        <div>
                          <p className="font-bold text-lg text-primary">Date :</p>
                          <p className="text-muted-foreground"><AnimatedCounter end={7} /> décembre <AnimatedCounter end={2025} /></p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">📍</span>
                        <div>
                          <p className="font-bold text-lg text-primary">Lieu :</p>
                          <p className="text-muted-foreground">Hôtel Hilton, Kinshasa</p>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed border-l-4 border-secondary pl-4 italic">
                      Un rendez-vous d'exception dédié à la femme congolaise et africaine, symbole d'excellence, de leadership et d'impact.
                    </p>
                    
                    <p className="text-base text-muted-foreground mb-8">
                      Cette édition mettra à l'honneur celles qui, par leur engagement, leur courage et leur vision, bâtissent l'avenir de notre continent.
                    </p>
                    
                    <Button 
                      asChild 
                      size="lg" 
                      className="w-full md:w-auto bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <a 
                        href="https://wa.me/243977074034" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Pour plus d'informations
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <FadeInOnScroll className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Nos Domaines d'Activité
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des programmes variés pour répondre aux besoins de développement
              de nos communautés
            </p>
          </FadeInOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInOnScroll key={index} delay={index * 100}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 h-full">
                  <CardContent className="pt-6">
                    <service.icon className="h-12 w-12 mb-4 text-secondary group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold mb-3 text-primary">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </FadeInOnScroll>
            ))}
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
              Alpha Perla - Trophées d'Excellence
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

      {/* Vision Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary animate-fade-in-up">
              Notre Vision
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in">
              Être un acteur clé du développement humain, social et personnel en Afrique, en valorisant les talents, la culture, le leadership et l'excellence des femmes et des jeunes du continent.
            </p>
          </div>
        </div>
      </section>

      {/* Master et Formations Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <FadeInOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                Master et Formations
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Alpha Perla propose des programmes de master et formations spécialisées pour développer vos compétences en leadership, développement personnel et excellence professionnelle. Rejoignez nos formations certifiantes et donnez un nouvel élan à votre carrière.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
              <div className="overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <img 
                  src={masterFormationImage} 
                  alt="Master et Formations - Fondation Alpha Perla" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-primary">Programmes Disponibles</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <BookOpen className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                      <span>Formation en Leadership Féminin</span>
                    </li>
                    <li className="flex items-start">
                      <BookOpen className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                      <span>Master en Développement Personnel</span>
                    </li>
                    <li className="flex items-start">
                      <BookOpen className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                      <span>Excellence Professionnelle et Entrepreneuriat</span>
                    </li>
                  </ul>
                </div>
                
                {/* Photos des Lauréats */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-primary">Nos Lauréats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src={laureats1} 
                        alt="Lauréats de la formation Alpha Perla" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src={laureats2} 
                        alt="Remise de certificat de formation" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src={laureats3} 
                        alt="Cérémonie de remise de prix" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src={laureats4} 
                        alt="Lauréate avec certificat d'excellence" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
                
                <Button 
                  asChild
                  size="lg" 
                  className="w-full md:w-auto bg-secondary hover:bg-secondary/90 text-white"
                >
                  <a 
                    href="https://wa.me/243977074034" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    S'inscrire
                  </a>
                </Button>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Writing & Publication Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Écriture et Publication
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Passionnée de la littérature madame Perla est autrice de l'ouvrage : <span className="font-semibold text-primary">Les larmes d'une femme meurtrie sècheront-elles</span>, inspirée par les atrocités se déroulant à l'est de la RDC.
            </p>
          </div>
          <div className="max-w-2xl mx-auto animate-fade-in">
            <div className="overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <img src={bookImage} alt="Alpha Perla Mboyo - Les larmes d'une femme meurtrie sècheront-elles" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
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

      {/* Subscribe & Follow Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary animate-fade-in-up">
              S'abonner et Nous Suivre
            </h2>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in">
              Rejoignez notre communauté en ligne et restez informés de toutes nos activités, événements et programmes.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up">
              <Button asChild size="lg" variant="default" className="w-full sm:w-auto">
                <a href="https://youtube.com/@fondationalphaperla?si=4PRNSY_c6-LxqA4O" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Youtube className="h-5 w-5" />
                  S'abonner sur YouTube
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                <a href="https://www.facebook.com/profile.php?id=100066871133653" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Facebook className="h-5 w-5" />
                  Suivre sur Facebook
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Flight Tickets Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a2f5a] to-[#0d1a33] text-white">
        <div className="container mx-auto px-4">
          <FadeInOnScroll className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Vos <span className="text-secondary">billets d'avion</span> au meilleur prix
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              La Fondation Alpha Perla vous accompagne dans vos voyages avec un service de billetterie aérienne
            </p>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
            {/* Destinations Nationales */}
            <FadeInOnScroll direction="right">
              <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    Destinations nationales
                  </h3>
                  <p className="text-muted-foreground mb-6 font-semibold">
                    CAA (RDC) Depuis Kinshasa (N'djili) vers :
                  </p>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-primary">1.</span>
                      <span>Lubumbashi - capitale du Haut-Katanga</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-primary">2.</span>
                      <span>Goma - Nord-Kivu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-primary">3.</span>
                      <span>Kisangani - Tshopo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-primary">4.</span>
                      <span>Mbuji-Mayi - Kasai-Oriental</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-primary">5.</span>
                      <span>Kananga - Kasai-Central</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-primary">6.</span>
                      <span>Bunia - Ituri</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-primary">7.</span>
                      <span>Gemena - Sud-Ubangi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-primary">8.</span>
                      <span>Gbadolite - Nord-Ubangi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-primary">9.</span>
                      <span>Mbandaka - Équateur</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-primary">10.</span>
                      <span>Kindu - Maniema</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-primary">11.</span>
                      <span>Tshikapa - Kasai</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-primary">12.</span>
                      <span>Kalemie - Tanganyika</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </FadeInOnScroll>

            {/* Destinations Internationales */}
            <FadeInOnScroll direction="left">
              <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-300 bg-secondary/95 text-secondary-foreground">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    Destinations internationales
                  </h3>
                  <p className="mb-6 font-semibold opacity-90">
                    CAA (RDC) Au départ de Kinshasa (N'Djili) vers le monde :
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="font-bold">1.</span>
                      <span>Addis-Abeba – Éthiopie</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">2.</span>
                      <span>Cairo – Égypte</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">3.</span>
                      <span>Casablanca – Maroc</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">4.</span>
                      <span>Istanbul – Turquie</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">5.</span>
                      <span>Johannesburg – Afrique du Sud</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">6.</span>
                      <span>Nairobi – Kenya</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">7.</span>
                      <span>Paris – France</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">8.</span>
                      <span>Bruxelles – Belgique</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">9.</span>
                      <span>Doha – Qatar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">10.</span>
                      <span>Luanda – Angola</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">11.</span>
                      <span>Abidjan – Côte d'Ivoire</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">12.</span>
                      <span>Lomé – Togo</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </FadeInOnScroll>
          </div>

          {/* Contact Info */}
          <FadeInOnScroll className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">CONTACT</h3>
              <p className="text-xl mb-2">
                <a href="tel:+243973795067" className="hover:text-secondary transition-colors">
                  +243 973 795 067
                </a>
              </p>
              <p className="text-white/90">
                <span className="font-semibold">Adresse :</span> 44, Boulvard Sendwe, Immeuble ADI CONSTRUCT (4ᵉ Niveau)
              </p>
            </div>
          </FadeInOnScroll>
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

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Galerie
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez en images nos événements, formations et actions sur le terrain
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <img src={gallery1} alt="Événement Fondation Alpha Perla - Remise de prix" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <img src={gallery2} alt="Cérémonie de reconnaissance - Fondation Alpha Perla" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <img src={gallery3} alt="Photo de groupe lauréates - Fondation Alpha Perla" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <img src={gallery4} alt="Remise de trophée - Fondation Alpha Perla" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <img src={gallery5} alt="Séminaire leadership féminin - Fondation Alpha Perla" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <img src={gallery6} alt="Formation et accompagnement - Fondation Alpha Perla" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
          <div className="text-center mt-12 animate-fade-in-up">
            <Button asChild variant="default" size="lg">
              <Link to="/gallery">
                Voir Plus
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
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

      <NewsSection />

      <Footer />
    </div>;
};
export default Index;