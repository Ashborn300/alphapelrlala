import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, Calendar } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface Offre {
  id: string;
  titre_poste: string;
  localisation: string;
  type_contrat: string;
  description: string;
  date_publication: string;
}

const Job = () => {
  const { id } = useParams();
  const [offre, setOffre] = useState<Offre | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOffre = async () => {
      const { data, error } = await supabase
        .from("offres_emploi")
        .select("*")
        .eq("id", id)
        .maybeSingle();

      if (error) {
        console.error("Error fetching job:", error);
      } else {
        setOffre(data);
      }
      setLoading(false);
    };

    fetchOffre();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Chargement...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!offre) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Offre non trouvée</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <article className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {offre.titre_poste}
            </h1>
            
            <div className="flex flex-wrap gap-6 mb-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{offre.localisation}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                <span>{offre.type_contrat}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>
                  Publié le {format(new Date(offre.date_publication), "d MMMM yyyy", { locale: fr })}
                </span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-8 text-foreground">
              {offre.description.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h2 className="text-xl font-bold text-primary mb-4">
                Intéressé(e) par cette offre?
              </h2>
              <p className="text-foreground mb-4">
                Pour postuler, envoyez votre CV et lettre de motivation à notre équipe.
              </p>
              <Button size="lg">
                Postuler maintenant
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Job;
