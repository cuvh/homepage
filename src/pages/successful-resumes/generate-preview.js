const fs = require("fs");

const files = fs.readdirSync("./");

files.forEach(file => {
	if (file.indexOf("html") === -1 || file.indexOf("daniel") !== -1) {
		return;
	}

	const data = fs.readFileSync("./" + file).toString();

	const block = data
		.split("{{>successful-resume-template")[1]
		.split("}}")[0]
		.split("\n");

	const parameters = ["name", "tags", "frontImage", "companyLogo"];

	console.log('<div class="item item-bg">');
	console.log("{{>resume-container");
	console.log('    link="' + file + '"');

	block.forEach(line => {
		parameters.forEach(param => {
			if (line.indexOf(param + "=") !== -1) {
				console.log(line);
			}
		});
	});

	console.log("}}");
	console.log("</div>");
});
