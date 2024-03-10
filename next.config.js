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
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "lh3.google.com",
    //     pathname: "/u/0/d/**",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "lh3.googleusercontent.com",
    //     pathname: "/fife/**",
    //   },
    // ],
  },
};

// module.exports = nextConfig;
// module.exports = {
//   images: {
//     domains: ["drive.google.com"],
//   },
// };
