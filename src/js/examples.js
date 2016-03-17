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
});
