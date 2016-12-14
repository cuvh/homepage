function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

$(function () {
    if (isTouchDevice()) {
        $('body').css('cursor', 'pointer');
        $('[data-toggle="popover"]').popover({ trigger: 'hover' });
    } else {
        $('[data-toggle="popover"]')
            .popover({ trigger: 'focus' })
            .first().popover('show');
    }

    $(document).on('show.bs.popover', function (event) {
        $('[data-toggle="popover"]').not(event.target).popover('hide');
    });

    $('[data-toggle="tooltip"]').tooltip({ trigger: 'hover' });

    $('.carousel').bcSwipe();
})
