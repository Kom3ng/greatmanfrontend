/** @type {import('next').NextConfig} */
const nextConfig = {
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
