/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "polydioms.com",
        port: "",
        pathname: "/wp-content/**",
      },
    ],
  },
};
