'use client';

import React, { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';

interface Report {
  id: number;
  violence_type: string;
  description: string;
  created_at: string;
  platform?: string;
  severity?: string;
}

const RecentReports: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReports = async () => {
      const supabase = createClient();
const { data, error } = await supabase
        .from('public_reports')
        .select('id, violence_type, description, created_at, platform, severity')
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
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Cyber Violence Reports</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed about recent cyber violence incidents reported in our community. 
            Your awareness helps create a safer digital environment for everyone.
          </p>
        </div>
        
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        )}
        
        {error && (
          <div className="text-center py-12">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-red-600">Unable to load reports at this time.</p>
            </div>
          </div>
        )}
        
        {!loading && !error && reports.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gray-50 rounded-lg p-8 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Reports Yet</h3>
              <p className="text-gray-600 mb-4">
                There are no approved cyber violence reports to display at this time.
              </p>
              <a 
                href="/report-cyber-violence" 
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Report an Incident
              </a>
            </div>
          </div>
        )}
        
        {!loading && !error && reports.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {reports.map((report) => (
              <div key={report.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 capitalize">{report.violence_type}</h3>
                  {report.severity && (
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      report.severity === 'high' ? 'bg-red-100 text-red-700' :
                      report.severity === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {report.severity}
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-3">{report.description}</p>
                
                <div className="flex items-center justify-between text-sm">
                  {report.platform && (
                    <span className="text-gray-500">
                      Platform: <span className="font-medium">{report.platform}</span>
                    </span>
                  )}
                  {report.created_at && (
                    <span className="text-gray-500">
                      {new Date(report.created_at).toLocaleDateString()}
                    </span>
                  )}
                </div>
                
                <a 
                  href={`/reports/${report.id}`} 
                  className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  View Details
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        )}
        
        {!loading && !error && reports.length > 0 && (
          <div className="text-center">
            <a 
              href="/reports" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              View All Reports
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentReports;
