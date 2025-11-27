-- Storage bucket for images
insert into storage.buckets (id, name, public)
values ('images', 'images', true)
on conflict (id) do nothing;

-- Storage policies
create policy "Public Access"
on storage.objects for select
using ( bucket_id = 'images' );

create policy "Authenticated users can upload images"
on storage.objects for insert
with check ( bucket_id = 'images' AND auth.role() = 'authenticated' );

create policy "Users can update their own images"
on storage.objects for update
using ( auth.uid()::text = (storage.foldername(name))[1] );

create policy "Users can delete their own images"
on storage.objects for delete
using ( auth.uid()::text = (storage.foldername(name))[1] );

-- Posts table indexes
create index if not exists posts_type_idx on posts(type);
create index if not exists posts_status_idx on posts(status);
create index if not exists posts_author_id_idx on posts(author_id);
create index if not exists posts_created_at_idx on posts(created_at desc);
create index if not exists posts_tags_idx on posts using gin(tags);

-- Profiles table indexes
create index if not exists profiles_email_idx on profiles(email);
create index if not exists profiles_full_name_idx on profiles(full_name);

-- Function to update updated_at timestamp
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Apply trigger to profiles table
drop trigger if exists update_profiles_updated_at on profiles;
create trigger update_profiles_updated_at
  before update on profiles
  for each row
  execute function update_updated_at_column();

-- Apply trigger to posts table
drop trigger if exists update_posts_updated_at on posts;
create trigger update_posts_updated_at
  before update on posts
  for each row
  execute function update_updated_at_column();

-- Add search vector to posts for full-text search
alter table posts add column if not exists search_vector tsvector;

-- Create search index
create index if not exists posts_search_idx on posts using gin(search_vector);

-- Update search trigger
create or replace function posts_search_trigger() returns trigger as $$
begin
  new.search_vector :=
    setweight(to_tsvector('english', coalesce(new.title, '')), 'A') ||
    setweight(to_tsvector('english', coalesce(new.excerpt, '')), 'B') ||
    setweight(to_tsvector('english', coalesce(new.content, '')), 'C');
  return new;
end
$$ language plpgsql;

drop trigger if exists posts_search_update on posts;
create trigger posts_search_update
  before insert or update on posts
  for each row execute function posts_search_trigger();

-- Update existing posts search vectors
update posts set search_vector = 
  setweight(to_tsvector('english', coalesce(title, '')), 'A') ||
  setweight(to_tsvector('english', coalesce(excerpt, '')), 'B') ||
  setweight(to_tsvector('english', coalesce(content, '')), 'C')
where search_vector is null;
