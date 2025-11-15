import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";
import ArticleForm from "@/components/ArticleForm";
import JobForm from "@/components/JobForm";

const Admin = () => {
  const { isAdmin, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [articles, setArticles] = useState<any[]>([]);
  const [commentaires, setCommentaires] = useState<any[]>([]);
  const [offres, setOffres] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !isAdmin) {
      navigate("/auth");
    }
  }, [isAdmin, authLoading, navigate]);

  useEffect(() => {
    if (isAdmin) {
      fetchData();
    }
  }, [isAdmin]);

  const fetchData = async () => {
    const [articlesRes, commentsRes, offresRes] = await Promise.all([
      supabase.from("blog_articles").select("*").order("date_publication", { ascending: false }),
      supabase.from("commentaires").select("*, blog_articles(titre)").order("date_commentaire", { ascending: false }),
      supabase.from("offres_emploi").select("*").order("date_publication", { ascending: false }),
    ]);

    setArticles(articlesRes.data || []);
    setCommentaires(commentsRes.data || []);
    setOffres(offresRes.data || []);
    setLoading(false);
  };

  const handleDeleteArticle = async (id: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet article?")) {
      const { error } = await supabase.from("blog_articles").delete().eq("id", id);
      if (error) {
        toast.error("Erreur lors de la suppression");
      } else {
        toast.success("Article supprimé");
        fetchData();
      }
    }
  };

  const handleDeleteComment = async (id: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce commentaire?")) {
      const { error } = await supabase.from("commentaires").delete().eq("id", id);
      if (error) {
        toast.error("Erreur lors de la suppression");
      } else {
        toast.success("Commentaire supprimé");
        fetchData();
      }
    }
  };

  const handleDeleteOffre = async (id: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette offre?")) {
      const { error } = await supabase.from("offres_emploi").delete().eq("id", id);
      if (error) {
        toast.error("Erreur lors de la suppression");
      } else {
        toast.success("Offre supprimée");
        fetchData();
      }
    }
  };

  const handleReplyComment = async (id: string, reponse: string) => {
    const { error } = await supabase
      .from("commentaires")
      .update({ reponse_admin: reponse })
      .eq("id", id);

    if (error) {
      toast.error("Erreur lors de la réponse");
    } else {
      toast.success("Réponse ajoutée");
      fetchData();
    }
  };

  if (authLoading || loading) {
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

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold text-primary mb-8">Tableau de bord Admin</h1>

          <Tabs defaultValue="articles" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="articles">Articles ({articles.length})</TabsTrigger>
              <TabsTrigger value="commentaires">Commentaires ({commentaires.length})</TabsTrigger>
              <TabsTrigger value="offres">Offres ({offres.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="articles" className="space-y-4">
              <ArticleForm onSuccess={fetchData} />
              
              <Card>
                <CardHeader>
                  <CardTitle>Articles existants</CardTitle>
                  <CardDescription>Liste de tous les articles de blog</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {articles.length === 0 ? (
                      <p className="text-muted-foreground text-center py-8">Aucun article pour le moment</p>
                    ) : (
                      articles.map((article) => (
                        <div key={article.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex-1">
                            <h3 className="font-semibold">{article.titre}</h3>
                            <p className="text-sm text-muted-foreground">{article.auteur}</p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {new Date(article.date_publication).toLocaleDateString("fr-FR")}
                            </p>
                          </div>
                          <Button
                            variant="destructive"
                            size="icon"
                            onClick={() => handleDeleteArticle(article.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="commentaires" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Gérer les commentaires</CardTitle>
                  <CardDescription>Liste de tous les commentaires en attente de modération</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {commentaires.length === 0 ? (
                      <p className="text-muted-foreground text-center py-8">Aucun commentaire pour le moment</p>
                    ) : (
                      commentaires.map((comment) => (
                        <div key={comment.id} className="p-4 border rounded-lg space-y-3">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-semibold">{comment.nom}</h3>
                                <span className="text-xs text-muted-foreground">({comment.email})</span>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">
                                Article: {comment.blog_articles?.titre}
                              </p>
                              <p className="text-sm">{comment.message}</p>
                              <p className="text-xs text-muted-foreground mt-2">
                                {new Date(comment.date_commentaire).toLocaleDateString("fr-FR")}
                              </p>
                            </div>
                            <Button
                              variant="destructive"
                              size="icon"
                              onClick={() => handleDeleteComment(comment.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          {!comment.reponse_admin ? (
                            <div className="space-y-2 bg-muted/50 p-3 rounded">
                              <Textarea
                                placeholder="Votre réponse..."
                                id={`reply-${comment.id}`}
                                className="bg-background"
                              />
                              <Button
                                onClick={() => {
                                  const textarea = document.getElementById(`reply-${comment.id}`) as HTMLTextAreaElement;
                                  if (textarea.value.trim()) {
                                    handleReplyComment(comment.id, textarea.value);
                                  } else {
                                    toast.error("Veuillez écrire une réponse");
                                  }
                                }}
                              >
                                Répondre
                              </Button>
                            </div>
                          ) : (
                            <div className="bg-primary/10 p-3 rounded border border-primary/20">
                              <p className="text-sm font-medium mb-1">Votre réponse:</p>
                              <p className="text-sm">{comment.reponse_admin}</p>
                            </div>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="offres" className="space-y-4">
              <JobForm onSuccess={fetchData} />
              
              <Card>
                <CardHeader>
                  <CardTitle>Offres d'emploi existantes</CardTitle>
                  <CardDescription>Liste de toutes les offres publiées</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {offres.length === 0 ? (
                      <p className="text-muted-foreground text-center py-8">Aucune offre pour le moment</p>
                    ) : (
                      offres.map((offre) => (
                        <div key={offre.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex-1">
                            <h3 className="font-semibold">{offre.titre_poste}</h3>
                            <p className="text-sm text-muted-foreground">{offre.type_contrat} - {offre.localisation}</p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Publié le {new Date(offre.date_publication).toLocaleDateString("fr-FR")}
                            </p>
                          </div>
                          <Button
                            variant="destructive"
                            size="icon"
                            onClick={() => handleDeleteOffre(offre.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
