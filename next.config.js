/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
