-- Comprehensive storage bucket verification and fix
-- This migration ensures the images bucket exists and has proper policies

-- Step 1: Check and display current buckets
SELECT 'Current buckets:' as info;
SELECT id, name, public FROM storage.buckets;

-- Step 2: Delete the bucket if it exists (to recreate cleanly)
DELETE FROM storage.buckets WHERE id = 'images';

-- Step 3: Create the images bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'images',
    'images', 
    true,
    5242880, -- 5MB
    ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
);

-- Step 4: Drop all existing policies for the images bucket
DROP POLICY IF EXISTS "Public images are viewable by everyone." ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload images." ON storage.objects;
DROP POLICY IF EXISTS "Users can update their own images." ON storage.objects;
DROP POLICY IF EXISTS "Users can delete their own images." ON storage.objects;
DROP POLICY IF EXISTS "Public Access" ON storage.objects;
DROP POLICY IF EXISTS "Allow uploads" ON storage.objects;
DROP POLICY IF EXISTS "Allow updates" ON storage.objects;
DROP POLICY IF EXISTS "Allow deletes" ON storage.objects;

-- Step 5: Create fresh policies
-- Public read access
CREATE POLICY "images_public_read"
ON storage.objects FOR SELECT
USING (bucket_id = 'images');

-- Authenticated users can upload
CREATE POLICY "images_authenticated_upload"
ON storage.objects FOR INSERT
WITH CHECK (
    bucket_id = 'images' AND 
    auth.role() = 'authenticated'
);

-- Authenticated users can update
CREATE POLICY "images_authenticated_update"
ON storage.objects FOR UPDATE
USING (
    bucket_id = 'images' AND 
    auth.role() = 'authenticated'
);

-- Authenticated users can delete
CREATE POLICY "images_authenticated_delete"
ON storage.objects FOR DELETE
USING (
    bucket_id = 'images' AND 
    auth.role() = 'authenticated'
);

-- Step 6: Verify the setup
SELECT 'Verification - Buckets:' as info;
SELECT id, name, public, file_size_limit FROM storage.buckets WHERE id = 'images';

SELECT 'Verification - Policies:' as info;
SELECT schemaname, tablename, policyname 
FROM pg_policies 
WHERE tablename = 'objects' 
AND policyname LIKE 'images_%';
