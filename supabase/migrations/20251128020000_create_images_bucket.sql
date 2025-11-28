-- Create storage bucket for images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'images',
    'images',
    true,
    5242880, -- 5MB in bytes
    ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
) ON CONFLICT (id) DO NOTHING;

-- Create policies for the images bucket
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