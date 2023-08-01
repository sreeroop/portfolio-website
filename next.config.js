/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

}
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  style-src 'self';
  font-src 'self';
`
module.exports = nextConfig
