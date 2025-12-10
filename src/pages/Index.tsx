import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsSection from "@/components/NewsSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { GraduationCap, Users, Heart, Award, BookOpen, TrendingUp, Globe, ChevronRight, Youtube, Facebook, Instagram, Linkedin, ShoppingCart } from "lucide-react";
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
import valorisationEspaces from "@/assets/valorisation-espaces.jpg";
import bookImage from "@/assets/book.jpg";
import masterFormationImage from "@/assets/master-formation.jpg";
import educationEventImage from "@/assets/education-event.jpg";
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
import excellentiaAward1 from "@/assets/excellentia-award-1.jpg";
import excellentiaGroup from "@/assets/excellentia-group.jpg";
import excellentiaSpeaker from "@/assets/excellentia-speaker.jpg";
import excellentiaStaff from "@/assets/excellentia-staff.jpg";
import incroyableTalentImg from "@/assets/incroyable-talent.jpg";
import educationConferenceImg from "@/assets/education-conference.jpg";
import entrepreneurshipAwardsImg from "@/assets/entrepreneurship-awards.jpg";
import personalDevConferenceImg from "@/assets/personal-development-conference.jpg";
import socialActionCommunityImg from "@/assets/social-action-community.jpg";
import culturalEventsCeremonyImg from "@/assets/cultural-events-ceremony.jpg";
import heritageManagementMeetingImg from "@/assets/heritage-management-meeting.jpg";
import magazineCover1 from "@/assets/magazine-cover-1.jpg";
import magazineSpread1 from "@/assets/magazine-spread-1.jpg";
import magazineSpread2 from "@/assets/magazine-spread-2.jpg";
import magazineSpread3 from "@/assets/magazine-spread-3.jpg";
import magazineSpread4 from "@/assets/magazine-spread-4.jpg";
import magazineSpread5 from "@/assets/magazine-spread-5.jpg";
import reunion1 from "@/assets/reunion-1.jpg";
import reunion2 from "@/assets/reunion-2.jpg";
import reunion3 from "@/assets/reunion-3.jpg";
import projetCentreFormation from "@/assets/projet-centre-formation.jpg";
const Index = () => {
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  
  const donationOptions = [
    { amount: 50, fc: "125 000", link: "https://pay.lygosapp.com/link/98417b6d-c137-45ae-9f1a-f7fdc0ec667b" },
    { amount: 100, fc: "250 000", link: "https://pay.lygosapp.com/link/4700815b-71db-4d14-a651-56b626683cf3" },
    { amount: 150, fc: "375 000", link: "https://pay.lygosapp.com/link/259d4d56-b0ce-43db-ab4b-580505538c08" },
    { amount: 200, fc: "500 000", link: "https://pay.lygosapp.com/link/3aadb258-99c5-4f07-a504-5d9b576f1927" },
  ];
  
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

      {/* 3ème Édition Excellentia Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <FadeInOnScroll className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary flex items-center justify-center gap-3">
              <Award className="h-10 w-10 text-secondary" />
              3ᵉ édition du TROPHÉE CONGOLESE WOMAN EXCELLENTIA
            </h2>
            <p className="text-xl text-secondary font-semibold mb-4">AFRIQUE-CENTRALE</p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Un événement d'exception célébrant l'excellence féminine congolaise et africaine. 
              La 3ᵉ édition a réuni des femmes inspirantes, leaders dans leurs domaines, 
              pour honorer celles qui bâtissent l'avenir de notre continent par leur engagement, 
              leur courage et leur vision.
            </p>
          </FadeInOnScroll>
          
          <FadeInOnScroll className="max-w-6xl mx-auto">
            {/* Image Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <div className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img src={excellentiaAward1} alt="Remise de prix Excellentia" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img src={excellentiaGroup} alt="Photo de groupe des lauréates" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img src={excellentiaSpeaker} alt="Discours lors de la cérémonie" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img src={excellentiaStaff} alt="Équipe organisatrice" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                <Link to="/article/excellencia-2024-edition3" className="flex items-center gap-2">
                  Découvrir l'événement
                  <ChevronRight className="h-5 w-5" />
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
            {stats.map((stat, index) => <FadeInOnScroll key={index} delay={index * 100}>
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-6">
                    <stat.icon className="h-12 w-12 mx-auto mb-4 text-secondary" />
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </h3>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </FadeInOnScroll>)}
          </div>
        </div>
      </section>

      {/* Voir nos projets Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInOnScroll direction="right">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={projetCentreFormation} 
                  alt="Centre de formation de la Fondation Alpha Perla" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </FadeInOnScroll>
            
            <FadeInOnScroll direction="left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Découvrez Nos Projets en Cours
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                La <strong>Fondation Alpha Perla</strong> mène des projets concrets pour 
                transformer des vies et bâtir un avenir meilleur pour nos communautés.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Des centres de formation à l'entrepreneuriat féminin, en passant par 
                l'action sociale et les événements culturels, chaque projet est une 
                opportunité de créer un impact durable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog open={isDonationOpen} onOpenChange={setIsDonationOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold group">
                      <Heart className="mr-2 h-5 w-5" />
                      Faire un Don
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md bg-background">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-primary text-center">
                        Soutenez nos Projets
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 mt-6">
                      <p className="text-center text-muted-foreground mb-6">
                        Choisissez le montant de votre don pour soutenir nos projets et aider à transformer des vies.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        {donationOptions.map((option) => (
                          <a
                            key={option.amount}
                            href={option.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                          >
                            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-secondary">
                              <CardContent className="p-4 text-center">
                                <p className="text-3xl font-bold text-primary mb-1">
                                  {option.amount}$
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {option.fc} FC
                                </p>
                              </CardContent>
                            </Card>
                          </a>
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Button asChild size="lg" variant="default" className="group">
                  <Link to="/projects" className="flex items-center gap-2">
                    Voir Tous nos Projets
                    <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </FadeInOnScroll>
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
            {services.map((service, index) => <FadeInOnScroll key={index} delay={index * 100}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 h-full">
                  <CardContent className="pt-6">
                    {service.title === "Éducation & Formation" && <div className="mb-4 overflow-hidden rounded-lg">
                        <img src={educationConferenceImg} alt="Conférence Éducation - Fondation Alpha Perla" className="w-full h-48 object-cover" />
                      </div>}
                    {service.title === "Entrepreneuriat Féminin" && <div className="mb-4 overflow-hidden rounded-lg">
                        <img src={entrepreneurshipAwardsImg} alt="Cérémonie Entrepreneuriat Féminin - Fondation Alpha Perla" className="w-full h-48 object-cover" />
                      </div>}
                    {service.title === "Développement Personnel" && <div className="mb-4 overflow-hidden rounded-lg">
                        <img src={personalDevConferenceImg} alt="Conférence Développement Personnel - Fondation Alpha Perla" className="w-full h-48 object-cover" />
                      </div>}
                    {service.title === "Action Sociale" && <div className="mb-4 overflow-hidden rounded-lg">
                        <img src={socialActionCommunityImg} alt="Action Sociale et Humanitaire - Fondation Alpha Perla" className="w-full h-48 object-cover" />
                      </div>}
                    {service.title === "Événements Culturels" && <div className="mb-4 overflow-hidden rounded-lg">
                        <img src={culturalEventsCeremonyImg} alt="Cérémonie Événements Culturels - Fondation Alpha Perla" className="w-full h-48 object-cover" />
                      </div>}
                    {service.title === "Gestion de Patrimoine" && <div className="mb-4 overflow-hidden rounded-lg">
                        <img src={heritageManagementMeetingImg} alt="Réunion Gestion de Patrimoine - Fondation Alpha Perla" className="w-full h-48 object-cover" />
                      </div>}
                    <service.icon className="h-12 w-12 mb-4 text-secondary group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold mb-3 text-primary">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    {service.title === "Éducation & Formation" && <Button asChild variant="outline" size="sm" className="mt-2">
                        <Link to="/education">
                          Découvrir
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>}
                    {service.title === "Entrepreneuriat Féminin" && <Button asChild variant="outline" size="sm" className="mt-2">
                        <Link to="/entrepreneurship">
                          Découvrir
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>}
                    {service.title === "Développement Personnel" && <Button asChild variant="outline" size="sm" className="mt-2">
                        <Link to="/personal-development">
                          Découvrir
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>}
                    {service.title === "Action Sociale" && <Button asChild variant="outline" size="sm" className="mt-2">
                        <Link to="/social-action">
                          Découvrir
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>}
                    {service.title === "Événements Culturels" && <Button asChild variant="outline" size="sm" className="mt-2">
                        <Link to="/cultural-events">
                          Découvrir
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>}
                    {service.title === "Gestion de Patrimoine" && <Button asChild variant="outline" size="sm" className="mt-2">
                        <Link to="/heritage-management">
                          Découvrir
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>}
                  </CardContent>
                </Card>
              </FadeInOnScroll>)}
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

      {/* Mon Incroyable Talent Kinshasa Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img src={incroyableTalentImg} alt="Mon Incroyable Talent Kinshasa" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Mon Incroyable Talent Kinshasa
              </h2>
              <p className="text-lg text-muted-foreground">
                Découvrez notre programme exceptionnel qui célèbre et développe les talents créatifs et artistiques de la jeunesse congolaise. Une initiative unique pour promouvoir l'excellence et révéler les étoiles de demain.
              </p>
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link to="/incroyable-talent">
                  Découvrir
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Valorisation des Espaces Publiques Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeInOnScroll>
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <img src={valorisationEspaces} alt="Projet de valorisation des espaces publiques - Assainissement Kinshasa" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
                  Projet de Valorisation des Espaces Publiques et Grandes Artères
                </h2>
                <p className="text-lg text-muted-foreground">
                  Pour l'assainissement de la ville de Kinshasa
                </p>
                <p className="text-muted-foreground">
                  Un projet ambitieux visant à améliorer la propreté et l'esthétique de nos espaces publics et grandes artères pour une ville plus saine et plus belle.
                </p>
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                  <a href="https://drive.google.com/uc?id=19IRyqatkTfSSsLPW6TVjibpk-aiCyVZR" target="_blank" rel="noopener noreferrer">
                    Découvrir
                  </a>
                </Button>
              </div>
            </div>
          </FadeInOnScroll>
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
          <div className="text-center mt-8">
            <Button asChild variant="default" size="lg">
              <a href="/social-action">
                Découvrir nos Actions Sociales
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
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
                <img src={educationEventImage} alt="Événement Éducation et Formation - Fondation Alpha Perla" className="w-full h-auto object-contain bg-muted/30 hover:scale-105 transition-transform duration-300" />
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
                      <img src={laureats1} alt="Lauréats de la formation Alpha Perla" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                      <img src={laureats2} alt="Remise de certificat de formation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                      <img src={laureats3} alt="Cérémonie de remise de prix" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                      <img src={laureats4} alt="Lauréate avec certificat d'excellence" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
                
                <Button asChild size="lg" className="w-full md:w-auto bg-secondary hover:bg-secondary/90 text-white">
                  <a href="https://wa.me/243977074034" target="_blank" rel="noopener noreferrer">
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
            <div className="text-center mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                <a href="/writing">
                  En savoir plus
                </a>
              </Button>
              <Button asChild size="lg" variant="default">
                <a href="https://pay.lygosapp.com/link/d942fc09-1f46-4b27-ad26-62834a86001b" target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Acheter le livre
                </a>
              </Button>
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

      {/* Strategic Meeting Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <FadeInOnScroll className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Réunion Stratégique
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              La Fondation Alpha Perla organise régulièrement des réunions stratégiques avec ses partenaires et bénéficiaires 
              pour planifier et coordonner nos actions. Ces moments d'échange permettent de renforcer notre engagement 
              collectif et d'assurer un impact durable dans nos communautés.
            </p>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <FadeInOnScroll delay={0}>
              <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src={reunion1} alt="Réunion stratégique de la Fondation Alpha Perla" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </FadeInOnScroll>
            
            <FadeInOnScroll delay={100}>
              <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src={reunion2} alt="Discussion stratégique avec les partenaires" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </FadeInOnScroll>
            
            <FadeInOnScroll delay={200}>
              <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src={reunion3} alt="Photo de groupe de la réunion stratégique" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Press & Media Coverage Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeInOnScroll className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Fondation Alpha Perla à la une des journaux
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Notre impact reconnu dans les médias nationaux et internationaux
            </p>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FadeInOnScroll delay={0}>
              <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img src={magazineCover1} alt="Magazine Un Plus - Couverture Alpha Perla" className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={100}>
              <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img src={magazineSpread1} alt="Magazine Un Plus - Article Fondation Alpha Perla" className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={200}>
              <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img src={magazineSpread2} alt="Magazine Un Plus - Interview" className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={300}>
              <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img src={magazineSpread3} alt="Magazine Un Plus - Publications" className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={400}>
              <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img src={magazineSpread4} alt="Magazine Un Plus - Reportage" className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={500}>
              <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img src={magazineSpread5} alt="Magazine Un Plus - Article détaillé" className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      <NewsSection />

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
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up flex-wrap">
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
              <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                <a href="https://www.instagram.com/fondation_alphaperla?igsh=OXFnY2I4NnM1Y3lp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Instagram className="h-5 w-5" />
                  Suivre sur Instagram
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                <a href="https://cd.linkedin.com/in/fondation-alpha-perla-177572392" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5" />
                  Suivre sur LinkedIn
                </a>
              </Button>
            </div>
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

      <Footer />
    </div>;
};
export default Index;