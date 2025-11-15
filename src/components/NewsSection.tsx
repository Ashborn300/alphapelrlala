import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";

interface Article {
  id: string;
  titre: string;
  slug: string;
  image_couverture: string | null;
  extrait: string | null;
  date_publication: string;
}

const NewsSection = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data } = await supabase
        .from("blog_articles")
        .select("id, titre, slug, image_couverture, extrait, date_publication")
        .order("date_publication", { ascending: false })
        .limit(3);

      setArticles(data || []);
    };

    fetchArticles();
  }, []);

  if (articles.length === 0) return null;

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <FadeInOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nos Actualités
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos dernières nouvelles et articles
            </p>
          </div>
        </FadeInOnScroll>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {articles.map((article) => (
            <FadeInOnScroll key={article.id}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                {article.image_couverture && (
                  <img
                    src={article.image_couverture}
                    alt={article.titre}
                    className="w-full h-48 object-cover"
                  />
                )}
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="text-sm text-muted-foreground mb-2">
                    {format(new Date(article.date_publication), "d MMMM yyyy", { locale: fr })}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {article.titre}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                    {article.extrait}
                  </p>
                  <Link to={`/blog/${article.slug}`}>
                    <Button variant="ghost" className="group w-full">
                      Lire l'article
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </FadeInOnScroll>
          ))}
        </div>

        <FadeInOnScroll>
          <div className="text-center">
            <Link to="/blog">
              <Button size="lg" className="group">
                Voir tous les articles
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
};

export default NewsSection;
