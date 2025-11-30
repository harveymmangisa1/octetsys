# Storage Bucket Troubleshooting Guide

## Problem
The "images" storage bucket doesn't exist or isn't accessible when uploading images in blog posts.

## Solution

### Option 1: Apply Migration via Supabase Dashboard (Recommended)

1. **Open Supabase Dashboard**
   - Go to https://supabase.com/dashboard
   - Select your project

2. **Navigate to SQL Editor**
   - Click on "SQL Editor" in the left sidebar

3. **Run the Migration**
   - Copy the entire contents of `supabase/migrations/20251130000000_verify_and_fix_storage.sql`
   - Paste it into the SQL Editor
   - Click "Run" or press Ctrl+Enter

4. **Verify the Results**
   - You should see output confirming the bucket was created
   - Check "Storage" in the left sidebar to see the "images" bucket

### Option 2: Use Supabase CLI

```powershell
# Install Supabase CLI (if not already installed)
npm install -g supabase

# Link your project (first time only)
supabase link --project-ref YOUR_PROJECT_REF

# Apply all pending migrations
supabase db push
```

### Option 3: Manual Bucket Creation

If migrations don't work, create the bucket manually:

1. Go to **Storage** in Supabase Dashboard
2. Click **"New bucket"**
3. Configure:
   - **Name**: `images`
   - **Public**: ✅ Enabled
   - **File size limit**: 5 MB (5242880 bytes)
   - **Allowed MIME types**: 
     - image/jpeg
     - image/jpg
     - image/png
     - image/webp
     - image/gif

4. Set up **Policies** (in the bucket settings):
   - **SELECT**: Allow public read access
   - **INSERT**: Allow authenticated users
   - **UPDATE**: Allow authenticated users
   - **DELETE**: Allow authenticated users

## Verification

After applying the fix:

1. Try uploading an image in the blog post editor
2. Check the browser console for any errors
3. Verify the image appears in Storage > images bucket

## Common Issues

### "Bucket not found" error
- The migration didn't run successfully
- Try Option 3 (manual creation)

### "Permission denied" error
- Storage policies aren't set correctly
- Re-run the migration or manually set policies

### "Not authenticated" error
- Make sure you're logged in to the admin panel
- Check that your session is valid

## Need Help?

If issues persist:
1. Check the browser console for detailed error messages
2. Verify your Supabase project is active
3. Ensure your environment variables are correct:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
