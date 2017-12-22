+(function($) {
    $(document).on("click", '[data-track="event"]', function() {
        var data = $(this).data();

        window.dataLayer.push({
            event: "UAEvent",
            eventCategory: data.category,
            eventAction: data.action,
            eventLabel: data.label,
        });
    });

    $(document).on("click", ".slick-prev, .slick-next", function() {
        window.dataLayer.push({
            event: "UAEvent",
            eventCategory: "Homepage",
            eventAction: "Click Testimonials",
            eventLabel: $(this).attr("aria-label"),
        });
    });
})(jQuery);
