-- Add missing columns to posts table for image storage
ALTER TABLE posts ADD COLUMN IF NOT EXISTS image TEXT;
ALTER TABLE posts ADD COLUMN IF NOT EXISTS excerpt TEXT;
ALTER TABLE posts ADD COLUMN IF NOT EXISTS tags TEXT[];
ALTER TABLE posts ADD COLUMN IF NOT EXISTS seo_title TEXT;
ALTER TABLE posts ADD COLUMN IF NOT EXISTS seo_description TEXT;

-- Add updated_at timestamp for better tracking
ALTER TABLE posts ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW();

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS posts_status_type_idx ON posts(status, type);
CREATE INDEX IF NOT EXISTS posts_author_id_idx ON posts(author_id);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_posts_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at for posts
DROP TRIGGER IF EXISTS handle_posts_updated_at ON public.posts;
CREATE TRIGGER handle_posts_updated_at
    BEFORE UPDATE ON public.posts
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_posts_updated_at();

-- Add RLS policy for image column (already covered by existing policies)
-- No additional policies needed as existing policies cover all columns