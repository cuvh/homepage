(function () {
    'use strict';
    if ($('.progress-bullets').length > 0) {
        $(window).on('scroll', $.throttle(50, function() {
            $('.v-middle-image').each(function () {
                if ($(this).css('opacity') > 0) {
                    var step = $(this).data('anchor-target');
                    var $progressCircle = $('.progress-bullets .circle');
                    $progressCircle.css('background-color', '#B6B4B9');
                    $($progressCircle[0]).css('background-color', '#424242');

                    if (step == "#step-two") {
                        $progressCircle.css('background-color', '#B6B4B9');
                        $($progressCircle[1]).css('background-color', '#424242');
                    } else if (step == "#step-three") {
                        $progressCircle.css('background-color', '#B6B4B9');
                        $($progressCircle[2]).css('background-color', '#424242');
                    }
                }
            });
        }));
    }
}());
