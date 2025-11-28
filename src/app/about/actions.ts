'use server';

import { createSupabaseServerClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';

export async function getPublicTeamMembers() {
    const cookieStore = await cookies();
    const supabase = createSupabaseServerClient(cookieStore);

    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('full_name', { ascending: true });

    if (error) {
        console.error('Error fetching team members:', error);
        return [];
    }

    return data;
}
