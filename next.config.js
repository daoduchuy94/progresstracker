/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.gala.de",
        port: "",
        pathname: "/*/**",
      },
    ],
  },
};

module.exports = nextConfig;
