function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

$(function () {
    if (isTouchDevice()) {
        $('body').css('cursor', 'pointer');
        $('[data-toggle="popover"]').popover({ trigger: 'hover' });
    } else {
        $('[data-toggle="popover"]').popover({ trigger: 'focus' });
    }

    $(document).on('show.bs.popover', function (event) {
        $('[data-toggle="popover"]').not(event.target).popover('hide');
    });

    $('[data-toggle="tooltip"]').tooltip({ trigger: 'hover' });

    $('.carousel').bcSwipe();

    $('[data-toggle="popover"]').eq(4).popover('show');

    $(window).load(function() {
        $('#landing-tips [data-toggle="popover"]').eq(0).popover('show');
    });
})
