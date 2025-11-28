-- Manually create the images bucket if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM storage.buckets WHERE id = 'images'
    ) THEN
        INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
        VALUES (
            'images',
            'images', 
            true,
            5242880, -- 5MB
            ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
        );
        
        -- Create policies for images bucket
        -- Allow public access to read images
        CREATE POLICY "Public images are viewable by everyone."
            ON storage.objects FOR SELECT
            USING (bucket_id = 'images');

        -- Allow authenticated users to upload images
        CREATE POLICY "Authenticated users can upload images."
            ON storage.objects FOR INSERT
            WITH CHECK (
                bucket_id = 'images' AND 
                auth.role() = 'authenticated'
            );

        -- Allow users to update their own images
        CREATE POLICY "Users can update their own images."
            ON storage.objects FOR UPDATE
            USING (
                bucket_id = 'images' AND 
                auth.role() = 'authenticated'
            );

        -- Allow users to delete their own images
        CREATE POLICY "Users can delete their own images."
            ON storage.objects FOR DELETE
            USING (
                bucket_id = 'images' AND 
                auth.role() = 'authenticated'
            );
            
        RAISE NOTICE 'Images bucket created successfully';
    ELSE
        RAISE NOTICE 'Images bucket already exists';
    END IF;
END $$;

-- Check if bucket exists
SELECT * FROM storage.buckets WHERE id = 'images';