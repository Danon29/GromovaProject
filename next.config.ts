import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 90],
  },

  output: 'standalone',

  async headers() {
    return [
      {
        source: '/:path*{/}?',
        headers: [{ key: 'X-Accel-Buffering', value: 'no' }],
      },
    ]
  },
}

export default nextConfig
