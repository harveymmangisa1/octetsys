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
    .eq('slug', slug)
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
    .eq('slug', slug)
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
