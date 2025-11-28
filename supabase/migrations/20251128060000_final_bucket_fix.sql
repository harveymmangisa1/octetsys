-- Simple bucket verification and fix
DO $$
BEGIN
    -- Check if bucket exists
    IF EXISTS (SELECT 1 FROM storage.buckets WHERE id = 'images') THEN
        RAISE NOTICE 'Images bucket exists';
        
        -- Get bucket info
        PERFORM * FROM storage.buckets WHERE id = 'images';
    ELSE
        RAISE NOTICE 'Creating images bucket...';
        
        INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
        VALUES (
            'images',
            'images',
            true,
            5242880,
            ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
        );
    END IF;
    
    -- Ensure RLS is enabled on storage.objects
    ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;
    
    -- Clean up existing policies
    DELETE FROM storage.policies WHERE bucket_id = 'images';
    
    -- Create fresh policies using proper syntax
    INSERT INTO storage.policies (name, definition, table_name, schema_name)
    VALUES 
        ('Public Access', 'SELECT USING (bucket_id = ''images'' AND (auth.role() = ''authenticated'' OR auth.role() = ''anon'')', 'objects', 'storage'),
        ('Upload Access', 'INSERT WITH CHECK (bucket_id = ''images'' AND auth.role() = ''authenticated'')', 'objects', 'storage'),
        ('Update Access', 'UPDATE USING (bucket_id = ''images'' AND auth.role() = ''authenticated'')', 'objects', 'storage'),
        ('Delete Access', 'DELETE USING (bucket_id = ''images'' AND auth.role() = ''authenticated'')', 'objects', 'storage');
        
END $$;

-- Verify bucket
SELECT 'Final bucket check:' as info;
SELECT id, name, public FROM storage.buckets WHERE id = 'images';