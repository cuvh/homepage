$(function() {

    if(navigator.appVersion.indexOf('Edge') > -1) { // if IE Edge disable smooth scrolling because it messes up scrolling animation
        $('body').on("mousewheel", function () {
            // remove default behavior
            event.preventDefault();

            //scroll without smoothing
            var wheelDelta = event.wheelDelta;
            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });
    }

    var $window = $(window), $document = $(document);

    var disableScroll = function () {
        $('body').css({overflow: 'hidden'});
        $document.on("touchmove.nav", function (e) {
            e.preventDefault();
        });
    };

    var enableScroll = function () {
        $('body').css({'overflow-y': 'auto', 'overflow-x': 'hidden !important'});
        $document.off("touchmove.nav");
    };

    $document.on('click', '.js-open-menu, .js-close-menu, .is-menu-opened .menu-open', function(e) {
        e.preventDefault();
        var $body = $('body');
        $body.removeClass('is-menu-opened');
        enableScroll();
        $(".menu-open").one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function() {
            var $body = $('body');
            if ($body.hasClass('is-menu-open')) {
                $body.addClass('is-menu-opened');
                disableScroll();
            }
        });
        $('html, body').scrollTop(0);
        $body.toggleClass('is-menu-open');
    });

    $window.on('scroll', function() {
        var $windowEl = $(this), scroll = $windowEl.scrollTop();

        if (scroll > $windowEl.height() - 60) {
            $('body').removeClass('is-menu-opened');
        }

        if (scroll > 100 && !$('.cta-container').hasClass('swap')) {
            $('.cta-container').addClass('swap');
        } else if (scroll < 101 && $('.cta-container').hasClass('swap')) {
            $('.cta-container').removeClass('swap');
        }
    }).on('load resize', function () {
        var $windowWidth = $(this).width();
        if ($windowWidth > 768 && $windowWidth < 941) {
            $('#home-main-banner').css('height', $('.section.-home').outerHeight(true));
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

    $window.on('load', function() {
        $(this).trigger('resize');
        s.refresh();
    });

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

    $('#home-main-banner').waitForImages({
        finished: function (){
            $(this).css('opacity', 1);
        },
        waitForAll:true
    });
});