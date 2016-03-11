$(document).ready(function () {
    var $sections = $(".section");
    var $menuHamb = $('.menu-hamb span');
    var $logo;
    var $svgEls;

    function getCoords(elem) {
        var box = elem.getBoundingClientRect();
        var body = document.body;
        var docEl = document.documentElement;
        var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
        var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
        var clientTop = docEl.clientTop || body.clientTop || 0;
        var clientLeft = docEl.clientLeft || body.clientLeft || 0;
        var top  = box.top +  scrollTop - clientTop;
        var left = box.left + scrollLeft - clientLeft;

        return { top: Math.round(top), left: Math.round(left) };
    }

    $('.ench-logo, .feature img, .becoming-part-icon').each(function () {
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        $.get(imgURL, function (data) {

            var $svg = jQuery(data).find('svg');

            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }

            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            $svg = $svg.removeAttr('xmlns:a');

            $img.replaceWith($svg);

        }, 'xml').then(function () {
            if (!$logo) {
                $logo = $('.ench-logo');
                if (!$svgEls) {
                    $svgEls = $logo.find('path, polygon');
                }
            }
        });
    });

    $(window).on('scroll', function () {
        if ($logo && $svgEls && $logo.length > 0 && $svgEls.length > 0) {
            var logoTop = getCoords($logo[0]).top;

            $sections.each(function () {
                var sectionTop = getCoords(this).top;
                var whiteSectionTop = sectionTop;
                var whiteSectionBottom = sectionTop + this.offsetHeight;

                if (logoTop >= whiteSectionTop && logoTop <= whiteSectionBottom) {
                    if ($(this).css('background-color') == 'rgb(255, 255, 255)') {
                        $svgEls.css("fill", "#07c1a3");
                        $menuHamb.addClass('green-hamburger');
                    } else {
                        $svgEls.css("fill", "white");
                        $menuHamb.removeClass('green-hamburger');
                    }
                }
            });
        }
    });
});
