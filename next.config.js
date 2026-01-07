/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export for GitHub Pages
  images: {
    unoptimized: true, // Disable optimization for static export
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
