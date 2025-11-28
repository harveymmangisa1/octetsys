import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import placeholderImages from '@/lib/placeholder-images.json';

const posts = [
  {
    id: 'cybersecurity-trends',
    category: 'News',
    title: 'The Importance of Cybersecurity in the Digital Age',
    description: 'As our lives become increasingly intertwined with technology, the need for robust cybersecurity measures has never been more critical. This article explores the latest trends in cybersecurity.',
    link: '/news/cybersecurity-importance',
    date: 'Jan 23, 2024',
    readTime: '5 min read',
    image: placeholderImages.blog?.[0]?.src || "https://picsum.photos/seed/security-trends/800/600"
  },
  {
    id: 'ai-future',
    category: 'Blog',
    title: 'A Deep Dive into Artificial Intelligence',
    description: 'Artificial intelligence is rapidly transforming industries, from healthcare to finance. In this blog post, we take a closer look into the different types of AI and its potential applications.',
    link: '/blog/ai-deep-dive',
    date: 'Feb 15, 2024',
    readTime: '8 min read',
    image: placeholderImages.blog?.[1]?.src || "https://picsum.photos/seed/ai-future/800/600"
  },
  {
    id: 'remote-work',
    category: 'Events',
    title: 'Upcoming Webinar: The Future of Work',
    description: 'Join us for a free webinar on the future of work, where we will discuss the impact of automation, remote work, and other trends on the modern workplace.',
    link: '/events/future-of-work-webinar',
    date: 'Mar 10, 2024',
    readTime: '1 hour',
    image: placeholderImages.blog?.[2]?.src || "https://picsum.photos/seed/remote-work/800/600"
  }
];

export function LatestPosts() {
  return (
    <div className="bg-background py-24 sm:py-32 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-none lg:text-left flex flex-col lg:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-primary">Latest Insights</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">From the Blog</h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-xl">
              Expert analysis, industry trends, and updates from our team of technology specialists.
            </p>
          </div>
          <Button asChild variant="outline" className="hidden lg:flex rounded-full border-border hover:bg-secondary">
            <Link href="/blog">
              View all posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between group">
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl mb-6 bg-muted">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-background/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-foreground ring-1 ring-inset ring-gray-500/10">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-x-4 text-xs text-muted-foreground mb-3">
                <time dateTime={post.date} className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </time>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </div>
              </div>

              <div className="group relative">
                <h3 className="mt-2 text-xl font-bold leading-snug text-foreground group-hover:text-primary transition-colors">
                  <Link href={post.link}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {post.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-x-4">
                <div className="text-sm font-semibold leading-6 text-primary group-hover:translate-x-1 transition-transform flex items-center">
                  Read article <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center lg:hidden">
          <Button asChild variant="outline" className="rounded-full w-full sm:w-auto">
            <Link href="/blog">
              View all posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
