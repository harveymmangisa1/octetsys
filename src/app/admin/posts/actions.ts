'use server';

import { createSupabaseServerClient } from '@/lib/supabase/server';
import { z } from 'zod';
import { cookies } from 'next/headers';

const formSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  content: z.string(),
  type: z.enum(['news', 'blog', 'event']),
  status: z.enum(['draft', 'published']),
  image: z.string().optional(),
  excerpt: z.string().optional(),
  tags: z.array(z.string()).optional(),
  seo_title: z.string().optional(),
  seo_description: z.string().optional(),
});

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-');  // Replace multiple - with single -
}

export async function createPost(values: z.infer<typeof formSchema>) {
  const cookieStore = await cookies();
  const supabase = createSupabaseServerClient(cookieStore);
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { error: 'You must be logged in to create a post.' };
  }

  const slug = slugify(values.title);

  const { error } = await supabase.from('posts').insert([
    {
      title: values.title,
      slug,
      content: values.content,
      type: values.type,
      status: values.status,
      image: values.image,
      author_id: user.id,
      excerpt: values.excerpt,
      tags: values.tags,
      seo_title: values.seo_title,
      seo_description: values.seo_description,
    },
  ]);

  if (error) {
    return { error: error.message };
  }

  return { error: null };
}

export async function updatePost(id: string, values: z.infer<typeof formSchema>) {
  const cookieStore = await cookies();
  const supabase = createSupabaseServerClient(cookieStore);
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { error: 'You must be logged in to update a post.' };
  }

  // We don't automatically update slug on title change to preserve existing links
  // But we could add logic here if needed. For now, we keep it stable.

  const { error } = await supabase
    .from('posts')
    .update({
      title: values.title,
      content: values.content,
      type: values.type,
      status: values.status,
      image: values.image,
      excerpt: values.excerpt,
      tags: values.tags,
      seo_title: values.seo_title,
      seo_description: values.seo_description,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id);

  if (error) {
    return { error: error.message };
  }

  return { error: null };
}

export async function deletePost(id: string) {
  const cookieStore = await cookies();
  const supabase = createSupabaseServerClient(cookieStore);
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { error: 'You must be logged in to delete a post.' };
  }

  const { error } = await supabase
    .from('posts')
    .delete()
    .eq('id', id);

  if (error) {
    return { error: error.message };
  }

  return { error: null };
}
