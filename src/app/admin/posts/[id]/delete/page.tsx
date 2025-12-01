import { createSupabaseServerClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { notFound, redirect } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default async function DeletePostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const cookieStore = await cookies();
  const supabase = await createSupabaseServerClient(cookieStore);
  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !post) {
    notFound();
  }

async function deletePost() {
    'use server';

    const cookieStore = await cookies();
    const supabase = await createSupabaseServerClient(cookieStore);
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      redirect('/admin/posts?error=not_logged_in');
    }

    const { error } = await supabase.from('posts').delete().eq('id', id);

    if (error) {
      console.error('Error deleting post:', error);
      redirect('/admin/posts?error=delete_failed');
    } else {
      redirect('/admin/posts?success=deleted');
    }
  }

return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/posts">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Delete Post</h1>
          <p className="text-muted-foreground">Remove this post permanently.</p>
        </div>
      </div>

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle className="text-destructive">Confirm Deletion</CardTitle>
          <CardDescription>
            Are you sure you want to delete the post &quot;{post.title}&quot;? This action cannot be undone and will permanently remove all content.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {post.excerpt && (
            <div className="p-3 bg-muted rounded-md">
              <p className="text-sm text-muted-foreground">{post.excerpt}</p>
            </div>
          )}
          
          <div className="flex gap-3 pt-4">
            <Link href="/admin/posts" className="flex-1">
              <Button variant="outline" className="w-full">
                Cancel
              </Button>
            </Link>
            <form action={deletePost} className="flex-1">
              <Button type="submit" variant="destructive" className="w-full">
                Delete Post
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
