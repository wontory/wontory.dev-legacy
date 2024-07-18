/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ["@wontory/lib", "@wontory/ui", "next-mdx-remote"],
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
	},
};

export default nextConfig;
