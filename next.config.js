/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.neko-sama.xyz",
      },
    ],
  },
};

module.exports = nextConfig;
