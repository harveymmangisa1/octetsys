'use client';

import { useCollection } from '@/firebase/firestore/use-collection';
import { collection, query, orderBy, limit, Timestamp } from 'firebase/firestore';
import { useFirestore, useMemoFirebase } from '@/firebase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Clock } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { formatDistanceToNow } from 'date-fns';

interface AbuseReport {
    id: string;
    abuseType: string;
    description: string;
    submittedAt: Timestamp;
}

export function LatestReport() {
    const firestore = useFirestore();

    const reportsQuery = useMemoFirebase(() => {
        if (!firestore) return null;
        return query(
            collection(firestore, 'abuseReports'),
            orderBy('submittedAt', 'desc'),
            limit(1)
        );
    }, [firestore]);

    const { data: reports, isLoading, error } = useCollection<AbuseReport>(reportsQuery);

    const latestReport = reports?.[0];

    if (isLoading) {
        return (
            <section className="py-12 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <Skeleton className="h-40 w-full" />
                </div>
            </section>
        );
    }

    if (error) {
        console.error("Error fetching latest report:", error);
        return null; // Don't render anything if there's an error
    }

    if (!latestReport) {
        return null; // Don't render the section if there are no reports
    }

    const timeAgo = latestReport.submittedAt
        ? formatDistanceToNow(latestReport.submittedAt.toDate(), { addSuffix: true })
        : 'just now';

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
                                    Latest Community Report: {latestReport.abuseType}
                                </CardTitle>
                                <CardDescription className="flex items-center gap-2 text-amber-700">
                                    <Clock className="h-4 w-4" /> 
                                    <span>Reported {timeAgo}</span>
                                </CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-amber-800/90 leading-relaxed pl-2 border-l-4 border-amber-300">
                           {latestReport.description}
                        </p>
                        <p className="text-xs text-amber-600 mt-4 text-center">
                            This is an anonymous report submitted by a community member. Help us keep the community safe by reporting any abuse.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
