$(document).ready(function () {
    function movePersonData(method) {
        var $titleBottom = $('.title-bottom');
        $titleBottom.each(function () {
            var $thisTitleBottom = $(this);
            var $titleBottomPersonData = $thisTitleBottom.find('.person-data');
            var personHtml = $titleBottomPersonData.html();
            var divPersonData = '<div class="-padding-m person-data">' + personHtml + '</div>';

            $titleBottomPersonData.remove();
            if (method == "append") {
                $thisTitleBottom.append(divPersonData);
            } else if (method == "prepend") {
                $thisTitleBottom.prepend(divPersonData);
            }
        });
    }

    $(window).on('load resize', function () {
        var $windowWidth = $(window).width();
        if ($windowWidth <= 768) {
            movePersonData('prepend');
        } else {
            movePersonData('append');
        }
    });

    function removeClassHide(lightbox, innerLightbox) {
        lightbox.removeClass('hide');
        lightbox.addClass('show');
        lightbox.css('opacity', '0.7');

        innerLightbox.removeClass('hide');
        innerLightbox.addClass('show');
        innerLightbox.css('opacity', '1');
    }

    function removeClassShow(lightbox, innerLightbox) {
        lightbox.removeClass('show');
        lightbox.addClass('hide');
        lightbox.css('opacity', '0');

        innerLightbox.removeClass('show');
        innerLightbox.addClass('hide');
        innerLightbox.css('opacity', '0');
    }

    function handleHide(lightbox, innerLightbox, $menuContainer) {
        $('a.lightbox-hide').css({'opacity': 0, 'width': 0, 'height': 0});
        $('body').css('overflow-y', 'auto');
        $('.inner-lightbox').css('height', '');
        removeClassShow(lightbox, innerLightbox);
        $('.fixed-header-elements').css('z-index', 25);
        $menuContainer.removeClass('hidden');
    }

    $('a.example-image').on('click', function () {
        var lightBoxId = $(this).attr('href');
        var innerLightbox = $(lightBoxId);
        var lightbox = $('.lightbox');
        $('body').css('overflow-y', 'hidden');
        $('.fixed-header-elements').css('cssText', 'z-index: 20 !important');
        $('a.lightbox-hide').css({'opacity': 1, 'width': 'auto', 'height': 'auto'});
        var $menuContainer = $('.examples-header').find('nav');
        $menuContainer.addClass('hidden');

        if (lightbox.hasClass('hide') && innerLightbox.hasClass('hide')) {
            removeClassHide(lightbox, innerLightbox);
            $(innerLightbox).on('click', function () {
                handleHide(lightbox, innerLightbox, $menuContainer);
            });
            $('a.lightbox-hide').on('click', function () {
                handleHide(lightbox, innerLightbox, $menuContainer);
            });
            $(lightbox).on('click', function () {
                removeClassShow(lightbox, innerLightbox);
            });
        } else {
            removeClassShow(lightbox, innerLightbox);
            $(document).on('click', function () {
                removeClassHide(lightbox, innerLightbox);
            });
            $(lightbox).on('click', function () {
                removeClassHide(lightbox, innerLightbox);
            });
        }
    });

    $(function () {
        $('.example a[href*=#]:not([href=#])').on('click', function (e) {
            e.preventDefault();
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    target.animatescroll({
                        easing: 'swing',
                        onScrollEnd: function () {
                            $('.inner-lightbox').css('height', '100vh');
                        }
                    });
                    return false;
                }
            }
        });
    });
});
