# Fixing Blog Post 404 Errors

## Problem
Blog posts return 404 errors when trying to view them. This happens because posts don't have slugs in the database.

## Root Cause
- The `slug` column was added to the `posts` table in a migration
- Existing posts created before this migration don't have slugs
- The blog routing depends on slugs (e.g., `/blog/[slug]`)
- Posts without slugs can't be accessed via their URLs

## Solution

### Step 1: Apply the Slug Fix Migration

The migration `20251130010000_fix_all_post_slugs.sql` will:
- Ensure the slug column exists
- Generate slugs for ALL existing posts
- Set up automatic slug generation for new posts
- Verify all posts have valid slugs

**Option A: Supabase Dashboard (Recommended)**

1. Open your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Click **SQL Editor** in the left sidebar
4. Copy the entire contents of:
   ```
   supabase/migrations/20251130010000_fix_all_post_slugs.sql
   ```
5. Paste into the SQL Editor
6. Click **Run** (or press Ctrl+Enter)
7. Check the output - you should see:
   - "Success: All posts now have valid slugs"
   - A table showing slug status
   - Sample of posts with their slugs

**Option B: Supabase CLI**

```bash
# Make sure you're linked to your project
supabase link --project-ref YOUR_PROJECT_REF

# Push all pending migrations
supabase db push
```

### Step 2: Verify the Fix

1. **Check the Database**
   - Go to Supabase Dashboard → Table Editor
   - Open the `posts` table
   - Verify all posts have values in the `slug` column
   - Slugs should look like: `post-title-abc12345`

2. **Test on Your Website**
   - Navigate to `/blog`
   - You should see all published blog posts
   - Click on a blog post
   - The URL should be: `/blog/post-title-abc12345`
   - The post should load without 404 errors

3. **Check Browser Console**
   - Open DevTools (F12)
   - Go to Console tab
   - You should see logs like:
     ```
     Fetching blog post with slug: post-title-abc12345
     Successfully loaded post: Your Post Title
     ```

### Step 3: Create New Posts

When creating new posts through the admin panel:
- Slugs are now automatically generated from the title
- The slug generation happens in `src/app/admin/posts/actions.ts`
- Format: `lowercase-title-with-hyphens`
- Special characters are removed
- Spaces become hyphens

## How It Works

### Database Level
1. **Slug Column**: Added to `posts` table
2. **Unique Index**: Prevents duplicate slugs
3. **Generation Function**: `generate_slug(title)` creates URL-friendly slugs
4. **Trigger**: Automatically generates slugs for new posts if not provided
5. **Update Script**: Backfills slugs for existing posts

### Application Level
1. **Post Creation** (`actions.ts`):
   ```typescript
   const slug = slugify(values.title);
   // Insert with slug
   ```

2. **Blog List** (`/blog/page.tsx`):
   ```typescript
   .not('slug', 'is', null) // Filter out posts without slugs
   ```

3. **Blog Post** (`/blog/[slug]/page.tsx`):
   ```typescript
   .eq('slug', slug) // Find post by slug
   ```

## Troubleshooting

### Issue: Still getting 404 errors

**Check 1: Migration Applied?**
```sql
-- Run this in Supabase SQL Editor
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'posts' AND column_name = 'slug';
```
- Should return one row showing the slug column
- If empty, the migration wasn't applied

**Check 2: Posts Have Slugs?**
```sql
-- Run this in Supabase SQL Editor
SELECT 
    COUNT(*) as total_posts,
    COUNT(slug) as posts_with_slug,
    COUNT(*) - COUNT(slug) as posts_without_slug
FROM posts;
```
- `posts_without_slug` should be 0
- If not, re-run the migration

**Check 3: Correct Slug Format?**
```sql
-- Run this in Supabase SQL Editor
SELECT id, title, slug, status 
FROM posts 
WHERE type = 'blog' 
ORDER BY created_at DESC 
LIMIT 5;
```
- Slugs should be lowercase with hyphens
- Should not be NULL or empty

### Issue: Some posts work, others don't

This means:
- Migration was partially applied
- Some posts have slugs, others don't

**Solution:**
```sql
-- Update posts without slugs
UPDATE posts 
SET slug = lower(regexp_replace(title, '[^a-zA-Z0-9\s-]', '', 'g'))
WHERE slug IS NULL OR slug = '';

-- Make slugs URL-friendly
UPDATE posts 
SET slug = regexp_replace(slug, '\s+', '-', 'g')
WHERE slug LIKE '% %';
```

### Issue: Duplicate slug errors

If you get "duplicate key value violates unique constraint":

**Solution:**
```sql
-- Add unique suffix to duplicates
UPDATE posts p1
SET slug = p1.slug || '-' || substring(p1.id::text, 1, 8)
WHERE EXISTS (
    SELECT 1 FROM posts p2 
    WHERE p2.slug = p1.slug 
    AND p2.id != p1.id
);
```

### Issue: Old URLs bookmarked

If users have old bookmarked URLs:
- Old URLs won't work (they didn't have slugs)
- Users need to navigate from `/blog` to find posts
- Consider adding a redirect if you know the old URL pattern

## Prevention

To prevent this issue in the future:

1. **Always Use Migrations**: Don't manually modify the database
2. **Test Locally**: Use Supabase local development to test migrations
3. **Backup First**: Always backup before running migrations
4. **Verify After**: Check that migrations applied correctly

## Quick Reference

### Check Slug Status
```sql
SELECT id, title, slug, status FROM posts ORDER BY created_at DESC;
```

### Manually Generate Slug
```sql
UPDATE posts 
SET slug = lower(regexp_replace(regexp_replace(title, '[^a-zA-Z0-9\s-]', '', 'g'), '\s+', '-', 'g'))
WHERE id = 'YOUR_POST_ID';
```

### View All Posts Without Slugs
```sql
SELECT id, title, created_at FROM posts WHERE slug IS NULL OR slug = '';
```

## Need More Help?

If you're still experiencing issues:

1. **Check Logs**:
   - Browser console (F12 → Console)
   - Supabase logs (Dashboard → Logs)
   - Next.js terminal output

2. **Verify Environment**:
   - `NEXT_PUBLIC_SUPABASE_URL` is correct
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` is correct
   - Database is accessible

3. **Test Query Directly**:
   - Go to Supabase SQL Editor
   - Run: `SELECT * FROM posts WHERE slug = 'your-slug-here';`
   - Should return the post

4. **Clear Cache**:
   - Clear browser cache
   - Try incognito/private mode
   - Restart Next.js dev server

## Summary

The fix involves:
1. ✅ Apply migration to add slug column
2. ✅ Generate slugs for all existing posts
3. ✅ Set up automatic slug generation
4. ✅ Update blog pages to handle slugs properly
5. ✅ Test that posts load correctly

After following these steps, all blog posts should be accessible via their slug URLs!
