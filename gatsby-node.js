const path = require("path");

exports.modifyWebpackConfig = ({ config, _stage }) => {
	config.merge({
		resolve: {
			root: path.resolve(__dirname, "src/")
		}
	});
	return config;
};

const data = require("./src/data/userResumes");

exports.createPages = async ({ graphql, boundActionCreators }) => {
	const { createPage } = boundActionCreators;

	const template = path.resolve(
		`./src/components/SuccessfulResumes/Layouts/SingleResume.jsx`
	);

	// resolve(
	const query = await graphql(
		`
			{
				allUserResumesJson(limit: 1000) {
					edges {
						node {
							url
						}
					}
				}
			}
		`
	);

	query.data.allUserResumesJson.edges.forEach(({ node: { url } }) => {
		createPage({
			path: "/successful-resumes/" + url,
			component: template,
			context: { url }
		});
	});
};
