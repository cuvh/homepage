+function ($) {
    $(document)
        .on('click', '[data-track="event"]', function () {
            var data = $(this).data();

            ga('send', 'event', {
                eventCategory: data.category,
                eventAction: data.action,
                eventLabel: data.label,
                transport: 'beacon',
            });
        })
}(jQuery);
