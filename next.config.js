/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    // ↓ subset font ↓
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
  async rewrites() {
    return [
      {
        destination: '/top',
        source: '/',
      },
    ];
  },
}

module.exports = nextConfig
