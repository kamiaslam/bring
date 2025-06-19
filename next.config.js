/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir option is no longer needed in Next.js 14
  },
  images: {
    domains: ['cdn.prod.website-files.com'],
  },
}

module.exports = nextConfig 