import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin('./lib/i18n/config.ts');
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    remotePatterns: [],
  },
  // Optimize for Vercel
  poweredByHeader: false,
  compress: true,
};
 
export default withNextIntl(nextConfig);
