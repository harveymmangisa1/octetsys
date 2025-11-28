'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlusIcon, EditIcon, TrashIcon, Calendar, User, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export function PostList() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    async function loadPosts() {
      try {
const supabase = createClient();
        const { data, error } = await supabase.from('posts').select('*').order('created_at', { ascending: false });

        if (error) {
          setError(error.message);
        } else {
          setPosts(data || []);
        }
      } catch (err) {
        setError('Failed to load posts');
      } finally {
        setLoading(false);
      }
    }

    loadPosts();

    // Show toast messages from URL params
    const success = searchParams.get('success');
    const errorParam = searchParams.get('error');
    
    if (success === 'deleted') {
      toast({
        title: 'Success',
        description: 'Post deleted successfully.',
      });
    }
    
    if (errorParam) {
      toast({
        title: 'Error',
        description: errorParam === 'delete_failed' ? 'Failed to delete post.' : 'An error occurred.',
        variant: 'destructive',
      });
    }
  }, [searchParams]);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const supabase = createClient();
      const { error } = await supabase.from('posts').delete().eq('id', id);

      if (error) {
        toast({
          title: 'Error',
          description: 'Failed to delete post.',
          variant: 'destructive',
        });
      } else {
        setPosts(posts.filter(post => post.id !== id));
        toast({
          title: 'Success',
          description: 'Post deleted successfully.',
        });
      }
    } catch (err) {
      toast({
        title: 'Error',
        description: 'Something went wrong.',
        variant: 'destructive',
      });
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="h-8 w-32 bg-muted animate-pulse rounded"></div>
            <div className="h-4 w-48 bg-muted animate-pulse rounded mt-2"></div>
          </div>
          <div className="h-10 w-24 bg-muted animate-pulse rounded"></div>
        </div>
        
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 bg-muted animate-pulse rounded-lg"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-6 w-3/4 bg-muted animate-pulse rounded"></div>
                    <div className="h-4 w-full bg-muted animate-pulse rounded"></div>
                    <div className="flex gap-2">
                      <div className="h-6 w-16 bg-muted animate-pulse rounded"></div>
                      <div className="h-6 w-20 bg-muted animate-pulse rounded"></div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-8 w-8 bg-muted animate-pulse rounded"></div>
                    <div className="h-8 w-8 bg-muted animate-pulse rounded"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-destructive">Error loading posts: {error}</p>
        <Button onClick={() => window.location.reload()} className="mt-4">
          Try Again
        </Button>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Posts</h1>
            <p className="text-muted-foreground">Manage your blog posts, news, and events.</p>
          </div>
          <Link href="/admin/posts/new">
            <Button>
              <PlusIcon className="mr-2 h-4 w-4" />
              New Post
            </Button>
          </Link>
        </div>
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="text-center">
              <h3 className="text-lg font-semibold">No posts yet</h3>
              <p className="text-muted-foreground mb-4">Create your first post to get started.</p>
              <Link href="/admin/posts/new">
                <Button>
                  <PlusIcon className="mr-2 h-4 w-4" />
                  Create Post
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Posts</h1>
          <p className="text-muted-foreground">Manage your blog posts, news, and events.</p>
        </div>
        <Link href="/admin/posts/new">
          <Button>
            <PlusIcon className="mr-2 h-4 w-4" />
            New Post
          </Button>
        </Link>
      </div>

      <div className="grid gap-4">
        {posts.map((post) => (
          <Card key={post.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                {/* Featured Image */}
                <div className="flex-shrink-0">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-16 w-16 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="h-16 w-16 rounded-lg bg-muted flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">No image</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-semibold truncate">{post.title}</h3>
                      {post.excerpt && (
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{post.excerpt}</p>
                      )}
                      
                      <div className="flex items-center gap-4 mt-3">
                        <div className="flex items-center gap-2">
                          <Badge variant={post.type === 'news' ? 'default' : post.type === 'blog' ? 'secondary' : 'outline'}>
                            {post.type}
                          </Badge>
                          <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                            {post.status}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.created_at).toLocaleDateString()}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <Link href={`/admin/posts/${post.id}/edit`}>
                        <Button variant="outline" size="sm">
                          <EditIcon className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-destructive hover:text-destructive"
                        onClick={() => handleDelete(post.id)}
                      >
                        <TrashIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
