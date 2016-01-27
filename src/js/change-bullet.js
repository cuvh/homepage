(function () {
    'use strict';
    $(window).on('scroll', function () {
        $('.v-middle-image').each(function () {
            if ($(this).css('opacity') > 0) {
                var step = $(this).data('anchor-target');
                $('.progress-bullets .circle').css('background-color', '#B6B4B9');
                $($('.progress-bullets .circle')[0]).css('background-color', '#424242');

                if (step == "#step-two") {
                    $('.progress-bullets .circle').css('background-color', '#B6B4B9');
                    $($('.progress-bullets .circle')[1]).css('background-color', '#424242');
                } else if (step == "#step-three") {
                    $('.progress-bullets .circle').css('background-color', '#B6B4B9');
                    $($('.progress-bullets .circle')[2]).css('background-color', '#424242');
                }
            }
        });
    });
}());
