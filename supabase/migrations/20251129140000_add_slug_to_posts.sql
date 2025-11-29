-- Add slug column to posts table for SEO-friendly URLs
ALTER TABLE posts ADD COLUMN IF NOT EXISTS slug TEXT;

-- Create unique index on slug to prevent duplicates
CREATE UNIQUE INDEX IF NOT EXISTS posts_slug_idx ON posts(slug) WHERE slug IS NOT NULL;

-- Create function to generate slug from title
CREATE OR REPLACE FUNCTION public.generate_slug(title TEXT)
RETURNS TEXT AS $$
DECLARE
    slug TEXT;
BEGIN
    -- Convert to lowercase, replace spaces with hyphens, remove special characters
    slug := lower(regexp_replace(title, '[^a-zA-Z0-9\s-]', '', 'g'));
    slug := regexp_replace(slug, '\s+', '-', 'g');
    slug := regexp_replace(slug, '-+', '-', 'g');
    slug := trim(both '-' from slug);
    
    RETURN slug;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Update existing posts to have slugs based on their titles
UPDATE posts 
SET slug = generate_slug(title) || '-' || id
WHERE slug IS NULL;

-- Create trigger to auto-generate slug if not provided
CREATE OR REPLACE FUNCTION public.handle_posts_slug()
RETURNS TRIGGER AS $$
BEGIN
    -- Only generate slug if it's not provided
    IF NEW.slug IS NULL OR NEW.slug = '' THEN
        NEW.slug := generate_slug(NEW.title) || '-' || NEW.id;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS handle_posts_slug ON public.posts;
CREATE TRIGGER handle_posts_slug
    BEFORE INSERT OR UPDATE ON public.posts
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_posts_slug();
