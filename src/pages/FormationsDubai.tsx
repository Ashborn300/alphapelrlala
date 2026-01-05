import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import formationDubaiHero from "@/assets/formation-dubai-hero.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Phone, Globe, GraduationCap, Briefcase, Monitor, Users, MessageSquare, TrendingUp, Plane } from "lucide-react";

const FormationsDubai = () => {
  const financeFormations = [
    { theme: "Gestion et cartographie des risques opérationnels dans les banques et les établissements financiers", dates: "Du 7 au 16 juillet", prix: "2500 €" },
    { theme: "Pratiquer l'analyse financière : apprécier la santé financière d'une entreprise", dates: "Du 21 au 30 juillet", prix: "2500 €" },
    { theme: "Contrôle de gestion et performance de l'entreprise", dates: "Du 4 au 13 août", prix: "2500 €" },
    { theme: "Spécificités de l'analyse des comptes consolidés", dates: "Du 4 au 13 août", prix: "2500 €" },
    { theme: "Conduite d'une mission d'audit interne et les outils modernes de l'audit interne", dates: "Du 8 au 17 septembre", prix: "2500 €" },
    { theme: "Établir les états financiers en normes IFRS : normes comptables et écritures de retraitement", dates: "Du 15 au 24 septembre", prix: "2500 €" },
    { theme: "Audit financier : s'approprier les techniques pour fiabiliser les comptes", dates: "Du 13 au 22 octobre", prix: "2500 €" },
    { theme: "Méthodes et outils du contrôle de gestion", dates: "Du 10 au 19 novembre", prix: "2500 €" },
    { theme: "Le contrôle de gestion environnemental social et sociétal : intégrer la RSE dans le dispositif de contrôle de gestion", dates: "Du 10 au 19 novembre", prix: "2500 €" },
  ];

  const marchesPublicsFormations = [
    { theme: "Finance durable", dates: "Du 17 au 26 février", prix: "2500 €" },
    { theme: "Pratiquer l'achat responsable : la RSE appliquée aux achats", dates: "Du 17 au 26 février", prix: "2500 €" },
    { theme: "Gestion des risques de passation des marchés publics", dates: "Du 10 au 19 mars", prix: "2500 €" },
    { theme: "Exécution du budget en mode programme, suivi de l'exécution et des indicateurs de performances", dates: "Du 14 au 23 avril", prix: "2500 €" },
    { theme: "Audit et contrôle des marchés publics", dates: "Du 14 au 23 avril", prix: "2500 €" },
    { theme: "Finances durables : mécanismes de convergence", dates: "Du 5 au 14 mai", prix: "2500 €" },
    { theme: "Secteur public : mettre en place un contrôle de gestion", dates: "Du 5 au 14 mai", prix: "2500 €" },
    { theme: "Comptabilité des matières et gestion des immobilisations", dates: "Du 19 au 28 mai", prix: "2500 €" },
    { theme: "La passation et l'exécution des marchés publics", dates: "Du 19 au 28 mai", prix: "2500 €" },
    { theme: "Gestion optimale des finances publiques", dates: "Du 9 au 18 juin", prix: "4000 €" },
    { theme: "Intelligence économique (IE)", dates: "Du 16 au 25 juin", prix: "2500 €" },
    { theme: "Mobilisation des recettes fiscales - Optimisation fiscale et lutte contre la fraude", dates: "Du 7 au 16 juillet", prix: "2500 €" },
    { theme: "Bonne gouvernance, éthique et culture de l'excellence dans l'administration publique", dates: "Du 7 au 16 juillet", prix: "2500 €" },
    { theme: "La gestion administrative et comptable du patrimoine non financier", dates: "Du 21 au 30 juillet", prix: "2500 €" },
    { theme: "Achat public : les partenariats publics privés (PPP)", dates: "Du 18 au 27 août", prix: "4000 €" },
    { theme: "Gestion des risques de passation des marchés publics", dates: "Du 17 au 26 novembre", prix: "2500 €" },
    { theme: "Élaboration, mise en œuvre et suivi plan local de développement", dates: "Du 19 au 28 mai", prix: "2500 €" },
  ];

  const informatiqueFormations = [
    { theme: "Gestion d'un projet d'archivage électronique", dates: "Du 10 au 19 février", prix: "2500 €" },
    { theme: "Record management", dates: "Du 17 au 26 mars", prix: "2500 €" },
    { theme: "Dématérialisation, synthèse et mise en œuvre", dates: "Du 18 au 25 mai", prix: "3000 €" },
    { theme: "Amorcer une transformation numérique responsable", dates: "Du 19 au 28 mai", prix: "3000 €" },
    { theme: "Gérez et partagez l'information avec les outils digitaux", dates: "Du 9 au 18 juin", prix: "2500 €" },
    { theme: "Système d'archivage électronique (SAE) et gestion électronique des documents (GED)", dates: "Du 14 au 21 juillet", prix: "3000 €" },
    { theme: "Conception et mise en place d'un projet de numérisation de document et d'archivage électronique", dates: "Du 15 au 24 septembre", prix: "2500 €" },
    { theme: "Sécurité des réseaux et des systèmes d'information", dates: "Du 20 au 27 octobre", prix: "2700 €" },
    { theme: "Gestion informatisée des archives et de la documentation : organisation, codification et informatisation", dates: "Du 10 au 19 novembre", prix: "2500 €" },
  ];

  const secretariatFormations = [
    { theme: "Management d'un secrétariat particulier : suivi efficace des dossiers et engagements", dates: "Du 17 au 26 mars", prix: "2500 €" },
    { theme: "Assistante(e) : gérer et partager l'information avec des outils digitaux - développer la culture digitale", dates: "Du 14 au 23 avril", prix: "2500 €" },
    { theme: "Le protocole moderne : organisation de sommets et conférences", dates: "Du 18 au 25 mai", prix: "3900 €" },
    { theme: "Secrétaires particulières et assistantes de direction : les clés professionnelles et outils digitaux", dates: "Du 18 au 25 mai", prix: "3500 €" },
    { theme: "Assistante pour plusieurs managers : travailler en synergie pour gagner en efficacité", dates: "Du 9 au 18 juin", prix: "2500 €" },
    { theme: "Management moderne d'un secrétariat particulier et l'assistanat de direction et maîtrise de NTIC", dates: "Du 21 au 30 juillet", prix: "3500 €" },
    { theme: "Communication, protocole et relations publiques", dates: "Du 21 au 30 juillet", prix: "3500 €" },
    { theme: "Spécial assistant(e)s : les clés de l'excellence professionnelle", dates: "Du 15 au 24 septembre", prix: "2500 €" },
    { theme: "Management d'un secrétariat particulier, suivi efficace des dossiers et engagements", dates: "Du 17 au 26 novembre", prix: "3500 €" },
  ];

  const managementFormations = [
    { theme: "Réussir dans sa première fonction de manager", dates: "Du 17 au 24 février", prix: "2500 €" },
    { theme: "Développer son charisme et sa confiance en soi", dates: "Du 10 au 17 mars", prix: "2500 €" },
    { theme: "Conduite du changement : démarches et outils", dates: "Du 13 au 20 avril", prix: "3500 €" },
    { theme: "Le conseil d'administration comme vecteur de performance et d'orientations stratégiques", dates: "Du 16 au 23 juin", prix: "2500 €" },
    { theme: "Communication et management", dates: "Du 13 au 20 juillet", prix: "3900 €" },
    { theme: "Manager : développer le travail collaboratif et l'intelligence collective", dates: "Du 8 au 15 septembre", prix: "3500 €" },
    { theme: "Le manager innovant, réinventer son management et développer son leadership", dates: "Du 20 au 27 octobre", prix: "3900 €" },
    { theme: "Conduite du changement et leadership transformationnel", dates: "Du 17 au 23 novembre", prix: "3900 €" },
  ];

  const communicationFormations = [
    { theme: "Piloter la performance marketing grâce à la data client", dates: "Du 19 au 28 mai", prix: "2500 €" },
    { theme: "Chargé de communication : enjeux, méthodes, bons réflexes et outils de communication", dates: "Du 16 au 25 juin", prix: "2500 €" },
    { theme: "Stratégies de communication : élaboration d'une politique de communication innovante et anticipative", dates: "Du 7 au 16 juillet", prix: "2500 €" },
    { theme: "Élaborer et mettre en œuvre des stratégies marketing digital", dates: "Du 15 au 22 septembre", prix: "3000 €" },
    { theme: "Les techniques d'écriture journalistique : donner du style à ses textes", dates: "Du 6 au 15 octobre", prix: "2500 €" },
    { theme: "Stratégie marketing : branding, marketing digital et marketing mix", dates: "Du 20 au 29 octobre", prix: "2500 €" },
  ];

  const categories = [
    { id: "finance", label: "Finance & Audit", icon: TrendingUp, formations: financeFormations },
    { id: "marches", label: "Marchés Publics", icon: Briefcase, formations: marchesPublicsFormations },
    { id: "informatique", label: "Informatique & Archivage", icon: Monitor, formations: informatiqueFormations },
    { id: "secretariat", label: "Secrétariat & Protocole", icon: Users, formations: secretariatFormations },
    { id: "management", label: "Management & Leadership", icon: GraduationCap, formations: managementFormations },
    { id: "communication", label: "Communication & Marketing", icon: MessageSquare, formations: communicationFormations },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={formationDubaiHero} 
            alt="Formation Dubaï - Présentation professionnelle" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/75 to-secondary/70" />
        </div>
        <div className="container mx-auto px-4 pt-16 text-center relative z-10">
          <FadeInOnScroll>
            <Badge className="bg-secondary text-secondary-foreground mb-6 text-lg px-6 py-2">
              <Plane className="w-5 h-5 mr-2" />
              Programme International 2026
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Formations à Dubaï
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
              Centre de Formation et d'Excellence Professionnelle - Antenne Internationale à Dubaï
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Dubaï, Émirats Arabes Unis</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Février - Novembre 2026</span>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Mot de la Présidente */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <FadeInOnScroll>
            <Card className="max-w-4xl mx-auto border-l-4 border-l-secondary">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Mot de la Présidente Fondatrice</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  La <strong className="text-primary">Fondation Alpha Perla</strong>, sous l'impulsion de sa Présidente Fondatrice, 
                  Madame Alpha Perla Mboyo, œuvre pour le développement du leadership, de la bonne gouvernance et du renforcement 
                  des capacités humaines à travers des formations de haut niveau.
                </p>
                <p>
                  Dans le cadre de sa vision d'ouverture internationale, la Fondation organise son <strong className="text-secondary">Programme International de Formation 2026 à Dubaï</strong>, 
                  capitale mondiale de l'innovation et de la performance.
                </p>
                <p>
                  Ce programme s'adresse aux <strong>fonctionnaires, cadres, fiscalistes, secrétaires, entrepreneurs et étudiants</strong> désireux 
                  d'acquérir des compétences modernes dans les domaines des marchés publics, finances publiques, fiscalité, entrepreneuriat, 
                  gouvernance et secrétariat administratif.
                </p>
                <p>
                  Les formations seront assurées par des <strong>experts internationaux</strong> et se tiendront dans des environnements professionnels adaptés, 
                  combinant théorie, pratique et études de cas réels, pour former des acteurs capables d'impulser le changement et la bonne gouvernance en Afrique.
                </p>
                <p className="text-right font-semibold text-primary mt-6">
                  — Mme Alpha Perla Mboyo<br />
                  <span className="text-sm text-muted-foreground">Présidente Fondatrice - Fondation Alpha Perla</span>
                </p>
              </CardContent>
            </Card>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Formations Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeInOnScroll className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Calendrier des Formations 2026
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre programme complet de formations professionnelles à Dubaï
            </p>
          </FadeInOnScroll>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-3 mb-8 h-auto bg-transparent">
              <TabsTrigger
                value="all"
                className="flex flex-col items-center gap-1 px-4 py-3 min-w-[100px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <GraduationCap className="w-6 h-6" />
                <span className="text-xs font-medium">Toutes</span>
              </TabsTrigger>
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="flex flex-col items-center gap-1 px-4 py-3 min-w-[100px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <cat.icon className="w-6 h-6" />
                  <span className="text-xs font-medium text-center">{cat.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all">
              <FadeInOnScroll>
                <div className="grid gap-4">
                  {categories.flatMap((cat) => 
                    cat.formations.map((formation, index) => (
                      <Card key={`${cat.id}-${index}`} className="hover:shadow-lg transition-all duration-300 hover:border-secondary">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="outline" className="text-xs">
                                  {cat.label}
                                </Badge>
                              </div>
                              <h3 className="font-semibold text-primary text-lg mb-2">
                                {formation.theme}
                              </h3>
                              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4 text-secondary" />
                                  {formation.dates}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4 text-secondary" />
                                  Dubaï
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <Badge variant="secondary" className="text-lg px-4 py-2">
                                {formation.prix}
                              </Badge>
                              <Button asChild>
                                <a
                                  href={`https://wa.me/243977074034?text=Bonjour, je suis intéressé(e) par la formation : ${encodeURIComponent(formation.theme)}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  S'inscrire
                                </a>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              </FadeInOnScroll>
            </TabsContent>

            {categories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id}>
                <FadeInOnScroll>
                  <div className="grid gap-4">
                    {cat.formations.map((formation, index) => (
                      <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:border-secondary">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex-1">
                              <h3 className="font-semibold text-primary text-lg mb-2">
                                {formation.theme}
                              </h3>
                              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4 text-secondary" />
                                  {formation.dates}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4 text-secondary" />
                                  Dubaï
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <Badge variant="secondary" className="text-lg px-4 py-2">
                                {formation.prix}
                              </Badge>
                              <Button asChild>
                                <a
                                  href={`https://wa.me/243977074034?text=Bonjour, je suis intéressé(e) par la formation : ${encodeURIComponent(formation.theme)}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  S'inscrire
                                </a>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </FadeInOnScroll>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-16 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container mx-auto px-4">
          <FadeInOnScroll>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-6">Bonus Inclus</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-2 border-secondary">
                  <CardContent className="p-6 text-center">
                    <MapPin className="w-12 h-12 mx-auto text-secondary mb-4" />
                    <h3 className="text-xl font-semibold text-primary mb-2">Assistance Logement</h3>
                    <p className="text-muted-foreground">
                      Nous vous accompagnons dans la recherche et la réservation de votre hébergement à Dubaï
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-secondary">
                  <CardContent className="p-6 text-center">
                    <Globe className="w-12 h-12 mx-auto text-secondary mb-4" />
                    <h3 className="text-xl font-semibold text-primary mb-2">Assistance Tourisme</h3>
                    <p className="text-muted-foreground">
                      Profitez de visites organisées et découvrez les merveilles de Dubaï
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <FadeInOnScroll>
            <h2 className="text-3xl font-bold mb-6">Contactez-nous</h2>
            <p className="text-xl mb-8 opacity-90">
              Pour plus d'informations ou pour vous inscrire à une formation
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
              <a
                href="tel:+243977074034"
                className="flex items-center justify-center gap-2 text-lg hover:text-secondary transition-colors"
              >
                <Phone className="w-5 h-5" />
                +243 977 074 034
              </a>
              <a
                href="tel:+243896924967"
                className="flex items-center justify-center gap-2 text-lg hover:text-secondary transition-colors"
              >
                <Phone className="w-5 h-5" />
                +243 896 924 967
              </a>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white"
            >
              <a
                href="https://wa.me/243977074034?text=Bonjour, je suis intéressé(e) par le programme de formations à Dubaï 2026"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nous contacter sur WhatsApp
              </a>
            </Button>
            <p className="mt-8 text-sm opacity-75">
              Adresse : 44, Boulevard Sendwe, Immeuble ADI CONSTRUCT (4ᵉ Niveau) - Kinshasa
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationsDubai;
