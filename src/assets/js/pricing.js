(function() {
	// Pricing V2
	$(".v2-plan-picker").click(function() {
		var plan = $(this).data("plan");
		$(".v2-plan-picker .radio-box-pricing").removeClass("active");

		$(".v2-plan-picker[data-plan='" + plan + "'] .radio-box-pricing").addClass("active");

		$(".v2-price").fadeOut(300);
		$(".v2-price[data-plan='" + plan + "']").fadeIn(300);

		if (plan === "monthly") {
			$(".plan-green-notification").slideDown(300);
		} else {
			$(".plan-green-notification").slideUp(300);
		}
	});
	//

	var SCROLL_TIME = 300;

	var container = $(".overflow-wrapper-container");
	var content = $(".overflow-wrapper");

	function positionPricingScrollbar() {
		if (content && container) {
			var scrollLeft = (content.width() - container.width()) / 2;
			container.scrollLeft(scrollLeft);
		}
	}

	var hasAnimatedBenefits = false;

	function switchBasic() {
		if (hasAnimatedBenefits) {
			$(".basic-benefits .animate-in").attr("style", "");
		}

		$(".switch-basic").addClass("focused");
		$(".switch-pro").removeClass("focused");
		$(".basic-tabs").show();
		$(".pro-tabs").hide();
		$(".basic-benefits, .basic-heading").show();
		$(".pro-benefits, .scroll-dot-container, .pro-heading").hide();
		hasAnimatedBenefits = true;
	}

	function switchPro() {
		if (hasAnimatedBenefits) {
			$(".pro-benefits .animate-in").attr("style", "");
		}

		$(".switch-pro").addClass("focused");
		$(".switch-basic").removeClass("focused");
		$(".basic-tabs").hide();
		$(".pro-tabs").show();
		$(".basic-benefits, .basic-heading").hide();
		$(".pro-benefits, .scroll-dot-container, .pro-heading").show();
		positionPricingScrollbar();
		hasAnimatedBenefits = true;
	}

	$(document).on("click", "[href='#basic']", switchBasic);
	$(document).on("click", "[href='#pro']", switchPro);
	$(document).on("click", ".btn-basic-to-pro", function() {
		$("html, body").animate({ scrollTop: 400 }, "400");
	});
	$(window).on("resize", positionPricingScrollbar);
	positionPricingScrollbar();

	var scrolled = false;
	function detectScroll() {
		if (scrolled) {
			return;
		}

		window.dataLayer.push({
			event: "UAEvent",
			eventCategory: "Pricing V1",
			eventAction: "Scroll plans",
		});
		scrolled = true;
	}

	container.on("scroll", function() {
		var overflowContainer = container.width();
		var overflow = content.width();

		var currentScroll = container.scrollLeft();

		var breakPoint = (overflow - overflowContainer) / 3;

		$(".scroll-dot").removeClass("active");

		if (currentScroll < breakPoint) {
			$("#dot1").addClass("active");
			detectScroll();
		} else if (currentScroll > breakPoint && breakPoint * 2 > currentScroll) {
			$("#dot2").addClass("active");
		} else {
			$("#dot3").addClass("active");
			detectScroll();
		}
	});

	$(".scroll-dot").click(function() {
		var index = $(this).data("id");

		if (index === 0) {
			container.animate({ scrollLeft: 0 }, SCROLL_TIME);
		}

		if (index === 1) {
			container.animate(
				{ scrollLeft: (content.width() - container.width()) / 2 },
				SCROLL_TIME
			);
		}

		if (index === 2) {
			container.animate({ scrollLeft: content.width() - container.width() }, SCROLL_TIME);
		}
	});

	function openTab() {
		if (window.location.hash) {
			if (window.location.hash.indexOf("basic") !== -1) {
				switchBasic();
				return;
			}

			if (window.location.hash.indexOf("pro") !== -1) {
				switchPro();
				return;
			}
		}
	}

	window.addEventListener("hashchange", openTab, false);
	openTab();
})();
