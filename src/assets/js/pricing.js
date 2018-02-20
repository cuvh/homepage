(function() {
	function positionPricingScrollbar() {
		var overflowContainer = $(".overflow-wrapper-container");
		var overflow = $(".overflow-wrapper");

		if (overflow && overflowContainer) {
			var scrollLeft = (overflow.width() - overflowContainer.width()) / 2;
			overflowContainer.scrollLeft(scrollLeft);
		}
	}

	function switchBasic() {
		$(".switch-basic").addClass("focused");
		$(".switch-pro").removeClass("focused");
		$(".basic-tabs").fadeIn();
		$(".pro-tabs").fadeOut();
		$(".basic-locked").addClass("pricing-locked");
	}

	function switchPro() {
		$(".switch-pro").addClass("focused");
		$(".switch-basic").removeClass("focused");
		$(".basic-tabs").fadeOut();
		$(".pro-tabs").fadeIn();
		$(".basic-locked").removeClass("pricing-locked");
		positionPricingScrollbar();
	}

	$(document).on("click", ".switch-basic", switchBasic);
	$(document).on("click", ".switch-pro", switchPro);
	$(window).on("resize", positionPricingScrollbar);
	positionPricingScrollbar();

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
})();
