'use client';

import React, { useState, useEffect, use } from 'react';
import { createClient } from '@/lib/supabase/client';

export const runtime = 'edge';
export const dynamic = "force-dynamic";

interface Report {
  id: number;
  title: string;
  description: string;
  created_at: string;
}

const ReportPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const [report, setReport] = useState<Report | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReport = async () => {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('reports')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        setError('Report not found.');
      } else {
        setReport(data);
      }
      setLoading(false);
    };

    if (id) {
      fetchReport();
    }
  }, [id]);

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <main className="flex-1 container mx-auto px-4 py-12">
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {report && (
          <article className="prose lg:prose-xl mx-auto">
            <h1>{report.title}</h1>
            <p className="text-gray-500">{new Date(report.created_at).toLocaleDateString()}</p>
            <p>{report.description}</p>
          </article>
        )}
      </main>
    </div>
  );
};

export default ReportPage;
