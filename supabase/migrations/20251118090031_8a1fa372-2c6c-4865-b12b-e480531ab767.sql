-- Ensure initial admin role assignment without touching reserved schemas
CREATE OR REPLACE FUNCTION public.ensure_initial_admin(_user_id uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  user_count integer;
BEGIN
  SELECT count(*) INTO user_count FROM public.user_roles;
  IF user_count = 0 THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (_user_id, 'admin');
  END IF;
END;
$$;

-- Allow authenticated users to invoke this function
GRANT EXECUTE ON FUNCTION public.ensure_initial_admin(uuid) TO authenticated;