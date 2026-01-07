/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'images.unsplash.com'],
    unoptimized: process.env.NODE_ENV === 'development',
    formats: ['image/avif', 'image/webp'],
  },
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
  // Optimize font loading
  optimizeFonts: true,
}

module.exports = nextConfig
