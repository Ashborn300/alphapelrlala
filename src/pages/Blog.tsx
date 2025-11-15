import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface Article {
  id: string;
  titre: string;
  slug: string;
  image_couverture: string | null;
  extrait: string | null;
  auteur: string;
  date_publication: string;
}

const Blog = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from("blog_articles")
        .select("*")
        .order("date_publication", { ascending: false });

      if (error) {
        console.error("Error fetching articles:", error);
      } else {
        setArticles(data || []);
      }
      setLoading(false);
    };

    fetchArticles();
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
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
              Notre Blog
            </h1>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Découvrez nos actualités, conseils et histoires inspirantes
            </p>

            {articles.length === 0 ? (
              <p className="text-center text-muted-foreground">
                Aucun article pour le moment.
              </p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    {article.image_couverture && (
                      <img
                        src={article.image_couverture}
                        alt={article.titre}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <CardContent className="p-6">
                      <div className="text-sm text-muted-foreground mb-2">
                        {format(new Date(article.date_publication), "d MMMM yyyy", { locale: fr })}
                      </div>
                      <h2 className="text-xl font-bold text-primary mb-2">
                        {article.titre}
                      </h2>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {article.extrait}
                      </p>
                      <Link to={`/blog/${article.slug}`}>
                        <Button variant="ghost" className="group">
                          Lire l'article
                          <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
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

export default Blog;
