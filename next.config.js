/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const withSitemap = require('next-sitemap/config');

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
}

module.exports = nextConfig
