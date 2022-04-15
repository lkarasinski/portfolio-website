/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    },
    experimental: {
        runtime: 'nodejs',
    },
};

module.exports = nextConfig;
