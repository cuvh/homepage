$(function() {

    function whichTransitionEvent() {
        var el = document.createElement('fake'),
            transEndEventNames = {
                'WebkitTransition' : 'webkitTransitionEnd', // Saf 6, Android Browser
                'MozTransition' : 'transitionend', // only for FF < 15
                'transition' : 'transitionend' // IE10, Opera, Chrome, FF 15+, Saf 7+
            };

        for (var t in transEndEventNames) {
            if ( el.style[t] !== undefined ) {
                return transEndEventNames[t];
            }
        }
    }

    var transEndEventName = whichTransitionEvent();

    if ($('.wrap-examples').length == 0) {
        if (navigator.appVersion.indexOf('Edge') > -1 || navigator.userAgent.match(/Trident\/7\./)) { // if IE Edge disable smooth scrolling because it messes up scrolling animation
            $('body').on("mousewheel", function () {
                // remove default behavior
                event.preventDefault();

                //scroll without smoothing
                var wheelDelta = event.wheelDelta;
                var currentScrollPosition = window.pageYOffset;
                window.scrollTo(0, currentScrollPosition - wheelDelta);
            });
        }
    }

    var $window = $(window), $document = $(document);

    var disableScrollTouch = function () {
        $document.on("touchmove.nav", function (e) {
            e.preventDefault();
        });
    };

    var enableScrollTouch = function () {
        $document.off("touchmove.nav");
    };

    $document.on('click', '.js-open-menu, .js-close-menu, .is-menu-open .menu-open', function(e) {
        e.preventDefault();
        var $body = $('body');
        $body.removeClass('is-menu-opened');
        $(".menu-open").one(transEndEventName, function() {
            var $body = $('body');
            if ($body.hasClass('is-menu-open')) {
                $('.cta-container').addClass('hide');
                $body.addClass('is-menu-opened');
                disableScrollTouch();
            } else {
                $('.cta-container').removeClass('hide');
                enableScrollTouch();
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

        $target.animatescroll({
            easing: 'swing'
        });

        /*$('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
            window.location.hash = target;
        });*/
    });

    var $sectionHome = $('.section.-home');

    if ($sectionHome.length > 0) {
        $sectionHome.waitForImages({
            finished: function () {
                var $el = $(this);
                $el.on(transEndEventName, function (e) {
                    console.log(e.originalEvent.propertyName);
                    if (e.originalEvent.propertyName == 'opacity') {
                        $('.menu').addClass('loaded');
                        $('#steps-container').find('.progress-bullets').addClass('loaded');
                        $(this).unbind(transEndEventName, arguments.callee); //unbind *just this handler*
                    }
                });
                $el.css('opacity', 1);
            },
            waitForAll: true
        });
    } else {
        $window.on('load', function() {
            setTimeout(function() {
                $('.menu').addClass('loaded');
            }, 400);
        });
    }
});