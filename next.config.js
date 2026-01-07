/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Removed: output: 'export' - Using server-side rendering for Vercel
  images: {
    unoptimized: false, // Enable optimization with server rendering
    domains: ['localhost', 'images.unsplash.com'],
  },
  basePath: '', // Change if repo name is not root
  assetPrefix: '',
  trailingSlash: true,
  // Enable SWC minification
  swcMinify: true,
  // Optimize build output
  compress: true,
  // Optimize production builds
  productionBrowserSourceMaps: false,
  // Enable compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
