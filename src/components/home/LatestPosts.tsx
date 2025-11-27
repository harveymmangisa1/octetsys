import Link from 'next/link';

const posts = [
  {
    category: 'News',
    title: 'The Importance of Cybersecurity in the Digital Age',
    description: 'As our lives become increasingly intertwined with technology, the need for robust cybersecurity measures has never been more critical. This article explores the latest trends in cybersecurity and offers practical tips for businesses and individuals to protect themselves from online threats.',
    link: '/news/cybersecurity-importance'
  },
  {
    category: 'Blog',
    title: 'A Deep Dive into Artificial Intelligence',
    description: 'Artificial intelligence is rapidly transforming industries, from healthcare to finance. In this blog post, we take a closer देख into the different types of AI, its potential applications, and the ethical considerations surrounding its development.',
    link: '/blog/ai-deep-dive'
  },
  {
    category: 'Events',
    title: 'Upcoming Webinar: The Future of Work',
    description: 'Join us for a free webinar on the future of work, where we will discuss the impact of automation, remote work, and other trends on the modern workplace. Register now to secure your spot!',
    link: '/events/future-of-work-webinar'
  }
];

export function LatestPosts() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime="2023-01-23" className="text-gray-500">Jan 23, 2023</time>
                <Link href={post.link} className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{post.category}</Link>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link href={post.link}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
