'use client';

// import { useCollection } from '@/firebase/firestore/use-collection';
// import { collection, query, orderBy, limit, Timestamp } from 'firebase/firestore';
// import { useFirestore, useMemoFirebase } from '@/firebase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Clock } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { formatDistanceToNow } from 'date-fns';

export function LatestReport() {
  // Firebase disabled: show a static example card for UX continuity
  const example = {
    abuseType: 'Phishing Email',
    description: 'Suspicious email impersonating a bank requesting account verification via a malicious link.',
    timeAgo: '2 days ago',
  };

  return (
    <section id="latest-report" className="py-12 bg-amber-50 border-y border-amber-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Card className="bg-white border-amber-300 shadow-md">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-amber-100 rounded-full">
                <AlertTriangle className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <CardTitle className="font-headline text-xl text-amber-900">
                  Latest Community Report: {example.abuseType}
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-amber-700">
                  <Clock className="h-4 w-4" />
                  <span>Reported {example.timeAgo}</span>
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-amber-800/90 leading-relaxed pl-2 border-l-4 border-amber-300">
              {example.description}
            </p>
            <p className="text-xs text-amber-600 mt-4 text-center">
              This is a sample. Re-enable Firebase to show real-time community reports.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
