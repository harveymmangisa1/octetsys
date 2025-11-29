-- Storage setup script for manual execution in Supabase SQL Editor
-- Copy this script and run it in the Supabase Dashboard SQL Editor

-- Enable RLS on storage.objects if not already enabled
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Drop existing policies for images bucket if they exist
DROP POLICY IF EXISTS "Public Access" ON storage.objects;
DROP POLICY IF EXISTS "Upload Access" ON storage.objects;
DROP POLICY IF EXISTS "Update Access" ON storage.objects;
DROP POLICY IF EXISTS "Delete Access" ON storage.objects;

-- Create policies for images bucket
CREATE POLICY "Public Access" ON storage.objects
  FOR SELECT USING (bucket_id = 'images' AND (auth.role() = 'authenticated' OR auth.role() = 'anon'));

CREATE POLICY "Upload Access" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'images' AND auth.role() = 'authenticated');

CREATE POLICY "Update Access" ON storage.objects
  FOR UPDATE USING (bucket_id = 'images' AND auth.role() = 'authenticated');

CREATE POLICY "Delete Access" ON storage.objects
  FOR DELETE USING (bucket_id = 'images' AND auth.role() = 'authenticated');

-- Also create policies for bucket access
DROP POLICY IF EXISTS "Public Bucket Access" ON storage.buckets;
CREATE POLICY "Public Bucket Access" ON storage.buckets
  FOR SELECT USING (id = 'images' AND (auth.role() = 'authenticated' OR auth.role() = 'anon'));

-- Verify setup
SELECT 'Storage policies created successfully' as status;