/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.sanity.io']
  },
  i18n: {
    locales: ['pt-BR'],
    defaultLocale: 'pt-BR'
  }
}

module.exports = nextConfig
