/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	reactStrictMode: true,
	experimental: {
		scrollRestoration: true,
	},
	images: {
		unoptimized: true, // https://nextjs.org/docs/messages/export-image-api
	},
};

module.exports = nextConfig;
