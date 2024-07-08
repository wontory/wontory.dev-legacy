/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@wontory/lib', '@wontory/ui'],
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

export default nextConfig
