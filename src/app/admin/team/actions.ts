'use server';

import { createSupabaseServerClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';

export async function getTeamMembers() {
    const cookieStore = cookies();
    const supabase = createSupabaseServerClient(cookieStore);

    // Check auth
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        return { error: 'Not authenticated' };
    }

    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('full_name', { ascending: true });

    if (error) {
        return { error: error.message };
    }

    return { data };
}
