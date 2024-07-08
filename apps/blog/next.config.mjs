/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@wontory/lib', '@wontory/ui'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

export default nextConfig
