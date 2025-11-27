import { createSupabaseServerClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { notFound, redirect } from 'next/navigation';

import { Button } from '@/components/ui/button';

export default async function DeletePostPage({ params }: { params: { id: string } }) {
  const cookieStore = cookies();
  const supabase = await createSupabaseServerClient(cookieStore);
  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', params.id)
    .single();

  if (error || !post) {
    notFound();
  }

  async function deletePost() {
    'use server';

    const cookieStore = cookies();
    const supabase = await createSupabaseServerClient(cookieStore);
    const { error } = await supabase.from('posts').delete().eq('id', params.id);

    if (error) {
      // Handle error
    } else {
      redirect('/admin/posts');
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Delete Post</h1>
      <p>Are you sure you want to delete the post "{post.title}"?</p>
      <form action={deletePost}>
        <Button type="submit" variant="destructive">Delete</Button>
      </form>
    </div>
  );
}
