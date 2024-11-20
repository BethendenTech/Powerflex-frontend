/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Set this to true to ignore ESLint errors during build
        ignoreDuringBuilds: true,
    },
    images: {
        domains: [], // Add any external domains here if you're serving images externally
    },
};

export default nextConfig;
