import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  TrendingUp,
  Users,
  Heart,
  Award,
  Globe,
  BookOpen,
  Briefcase,
  Home,
  Camera,
} from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: GraduationCap,
      category: "Éducation et Formation",
      programs: [
        "Organisation de formations, ateliers et séminaires pour jeunes et femmes",
        "Promotion de l'alphabétisation",
        "Formations professionnelles dans plusieurs domaines",
        "Master class avec des experts reconnus",
      ],
    },
    {
      icon: TrendingUp,
      category: "Entrepreneuriat et Leadership Féminin",
      programs: [
        "Mentorat et coaching personnalisé",
        "Formation aux opportunités d'affaires au pays et à l'étranger",
        "Accompagnement dans le développement de projets entrepreneuriaux",
        "Soutien aux projets sociaux",
      ],
    },
    {
      icon: Users,
      category: "Développement Personnel",
      programs: [
        "Ateliers de confiance en soi et estime de soi",
        "Sessions de motivation et inspiration",
        "Coaching sur la gestion du temps",
        "Programmes pour apprendre à rêver grand et atteindre ses ambitions",
        "Accompagnement à la réussite professionnelle et personnelle",
      ],
    },
    {
      icon: Heart,
      category: "Action Sociale et Humanitaire",
      programs: [
        "Soutien aux communautés défavorisées",
        "Aide aux déplacés de guerre",
        "Accompagnement des femmes victimes de violences",
        "Projets liés à la santé communautaire",
        "Initiatives pour l'environnement",
      ],
    },
    {
      icon: Award,
      category: "Événements Culturels",
      programs: [
        "Organisation du Trophée Congolese Woman Excellentia",
        "Cérémonie Eva Africa",
        "Promotion de la culture africaine",
        "Célébration de la beauté et de l'identité africaine",
      ],
    },
    {
      icon: Briefcase,
      category: "Gestion de Patrimoine et Projets",
      programs: [
        "Conception et gestion de projets pour partenaires",
        "Services au pays et à l'étranger",
        "Accompagnement jusqu'à la réalisation complète",
      ],
    },
    {
      icon: Globe,
      category: "Tourisme",
      programs: [
        "Découverte des richesses du pays",
        "Promotion du patrimoine culturel congolais",
        "Organisation de circuits touristiques",
        "Échanges interculturels",
      ],
    },
    {
      icon: BookOpen,
      category: "Écriture et Publication",
      programs: [
        "Accompagnement d'auteurs émergents",
        "Publication d'ouvrages inspirants",
        "Partage d'expériences à travers l'écriture",
        "Promotion de la littérature africaine",
      ],
    },
    {
      icon: Camera,
      category: "Communication et Sensibilisation",
      programs: [
        "Campagnes sur l'autonomisation",
        "Sensibilisation à l'égalité des sexes",
        "Promotion du développement durable",
        "Utilisation des médias sociaux pour amplifier l'impact",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center text-primary-foreground z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Programmes de la Fondation Alpha Perla
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up">
            Des initiatives diversifiées d'Alpha Perla pour l'autonomisation et le
            développement des femmes et jeunes en Afrique
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              >
                <CardHeader className="bg-muted/50">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <program.icon className="h-8 w-8 text-secondary" />
                    </div>
                    <CardTitle className="text-2xl text-primary">
                      {program.category}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {program.programs.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="mt-1.5 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {program.category === "Éducation et Formation" && (
                    <div className="mt-6">
                      <Button asChild variant="default" size="sm">
                        <a href="/education">
                          Découvrir
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Rejoignez les Programmes de la Fondation Alpha Perla
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Intéressé par l'un des programmes d'<strong>Alpha Perla</strong>? <a href="/contact" className="text-secondary hover:underline">Contactez-nous</a> pour en savoir
            plus et vous inscrire à nos formations et ateliers.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
          >
            Nous Contacter
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
