/** @type {import('next').NextConfig} */

const nextConfig = {
  trailingSlash: false, 
  redirects() {
    return [
      {
        source: "/en/",
        destination: "/en",
        permanent: true, 
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_HOST_NAME,
        port: "",
        pathname: "/**/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
};
module.exports = nextConfig;
