/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    domains: ['octet-systems.com'],
  },
  // Turbopack configuration
  turbopack: {
    root: __dirname,
  },
  // Removed output: 'export' to support Server Actions and dynamic features
  // Using @cloudflare/next-on-pages for Cloudflare Pages deployment
};

module.exports = nextConfig;
