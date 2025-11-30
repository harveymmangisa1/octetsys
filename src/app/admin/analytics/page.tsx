import { createSupabaseServerClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, TrendingUp, Calendar, FileText } from 'lucide-react';

async function getAnalytics() {
    const cookieStore = await cookies();
    const supabase = createSupabaseServerClient(cookieStore);

    // Get posts created in the last 30 days
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const { data: recentPosts } = await supabase
        .from('posts')
        .select('created_at, type, status')
        .gte('created_at', thirtyDaysAgo.toISOString());

    // Get all posts for historical data
    const { data: allPosts } = await supabase
        .from('posts')
        .select('created_at, type, status, updated_at');

    // Calculate monthly activity
    const monthlyActivity = new Map<string, number>();
    allPosts?.forEach(post => {
        const month = new Date(post.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
        monthlyActivity.set(month, (monthlyActivity.get(month) || 0) + 1);
    });

    const monthlyData = Array.from(monthlyActivity.entries())
        .sort((a, b) => new Date(a[0]).getTime() - new Date(b[0]).getTime())
        .slice(-6); // Last 6 months

    // Calculate growth
    const lastMonth = recentPosts?.length || 0;
    const previousMonth = allPosts?.filter(p => {
        const date = new Date(p.created_at);
        const sixtyDaysAgo = new Date();
        sixtyDaysAgo.setDate(sixtyDaysAgo.getDate() - 60);
        return date >= sixtyDaysAgo && date < thirtyDaysAgo;
    }).length || 0;

    const growth = previousMonth > 0
        ? ((lastMonth - previousMonth) / previousMonth * 100).toFixed(1)
        : '0';

    // Get content type distribution
    const typeDistribution = {
        blog: allPosts?.filter(p => p.type === 'blog').length || 0,
        news: allPosts?.filter(p => p.type === 'news').length || 0,
        event: allPosts?.filter(p => p.type === 'event').length || 0,
    };

    // Get status distribution
    const statusDistribution = {
        published: allPosts?.filter(p => p.status === 'published').length || 0,
        draft: allPosts?.filter(p => p.status === 'draft').length || 0,
    };

    return {
        recentPostsCount: lastMonth,
        growth,
        monthlyData,
        typeDistribution,
        statusDistribution,
        totalPosts: allPosts?.length || 0,
    };
}

export default async function AnalyticsPage() {
    const analytics = await getAnalytics();

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
                <p className="text-muted-foreground">
                    Insights and trends for your content
                </p>
            </div>

            {/* Key Metrics */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Content</CardTitle>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{analytics.totalPosts}</div>
                        <p className="text-xs text-muted-foreground">
                            All time posts
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Last 30 Days</CardTitle>
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{analytics.recentPostsCount}</div>
                        <p className="text-xs text-muted-foreground">
                            New posts created
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{analytics.growth}%</div>
                        <p className="text-xs text-muted-foreground">
                            vs. previous month
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Publish Rate</CardTitle>
                        <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {analytics.totalPosts > 0
                                ? Math.round((analytics.statusDistribution.published / analytics.totalPosts) * 100)
                                : 0}%
                        </div>
                        <p className="text-xs text-muted-foreground">
                            Published content
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Charts */}
            <div className="grid gap-4 md:grid-cols-2">
                {/* Monthly Activity */}
                <Card>
                    <CardHeader>
                        <CardTitle>Monthly Activity</CardTitle>
                        <CardDescription>Posts created per month (last 6 months)</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {analytics.monthlyData.map(([month, count]) => (
                                <div key={month} className="flex items-center gap-4">
                                    <div className="w-24 text-sm text-muted-foreground">{month}</div>
                                    <div className="flex-1">
                                        <div className="h-8 bg-primary/10 rounded-md relative overflow-hidden">
                                            <div
                                                className="h-full bg-primary rounded-md transition-all"
                                                style={{
                                                    width: `${Math.min((count / Math.max(...analytics.monthlyData.map(d => d[1]))) * 100, 100)}%`
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-12 text-right text-sm font-medium">{count}</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Content Type Distribution */}
                <Card>
                    <CardHeader>
                        <CardTitle>Content Distribution</CardTitle>
                        <CardDescription>Posts by type and status</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <h4 className="text-sm font-medium mb-3">By Type</h4>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm">Blog Posts</span>
                                    <span className="text-sm font-medium">{analytics.typeDistribution.blog}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm">News</span>
                                    <span className="text-sm font-medium">{analytics.typeDistribution.news}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm">Events</span>
                                    <span className="text-sm font-medium">{analytics.typeDistribution.event}</span>
                                </div>
                            </div>
                        </div>

                        <div className="border-t pt-4">
                            <h4 className="text-sm font-medium mb-3">By Status</h4>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm">Published</span>
                                    <span className="text-sm font-medium text-green-600">{analytics.statusDistribution.published}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm">Drafts</span>
                                    <span className="text-sm font-medium text-yellow-600">{analytics.statusDistribution.draft}</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
