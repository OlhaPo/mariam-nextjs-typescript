/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.mariamcorner.com.ua/",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
