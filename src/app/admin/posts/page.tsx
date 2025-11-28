
'use client';

import { Suspense } from 'react';
import { PostList } from './PostList';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

function PostListSkeleton() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="h-8 w-32 bg-muted animate-pulse rounded"></div>
          <div className="h-4 w-48 bg-muted animate-pulse rounded mt-2"></div>
        </div>
        <div className="h-10 w-24 bg-muted animate-pulse rounded"></div>
      </div>
      
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 bg-muted animate-pulse rounded-lg"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-6 w-3/4 bg-muted animate-pulse rounded"></div>
                  <div className="h-4 w-full bg-muted animate-pulse rounded"></div>
                  <div className="flex gap-2">
                    <div className="h-6 w-16 bg-muted animate-pulse rounded"></div>
                    <div className="h-6 w-20 bg-muted animate-pulse rounded"></div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="h-8 w-8 bg-muted animate-pulse rounded"></div>
                  <div className="h-8 w-8 bg-muted animate-pulse rounded"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default function AdminPostsPage() {
  return (
    <Suspense fallback={<PostListSkeleton />}>
      <PostList />
    </Suspense>
  );
}
