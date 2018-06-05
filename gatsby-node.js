const path = require("path");

exports.modifyWebpackConfig = ({ config, _stage }) => {
	config.merge({
		resolve: {
			root: path.resolve(__dirname, "src/")
		}
	});
	return config;
};
