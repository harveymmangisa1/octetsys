'use client';

import React, { useState, useEffect, use } from 'react';
import { createClient } from '@/lib/supabase/client';

export const runtime = 'edge';
export const dynamic = "force-dynamic";

interface Report {
  id: number;
  violence_type: string;
  description: string;
  created_at: string;
  platform?: string;
  severity?: string;
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
        .from('public_reports')
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
          <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-900 capitalize">{report.violence_type}</h1>
                {report.severity && (
                  <span className={`px-3 py-1 text-sm rounded-full ${
                    report.severity === 'high' ? 'bg-red-100 text-red-700' :
                    report.severity === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {report.severity} severity
                  </span>
                )}
              </div>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <span>Reported on {new Date(report.created_at).toLocaleDateString()}</span>
                {report.platform && (
                  <span>Platform: {report.platform}</span>
                )}
              </div>
            </div>
            
            <div className="prose max-w-none">
              <h2 className="text-xl font-semibold mb-3">Description</h2>
              <p className="text-gray-700 leading-relaxed">{report.description}</p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                This report has been reviewed and approved by our moderation team. 
                If you have additional information about this incident, please contact us.
              </p>
            </div>
          </article>
        )}
      </main>
    </div>
  );
};

export default ReportPage;
