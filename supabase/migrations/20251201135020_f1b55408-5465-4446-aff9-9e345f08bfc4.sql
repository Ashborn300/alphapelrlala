-- Fix search_path for update_project_modified_date function
CREATE OR REPLACE FUNCTION public.update_project_modified_date()
RETURNS TRIGGER AS $$
BEGIN
  NEW.date_modification = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql
SET search_path = public;