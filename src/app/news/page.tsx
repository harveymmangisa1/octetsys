import { createSupabaseServerClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import Link from 'next/link';

export default async function NewsPage() {
  const cookieStore = cookies();
  const supabase = await createSupabaseServerClient(cookieStore);
  const { data: posts, error } = await supabase
    .from('posts')
    .select('*')
    .eq('type', 'news')
    .eq('status', 'published');

  if (error) {
    return <p className="text-destructive">{error.message}</p>;
  }

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4">News</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.id}>
            <h2 className="text-2xl font-bold">
              <Link href={`/news/${post.id}`}>{post.title}</Link>
            </h2>
            <p className="text-gray-500">{new Date(post.created_at).toLocaleDateString()}</p>
            <div className="mt-4">{post.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
