const path = require("path");

exports.modifyWebpackConfig = ({ config, _stage }) => {
	config.merge({
		resolve: {
			root: path.resolve(__dirname, "src/")
		}
	});
	return config;
};

// const userData = require("./src/data/userResumes");
// const famousData = require("./src/data/famousResumes");

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
