$(function() {
    $(document).on('click', '.js-open-menu, .js-close-menu, .is-menu-opened .menu-open', function(e) {
        e.preventDefault();
        $('html, body').scrollTop(0);
        $('body').toggleClass('is-menu-opened');
    });

    var $stepsContainer = $('.steps-container');
    var $stepsNextC = $stepsContainer.next('.section');
    var lastFsiPos = 0;

    $(window).scroll(function(event) {

        var scroll = $(window).scrollTop();

        if (scroll > $(window).height() - 60) {
            $('body').removeClass('is-menu-opened');
        }

        if (scroll > 100 && !$('.cta-container').hasClass('swap')) {
            $('.cta-container').addClass('swap');
        } else if (scroll < 101 && $('.cta-container').hasClass('swap')) {
            $('.cta-container').removeClass('swap');
        }
    });

    var s = skrollr.init({
        mobileCheck: function() {
            return false;
        },
        smoothScrollingDuration: 1,
        smoothScrolling: true,
        forceHeight: false
    });
    // $('.js-slick').slick({
    //     prevArrow: '.js-prev',
    //     nextArrow: '.js-next'
    // });

    $('.js-scroll-to').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });
});
