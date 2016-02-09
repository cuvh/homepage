history.navigationMode = 'compatible';

$(document).ready(function () {
  $('body').css('opacity', 1);
});

$(window).on('beforeunload', function () {
  $('.menu').removeClass('loaded');
  $('body').css('opacity', 0);
});