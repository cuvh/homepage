$(function() {

    var scrollrPages = ["", "index.html", "join-the-force.html", "growth-enhancer.html"];

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

    var browser = $.ua.browser.name, browserVersion = parseInt($.ua.browser.version.split('.')[0], 10);

    if ($('.wrap-examples').length == 0) {
        if (browser == 'Edge') {
            $('body').on("mousewheel", function () {
                // remove default behavior
                event.preventDefault();

                if ($(this).css('overflow') != 'hidden') {
                    //scroll without smoothing
                    var wheelDelta = event.wheelDelta;
                    var currentScrollPosition = window.pageYOffset;
                    window.scrollTo(0, currentScrollPosition - wheelDelta);
                }
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

    $document.on('click', '.js-open-menu, .js-close-menu, .modal-backdrop', function(e) {
        e.preventDefault();
        var $body = $('body');
        $body.removeClass('is-menu-opened');
        $(".menu-open:first").one(transEndEventName, function() {
            var $bodyEl = $('body');
            if ($bodyEl.hasClass('is-menu-open')) {
                $bodyEl.addClass('is-menu-opened');
            }
        });

        $body.toggleClass('is-menu-open');
        if ($body.hasClass('is-menu-open')) {
            $('.navbar-toggle,.progress-bullets').addClass('hide');
            disableScrollTouch();
        } else {
            $('.navbar-toggle,.progress-bullets').removeClass('hide');
            enableScrollTouch();
        }
    });

    if ($.inArray(location.pathname.substring(1), scrollrPages) > -1) {
        var controller = new ScrollMagic.Controller();
        var sceneArrowDown = new ScrollMagic.Scene({
            duration: $window.height(),
            offset: 0,
            triggerHook: "onEnter",
            triggerElement: '.go-to-section.js-scroll-to'
        })
        .setClassToggle(".go-to-section.js-scroll-to", "active")
        .addTo(controller);
    } else {
        $window.on('load', function () {
            $(this).trigger('resize');
        });
    }

    $('.js-scroll-to').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $target.animatescroll({
            easing: 'swing'
        });
    });

    $('.apply-btn').on('click', function() {
        var $target = $('.apply-form');

        $target.animatescroll({
            easing: 'swing'
        });
    });

    var $sectionHome = $('.section.-home');

    if ($sectionHome.length > 0) {
        $sectionHome.waitForImages({
            finished: function () {
                var $el = $(this);
                $el.on(transEndEventName, function (e) {
                    if (e.originalEvent.propertyName == 'opacity') {
                        $('.menu').addClass('loaded');
                        $('#stepsContainer').find('.progress-bullets').addClass('loaded');
                        $(this).unbind(transEndEventName, arguments.callee); //unbind *just this handler*
                    }
                });
                $('#homeLoader').remove();
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
