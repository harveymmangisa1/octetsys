'use server';

import { createSupabaseServerClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { z } from 'zod';

const profileSchema = z.object({
  full_name: z.string().min(1, 'Name is required'),
  role: z.string().min(1, 'Role is required'),
  bio: z.string().optional(),
  avatar_url: z.string().optional(),
  social_twitter: z.string().optional(),
  social_linkedin: z.string().optional(),
});

export async function getProfile() {
  const cookieStore = cookies();
  const supabase = createSupabaseServerClient(cookieStore);
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { error: 'Not authenticated' };
  }

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (error && error.code !== 'PGRST116') { // PGRST116 is "The result contains 0 rows"
    return { error: error.message };
  }

  // If no profile exists, return basic info from auth
  if (!data) {
    return {
      data: {
        email: user.email,
        full_name: '',
        role: '',
        bio: '',
        avatar_url: '',
        social_twitter: '',
        social_linkedin: '',
      }
    };
  }

  return { data: { ...data, email: user.email } };
}

export async function updateProfile(values: z.infer<typeof profileSchema>) {
  const cookieStore = cookies();
  const supabase = createSupabaseServerClient(cookieStore);
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { error: 'Not authenticated' };
  }

  const { error } = await supabase
    .from('profiles')
    .upsert({
      id: user.id,
      ...values,
      email: user.email, // Ensure email is kept in sync
      updated_at: new Date().toISOString(),
    });

  if (error) {
    return { error: error.message };
  }

  return { error: null };
}
