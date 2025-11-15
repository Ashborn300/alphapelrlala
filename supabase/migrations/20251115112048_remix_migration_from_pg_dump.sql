--
-- PostgreSQL database dump
--


-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--



--
-- Name: app_role; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.app_role AS ENUM (
    'admin',
    'user'
);


--
-- Name: handle_new_user(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.handle_new_user() RETURNS trigger
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
declare
  user_count integer;
begin
  -- Count existing users with roles
  select count(*) into user_count from public.user_roles;
  
  -- If this is the first user, make them admin
  if user_count = 0 then
    insert into public.user_roles (user_id, role)
    values (new.id, 'admin');
  else
    -- Otherwise, give them regular user role
    insert into public.user_roles (user_id, role)
    values (new.id, 'user');
  end if;
  
  return new;
end;
$$;


--
-- Name: has_role(uuid, public.app_role); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.has_role(_user_id uuid, _role public.app_role) RETURNS boolean
    LANGUAGE sql STABLE SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;


--
-- Name: update_updated_at_column(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.update_updated_at_column() RETURNS trigger
    LANGUAGE plpgsql
    SET search_path TO 'public'
    AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;


SET default_table_access_method = heap;

--
-- Name: article_images; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.article_images (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    article_id uuid NOT NULL,
    image_url text NOT NULL,
    ordre integer DEFAULT 0,
    created_at timestamp with time zone DEFAULT now()
);


--
-- Name: blog_articles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.blog_articles (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    titre text NOT NULL,
    slug text NOT NULL,
    image_couverture text,
    contenu text NOT NULL,
    auteur text NOT NULL,
    date_publication timestamp with time zone DEFAULT now() NOT NULL,
    extrait text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: commentaires; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.commentaires (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    article_id uuid NOT NULL,
    nom text NOT NULL,
    email text NOT NULL,
    message text NOT NULL,
    date_commentaire timestamp with time zone DEFAULT now() NOT NULL,
    reponse_admin text,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: offres_emploi; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.offres_emploi (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    titre_poste text NOT NULL,
    localisation text NOT NULL,
    type_contrat text NOT NULL,
    description text NOT NULL,
    date_publication timestamp with time zone DEFAULT now() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: user_roles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.user_roles (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid NOT NULL,
    role public.app_role DEFAULT 'user'::public.app_role NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: article_images article_images_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.article_images
    ADD CONSTRAINT article_images_pkey PRIMARY KEY (id);


--
-- Name: blog_articles blog_articles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.blog_articles
    ADD CONSTRAINT blog_articles_pkey PRIMARY KEY (id);


--
-- Name: blog_articles blog_articles_slug_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.blog_articles
    ADD CONSTRAINT blog_articles_slug_key UNIQUE (slug);


--
-- Name: commentaires commentaires_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.commentaires
    ADD CONSTRAINT commentaires_pkey PRIMARY KEY (id);


--
-- Name: offres_emploi offres_emploi_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.offres_emploi
    ADD CONSTRAINT offres_emploi_pkey PRIMARY KEY (id);


--
-- Name: user_roles user_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_pkey PRIMARY KEY (id);


--
-- Name: user_roles user_roles_user_id_role_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_user_id_role_key UNIQUE (user_id, role);


--
-- Name: blog_articles update_blog_articles_updated_at; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER update_blog_articles_updated_at BEFORE UPDATE ON public.blog_articles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();


--
-- Name: offres_emploi update_offres_emploi_updated_at; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER update_offres_emploi_updated_at BEFORE UPDATE ON public.offres_emploi FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();


--
-- Name: article_images article_images_article_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.article_images
    ADD CONSTRAINT article_images_article_id_fkey FOREIGN KEY (article_id) REFERENCES public.blog_articles(id) ON DELETE CASCADE;


--
-- Name: commentaires commentaires_article_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.commentaires
    ADD CONSTRAINT commentaires_article_id_fkey FOREIGN KEY (article_id) REFERENCES public.blog_articles(id) ON DELETE CASCADE;


--
-- Name: user_roles user_roles_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: user_roles Admins can manage all roles; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can manage all roles" ON public.user_roles USING (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: article_images Admins can manage article images; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can manage article images" ON public.article_images USING (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: blog_articles Admins can manage articles; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can manage articles" ON public.blog_articles USING (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: commentaires Admins can manage comments; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can manage comments" ON public.commentaires USING (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: offres_emploi Admins can manage job offers; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can manage job offers" ON public.offres_emploi USING (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: commentaires Anyone can create comments; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Anyone can create comments" ON public.commentaires FOR INSERT WITH CHECK (true);


--
-- Name: article_images Anyone can view article images; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Anyone can view article images" ON public.article_images FOR SELECT USING (true);


--
-- Name: commentaires Anyone can view comments; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Anyone can view comments" ON public.commentaires FOR SELECT USING (true);


--
-- Name: offres_emploi Anyone can view job offers; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Anyone can view job offers" ON public.offres_emploi FOR SELECT USING (true);


--
-- Name: blog_articles Anyone can view published articles; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Anyone can view published articles" ON public.blog_articles FOR SELECT USING (true);


--
-- Name: user_roles Users can view their own roles; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can view their own roles" ON public.user_roles FOR SELECT USING ((auth.uid() = user_id));


--
-- Name: article_images; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.article_images ENABLE ROW LEVEL SECURITY;

--
-- Name: blog_articles; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.blog_articles ENABLE ROW LEVEL SECURITY;

--
-- Name: commentaires; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.commentaires ENABLE ROW LEVEL SECURITY;

--
-- Name: offres_emploi; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.offres_emploi ENABLE ROW LEVEL SECURITY;

--
-- Name: user_roles; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

--
-- PostgreSQL database dump complete
--


