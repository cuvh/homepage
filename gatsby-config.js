const autoprefixer = require("autoprefixer");
const path = require("path");

module.exports = {
	siteMetadata: {
		title: "Gatsby Default Starter"
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		{
			resolve: `gatsby-plugin-postcss-sass`,
			options: {
				precision: "8",
				includePaths: [
					path.resolve(__dirname, "./node_modules"),
					path.resolve(
						__dirname,
						"./node_modules/bootstrap-sass/assets/stylesheets"
					),
					path.resolve(__dirname, "./node_modules/layout-grid/sass"),
					path.resolve(
						__dirname,
						"./node_modules/slick-carousel/slick"
					)
				],
				postCssPlugins: [
					autoprefixer({
						browsers: ["last 2 versions"]
					})
				]
			}
		}
	]
};
