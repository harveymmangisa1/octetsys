'use client';

import React from 'react';
import { Heart, MessageCircle, Eye } from 'lucide-react';
import { Button } from './button';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface BlogEngagementProps {
  postId: string;
  initialLikes: number;
  initialComments: number;
  initialViews: number;
  isLiked: boolean;
}

export function BlogEngagement({ 
  postId, 
  initialLikes, 
  initialComments, 
  initialViews,
  isLiked: initialIsLiked 
}: BlogEngagementProps) {
  const [likes, setLikes] = React.useState(initialLikes);
  const [isLiked, setIsLiked] = React.useState(initialIsLiked);
  const [isLoading, setIsLoading] = React.useState(false);
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleLike = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast.error('Please sign in to like posts');
        router.push('/login');
        return;
      }

      if (isLiked) {
        // Unlike the post
        const { error } = await supabase
          .from('post_likes')
          .delete()
          .eq('post_id', postId)
          .eq('user_id', user.id);

        if (error) throw error;
        
        setLikes(prev => prev - 1);
        setIsLiked(false);
        toast.success('Post unliked');
      } else {
        // Like the post
        const { error } = await supabase
          .from('post_likes')
          .insert({
            post_id: postId,
            user_id: user.id
          });

        if (error) throw error;
        
        setLikes(prev => prev + 1);
        setIsLiked(true);
        toast.success('Post liked!');
      }
    } catch (error) {
      console.error('Error toggling like:', error);
      toast.error('Failed to update like');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-6 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <Eye className="w-4 h-4" />
        <span>{initialViews.toLocaleString()} views</span>
      </div>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={handleLike}
        disabled={isLoading}
        className={`flex items-center gap-2 px-2 ${isLiked ? 'text-red-600 hover:text-red-700' : 'hover:text-red-600'}`}
      >
        <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
        <span>{likes.toLocaleString()} {likes === 1 ? 'like' : 'likes'}</span>
      </Button>
      
      <div className="flex items-center gap-2">
        <MessageCircle className="w-4 h-4" />
        <span>{initialComments.toLocaleString()} {initialComments === 1 ? 'comment' : 'comments'}</span>
      </div>
    </div>
  );
}