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

exports.createPages = ({ boundActionCreators }) => {
	const { createPage } = boundActionCreators;

	const template = path.resolve(
		`./src/components/SuccessfulResumes/Layouts/SingleResume.jsx`
	);

	data.forEach(item => {
		createPage({
			path: "/successful-resumes/" + item.url,
			component: template,
			context: item
		});
	});
};
