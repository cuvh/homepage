$(function() {
    var isClicked = false;
    $('.panel-heading a').on('click', function() {
        var $parentOfThis = $(this).parent();
        var $verticalElement = $parentOfThis.find('.vertical');
        if (isClicked) {
            $('.vertical').removeClass('normal');
            isClicked = false;
        } else {
            $verticalElement.addClass('normal');
            isClicked = true;
        }
    });
});
