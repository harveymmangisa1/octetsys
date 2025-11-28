'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { createPost, updatePost } from './actions';
import { toast } from '@/hooks/use-toast';
import { ImageUpload } from './ImageUpload';
import { RichTextEditor } from './RichTextEditor.client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Save, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title must be less than 100 characters'),
  content: z.string().min(1, 'Content is required'),
  type: z.enum(['news', 'blog', 'event']),
  status: z.enum(['draft', 'published']),
  image: z.string().optional(),
  seo_title: z.string().optional(),
  seo_description: z.string().optional(),
  excerpt: z.string().optional(),
  tags: z.string().optional(), // We'll handle comma-separation in the UI
});

export function PostForm({ post }: { post?: any }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title || '',
      content: post?.content || '',
      type: post?.type || 'news',
      status: post?.status || 'draft',
      image: post?.image || '',
      excerpt: post?.excerpt || '',
      tags: post?.tags ? post.tags.join(', ') : '',
      seo_title: post?.seo_title || '',
      seo_description: post?.seo_description || '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    // Convert tags string to array
    const formattedValues = {
      ...values,
      tags: values.tags ? values.tags.split(',').map((t: string) => t.trim()).filter(Boolean) : [],
    };

    try {
      const result = post
        ? await updatePost(post.id, formattedValues)
        : await createPost(formattedValues);

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
        }
      }
    } catch (error) {
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

  const titleLength = form.watch('title')?.length || 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button
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
                          <span className={`text-xs font-normal ${titleLength > 80 ? 'text-amber-500' : 'text-muted-foreground'
                            }`}>
                            {titleLength}/100
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter a compelling title..."
                            {...field}
                            className="text-lg font-medium"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="excerpt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Excerpt</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="A short summary of the post..."
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Displayed in post lists and search results.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Content</FormLabel>
                        <FormControl>
                          <RichTextEditor
                            value={field.value}
                            onChange={field.onChange}
                            placeholder="Write your content here..."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>SEO & Metadata</CardTitle>
                  <CardDescription>
                    Optimize your post for search engines
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="seo_title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>SEO Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Custom title for search engines (optional)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="seo_description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>SEO Description</FormLabel>
                        <FormControl>
                          <Input placeholder="Meta description for search results (optional)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tags"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tags</FormLabel>
                        <FormControl>
                          <Input placeholder="tech, news, update (comma separated)" {...field} />
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
                  <CardTitle className="text-lg">Publishing</CardTitle>
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
                            className="flex flex-col space-y-2"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="draft" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">
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
                              <FormLabel className="font-normal cursor-pointer">
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
                            className="flex flex-col space-y-2"
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
                          />
                        </FormControl>
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
