/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreBuildErrors: true,
    },
    experimental: {
        serverActions: {
            bodySizeLimit: '2mb',
        },
        serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.clerk.com",
            },
            {
                protocol: "https",
                hostname: "images.clerk.dev",
            },
            {
                protocol: "https",
                hostname: "uploadthing.com",
            },
            {
                protocol: "https",
                hostname: "placehold.co",
            },
            {
                protocol: "https",
                hostname: "utfs.io",
            },
        ]
    }
}

module.exports = nextConfig
