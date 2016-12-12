+function ($) {
    var $navbar = $('.navbar');
    var sticked = false;

    $navbar.Stickyfill();

    $(window).scroll(function () {
        if ($(document).scrollTop() > 10) {
            if (!sticked) {
                sticked = true;
                $navbar.addClass("navbar-stick");
            }
        } else {
            if (sticked) {
                sticked = false;
                $navbar.removeClass("navbar-stick");
            }
        }
    });

    $(document)
        .on('click', '[data-toggle="navbar"]', function () {
            $('body').toggleClass('navbar-mobile-active');
        })
}(jQuery);
