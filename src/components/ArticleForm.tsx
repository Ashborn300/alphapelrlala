import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Upload, X, Video } from "lucide-react";

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
  });
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [coverImagePreview, setCoverImagePreview] = useState("");
  const [secondaryImages, setSecondaryImages] = useState<File[]>([]);
  const [secondaryImagesPreviews, setSecondaryImagesPreviews] = useState<string[]>([]);
  const [videos, setVideos] = useState<File[]>([]);
  const [videosPreviews, setVideosPreviews] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCoverImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSecondaryImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setSecondaryImages([...secondaryImages, ...files]);
    
    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSecondaryImagesPreviews(prev => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeSecondaryImage = (index: number) => {
    setSecondaryImages(prev => prev.filter((_, i) => i !== index));
    setSecondaryImagesPreviews(prev => prev.filter((_, i) => i !== index));
  };

  const handleVideosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setVideos([...videos, ...files]);
    
    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setVideosPreviews(prev => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeVideo = (index: number) => {
    setVideos(prev => prev.filter((_, i) => i !== index));
    setVideosPreviews(prev => prev.filter((_, i) => i !== index));
  };

  const uploadImage = async (file: File, path: string) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
    const filePath = `${path}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('article-images')
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage
      .from('article-images')
      .getPublicUrl(filePath);

    return publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let coverImageUrl = "";
      
      // Upload cover image
      if (coverImage) {
        coverImageUrl = await uploadImage(coverImage, 'covers');
      }

      // Insert article
      const { data: articleData, error: articleError } = await supabase
        .from("blog_articles")
        .insert([{
          ...formData,
          slug: formData.slug || formData.titre.toLowerCase().replace(/\s+/g, "-"),
          image_couverture: coverImageUrl,
        }])
        .select()
        .single();

      if (articleError) throw articleError;

      // Upload videos first (they will be displayed first)
      let mediaOrder = 0;
      if (videos.length > 0) {
        const videoUrls = await Promise.all(
          videos.map((file) => 
            uploadImage(file, 'videos').then(url => ({
              article_id: articleData.id,
              image_url: url,
              ordre: mediaOrder++,
              type: 'video'
            }))
          )
        );

        const { error: videosError } = await supabase
          .from('article_images')
          .insert(videoUrls);

        if (videosError) throw videosError;
      }

      // Upload secondary images
      if (secondaryImages.length > 0) {
        const imageUrls = await Promise.all(
          secondaryImages.map((file) => 
            uploadImage(file, 'secondary').then(url => ({
              article_id: articleData.id,
              image_url: url,
              ordre: mediaOrder++,
              type: 'image'
            }))
          )
        );

        const { error: imagesError } = await supabase
          .from('article_images')
          .insert(imageUrls);

        if (imagesError) throw imagesError;
      }

      toast.success("Article créé avec succès");
      setFormData({
        titre: "",
        slug: "",
        auteur: "",
        extrait: "",
        contenu: "",
      });
      setCoverImage(null);
      setCoverImagePreview("");
      setSecondaryImages([]);
      setSecondaryImagesPreviews([]);
      setVideos([]);
      setVideosPreviews([]);
      onSuccess();
    } catch (error) {
      console.error("Error creating article:", error);
      toast.error("Erreur lors de la création de l'article");
    } finally {
      setLoading(false);
    }
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
            <Label htmlFor="coverImage">Image de Couverture *</Label>
            <div className="mt-2">
              {coverImagePreview ? (
                <div className="relative inline-block">
                  <img src={coverImagePreview} alt="Cover preview" className="w-40 h-40 object-cover rounded" />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute -top-2 -right-2"
                    onClick={() => {
                      setCoverImage(null);
                      setCoverImagePreview("");
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-40 h-40 border-2 border-dashed border-border rounded cursor-pointer hover:bg-muted/50 transition-colors">
                  <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Upload</span>
                  <Input
                    id="coverImage"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleCoverImageChange}
                  />
                </label>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Vidéos (optionnelles - affichées en premier)</Label>
            <div className="mt-2 space-y-4">
              <div className="flex flex-wrap gap-4">
                {videosPreviews.map((preview, index) => (
                  <div key={index} className="relative">
                    <video src={preview} className="w-32 h-32 object-cover rounded" />
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute -top-2 -right-2"
                      onClick={() => removeVideo(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <label className="flex flex-col items-center justify-center w-32 h-32 border-2 border-dashed border-border rounded cursor-pointer hover:bg-muted/50 transition-colors">
                  <Video className="h-6 w-6 mb-1 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">Ajouter vidéo</span>
                  <Input
                    type="file"
                    accept="video/*"
                    multiple
                    className="hidden"
                    onChange={handleVideosChange}
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Images Secondaires (optionnelles)</Label>
            <div className="mt-2 space-y-4">
              <div className="flex flex-wrap gap-4">
                {secondaryImagesPreviews.map((preview, index) => (
                  <div key={index} className="relative">
                    <img src={preview} alt={`Secondary ${index + 1}`} className="w-32 h-32 object-cover rounded" />
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute -top-2 -right-2"
                      onClick={() => removeSecondaryImage(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <label className="flex flex-col items-center justify-center w-32 h-32 border-2 border-dashed border-border rounded cursor-pointer hover:bg-muted/50 transition-colors">
                  <Upload className="h-6 w-6 mb-1 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">Ajouter image</span>
                  <Input
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handleSecondaryImagesChange}
                  />
                </label>
              </div>
            </div>
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
