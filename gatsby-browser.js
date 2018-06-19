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
        viewFactor: browserWidth > 768 ? 0.6 : 0.45,
    });

    sr.reveal(".spotlight-animate", {
        scale: 1,
        easing: "ease-out",
        distance: "50px",
        delay: 500,
        viewFactor: browserWidth() > 768 ? 0.6 : 0.45,
    });

    var isDesktop = browserWidth() > 768;

    for (var i = 0; i < 4; i++) {
        sr.reveal("#benefits-item-" + i, {
            scale: 1,
            delay: isDesktop ? i * 100 : 0,
            easing: "ease-out",
            distance: "50px",
            viewFactor: isDesktop ? 0.6 : 0.45,
        });
    }

    (function(h, o, t, j, a, r) {
        h.hj =
            h.hj ||
            function() {
                (h.hj.q = h.hj.q || []).push(arguments);
            };
        h._hjSettings = { hjid: 582574, hjsv: 5 };
        a = o.getElementsByTagName("head")[0];
        r = o.createElement("script");
        r.async = 1;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        a.appendChild(r);
    })(window, document, "//static.hotjar.com/c/hotjar-", ".js?sv=");

    (function() {
        var prevScrollpos = window.pageYOffset;
        const NAV_HEIGHT = 62;
        var famousNavInitialOffset =
            document.querySelector(".famous-resume--navbar").offsetTop - NAV_HEIGHT;

        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            var topNav = document.querySelector(".navbar-static-top");
            var famousNav = document.querySelector(".famous-resume--navbar");

            var distanceScrolled = prevScrollpos - currentScrollPos;

            if (currentScrollPos > famousNavInitialOffset) {
                if (prevScrollpos > currentScrollPos) {
                    topNav.style.top =
                        Math.min(parseInt(topNav.style.top) + distanceScrolled, 0) + "px";
                    famousNav.style.top = NAV_HEIGHT + parseInt(topNav.style.top) + "px";
                } else {
                    topNav.style.top = famousNav.getBoundingClientRect().top - NAV_HEIGHT + "px";
                    famousNav.style.top =
                        Math.max(parseInt(famousNav.style.top) + distanceScrolled, 0) + "px";
                }
            }
            prevScrollpos = currentScrollPos;
        };
    })();
};

exports.onRouteUpdate = ({ location }) => {
    ReactGA.pageview(location.pathname);
};
