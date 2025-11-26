'use client';

import React, { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';

interface Report {
  id: number;
  title: string;
  description: string;
}

const RecentReports: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReports = async () => {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('reports')
        .select('id, title, description')
        .order('created_at', { ascending: false })
        .limit(3);

      if (error) {
        setError(error.message);
      } else {
        setReports(data || []);
      }
      setLoading(false);
    };

    fetchReports();
  }, []);

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Recent Cyber Violence Reports</h2>
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">Error: {error}</p>}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((report) => (
              <div key={report.id} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">{report.title}</h3>
                <p className="text-gray-700 mb-4">{report.description}</p>
                <a href={`/reports/${report.id}`} className="text-blue-500 hover:underline">Read More</a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentReports;
