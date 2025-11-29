# Fix: Blog Section Error - Missing Slug Column

## Problem
The blog section is showing an error because the `slug` column doesn't exist in the `posts` table.

## Solution

You need to run the migration to add the `slug` column to your Supabase database.

### Option 1: Run via Supabase Dashboard (Recommended)

1. Go to your Supabase project dashboard: https://supabase.com/dashboard
2. Navigate to **SQL Editor** in the left sidebar
3. Click **New Query**
4. Copy and paste the contents of this file:
   ```
   supabase/migrations/20251129140000_add_slug_to_posts.sql
   ```
5. Click **Run** to execute the migration

### Option 2: Run via Supabase CLI

If you have Supabase CLI installed:

```bash
# Make sure you're in the project directory
cd c:\Users\nadub\Desktop\octetsys

# Link to your Supabase project (if not already linked)
supabase link --project-ref your-project-ref

# Run the migration
supabase db push
```

### What the Migration Does

1. **Adds `slug` column** to the `posts` table
2. **Creates unique index** to prevent duplicate slugs
3. **Auto-generates slugs** from post titles (e.g., "My Post Title" → "my-post-title-123")
4. **Updates existing posts** to have slugs
5. **Creates trigger** to auto-generate slugs for new posts

### After Running the Migration

1. Refresh your homepage
2. The error should be gone
3. The blog section will now display published posts
4. If you don't have any published posts yet, you'll see an empty state

### Creating Your First Post

1. Go to `/admin/posts/new`
2. Fill in:
   - **Title**: Your post title
   - **Excerpt**: Brief description (shown on homepage)
   - **Content**: Full post content
   - **Type**: Choose Blog, News, or Event
   - **Status**: Set to "published" to make it visible
   - **Image**: Upload a featured image (optional)
3. Click **Save**
4. Check the homepage - your post should appear immediately!

## Troubleshooting

### Still seeing errors?

1. **Check Supabase connection**:
   - Verify your `.env.local` has correct Supabase credentials
   - Make sure `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set

2. **Check RLS policies**:
   - The posts table should allow public read access to published posts
   - Run this in SQL Editor to verify:
   ```sql
   SELECT * FROM posts WHERE status = 'published';
   ```

3. **Check browser console**:
   - Open DevTools (F12)
   - Look for more detailed error messages
   - Share them if you need help

### No posts showing?

- Make sure you have at least one post with `status = 'published'`
- Check that the post has a title and excerpt
- The component only shows the 3 most recent published posts
