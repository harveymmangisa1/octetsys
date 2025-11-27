import type {NextConfig} from 'next';

const enforceStrict = process.env.ENFORCE_STRICT_BUILD === 'true';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: !enforceStrict,
  },
  eslint: {
    ignoreDuringBuilds: !enforceStrict,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
