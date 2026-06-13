/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    // Quality levels actually used across the app (next/image quality props).
    qualities: [65, 75, 80],
    // Cache optimized images at the edge for a year (assets are content-stable).
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
    ],
  },
  // Tree-shake icon imports so only the used lucide icons ship to the client.
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig
