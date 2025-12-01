import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2, Upload, X } from "lucide-react";

interface ProjectFormProps {
  onSuccess: () => void;
}

const ProjectForm = ({ onSuccess }: ProjectFormProps) => {
  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [formData, setFormData] = useState({
    titre: "",
    slug: "",
    description_courte: "",
    description_complete: "",
    objectifs: "",
    resultats: "",
    categorie: "",
    statut: "En cours",
    image_principale: "",
    lien_whatsapp: "",
    lien_don_50: "",
    lien_don_100: "",
    lien_don_250: "",
    lien_don_500: "",
  });

  const categories = [
    "Éducation",
    "Entrepreneuriat",
    "Social",
    "Culture",
    "Développement",
    "Excellence",
    "Patrimoine",
    "Mentorat"
  ];

  const statuts = ["En cours", "À venir", "Terminé", "Annuel"];

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("article-images")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from("article-images")
        .getPublicUrl(filePath);

      setFormData({ ...formData, image_principale: publicUrl });
      toast.success("Image téléchargée");
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Erreur lors du téléchargement");
    } finally {
      setUploadingImage(false);
    }
  };

  const generateSlug = (titre: string) => {
    return titre
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleTitreChange = (titre: string) => {
    setFormData({
      ...formData,
      titre,
      slug: generateSlug(titre),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.titre || !formData.slug || !formData.description_courte || !formData.description_complete || !formData.categorie) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.from("projects").insert([formData]);

      if (error) throw error;

      toast.success("Projet créé avec succès");
      setFormData({
        titre: "",
        slug: "",
        description_courte: "",
        description_complete: "",
        objectifs: "",
        resultats: "",
        categorie: "",
        statut: "En cours",
        image_principale: "",
        lien_whatsapp: "",
        lien_don_50: "",
        lien_don_100: "",
        lien_don_250: "",
        lien_don_500: "",
      });
      onSuccess();
    } catch (error) {
      console.error("Error creating project:", error);
      toast.error("Erreur lors de la création du projet");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="titre">Titre *</Label>
          <Input
            id="titre"
            value={formData.titre}
            onChange={(e) => handleTitreChange(e.target.value)}
            placeholder="Titre du projet"
            required
          />
        </div>

        <div>
          <Label htmlFor="slug">Slug (URL) *</Label>
          <Input
            id="slug"
            value={formData.slug}
            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
            placeholder="mon-projet"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="categorie">Catégorie *</Label>
          <Select value={formData.categorie} onValueChange={(value) => setFormData({ ...formData, categorie: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Choisir une catégorie" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="statut">Statut</Label>
          <Select value={formData.statut} onValueChange={(value) => setFormData({ ...formData, statut: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {statuts.map((stat) => (
                <SelectItem key={stat} value={stat}>{stat}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="description_courte">Description courte *</Label>
        <Textarea
          id="description_courte"
          value={formData.description_courte}
          onChange={(e) => setFormData({ ...formData, description_courte: e.target.value })}
          placeholder="Courte description (2-3 lignes)"
          rows={3}
          required
        />
      </div>

      <div>
        <Label htmlFor="description_complete">Description complète *</Label>
        <Textarea
          id="description_complete"
          value={formData.description_complete}
          onChange={(e) => setFormData({ ...formData, description_complete: e.target.value })}
          placeholder="Description détaillée du projet"
          rows={8}
          required
        />
      </div>

      <div>
        <Label htmlFor="objectifs">Objectifs</Label>
        <Textarea
          id="objectifs"
          value={formData.objectifs}
          onChange={(e) => setFormData({ ...formData, objectifs: e.target.value })}
          placeholder="Les objectifs du projet"
          rows={5}
        />
      </div>

      <div>
        <Label htmlFor="resultats">Résultats attendus</Label>
        <Textarea
          id="resultats"
          value={formData.resultats}
          onChange={(e) => setFormData({ ...formData, resultats: e.target.value })}
          placeholder="Les résultats attendus"
          rows={5}
        />
      </div>

      <div>
        <Label htmlFor="image">Image principale</Label>
        <div className="flex gap-4 items-start">
          <div className="flex-1">
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={uploadingImage}
            />
          </div>
          {formData.image_principale && (
            <div className="relative">
              <img src={formData.image_principale} alt="Preview" className="w-20 h-20 object-cover rounded" />
              <button
                type="button"
                onClick={() => setFormData({ ...formData, image_principale: "" })}
                className="absolute -top-2 -right-2 bg-destructive text-white rounded-full p-1"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          )}
        </div>
        {uploadingImage && (
          <p className="text-sm text-muted-foreground mt-2">
            <Loader2 className="inline h-4 w-4 animate-spin mr-2" />
            Téléchargement...
          </p>
        )}
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Liens de financement</h3>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="lien_whatsapp">Lien WhatsApp (Financement)</Label>
            <Input
              id="lien_whatsapp"
              value={formData.lien_whatsapp}
              onChange={(e) => setFormData({ ...formData, lien_whatsapp: e.target.value })}
              placeholder="https://wa.me/..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="lien_don_50">Lien Lygos - 50$ (125000 FC)</Label>
              <Input
                id="lien_don_50"
                value={formData.lien_don_50}
                onChange={(e) => setFormData({ ...formData, lien_don_50: e.target.value })}
                placeholder="https://pay.lygosapp.com/..."
              />
            </div>

            <div>
              <Label htmlFor="lien_don_100">Lien Lygos - 100$ (250000 FC)</Label>
              <Input
                id="lien_don_100"
                value={formData.lien_don_100}
                onChange={(e) => setFormData({ ...formData, lien_don_100: e.target.value })}
                placeholder="https://pay.lygosapp.com/..."
              />
            </div>

            <div>
              <Label htmlFor="lien_don_250">Lien Lygos - 150$ (375000 FC)</Label>
              <Input
                id="lien_don_250"
                value={formData.lien_don_250}
                onChange={(e) => setFormData({ ...formData, lien_don_250: e.target.value })}
                placeholder="https://pay.lygosapp.com/..."
              />
            </div>

            <div>
              <Label htmlFor="lien_don_500">Lien Lygos - 200$ (500000 FC)</Label>
              <Input
                id="lien_don_500"
                value={formData.lien_don_500}
                onChange={(e) => setFormData({ ...formData, lien_don_500: e.target.value })}
                placeholder="https://pay.lygosapp.com/..."
              />
            </div>
          </div>
        </div>
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Création en cours...
          </>
        ) : (
          "Créer le projet"
        )}
      </Button>
    </form>
  );
};

export default ProjectForm;