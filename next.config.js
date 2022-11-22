/** @type {import('next').NextConfig} */


const nextConfig = {
  async rewrites() {
    return {
      afterFiles: [
        // These rewrites are checked after pages/public files
        // are checked but before dynamic routes
        {
          source: '/',
          destination: '/feed',
        },
      ],
    },
  },
  reactStrictMode: false,
  swcMinify: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}



module.exports = nextConfig
