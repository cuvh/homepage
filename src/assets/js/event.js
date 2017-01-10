+function ($) {
    $(document)
        .on('click', '[data-track="event"]', function () {
            var data = $(this).data();

            window.dataLayer.push({
                event: 'UAEvent',
                eventCategory: data.category,
                eventAction: data.action,
                eventLabel: data.label,
            });
        })
}(jQuery);
