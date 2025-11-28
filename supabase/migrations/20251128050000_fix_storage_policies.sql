-- Check current storage setup
SELECT 'Buckets:' as info;
SELECT * FROM storage.buckets;

-- Test bucket access
SELECT 'Testing bucket access...' as info;

-- Drop and recreate policies to ensure they work
DROP POLICY IF EXISTS "Public images are viewable by everyone." ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload images." ON storage.objects;
DROP POLICY IF EXISTS "Users can update their own images." ON storage.objects;
DROP POLICY IF EXISTS "Users can delete their own images." ON storage.objects;
DROP POLICY IF EXISTS "Public Access" ON storage.objects;
DROP POLICY IF EXISTS "Allow uploads" ON storage.objects;
DROP POLICY IF EXISTS "Allow updates" ON storage.objects;
DROP POLICY IF EXISTS "Allow deletes" ON storage.objects;

-- Create simple, working policies
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING (bucket_id = 'images');

CREATE POLICY "Allow uploads"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'images' AND auth.role() = 'authenticated');

CREATE POLICY "Allow updates"
ON storage.objects FOR UPDATE
USING (bucket_id = 'images' AND auth.role() = 'authenticated');

CREATE POLICY "Allow deletes"
ON storage.objects FOR DELETE
USING (bucket_id = 'images' AND auth.role() = 'authenticated');