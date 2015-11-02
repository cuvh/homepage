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

        var scrolFsi = $('.js-first-si').offset();
        if(scroll > scrolFsi.top && !$('.js-first-si').hasClass('is-fixedy')) {
            lastFsiPos = scrolFsi.top;
            $('.js-first-si').addClass('is-fixedy');
        } else if (scroll < lastFsiPos) {
            $('.js-first-si').removeClass('is-fixedy');
        }
    });

    var s = skrollr.init({
        mobileCheck: function() {
            return false;
        },
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
