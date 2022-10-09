/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
}

module.exports = {
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
}
