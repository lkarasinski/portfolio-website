/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: 'akamai',
        path: '',
    },
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    },
    experimental: {
        runtime: 'nodejs',
    },
};

module.exports = nextConfig;
