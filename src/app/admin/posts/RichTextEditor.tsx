// src/app/admin/posts/PostForm.tsx
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { createPost, updatePost } from './actions';
import { toast } from '@/hooks/use-toast';
import { ImageUpload } from './ImageUpload';
import { RichTextEditor } from './RichTextEditor';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Save, ArrowLeft, Eye, EyeOff } from 'lucide-react';

const formSchema = z.object({
  title: z.string()
    .min(1, 'Title is required')
    .max(100, 'Title must be less than 100 characters')
    .trim(),
  content: z.string().min(1, 'Content is required'),
  type: z.enum(['news', 'blog', 'event']),
  status: z.enum(['draft', 'published']),
  image: z.string().optional(),
});

export function PostForm({ post }: { post?: any }) {
  const [isLoading, setIsLoading] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const router = useRouter();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title || '',
      content: post?.content || '',
      type: post?.type || 'news',
      status: post?.status || 'draft',
      image: post?.image || '',
    },
  });

  // Calculate word count
  const content = form.watch('content');
  const title = form.watch('title');

  const calculateWordCount = (html: string) => {
    const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    return text === '' ? 0 : text.split(' ').length;
  };

  const handleContentChange = (value: string) => {
    form.setValue('content', value);
    setWordCount(calculateWordCount(value));
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    
    try {
      const result = post
        ? await updatePost(post.id, values)
        : await createPost(values);

      if (result.error) {
        toast({
          title: 'Error',
          description: result.error,
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Success',
          description: `Post ${post ? 'updated' : 'created'} successfully.`,
        });
        
        if (!post) {
          form.reset();
          router.push('/admin/posts');
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  const handleCancel = () => {
    if (form.formState.isDirty) {
      if (confirm('You have unsaved changes. Are you sure you want to leave?')) {
        router.back();
      }
    } else {
      router.back();
    }
  };

  const titleLength = title?.length || 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={handleCancel}
          disabled={isLoading}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {post ? 'Edit Post' : 'Create New Post'}
          </h1>
          <p className="text-muted-foreground">
            {post ? 'Update your post content and settings' : 'Create a new blog post, news article, or event'}
          </p>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content - 3 columns */}
            <div className="lg:col-span-3 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Post Content</CardTitle>
                  <CardDescription>
                    Add the main content for your post
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex justify-between items-center">
                          Title
                          <span className={`text-xs font-normal ${
                            titleLength > 80 ? 'text-amber-500' : 'text-muted-foreground'
                          }`}>
                            {titleLength}/100
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter a compelling title..." 
                            {...field} 
                            className="text-lg font-medium"
                            disabled={isLoading}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex justify-between items-center">
                          Content
                          <span className="text-xs text-muted-foreground">
                            {wordCount} words
                          </span>
                        </FormLabel>
                        <FormControl>
                          <RichTextEditor 
                            value={field.value} 
                            onChange={handleContentChange}
                            placeholder="Write your content here..."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - 1 column */}
            <div className="lg:col-span-1 space-y-6">
              {/* Publishing Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    Publishing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Status</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-3"
                            disabled={isLoading}
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="draft" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer flex items-center gap-2">
                                <EyeOff className="h-4 w-4" />
                                <div>
                                  <p className="font-medium">Draft</p>
                                  <p className="text-xs text-muted-foreground">Save as draft</p>
                                </div>
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="published" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer flex items-center gap-2">
                                <Eye className="h-4 w-4" />
                                <div>
                                  <p className="font-medium">Publish</p>
                                  <p className="text-xs text-muted-foreground">Make visible to readers</p>
                                </div>
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex gap-2 pt-4">
                    <Button 
                      type="submit" 
                      disabled={isLoading}
                      className="flex-1"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Saving...
                        </>
                      ) : (
                        <>
                          <Save className="mr-2 h-4 w-4" />
                          {post ? 'Update Post' : 'Create Post'}
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Settings Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Post Type</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-3"
                            disabled={isLoading}
                          >
                            {[
                              { value: 'news', label: 'News', description: 'News articles and announcements' },
                              { value: 'blog', label: 'Blog', description: 'Blog posts and articles' },
                              { value: 'event', label: 'Event', description: 'Events and happenings' },
                            ].map((type) => (
                              <FormItem key={type.value} className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value={type.value} />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  <div>
                                    <p className="font-medium">{type.label}</p>
                                    <p className="text-xs text-muted-foreground">{type.description}</p>
                                  </div>
                                </FormLabel>
                              </FormItem>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Featured Image Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Featured Image</CardTitle>
                  <CardDescription>
                    Add a featured image to make your post stand out
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <ImageUpload 
                            onUpload={(url) => field.onChange(url)}
                            currentImage={field.value}
                            disabled={isLoading}
                          />
                        </FormControl>
                        {field.value && (
                          <div className="mt-4 space-y-2">
                            <img 
                              src={field.value} 
                              alt="Featured" 
                              className="w-full h-32 object-cover rounded-md border"
                            />
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              className="w-full"
                              onClick={() => field.onChange('')}
                              disabled={isLoading}
                            >
                              Remove Image
                            </Button>
                          </div>
                        )}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}