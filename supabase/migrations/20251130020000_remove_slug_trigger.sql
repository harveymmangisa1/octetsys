-- Fix duplicate slug issues by removing problematic trigger
-- and ensuring application-level slug generation works properly

-- Step 1: Drop the trigger that might be causing conflicts
DROP TRIGGER IF EXISTS handle_posts_slug ON public.posts;
DROP FUNCTION IF EXISTS public.handle_posts_slug();

-- Step 2: Keep the slug generation function for manual use
-- (Already exists from previous migration, but ensure it's correct)
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

-- Step 3: Update any posts that still have NULL slugs
-- This is a safety measure
UPDATE posts 
SET slug = generate_slug(title) || '-' || substring(id::text, 1, 8)
WHERE slug IS NULL OR slug = '';

-- Step 4: Make slug column NOT NULL (optional, for data integrity)
-- Commented out for safety - uncomment if you want to enforce this
-- ALTER TABLE posts ALTER COLUMN slug SET NOT NULL;

-- Step 5: Ensure unique index exists
DROP INDEX IF EXISTS posts_slug_idx;
CREATE UNIQUE INDEX posts_slug_idx ON posts(slug);

-- Step 6: Verification
SELECT 
    'Slug Status After Fix' as info,
    COUNT(*) as total_posts,
    COUNT(slug) as posts_with_slug,
    COUNT(*) FILTER (WHERE slug IS NULL OR slug = '') as posts_without_slug,
    COUNT(DISTINCT slug) as unique_slugs
FROM posts;

-- Step 7: Check for any remaining duplicates
SELECT slug, COUNT(*) as count
FROM posts
WHERE slug IS NOT NULL
GROUP BY slug
HAVING COUNT(*) > 1;
