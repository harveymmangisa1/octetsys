import { createSupabaseServerClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { PlusIcon, EditIcon, TrashIcon } from 'lucide-react';

export async function PostList() {
  const cookieStore = cookies();
  const supabase = await createSupabaseServerClient(cookieStore);
  const { data: posts, error } = await supabase.from('posts').select('*');

  if (error) {
    return <p className="text-destructive">{error.message}</p>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Posts</h1>
        <Link href="/admin/posts/new" className={buttonVariants()}>
          <PlusIcon className="mr-2 h-4 w-4" />
          New Post
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Image
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Title
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Type
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {posts.map((post) => (
              <tr key={post.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {post.image && <img src={post.image} alt={post.title} className="h-10 w-10 rounded-full" />}n                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {post.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {post.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {post.status}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                  <Link
                    href={`/admin/posts/${post.id}/edit`}
                    className={buttonVariants({ variant: 'outline' })}
                  >
                    <EditIcon className="h-4 w-4" />
                  </Link>
                  <Link
                    href={`/admin/posts/${post.id}/delete`}
                    className={buttonVariants({ variant: 'outline' })}
                  >
                    <TrashIcon className="h-4 w-4" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
