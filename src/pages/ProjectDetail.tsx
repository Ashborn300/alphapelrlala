import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import { ArrowLeft, MessageCircle, DollarSign, Target, TrendingUp } from "lucide-react";
import { toast } from "sonner";

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState<any>(null);
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProject = async () => {
    const { data: projectData, error: projectError } = await supabase
      .from("projects")
      .select("*")
      .eq("slug", slug)
      .single();

    if (projectError) {
      toast.error("Erreur lors du chargement du projet");
      setLoading(false);
      return;
    }

    const { data: imagesData } = await supabase
      .from("project_images")
      .select("*")
      .eq("project_id", projectData.id)
      .order("ordre", { ascending: true });

    setProject(projectData);
    setImages(imagesData || []);
    setLoading(false);
  };

  useEffect(() => {
    if (slug) {
      fetchProject();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const handleWhatsAppClick = () => {
    if (project?.lien_whatsapp) {
      window.open(project.lien_whatsapp, "_blank");
    }
  };

  const handleDonation = (montant: number, lien: string) => {
    if (lien) {
      window.open(lien, "_blank");
    } else {
      toast.error("Lien de don non configuré");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-24 flex items-center justify-center">
          <p className="text-muted-foreground">Chargement...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Projet non trouvé</h1>
          <Link to="/projects">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux projets
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const donationOptions = [
    { montant: 50, fc: "125000", lien: project.lien_don_50 },
    { montant: 100, fc: "250000", lien: project.lien_don_100 },
    { montant: 250, fc: "625000", lien: project.lien_don_250 },
    { montant: 500, fc: "1250000", lien: project.lien_don_500 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <FadeInOnScroll>
            <Link to="/projects" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux projets
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary" className="text-sm">{project.categorie}</Badge>
              <Badge className="bg-accent text-accent-foreground">{project.statut}</Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              {project.titre}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {project.description_courte}
            </p>
          </FadeInOnScroll>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Main Image */}
      {project.image_principale && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <FadeInOnScroll>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={project.image_principale}
                  alt={project.titre}
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeInOnScroll>
          </div>
        </section>
      )}

      {/* Description Complete */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInOnScroll>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Target className="h-8 w-8 text-primary" />
                    Description du projet
                  </h2>
                  <div className="prose max-w-none text-muted-foreground whitespace-pre-wrap">
                    {project.description_complete}
                  </div>
                </CardContent>
              </Card>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Objectifs */}
      {project.objectifs && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInOnScroll>
                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                      <Target className="h-6 w-6 text-accent" />
                      Objectifs
                    </h2>
                    <div className="text-muted-foreground whitespace-pre-wrap">
                      {project.objectifs}
                    </div>
                  </CardContent>
                </Card>
              </FadeInOnScroll>
            </div>
          </div>
        </section>
      )}

      {/* Résultats */}
      {project.resultats && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInOnScroll>
                <Card className="border-l-4 border-l-secondary">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                      <TrendingUp className="h-6 w-6 text-secondary" />
                      Résultats attendus
                    </h2>
                    <div className="text-muted-foreground whitespace-pre-wrap">
                      {project.resultats}
                    </div>
                  </CardContent>
                </Card>
              </FadeInOnScroll>
            </div>
          </div>
        </section>
      )}

      {/* Galerie d'images */}
      {images.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <FadeInOnScroll>
              <h2 className="text-3xl font-bold mb-8 text-center">Galerie du projet</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image, index) => (
                  <FadeInOnScroll key={image.id} delay={index * 100}>
                    <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
                      <div className="relative aspect-video">
                        <img
                          src={image.image_url}
                          alt={image.legende || `Image ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      {image.legende && (
                        <CardContent className="p-4">
                          <p className="text-sm text-muted-foreground">{image.legende}</p>
                        </CardContent>
                      )}
                    </Card>
                  </FadeInOnScroll>
                ))}
              </div>
            </FadeInOnScroll>
          </div>
        </section>
      )}

      {/* Financer le projet */}
      {project.lien_whatsapp && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <FadeInOnScroll>
                <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
                  <CardContent className="p-8 text-center">
                    <MessageCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h2 className="text-3xl font-bold mb-4">Financer le projet</h2>
                    <p className="text-muted-foreground mb-6">
                      Contactez-nous sur WhatsApp pour discuter des opportunités de financement
                      et de partenariat pour ce projet.
                    </p>
                    <Button
                      size="lg"
                      onClick={handleWhatsAppClick}
                      className="bg-[#25D366] hover:bg-[#20BA5A] text-white"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Contacter sur WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              </FadeInOnScroll>
            </div>
          </div>
        </section>
      )}

      {/* Faire un don */}
      <section className="py-16 bg-gradient-to-br from-secondary/10 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInOnScroll>
              <div className="text-center mb-12">
                <DollarSign className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <h2 className="text-3xl font-bold mb-4">Faire un don</h2>
                <p className="text-muted-foreground text-lg">
                  Soutenez ce projet en faisant un don. Choisissez le montant qui vous convient.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {donationOptions.map((option, index) => (
                  <FadeInOnScroll key={option.montant} delay={index * 100}>
                    <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-secondary/50">
                      <CardContent className="p-8 text-center">
                        <div className="text-4xl font-bold text-secondary mb-2">
                          ${option.montant}
                        </div>
                        <div className="text-lg text-muted-foreground mb-6">
                          {option.fc} FC
                        </div>
                        <Button
                          onClick={() => handleDonation(option.montant, option.lien)}
                          disabled={!option.lien}
                          className="w-full"
                          size="lg"
                        >
                          <DollarSign className="mr-2 h-5 w-5" />
                          Donner ${option.montant}
                        </Button>
                      </CardContent>
                    </Card>
                  </FadeInOnScroll>
                ))}
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;