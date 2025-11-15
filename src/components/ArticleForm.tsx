import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface ArticleFormProps {
  onSuccess: () => void;
}

const ArticleForm = ({ onSuccess }: ArticleFormProps) => {
  const [formData, setFormData] = useState({
    titre: "",
    slug: "",
    auteur: "",
    extrait: "",
    contenu: "",
    image_couverture: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("blog_articles").insert([
      {
        ...formData,
        slug: formData.slug || formData.titre.toLowerCase().replace(/\s+/g, "-"),
      },
    ]);

    if (error) {
      toast.error("Erreur lors de la création de l'article");
      console.error(error);
    } else {
      toast.success("Article créé avec succès");
      setFormData({
        titre: "",
        slug: "",
        auteur: "",
        extrait: "",
        contenu: "",
        image_couverture: "",
      });
      onSuccess();
    }
    setLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Créer un nouvel article</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="titre">Titre *</Label>
            <Input
              id="titre"
              value={formData.titre}
              onChange={(e) => setFormData({ ...formData, titre: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="slug">Slug (optionnel)</Label>
            <Input
              id="slug"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              placeholder="sera généré automatiquement si vide"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="auteur">Auteur *</Label>
            <Input
              id="auteur"
              value={formData.auteur}
              onChange={(e) => setFormData({ ...formData, auteur: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="extrait">Extrait</Label>
            <Textarea
              id="extrait"
              value={formData.extrait}
              onChange={(e) => setFormData({ ...formData, extrait: e.target.value })}
              placeholder="Court résumé de l'article"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contenu">Contenu *</Label>
            <Textarea
              id="contenu"
              value={formData.contenu}
              onChange={(e) => setFormData({ ...formData, contenu: e.target.value })}
              required
              className="min-h-[200px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image_couverture">URL de l'image de couverture</Label>
            <Input
              id="image_couverture"
              type="url"
              value={formData.image_couverture}
              onChange={(e) => setFormData({ ...formData, image_couverture: e.target.value })}
              placeholder="https://..."
            />
          </div>

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Création..." : "Créer l'article"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ArticleForm;
