import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, Briefcase } from "lucide-react";
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

const Jobs = () => {
  const [offres, setOffres] = useState<Offre[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOffres = async () => {
      const { data, error } = await supabase
        .from("offres_emploi")
        .select("*")
        .order("date_publication", { ascending: false });

      if (error) {
        console.error("Error fetching jobs:", error);
      } else {
        setOffres(data || []);
      }
      setLoading(false);
    };

    fetchOffres();
  }, []);

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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
              Nos Offres d'Emploi
            </h1>
            <p className="text-muted-foreground text-center mb-12">
              Rejoignez notre équipe et participez à notre mission
            </p>

            {offres.length === 0 ? (
              <p className="text-center text-muted-foreground">
                Aucune offre d'emploi pour le moment.
              </p>
            ) : (
              <div className="space-y-6">
                {offres.map((offre) => (
                  <Card key={offre.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold text-primary mb-2">
                            {offre.titre_poste}
                          </h2>
                          <div className="flex flex-wrap gap-4 mb-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {offre.localisation}
                            </div>
                            <div className="flex items-center gap-1">
                              <Briefcase className="h-4 w-4" />
                              {offre.type_contrat}
                            </div>
                            <div>
                              Publié le {format(new Date(offre.date_publication), "d MMMM yyyy", { locale: fr })}
                            </div>
                          </div>
                          <p className="text-foreground line-clamp-2 mb-4">
                            {offre.description}
                          </p>
                        </div>
                        <Link to={`/jobs/${offre.id}`}>
                          <Button className="group">
                            Voir l'offre
                            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;
