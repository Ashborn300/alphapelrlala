-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

-- Enable RLS
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS policies for user_roles
CREATE POLICY "Users can view their own roles"
  ON public.user_roles
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all roles"
  ON public.user_roles
  FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- Create blog_articles table
CREATE TABLE public.blog_articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titre TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  image_couverture TEXT,
  contenu TEXT NOT NULL,
  auteur TEXT NOT NULL,
  date_publication TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  extrait TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.blog_articles ENABLE ROW LEVEL SECURITY;

-- RLS policies for blog_articles
CREATE POLICY "Anyone can view published articles"
  ON public.blog_articles
  FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage articles"
  ON public.blog_articles
  FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- Create commentaires table
CREATE TABLE public.commentaires (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id UUID REFERENCES public.blog_articles(id) ON DELETE CASCADE NOT NULL,
  nom TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  date_commentaire TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  reponse_admin TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.commentaires ENABLE ROW LEVEL SECURITY;

-- RLS policies for commentaires
CREATE POLICY "Anyone can view comments"
  ON public.commentaires
  FOR SELECT
  USING (true);

CREATE POLICY "Anyone can create comments"
  ON public.commentaires
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admins can manage comments"
  ON public.commentaires
  FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- Create offres_emploi table
CREATE TABLE public.offres_emploi (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titre_poste TEXT NOT NULL,
  localisation TEXT NOT NULL,
  type_contrat TEXT NOT NULL,
  description TEXT NOT NULL,
  date_publication TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.offres_emploi ENABLE ROW LEVEL SECURITY;

-- RLS policies for offres_emploi
CREATE POLICY "Anyone can view job offers"
  ON public.offres_emploi
  FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage job offers"
  ON public.offres_emploi
  FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- Create update timestamp function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for updated_at
CREATE TRIGGER update_blog_articles_updated_at
  BEFORE UPDATE ON public.blog_articles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_offres_emploi_updated_at
  BEFORE UPDATE ON public.offres_emploi
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();