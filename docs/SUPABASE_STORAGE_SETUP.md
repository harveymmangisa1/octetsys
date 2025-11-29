# Supabase Storage Setup Guide

## Issue: Missing "images" Storage Bucket

The application requires a Supabase storage bucket named "images" to upload blog post images.

## How to Fix

### Option 1: Create the Bucket via Supabase Dashboard

1. Go to your Supabase project dashboard: https://supabase.com/dashboard
2. Navigate to **Storage** in the left sidebar
3. Click **New Bucket**
4. Configure the bucket:
   - **Name**: `images`
   - **Public bucket**: ✅ Enable (so images can be accessed publicly)
   - **File size limit**: Set as needed (e.g., 5MB)
   - **Allowed MIME types**: `image/*` (or specific types like `image/jpeg, image/png, image/webp`)
5. Click **Create bucket**

### Option 2: Create via SQL

Run this SQL in your Supabase SQL Editor:

```sql
-- Create the images bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('images', 'images', true);

-- Set up RLS policies for the images bucket
-- Allow public read access
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'images' );

-- Allow authenticated users to upload
CREATE POLICY "Authenticated users can upload images"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'images' 
  AND auth.role() = 'authenticated'
);

-- Allow authenticated users to update their uploads
CREATE POLICY "Authenticated users can update images"
ON storage.objects FOR UPDATE
USING ( bucket_id = 'images' AND auth.role() = 'authenticated' );

-- Allow authenticated users to delete their uploads
CREATE POLICY "Authenticated users can delete images"
ON storage.objects FOR DELETE
USING ( bucket_id = 'images' AND auth.role() = 'authenticated' );
```

### Verify the Bucket

After creating the bucket, verify it exists:

1. Go to **Storage** in Supabase dashboard
2. You should see the "images" bucket listed
3. Try uploading a test image through the dashboard

### Alternative: Use a Different Bucket Name

If you prefer to use a different bucket name, update the code in:
`src/app/admin/posts/ImageUpload.tsx`

Change line 65 from:
```typescript
const imagesBucket = buckets?.find(b => b.name === 'images');
```

To use your bucket name:
```typescript
const imagesBucket = buckets?.find(b => b.name === 'your-bucket-name');
```

## Security Considerations

- The bucket is set to **public** to allow images to be displayed on blog posts
- Only **authenticated users** can upload, update, or delete images
- Consider adding file size limits and MIME type restrictions
- Implement proper access controls based on your security requirements
