/** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["lh3.googleusercontent.com"],
//   },
// };

module.exports = {
  images: {
    domains: [
      "lh3.google.com",
      "lh3.googleusercontent.com",
      "drive.google.com",
      "www.dropbox.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.dropbox.com",
        pathname: "/scl/fi/**",
      },
    ],
  },
};

// module.exports = nextConfig;
// module.exports = {
//   images: {
//     domains: ["drive.google.com"],
//   },
// };
