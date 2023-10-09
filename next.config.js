/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gcralvzagqjkaiyeavll.supabase.co',
      },
    ],
  },
}

module.exports = nextConfig
