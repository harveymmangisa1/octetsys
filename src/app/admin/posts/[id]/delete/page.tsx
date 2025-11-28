import { createSupabaseServerClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { notFound, redirect } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';

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
    const { error } = await supabase.from('posts').delete().eq('id', id);

    if (error) {
      // Handle error
    } else {
      redirect('/admin/posts');
    }
  }

  return (
    <Card className="max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle>Delete Post</CardTitle>
        <CardDescription>
          Are you sure you want to delete the post "{post.title}"? This action cannot be undone.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-end gap-4">
          <form action={deletePost} className="w-full">
            <Button type="submit" variant="destructive" className="w-full">
              Confirm Delete
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
