'use client';

import React, { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';

interface Report {
  id: number;
  title: string;
  description: string;
  created_at: string;
}

const ReportPage = ({ params }: { params: { id: string } }) => {
  const [report, setReport] = useState<Report | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReport = async () => {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('reports')
        .select('*')
        .eq('id', params.id)
        .single();

      if (error) {
        setError('Report not found.');
      } else {
        setReport(data);
      }
      setLoading(false);
    };

    if (params.id) {
      fetchReport();
    }
  }, [params.id]);

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
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
      <Footer />
    </div>
  );
};

export default ReportPage;
