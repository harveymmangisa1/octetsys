# Migration Guide: ID-based to Slug-based Blog URLs

## Overview

This guide will help you migrate your blog from ID-based URLs to SEO-friendly slug-based URLs.

**Current**: `/blog/abc-123-def-456`  
**New**: `/blog/my-awesome-blog-post-abc123`

## Benefits of Slug-based URLs

1. **Better SEO**: Search engines prefer descriptive URLs
2. **User-friendly**: Easier to read and remember
3. **Social sharing**: More attractive when shared on social media
4. **Professional**: Looks more polished and intentional

## Migration Steps

### Step 1: Rename the Dynamic Route Directory

```bash
# Rename [id] to [slug]
mv src/app/blog/[id] src/app/blog/[slug]
```

### Step 2: Update Blog Detail Page (`src/app/blog/[slug]/page.tsx`)

Replace all instances of `id` with `slug`:

```typescript
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cookieStore = await cookies();
  const supabase = createSupabaseServerClient(cookieStore);
  const { data: post } = await supabase
    .from('posts')
    .select(`
      *,
      profiles!left (
        full_name
      )
    `)
    .eq('slug', slug)  // Changed from .eq('id', id)
    .single();

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.seo_title || post.title,
    description: post.seo_description || post.excerpt || post.content.substring(0, 160),
    openGraph: {
      title: post.seo_title || post.title,
      description: post.seo_description || post.excerpt || post.content.substring(0, 160),
      images: post.image ? [{ url: post.image }] : [],
      type: 'article',
      publishedTime: post.created_at,
      modifiedTime: post.updated_at,
      authors: post.profiles?.full_name ? [post.profiles.full_name] : [post.author_id],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo_title || post.title,
      description: post.seo_description || post.excerpt || post.content.substring(0, 160),
      images: post.image ? [post.image] : [],
    },
    keywords: post.tags || [],
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cookieStore = await cookies();
  const supabase = createSupabaseServerClient(cookieStore);
  const { data: post, error } = await supabase
    .from('posts')
    .select(`
      *,
      profiles!left (
        id,
        full_name,
        avatar_url,
        bio
      )
    `)
    .eq('slug', slug)  // Changed from .eq('id', id)
    .single();

  if (error || !post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        {post.excerpt && (
          <p className="text-xl text-muted-foreground mb-4">{post.excerpt}</p>
        )}
        {post.profiles && (
          <div className="flex items-center gap-3 mb-4 p-4 bg-muted/50 rounded-lg">
            {post.profiles.avatar_url ? (
              <img
                src={post.profiles.avatar_url}
                alt={post.profiles.full_name || 'Author'}
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-lg font-semibold">
                  {post.profiles.full_name?.charAt(0)?.toUpperCase() || 'A'}
                </span>
              </div>
            )}
            <div className="flex-1">
              <div className="font-medium text-foreground">
                {post.profiles.full_name || 'Anonymous Author'}
              </div>
              {post.profiles.bio && (
                <div className="text-sm text-muted-foreground line-clamp-2">
                  {post.profiles.bio}
                </div>
              )}
            </div>
          </div>
        )}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <time dateTime={post.created_at}>
            {new Date(post.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          {post.tags && post.tags.length > 0 && (
            <div className="flex gap-2">
              {post.tags.map((tag: string) => (
                <span key={tag} className="px-2 py-1 bg-secondary rounded-md text-xs">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-lg mb-8"
        />
      )}
      <div
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
```

### Step 3: Update Blog Listing Page (`src/app/blog/page.tsx`)

Update the links to use slugs:

```typescript
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import Link from 'next/link';

export default async function BlogPage() {
  const cookieStore = await cookies();
  const supabase = await createSupabaseServerClient(cookieStore);
  const { data: posts, error } = await supabase
    .from('posts')
    .select('*')
    .eq('type', 'blog')
    .eq('status', 'published')
    .order('created_at', { ascending: false });

  if (error) {
    return <p className="text-destructive">{error.message}</p>;
  }

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <div className="space-y-8">
        {posts?.map((post) => (
          <div key={post.id}>
            <h2 className="text-2xl font-bold">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-gray-500">{new Date(post.created_at).toLocaleDateString()}</p>
            {post.excerpt && <p className="mt-2 text-muted-foreground">{post.excerpt}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Step 4: Update Admin Post List (if applicable)

If you have an admin interface that links to posts, update those links as well:

```typescript
// In src/app/admin/posts/PostList.tsx or similar
<Link href={`/blog/${post.slug}`}>View Post</Link>
```

### Step 5: Add Redirects for Old URLs (Optional but Recommended)

To maintain SEO and not break existing links, add a redirect from old ID-based URLs to new slug-based URLs.

Create `src/app/blog/[id]/page.tsx` (keep the old route):

```typescript
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function BlogPostRedirect({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const cookieStore = await cookies();
  const supabase = createSupabaseServerClient(cookieStore);
  
  // Fetch the post by ID to get its slug
  const { data: post } = await supabase
    .from('posts')
    .select('slug')
    .eq('id', id)
    .single();

  if (post?.slug) {
    // Redirect to the new slug-based URL
    redirect(`/blog/${post.slug}`);
  }

  // If post not found, redirect to blog home
  redirect('/blog');
}
```

## Testing Checklist

- [ ] Blog listing page loads correctly
- [ ] Clicking on a blog post navigates to the correct slug URL
- [ ] Blog post page displays correctly with slug in URL
- [ ] SEO metadata is properly set (check with browser dev tools)
- [ ] Old ID-based URLs redirect to new slug-based URLs (if implemented)
- [ ] Social media preview works correctly (test with Facebook/Twitter debugger)
- [ ] All internal links to blog posts use slugs

## Rollback Plan

If you need to rollback:

1. Rename `src/app/blog/[slug]` back to `src/app/blog/[id]`
2. Revert changes to blog listing page
3. The database still has both `id` and `slug` fields, so no data loss

## SEO Considerations

1. **Submit new sitemap**: Update your sitemap.xml to include new slug-based URLs
2. **Update Google Search Console**: Submit new URLs for indexing
3. **Monitor 404s**: Check for any broken links in Google Search Console
4. **Canonical URLs**: Ensure canonical tags point to slug-based URLs

## Additional Improvements

Consider these enhancements:

1. **Custom slugs**: Allow admins to customize slugs in the post editor
2. **Slug validation**: Prevent duplicate slugs with better UI feedback
3. **Slug history**: Track slug changes to maintain redirects
4. **Breadcrumbs**: Add breadcrumb navigation with slugs
