const Handlebars = require("handlebars");

module.exports = function(input, options) {
	return encodeURIComponent(input);
};
