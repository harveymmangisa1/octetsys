import { createSupabaseServerClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import Link from 'next/link';
import Image from 'next/image';
import { Eye, Heart, MessageCircle } from 'lucide-react';

export default async function BlogPage() {
  const cookieStore = await cookies();
  const supabase = await createSupabaseServerClient(cookieStore);
  const { data: posts, error } = await supabase
    .from('posts')
    .select(`
      *,
      post_likes(count),
      post_comments(count)
    `)
    .eq('type', 'blog')
    .eq('status', 'published')
    .not('slug', 'is', null) // Filter out posts without slugs
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching blog posts:', error);
    return <p className="text-destructive">Error loading blog posts. Please try again later.</p>;
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <p className="text-muted-foreground">No blog posts available yet. Check back soon!</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="border-b pb-8">
            {post.image && (
              <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={post.image.startsWith('http') ? post.image : `${process.env.NEXT_PUBLIC_SITE_URL || ''}${post.image}`}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                {post.title}
              </Link>
            </h2>
            {post.excerpt && (
              <p className="text-gray-600 mb-2">{post.excerpt}</p>
            )}
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <time>
                {new Date(post.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{post.views_count || 0}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  <span>{post.post_likes?.length || 0}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{post.post_comments?.length || 0}</span>
                </div>
              </div>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
