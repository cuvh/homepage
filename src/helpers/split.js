const Handlebars = require("handlebars");

module.exports = function(input, options) {
	return input
		.split(",")
		.map((tag, i) => {
			return options.fn(tag.trim());
		})
		.join("");
};
