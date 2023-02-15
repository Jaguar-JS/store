/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['localhost']
	},
	experimental: {
		esmExternals: false
	},
	env:{
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		SERVER_URL: process.env.REACT_SERVER_URL
	},
	async rewrites() {
		return [

			{
				source: '/uploads/:path*',
				destination: `http://localhost:4200/uploads/:path*`
			}
		]
	}
}

module.exports = nextConfig
