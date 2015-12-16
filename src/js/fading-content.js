$(document).ready(function () {
  $('body').css('opacity', 1);
});

$(window).on('beforeunload', function () {
  $('body').css('opacity', 0);
});
