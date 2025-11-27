/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enable static HTML export
  // Optional: set the output folder if you want a custom folder
  distDir: '.vercel/output',
};

module.exports = nextConfig;
