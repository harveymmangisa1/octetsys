'use server';

import { createSupabaseServerClient } from '@/lib/supabase/server';
import { z } from 'zod';

const formSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  content: z.string(),
  type: z.enum(['news', 'blog', 'event']),
  status: z.enum(['draft', 'published']),
  image: z.string().optional(),
});

export async function createPost(values: z.infer<typeof formSchema>) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { error: 'You must be logged in to create a post.' };
  }

  const { error } = await supabase.from('posts').insert([
    {
      title: values.title,
      content: values.content,
      type: values.type,
      status: values.status,
      image: values.image,
      author_id: user.id,
    },
  ]);

  if (error) {
    return { error: error.message };
  }

  return { error: null };
}

export async function updatePost(id: string, values: z.infer<typeof formSchema>) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { error: 'You must be logged in to update a post.' };
  }

  const { error } = await supabase
    .from('posts')
    .update({
      title: values.title,
      content: values.content,
      type: values.type,
      status: values.status,
      image: values.image,
    })
    .eq('id', id);

  if (error) {
    return { error: error.message };
  }

  return { error: null };
}
