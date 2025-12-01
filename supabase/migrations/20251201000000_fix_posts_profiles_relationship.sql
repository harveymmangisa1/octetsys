-- Fix the foreign key relationship between posts and profiles
-- First, drop the existing foreign key constraint
ALTER TABLE posts DROP CONSTRAINT IF EXISTS posts_author_id_fkey;

-- Add the proper foreign key constraint to profiles table
ALTER TABLE posts 
ADD CONSTRAINT posts_author_id_fkey 
FOREIGN KEY (author_id) REFERENCES profiles(id) ON DELETE SET NULL;

-- Add index for better performance
CREATE INDEX IF NOT EXISTS idx_posts_author_id ON posts(author_id);