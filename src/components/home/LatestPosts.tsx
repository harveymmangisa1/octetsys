'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import { createClient } from '@/lib/supabase/client';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  image: string | null;
  type: 'blog' | 'news' | 'event';
  status: 'draft' | 'published';
  created_at: string;
  slug?: string | null;
}

export function LatestPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLatestPosts() {
      try {
        const supabase = createClient();

        // Fetch the 3 most recent published posts
        const { data, error } = await supabase
          .from('posts')
          .select('id, title, excerpt, image, type, status, created_at, slug')
          .eq('status', 'published')
          .order('created_at', { ascending: false })
          .limit(3);

        if (error) {
          console.error('Error fetching posts:', error);
          // Set empty array on error so the component still renders
          setPosts([]);
        } else if (data) {
          setPosts(data);
        }
      } catch (err) {
        console.error('Failed to fetch posts:', err);
        // Set empty array on error so the component still renders
        setPosts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchLatestPosts();

    // Set up real-time subscription for new posts
    const supabase = createClient();

    // Only subscribe if we have a valid connection
    try {
      const channel = supabase
        .channel('posts-changes')
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'posts',
            filter: 'status=eq.published'
          },
          (payload) => {
            console.log('Post change detected:', payload);
            // Refetch posts when changes occur
            fetchLatestPosts();
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    } catch (err) {
      console.error('Failed to set up real-time subscription:', err);
      // Continue without real-time updates
    }
  }, []);

  // Helper function to calculate read time
  const calculateReadTime = (excerpt: string) => {
    const words = excerpt.split(' ').length;
    const minutes = Math.ceil(words / 200); // Average reading speed
    return `${minutes} min read`;
  };

  // Helper function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Helper function to get post link based on type
  const getPostLink = (post: Post) => {
    switch (post.type) {
      case 'blog':
        return `/blog/${post.slug || post.id}`;
      case 'news':
        return `/news/${post.slug || post.id}`;
      case 'event':
        return `/events/${post.slug || post.id}`;
      default:
        return `/blog/${post.slug || post.id}`;
    }
  };

  // Helper function to get category label
  const getCategoryLabel = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  if (loading) {
    return (
      <div className="bg-background py-24 sm:py-32 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-none lg:text-left flex flex-col lg:flex-row justify-between items-end gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-sm font-medium text-primary">Latest Insights</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">From the Blog</h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-xl">
                Expert analysis, industry trends, and updates from our team of technology specialists.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-start justify-between">
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl mb-6 bg-muted animate-pulse"></div>
                <div className="w-full space-y-3">
                  <div className="h-4 bg-muted animate-pulse rounded w-1/3"></div>
                  <div className="h-6 bg-muted animate-pulse rounded w-full"></div>
                  <div className="h-4 bg-muted animate-pulse rounded w-full"></div>
                  <div className="h-4 bg-muted animate-pulse rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="bg-background py-24 sm:py-32 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">From the Blog</h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              No posts available yet. Check back soon for the latest updates!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background py-24 sm:py-32 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-none lg:text-left flex flex-col lg:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-primary">Latest Insights</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">From the Blog</h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-xl">
              Expert analysis, industry trends, and updates from our team of technology specialists.
            </p>
          </div>
          <Button asChild variant="outline" className="hidden lg:flex rounded-full border-border hover:bg-secondary">
            <Link href="/blog">
              View all posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between group">
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl mb-6 bg-muted">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                    <span className="text-muted-foreground text-sm">No image</span>
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-background/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-foreground ring-1 ring-inset ring-gray-500/10">
                    {getCategoryLabel(post.type)}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-x-4 text-xs text-muted-foreground mb-3">
                <time dateTime={post.created_at} className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {formatDate(post.created_at)}
                </time>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {calculateReadTime(post.excerpt || '')}
                </div>
              </div>

              <div className="group relative">
                <h3 className="mt-2 text-xl font-bold leading-snug text-foreground group-hover:text-primary transition-colors">
                  <Link href={getPostLink(post)}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-x-4">
                <div className="text-sm font-semibold leading-6 text-primary group-hover:translate-x-1 transition-transform flex items-center">
                  Read article <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center lg:hidden">
          <Button asChild variant="outline" className="rounded-full w-full sm:w-auto">
            <Link href="/blog">
              View all posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
