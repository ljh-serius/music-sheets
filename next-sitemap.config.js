module.exports = {
    siteUrl: 'https://strum.fun', // Replace with your actual site URL
    generateRobotsTxt: true, // Generate a robots.txt file
    outDir: './public', // Directory where the sitemap will be generated
    sitemapName: 'sitemap.xml', // Name of the sitemap file
    generateIndexSitemap: false, // Generate a single sitemap file instead of index sitemap
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://strum.fun/sitemap.xml',
      ],
    },
  };
  