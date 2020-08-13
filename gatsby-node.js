const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

exports.onCreateWebpackConfig = ({
	stage,
	getConfig,
	rules,
	loaders,
	actions,
}) => {
	actions.setWebpackConfig({
		resolve: {
			modules: [path.resolve(__dirname, 'src'), 'node_modules'],
			plugins: [
				new DirectoryNamedWebpackPlugin({
					exclude: /node_modules/,
				}),
			],
		},
	});
};

const PAGES_DIR = 'pages';
exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions;
	if (node.internal.type === `MarkdownRemark`) {
		const fileNode = getNode(node.parent);
		if (fileNode.relativeDirectory) {
			const slug = createFilePath({ node, getNode, basePath: PAGES_DIR });
			createNodeField({
				node,
				name: `slug`,
				value: slug,
			});
		}
	}
};

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const result = await graphql(`
		query {
			allSynthsJson {
				edges {
					node {
						models {
							slug
							soundPacks {
								slug
							}
						}
					}
				}
			}
		}
	`);
	result.data.allSynthsJson.edges[0].node.models.forEach((model) => {
		createPage({
			path: model.slug,
			component: path.resolve(`./src/templates/synthPageTemplate.js`),
			context: {
				slug: model.slug,
			},
		});
		model.soundPacks.forEach((soundPack) => {
			createPage({
				path: soundPack.slug,
				component: path.resolve(`./src/templates/soundPackPageTemplate.js`),
				context: {
					slug: soundPack.slug,
				},
			});
		});
	});
};
