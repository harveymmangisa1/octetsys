-- Simple bucket verification (no policy changes)
DO $$
BEGIN
    -- Check if bucket exists
    IF EXISTS (SELECT 1 FROM storage.buckets WHERE id = 'images') THEN
        RAISE NOTICE 'Images bucket exists';
        
        -- Get bucket info
        PERFORM * FROM storage.buckets WHERE id = 'images';
    ELSE
        RAISE NOTICE 'Images bucket not found - create manually in dashboard';
    END IF;
END $$;

-- Verify bucket
SELECT 'Bucket verification:' as info;
SELECT id, name, public FROM storage.buckets WHERE id = 'images';