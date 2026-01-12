/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Removed: output: 'export' - Using server-side rendering for Vercel
  images: {
    unoptimized: false, // Enable optimization with server rendering
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year cache for static images
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
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
