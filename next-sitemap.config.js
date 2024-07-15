/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.mariamcorner.com.ua/",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/admin/*", "/api/*", "/*/order-confirmation", "/*/checkout"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/admin", "/api", "/*/order-confirmation", "/*/checkout"],
      },
    ],
  },
};
