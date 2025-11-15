import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface Article {
  id: string;
  titre: string;
  slug: string;
  image_couverture: string | null;
  contenu: string;
  auteur: string;
  date_publication: string;
}

interface Commentaire {
  id: string;
  nom: string;
  message: string;
  date_commentaire: string;
  reponse_admin: string | null;
}

const Article = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [commentaires, setCommentaires] = useState<Commentaire[]>([]);
  const [loading, setLoading] = useState(true);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data: articleData, error: articleError } = await supabase
        .from("blog_articles")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();

      if (articleError) {
        console.error("Error fetching article:", articleError);
      } else if (articleData) {
        setArticle(articleData);

        const { data: commentsData, error: commentsError } = await supabase
          .from("commentaires")
          .select("*")
          .eq("article_id", articleData.id)
          .order("date_commentaire", { ascending: false });

        if (commentsError) {
          console.error("Error fetching comments:", commentsError);
        } else {
          setCommentaires(commentsData || []);
        }
      }
      setLoading(false);
    };

    fetchData();
  }, [slug]);

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!article) return;

    setSubmitting(true);
    try {
      const { error } = await supabase.from("commentaires").insert({
        article_id: article.id,
        nom,
        email,
        message,
      });

      if (error) throw error;

      toast.success("Commentaire ajouté avec succès!");
      setNom("");
      setEmail("");
      setMessage("");

      const { data } = await supabase
        .from("commentaires")
        .select("*")
        .eq("article_id", article.id)
        .order("date_commentaire", { ascending: false });

      setCommentaires(data || []);
    } catch (error: any) {
      toast.error(error.message || "Erreur lors de l'ajout du commentaire");
    } finally {
      setSubmitting(false);
    }
  };

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

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Article non trouvé</p>
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
            {article.image_couverture && (
              <img
                src={article.image_couverture}
                alt={article.titre}
                className="w-full h-96 object-cover rounded-lg mb-8"
              />
            )}
            <div className="text-sm text-muted-foreground mb-4">
              Par {article.auteur} •{" "}
              {format(new Date(article.date_publication), "d MMMM yyyy", { locale: fr })}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
              {article.titre}
            </h1>
            <div className="prose prose-lg max-w-none mb-12 text-foreground">
              {article.contenu.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>

            <div className="border-t pt-12">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Commentaires ({commentaires.length})
              </h2>

              <Card className="mb-8">
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmitComment} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nom">Nom *</Label>
                        <Input
                          id="nom"
                          value={nom}
                          onChange={(e) => setNom(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Votre commentaire *</Label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={4}
                      />
                    </div>
                    <Button type="submit" disabled={submitting}>
                      {submitting ? "Envoi..." : "Publier le commentaire"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                {commentaires.map((comment) => (
                  <Card key={comment.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-primary">{comment.nom}</h3>
                        <span className="text-sm text-muted-foreground">
                          {format(new Date(comment.date_commentaire), "d MMMM yyyy", { locale: fr })}
                        </span>
                      </div>
                      <p className="text-foreground mb-4">{comment.message}</p>
                      {comment.reponse_admin && (
                        <div className="bg-muted p-4 rounded-lg">
                          <p className="text-sm font-semibold text-primary mb-2">
                            Réponse de l'administrateur :
                          </p>
                          <p className="text-sm text-foreground">{comment.reponse_admin}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Article;
