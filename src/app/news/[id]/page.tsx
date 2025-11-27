import { createSupabaseServerClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';

export default async function NewsPostPage({ params }: { params: { id: string } }) {
  const supabase = await createSupabaseServerClient();
  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', params.id)
    .single();

  if (error || !post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500">{new Date(post.created_at).toLocaleDateString()}</p>
      <div className="mt-8">{post.content}</div>
    </div>
  );
}
