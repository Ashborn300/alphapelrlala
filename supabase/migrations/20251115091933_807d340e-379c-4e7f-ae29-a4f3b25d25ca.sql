-- Créer un bucket de stockage pour les images d'articles
INSERT INTO storage.buckets (id, name, public)
VALUES ('article-images', 'article-images', true);

-- Permettre à tout le monde de voir les images
CREATE POLICY "Anyone can view article images"
ON storage.objects FOR SELECT
USING (bucket_id = 'article-images');

-- Permettre aux admins de télécharger des images
CREATE POLICY "Admins can upload article images"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'article-images' 
  AND has_role(auth.uid(), 'admin'::app_role)
);

-- Permettre aux admins de supprimer des images
CREATE POLICY "Admins can delete article images"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'article-images' 
  AND has_role(auth.uid(), 'admin'::app_role)
);

-- Créer une table pour les images secondaires des articles
CREATE TABLE public.article_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id UUID NOT NULL REFERENCES public.blog_articles(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  ordre INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- RLS pour article_images
ALTER TABLE public.article_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view article images"
ON public.article_images FOR SELECT
USING (true);

CREATE POLICY "Admins can manage article images"
ON public.article_images FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role));