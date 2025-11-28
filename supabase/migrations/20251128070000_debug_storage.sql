-- Debug storage setup
SELECT '=== Storage Buckets ===' as debug;
SELECT id, name, public FROM storage.buckets;

SELECT '=== Storage Objects ===' as debug;
SELECT bucket_id, name, created_at FROM storage.objects LIMIT 5;

SELECT '=== Storage Policies ===' as debug;
SELECT name, table_name FROM storage.policies WHERE table_name = 'objects' LIMIT 10;

-- Try to create bucket with different approach
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('images', 'images', true, 5242880, ARRAY['image/jpeg', 'image/png', 'image/gif'])
ON CONFLICT (id) DO UPDATE SET 
    public = true,
    file_size_limit = 5242880,
    allowed_mime_types = ARRAY['image/jpeg', 'image/png', 'image/gif'];

-- Test direct bucket creation
SELECT 'Bucket creation result:' as debug;
SELECT * FROM storage.buckets WHERE id = 'images';