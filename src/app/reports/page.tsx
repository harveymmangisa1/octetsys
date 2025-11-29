import { Metadata } from 'next';
import Link from 'next/link';
import RecentReports from '@/components/cyber-violence/RecentReports';

export const metadata: Metadata = {
  title: 'Cyber Violence Reports - Nzeru',
  description: 'Browse approved cyber violence reports submitted by our community members.',
};

export default function ReportsPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <main className="flex-1">
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Cyber Violence Reports</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse through approved cyber violence reports submitted by our community. 
                These reports help raise awareness and prevent future incidents.
              </p>
            </div>
            
            <div className="text-center mb-8">
              <Link 
                href="/report-cyber-violence"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Report New Incident
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
        
        <RecentReports />
      </main>
    </div>
  );
}