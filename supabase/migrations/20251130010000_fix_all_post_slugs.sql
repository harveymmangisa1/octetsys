-- Comprehensive fix for blog post slugs
-- This ensures all posts have valid slugs for routing

-- Step 1: Add slug column if it doesn't exist
ALTER TABLE posts ADD COLUMN IF NOT EXISTS slug TEXT;

-- Step 2: Create unique index on slug
DROP INDEX IF EXISTS posts_slug_idx;
CREATE UNIQUE INDEX posts_slug_idx ON posts(slug) WHERE slug IS NOT NULL;

-- Step 3: Create or replace the slug generation function
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
    
    -- Ensure slug is not empty
    IF slug = '' OR slug IS NULL THEN
        slug := 'post';
    END IF;
    
    RETURN slug;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Step 4: Update ALL existing posts to have slugs
-- Using a unique combination of slug and ID to prevent duplicates
UPDATE posts 
SET slug = generate_slug(title) || '-' || substring(id::text, 1, 8)
WHERE slug IS NULL OR slug = '';

-- Step 5: Verify all posts have slugs
DO $$
DECLARE
    null_slug_count INTEGER;
BEGIN
    SELECT COUNT(*) INTO null_slug_count FROM posts WHERE slug IS NULL OR slug = '';
    
    IF null_slug_count > 0 THEN
        RAISE NOTICE 'Warning: % posts still have null or empty slugs', null_slug_count;
    ELSE
        RAISE NOTICE 'Success: All posts now have valid slugs';
    END IF;
END $$;

-- Step 6: Create trigger to auto-generate slug for new posts
CREATE OR REPLACE FUNCTION public.handle_posts_slug()
RETURNS TRIGGER AS $$
BEGIN
    -- Only generate slug if it's not provided or is empty
    IF NEW.slug IS NULL OR NEW.slug = '' THEN
        -- Generate base slug from title
        NEW.slug := generate_slug(NEW.title);
        
        -- If ID is available, append it for uniqueness
        IF NEW.id IS NOT NULL THEN
            NEW.slug := NEW.slug || '-' || substring(NEW.id::text, 1, 8);
        END IF;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop and recreate trigger
DROP TRIGGER IF EXISTS handle_posts_slug ON public.posts;
CREATE TRIGGER handle_posts_slug
    BEFORE INSERT OR UPDATE ON public.posts
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_posts_slug();

-- Step 7: Display current slug status
SELECT 
    'Slug Status Report' as info,
    COUNT(*) as total_posts,
    COUNT(slug) as posts_with_slug,
    COUNT(*) - COUNT(slug) as posts_without_slug
FROM posts;

-- Step 8: Show sample of slugs
SELECT id, title, slug, type, status
FROM posts
ORDER BY created_at DESC
LIMIT 10;
