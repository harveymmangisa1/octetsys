'use server';

import { createSupabaseServerClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';

export async function getReports() {
    const cookieStore = await cookies();
    const supabase = createSupabaseServerClient(cookieStore);

    // Check auth
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        return { error: 'Not authenticated' };
    }

    const { data, error } = await supabase
        .from('cyber_violence_reports')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        return { error: error.message };
    }

    return { data };
}

export async function updateReportStatus(reportId: number, status: 'approved' | 'rejected' | 'pending') {
    const cookieStore = await cookies();
    const supabase = createSupabaseServerClient(cookieStore);

    // Check auth
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        return { error: 'Not authenticated' };
    }

    const { error } = await supabase
        .from('cyber_violence_reports')
        .update({ status })
        .eq('id', reportId);

    if (error) {
        return { error: error.message };
    }

    return { error: null };
}