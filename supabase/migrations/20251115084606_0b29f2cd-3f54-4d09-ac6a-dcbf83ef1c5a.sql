-- Function to automatically assign admin role to first user
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
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

-- Trigger to automatically create user role when a new user signs up
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();