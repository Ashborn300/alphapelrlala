-- Create projects table
CREATE TABLE public.projects (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  titre text NOT NULL,
  slug text NOT NULL UNIQUE,
  description_courte text NOT NULL,
  description_complete text NOT NULL,
  image_principale text,
  objectifs text,
  resultats text,
  statut text NOT NULL DEFAULT 'En cours',
  categorie text NOT NULL,
  lien_whatsapp text,
  lien_don_50 text,
  lien_don_100 text,
  lien_don_250 text,
  lien_don_500 text,
  date_creation timestamp with time zone NOT NULL DEFAULT now(),
  date_modification timestamp with time zone NOT NULL DEFAULT now(),
  ordre integer DEFAULT 0
);

-- Create project_images table for gallery
CREATE TABLE public.project_images (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id uuid NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  image_url text NOT NULL,
  legende text,
  ordre integer DEFAULT 0,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_images ENABLE ROW LEVEL SECURITY;

-- RLS Policies for projects
CREATE POLICY "Anyone can view projects"
  ON public.projects
  FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage projects"
  ON public.projects
  FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role));

-- RLS Policies for project_images
CREATE POLICY "Anyone can view project images"
  ON public.project_images
  FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage project images"
  ON public.project_images
  FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Create index for better performance
CREATE INDEX idx_projects_slug ON public.projects(slug);
CREATE INDEX idx_project_images_project_id ON public.project_images(project_id);

-- Create trigger for auto-updating date_modification
CREATE OR REPLACE FUNCTION public.update_project_modified_date()
RETURNS TRIGGER AS $$
BEGIN
  NEW.date_modification = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_projects_modified_date
  BEFORE UPDATE ON public.projects
  FOR EACH ROW
  EXECUTE FUNCTION public.update_project_modified_date();