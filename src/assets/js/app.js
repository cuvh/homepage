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

    $('.carousel').bcSwipe();
})
