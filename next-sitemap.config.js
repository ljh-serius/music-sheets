// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://strum.fun', // Replace with your website URL
    generateRobotsTxt: true, // (optional) Generate robots.txt file
    robotsTxtOptions: {
        additionalSitemaps: [
          'https://strum.fun/sitemap.xml'
        ],
      },
  };
  