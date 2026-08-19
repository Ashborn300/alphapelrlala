import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Award, ArrowLeft, Sparkles, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import excellentiaAward1 from "@/assets/excellentia-award-1.jpg";
import excellentiaGroup from "@/assets/excellentia-group.jpg";
import excellentiaSpeaker from "@/assets/excellentia-speaker.jpg";
import excellentiaStaff from "@/assets/excellentia-staff.jpg";

const images = [
  { src: excellentiaAward1, alt: "Remise de prix Excellentia" },
  { src: excellentiaGroup, alt: "Photo de groupe des lauréates" },
  { src: excellentiaSpeaker, alt: "Discours lors de la cérémonie" },
  { src: excellentiaStaff, alt: "Équipe organisatrice" },
];

const QuatriemeEdition = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>4ᵉ édition Trophée Congolese Woman Excellentia – Afrique</title>
        <meta
          name="description"
          content="4ᵉ édition du Trophée Congolese Woman Excellentia – Afrique : une distinction qui célèbre l'excellence, l'impact et l'engagement en faveur de la femme africaine."
        />
        <meta property="og:title" content="4ᵉ édition Trophée Congolese Woman Excellentia – Afrique" />
        <meta
          property="og:description"
          content="Candidatures ouvertes aux femmes et hommes d'impact de tous les pays d'Afrique."
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Header />

      <main className="flex-1">
        <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <Button asChild variant="ghost" size="sm" className="mb-6">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour à l'accueil
              </Link>
            </Button>

            <FadeInOnScroll className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                <Award className="h-14 w-14 text-secondary" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
                4ᵉ ÉDITION DU TROPHÉE CONGOLESE WOMAN EXCELLENTIA – AFRIQUE
              </h1>
              <p className="text-xl text-secondary font-semibold mb-4">
                Formulaire officiel de candidature
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Une distinction qui célèbre l'excellence, l'impact et l'engagement en faveur de la femme africaine.
              </p>
            </FadeInOnScroll>
          </div>
        </section>

        {/* Galerie */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <FadeInOnScroll className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
              {images.map((img) => (
                <div
                  key={img.alt}
                  className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover" />
                </div>
              ))}
            </FadeInOnScroll>
          </div>
        </section>

        {/* Présentation */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <FadeInOnScroll className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                I. Présentation du Trophée
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Le Trophée Congolese Woman Excellentia est un prix prestigieux qui célèbre les femmes d'impact
                  qui se distinguent par leur excellence, leur parcours, leurs réalisations et leur engagement
                  dans leurs domaines respectifs.
                </p>
                <p>
                  Il met également à l'honneur des hommes engagés dans la promotion et le soutien à la femme
                  africaine, qui contribuent concrètement à son autonomisation, à son épanouissement et à son
                  leadership.
                </p>
                <p>
                  Pour cette 4ᵉ édition, les candidatures sont ouvertes aux femmes et aux hommes d'impact de tous
                  les pays d'Afrique.
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </section>

        {/* Vision / valeurs */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <FadeInOnScroll className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">Notre vision</h2>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10">
                Révéler, célébrer et valoriser celles et ceux qui osent, inspirent et impactent.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Sparkles className="h-10 w-10 text-secondary mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Excellence</h3>
                    <p className="text-muted-foreground">
                      Distinguer les parcours remarquables et les réalisations concrètes.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Target className="h-10 w-10 text-secondary mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Impact</h3>
                    <p className="text-muted-foreground">
                      Valoriser les actions qui transforment durablement les communautés.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Users className="h-10 w-10 text-secondary mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Engagement</h3>
                    <p className="text-muted-foreground">
                      Honorer femmes et hommes engagés pour la femme africaine.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </FadeInOnScroll>
          </div>
        </section>

        {/* Candidature */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <FadeInOnScroll className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Participer à la 4ᵉ édition</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Les candidatures sont ouvertes aux femmes et aux hommes d'impact de tous les pays d'Afrique.
                Contactez-nous pour recevoir le formulaire officiel de candidature.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="https://wa.me/243977074034" target="_blank" rel="noopener noreferrer">
                    Déposer ma candidature
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">Nous contacter</Link>
                </Button>
              </div>
            </FadeInOnScroll>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default QuatriemeEdition;
