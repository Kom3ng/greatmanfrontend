/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lain.astrack.me',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
