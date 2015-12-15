$(document).ready(function () {
  $('body').css('opacity', 1);
  $('body a').click(function () {
    $('body').css('opacity', 0);
  });
  $('body a.menu-hamb').click(function () {
    $('body').css('opacity', 1);
  });
  $('body a.menu-close').click(function () {
    $('body').css('opacity', 1);
  });
});
