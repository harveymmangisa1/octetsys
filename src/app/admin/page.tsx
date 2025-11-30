import { createSupabaseServerClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Users, AlertTriangle, TrendingUp, Eye, Calendar, Activity } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

async function getAdminStats() {
  const cookieStore = await cookies();
  const supabase = createSupabaseServerClient(cookieStore);

  // Get posts count
  const { count: postsCount } = await supabase
    .from('posts')
    .select('*', { count: 'exact', head: true });

  // Get published posts count
  const { count: publishedCount } = await supabase
    .from('posts')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'published');

  // Get draft posts count
  const { count: draftCount } = await supabase
    .from('posts')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'draft');

  // Get team members count
  const { count: teamCount } = await supabase
    .from('profiles')
    .select('*', { count: 'exact', head: true });

  // Get reports count
  const { count: reportsCount } = await supabase
    .from('cyber_violence_reports')
    .select('*', { count: 'exact', head: true });

  // Get recent posts
  const { data: recentPosts } = await supabase
    .from('posts')
    .select('id, title, type, status, created_at')
    .order('created_at', { ascending: false })
    .limit(5);

  // Get posts by type
  const { data: postsByType } = await supabase
    .from('posts')
    .select('type')
    .eq('status', 'published');

  const typeStats = {
    blog: postsByType?.filter(p => p.type === 'blog').length || 0,
    news: postsByType?.filter(p => p.type === 'news').length || 0,
    event: postsByType?.filter(p => p.type === 'event').length || 0,
  };

  return {
    postsCount: postsCount || 0,
    publishedCount: publishedCount || 0,
    draftCount: draftCount || 0,
    teamCount: teamCount || 0,
    reportsCount: reportsCount || 0,
    recentPosts: recentPosts || [],
    typeStats,
  };
}

export default async function AdminDashboard() {
  const stats = await getAdminStats();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your admin dashboard. Here's an overview of your content.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.postsCount}</div>
            <p className="text-xs text-muted-foreground">
              {stats.publishedCount} published, {stats.draftCount} drafts
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Published</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.publishedCount}</div>
            <p className="text-xs text-muted-foreground">
              Live on your website
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.teamCount}</div>
            <p className="text-xs text-muted-foreground">
              Active contributors
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reports</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.reportsCount}</div>
            <p className="text-xs text-muted-foreground">
              Cyber violence reports
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Content Breakdown */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Blog Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">{stats.typeStats.blog}</div>
            <p className="text-xs text-muted-foreground mt-1">Published articles</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">News Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">{stats.typeStats.news}</div>
            <p className="text-xs text-muted-foreground mt-1">Published news</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">{stats.typeStats.event}</div>
            <p className="text-xs text-muted-foreground mt-1">Published events</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Posts</CardTitle>
          <CardDescription>Your latest content updates</CardDescription>
        </CardHeader>
        <CardContent>
          {stats.recentPosts.length > 0 ? (
            <div className="space-y-4">
              {stats.recentPosts.map((post) => (
                <div
                  key={post.id}
                  className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{post.title}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="capitalize">{post.type}</span>
                      <span>•</span>
                      <span className="capitalize">{post.status}</span>
                      <span>•</span>
                      <span>{new Date(post.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <Link href={`/admin/posts/${post.id}`}>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">No posts yet. Create your first post!</p>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/admin/posts/new">
              <Button className="w-full" variant="default">
                <FileText className="mr-2 h-4 w-4" />
                New Post
              </Button>
            </Link>
            <Link href="/admin/team">
              <Button className="w-full" variant="outline">
                <Users className="mr-2 h-4 w-4" />
                Manage Team
              </Button>
            </Link>
            <Link href="/admin/reports">
              <Button className="w-full" variant="outline">
                <AlertTriangle className="mr-2 h-4 w-4" />
                View Reports
              </Button>
            </Link>
            <Link href="/admin/profile">
              <Button className="w-full" variant="outline">
                <Activity className="mr-2 h-4 w-4" />
                My Profile
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
