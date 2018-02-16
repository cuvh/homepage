(function() {
	function positionPricingScrollbar() {
		var overflowContainer = $(".overflow-wrapper-container");
		var overflow = $(".overflow-wrapper");

		if (overflow && overflowContainer) {
			var scrollLeft = (overflow.width() - overflowContainer.width()) / 2;
			overflowContainer.scrollLeft(scrollLeft);
		}
	}

	$(window).on("resize", positionPricingScrollbar);
	positionPricingScrollbar();

	$(document).on("click", ".switch-basic", function() {
		$(".switch-basic").addClass("focused");
		$(".switch-pro").removeClass("focused");
		$(".basic-tabs").fadeIn();
		$(".pro-tabs").fadeOut();
	});

	$(document).on("click", ".switch-pro", function() {
		$(".switch-pro").addClass("focused");
		$(".switch-basic").removeClass("focused");
		$(".basic-tabs").fadeOut();
		$(".pro-tabs").fadeIn();
		positionPricingScrollbar();
	});
})();
