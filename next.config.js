/** @type {import('next').NextConfig} */
const withOffline = require('next-offline');

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

const nextConfig = withPWA({
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['wp4.z1flexiblesolution.com', 'localhost', 'facebook.com'],
  },
});

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withOffline(withBundleAnalyzer(nextConfig));
