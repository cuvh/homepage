$(document).ready(function() {
    function movePersonData(method) {
        var $titleBottom = $('.title-bottom'),
            $titleBottomPersonData = $('.title-bottom .person-data'),
            personHtml = $titleBottomPersonData.html(),
            divPersonData = '<div class="-padding-m person-data">' + personHtml + '</div>';

        $titleBottomPersonData.remove();
        if (method == "append") {
            $titleBottom.append(divPersonData);
        } else if (method == "prepend") {
            $titleBottom.prepend(divPersonData);
        }
    }

    $(window).resize(function() {
        var $windowWidth = $(window).width();
        if ($windowWidth <= 768) {
            movePersonData('prepend');
        } else {
            movePersonData('append');
        }
    });

    var lightbox = $('.lightbox'),
        innerLightbox = $('.inner-lightbox');

    function removeClassHide() {
        lightbox.removeClass('hide');
        lightbox.addClass('show');
        lightbox.css('opacity', '0.7');

        innerLightbox.removeClass('hide');
        innerLightbox.addClass('show');
        innerLightbox.css('opacity', '1');
    }

    function removeClassShow() {
        lightbox.removeClass('show');
        lightbox.addClass('hide');
        lightbox.css('opacity', '0');

        innerLightbox.removeClass('show');
        innerLightbox.addClass('hide');
        innerLightbox.css('opacity', '0');
    }

    $('a.example-image').click(function() {
        if (lightbox.hasClass('hide') && innerLightbox.hasClass('hide')) {
            removeClassHide();
            $(innerLightbox).click(function() {
                removeClassShow();
            });

            $(lightbox).click(function() {
                removeClassShow();
            });
        } else {
            removeClassShow();
            $(document).click(function() {
                removeClassHide();
            });

            $(lightbox).click(function() {
                removeClassHide();
            });
        }
    });

    $(function() {
        $('.example a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
});