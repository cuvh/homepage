var pageShown = function () {
    $('body').css('opacity', 1);
};

var pageHidde = function () {
    $('.menu').removeClass('loaded');
    $('body').css('opacity', 0);
};

window.addEventListener("pageshow", pageShown, false);
window.addEventListener("pagehide", pageHidde, false);

$(document).ready(function () {
    pageShown();
});

$(window).on('beforeunload', function () {
    pageHidde();
});
