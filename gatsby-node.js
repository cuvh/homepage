const path = require("path");

exports.modifyWebpackConfig = ({ config, stage }) => {
	config.merge({
		resolve: {
			root: path.resolve(__dirname, "src/")
		}
	});

	const timestamp = Date.now();
	switch (stage) {
		case "build-javascript":
			config.merge({
				output: {
					filename: `[name]-${timestamp}-[chunkhash].js`,
					chunkFilename: `[name]-${timestamp}-[chunkhash].js`
				}
			});

			break;
	}

	return config;
};

exports.modifyBabelrc = ({ babelrc }) => ({
	...babelrc,
	plugins: babelrc.plugins.concat([
		"transform-regenerator",
		"transform-runtime"
	])
});

exports.createPages = async ({ graphql, boundActionCreators }) => {
	const { createPage } = boundActionCreators;

	const userResumeTemplate = path.resolve(
		`./src/components/SuccessfulResumes/Layouts/SingleResume.jsx`
	);

	const userResumes = await graphql(
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

	userResumes.data.allUserResumesJson.edges.forEach(({ node: { url } }) => {
		createPage({
			path: "/successful-resumes/" + url,
			component: userResumeTemplate,
			context: { url }
		});
	});

	const famousResumeTemplate = path.resolve(
		`./src/components/SuccessfulResumes/Layouts/FamousResume.jsx`
	);

	const famousResumes = await graphql(
		`
			{
				allFamousResumesJson(limit: 1000) {
					edges {
						node {
							url
						}
					}
				}
			}
		`
	);

	famousResumes.data.allFamousResumesJson.edges.forEach(
		({ node: { url } }) => {
			createPage({
				path: "/successful-resumes/famous/" + url,
				component: famousResumeTemplate,
				context: { url }
			});
		}
	);
};
