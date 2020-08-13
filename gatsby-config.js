const siteConfig = require('./site-config');

module.exports = {
	siteMetadata: {
		...siteConfig,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-offline`,
		`gatsby-transformer-json`,
		`gatsby-transformer-remark`,
		`gatsby-plugin-eslint`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `content`,
				path: `${__dirname}/content`,
			},
		},
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-webpack-size`,
		{
			resolve: `gatsby-plugin-react-svg`,
			options: {
				rule: {
					include: /images\/.*\.svg$/,
				},
			},
		},
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Montserrat`,
						subsets: [`latin`],
						variants: [`500`, '500i'],
					},
					{
						family: `Lato`,
						subsets: [`latin`],
						variants: [`300`, `400`, `300i`],
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-s3`,
			options: {
				bucketName: 'synthsoundlibrary.com',
				protocol: 'https',
				hostname: 'synthsoundlibrary.com',
			},
		},
	],
};
