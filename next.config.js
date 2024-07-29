/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "www.mariamcorner.com.ua",
      "www.dropbox.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/a/**",
      },
      {
        protocol: "https",
        hostname: "www.mariamcorner.com.ua",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.dropbox.com",
        pathname: "/scl/fi/**",
      },
    ],
  },
};
module.exports = nextConfig;
