/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "whatwg-fetch";
import sbjs from "sourcebuster/src/js/sourcebuster";
import scrollReveal from "scrollreveal/src/scrollreveal";
import browserWidth from "./src/utils/browserWidth";

import ReactGA from "react-ga";
ReactGA.initialize("UA-52969150-1");

exports.onInitialClientRender = () => {
	sbjs.init();

	const sr = scrollReveal();

	sr.reveal(".animate-in", {
		scale: 1,
		easing: "ease-out",
		distance: "50px",
		viewFactor: browserWidth > 768 ? 0.6 : 0.45
	});

	sr.reveal(".spotlight-animate", {
		scale: 1,
		easing: "ease-out",
		distance: "50px",
		delay: 500,
		viewFactor: browserWidth() > 768 ? 0.6 : 0.45
	});

	var isDesktop = browserWidth() > 768;

	for (var i = 0; i < 4; i++) {
		sr.reveal("#benefits-item-" + i, {
			scale: 1,
			delay: isDesktop ? i * 100 : 0,
			easing: "ease-out",
			distance: "50px",
			viewFactor: isDesktop ? 0.6 : 0.45
		});
	}
};

exports.onRouteUpdate = ({ location }) => {
	ReactGA.pageview(location.pathname);
};
