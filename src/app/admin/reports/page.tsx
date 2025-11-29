import { getReports } from './actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Eye, EyeOff, Clock, CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';

export default async function ReportsPage() {
    const { data: reports, error } = await getReports();

    if (error) {
        return (
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Cyber Violence Reports</h1>
                    <p className="text-muted-foreground">
                        Manage and review cyber violence reports.
                    </p>
                </div>
                <Card>
                    <CardContent className="flex flex-col items-center justify-center py-12">
                        <div className="text-center">
                            <h3 className="text-lg font-semibold text-destructive">Error Loading Reports</h3>
                            <p className="text-muted-foreground">{error}</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'approved':
                return <CheckCircle className="h-4 w-4 text-green-600" />;
            case 'rejected':
                return <XCircle className="h-4 w-4 text-red-600" />;
            case 'pending':
            default:
                return <Clock className="h-4 w-4 text-yellow-600" />;
        }
    };

    const getStatusBadge = (status: string) => {
        const variants = {
            approved: 'default',
            rejected: 'destructive',
            pending: 'secondary'
        } as const;

        return (
            <Badge variant={variants[status as keyof typeof variants] || 'secondary'}>
                {status || 'pending'}
            </Badge>
        );
    };

    const getSeverityBadge = (severity: string) => {
        const variants = {
            high: 'destructive',
            medium: 'default',
            low: 'secondary'
        } as const;

        return (
            <Badge variant={variants[severity as keyof typeof variants] || 'secondary'}>
                {severity}
            </Badge>
        );
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Cyber Violence Reports</h1>
                <p className="text-muted-foreground">
                    Manage and review cyber violence reports submitted by the community.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
                        <Shield className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{reports?.length || 0}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Pending</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {reports?.filter(r => !r.status || r.status === 'pending').length || 0}
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Approved</CardTitle>
                        <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {reports?.filter(r => r.status === 'approved').length || 0}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="space-y-4">
                {reports?.map((report) => (
                    <Card key={report.id}>
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        {getStatusIcon(report.status || 'pending')}
                                        <CardTitle className="text-lg capitalize">
                                            {report.violence_type}
                                        </CardTitle>
                                        {getStatusBadge(report.status || 'pending')}
                                        {report.severity && getSeverityBadge(report.severity)}
                                    </div>
                                    <CardDescription>
                                        Reported on {new Date(report.created_at).toLocaleDateString()}
                                        {report.platform && ` • Platform: ${report.platform}`}
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <p className="text-sm text-muted-foreground line-clamp-3">
                                    {report.description}
                                </p>
                                
                                {report.additional_details && (
                                    <details className="text-sm">
                                        <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                                            Additional Details
                                        </summary>
                                        <p className="mt-2 text-muted-foreground">
                                            {report.additional_details}
                                        </p>
                                    </details>
                                )}
                                
                                <div className="flex gap-2 pt-2">
                                    <Button asChild size="sm" variant="outline">
                                        <Link href={`/reports/${report.id}`}>
                                            <Eye className="h-4 w-4 mr-1" />
                                            View Details
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}

                {reports?.length === 0 && (
                    <Card>
                        <CardContent className="flex flex-col items-center justify-center py-12">
                            <Shield className="h-12 w-12 text-muted-foreground mb-4" />
                            <div className="text-center">
                                <h3 className="text-lg font-semibold">No Reports Yet</h3>
                                <p className="text-muted-foreground">
                                    No cyber violence reports have been submitted yet.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
}