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
import { Trash2, FileText, MessageSquare, Briefcase, TrendingUp, Users, Eye, BarChart3 } from "lucide-react";
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
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Header />
      <main className="flex-1 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Tableau de bord Admin</h1>
            <p className="text-muted-foreground">Gérez vos contenus et suivez vos statistiques</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-green-500 to-green-600 border-0 text-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-white/90">Articles</CardTitle>
                <FileText className="h-5 w-5 text-white/80" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{articles.length}</div>
                <p className="text-xs text-white/80 mt-1 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  Publications totales
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 border-0 text-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-white/90">Commentaires</CardTitle>
                <MessageSquare className="h-5 w-5 text-white/80" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{commentaires.length}</div>
                <p className="text-xs text-white/80 mt-1 flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  Interactions
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500 to-orange-600 border-0 text-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-white/90">Offres</CardTitle>
                <Briefcase className="h-5 w-5 text-white/80" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{offres.length}</div>
                <p className="text-xs text-white/80 mt-1 flex items-center gap-1">
                  <Eye className="h-3 w-3" />
                  Postes disponibles
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-500 to-cyan-600 border-0 text-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-white/90">Total</CardTitle>
                <BarChart3 className="h-5 w-5 text-white/80" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{articles.length + commentaires.length + offres.length}</div>
                <p className="text-xs text-white/80 mt-1 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  Éléments gérés
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-lg">
            <Tabs defaultValue="articles">
              <TabsList className="grid w-full grid-cols-3 h-auto p-2">
                <TabsTrigger value="articles" className="flex items-center gap-2 py-3">
                  <FileText className="h-4 w-4" />
                  <span className="hidden sm:inline">Articles</span>
                </TabsTrigger>
                <TabsTrigger value="commentaires" className="flex items-center gap-2 py-3">
                  <MessageSquare className="h-4 w-4" />
                  <span className="hidden sm:inline">Commentaires</span>
                </TabsTrigger>
                <TabsTrigger value="offres" className="flex items-center gap-2 py-3">
                  <Briefcase className="h-4 w-4" />
                  <span className="hidden sm:inline">Offres</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="articles" className="p-6 space-y-6">
                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <CardTitle>Créer un article</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ArticleForm onSuccess={fetchData} />
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <CardTitle>Articles ({articles.length})</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {articles.map((article) => (
                        <div key={article.id} className="flex justify-between items-start p-4 border rounded-lg hover:shadow-md transition-shadow">
                          <div className="flex gap-3 flex-1">
                            {article.image_couverture && (
                              <img src={article.image_couverture} alt={article.titre} className="w-16 h-16 object-cover rounded" />
                            )}
                            <div>
                              <h3 className="font-semibold">{article.titre}</h3>
                              <p className="text-sm text-muted-foreground">{article.auteur}</p>
                            </div>
                          </div>
                          <Button variant="destructive" size="sm" onClick={() => handleDeleteArticle(article.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="commentaires" className="p-6">
                <Card className="border-l-4 border-l-purple-500">
                  <CardHeader>
                    <CardTitle>Commentaires ({commentaires.length})</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {commentaires.map((comment: any) => (
                        <div key={comment.id} className="p-4 border rounded-lg space-y-2">
                          <div className="flex justify-between">
                            <div>
                              <p className="font-semibold">{comment.nom}</p>
                              <p className="text-sm text-muted-foreground">{comment.message}</p>
                            </div>
                            <Button variant="destructive" size="sm" onClick={() => handleDeleteComment(comment.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          {!comment.reponse_admin && (
                            <div className="flex gap-2">
                              <Textarea placeholder="Réponse..." id={`reply-${comment.id}`} />
                              <Button onClick={() => {
                                const textarea = document.getElementById(`reply-${comment.id}`) as HTMLTextAreaElement;
                                handleReplyComment(comment.id, textarea.value);
                              }}>Répondre</Button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="offres" className="p-6 space-y-6">
                <Card className="border-l-4 border-l-orange-500">
                  <CardHeader>
                    <CardTitle>Créer une offre</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <JobForm onSuccess={fetchData} />
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-500">
                  <CardHeader>
                    <CardTitle>Offres ({offres.length})</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:grid-cols-2">
                      {offres.map((offre) => (
                        <div key={offre.id} className="flex justify-between p-4 border rounded-lg">
                          <div>
                            <h3 className="font-semibold">{offre.titre_poste}</h3>
                            <p className="text-sm text-muted-foreground">{offre.localisation}</p>
                          </div>
                          <Button variant="destructive" size="sm" onClick={() => handleDeleteOffre(offre.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
