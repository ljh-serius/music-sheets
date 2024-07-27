/** @type {import('next').NextConfig} */
const withSitemap = require('next-sitemap/config');

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  reactStrictMode: true
}

module.exports = nextConfig
