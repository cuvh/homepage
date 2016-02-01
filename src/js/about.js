$(document).ready(function () {
    var $window = $(window), $openPositions = $('.open-job-positions');

    if ($openPositions.length > 0) {
        $window.on('load resize', function () {
            var $windowWidth = $(this).width();
            if ($windowWidth <= 768) {
                $openPositions.html('Apply');
            } else {
                $openPositions.html('Apply at work@enhancv.com');
            }
        });
    }

    var $memberWrapper = $('.member-wrapper');

    if ($memberWrapper.length > 0) {
        $memberWrapper.on('mouseover', function () {
            var i, $this = $(this),
                $childrenOfThis = $this.children(),
                length = $childrenOfThis.length,
                $lastChildElement = $($childrenOfThis[length - 1]),
                $childrenOfLastChildElement = $lastChildElement.children();

            for (i = 0; i < length - 1; i += 1) {
                var $currentElement = $($childrenOfThis[i]);
                $currentElement
                    .css('visibility', 'hidden')
                    .css('opacity', '0');
            }

            $lastChildElement
                .css('visibility', 'visible')
                .css('opacity', '1');
            $childrenOfLastChildElement
                .css('visibility', 'visible')
                .css('opacity', '1');
        }).on('mouseleave', function () {
            var i, $this = $(this),
                $childrenOfThis = $this.children(),
                length = $childrenOfThis.length,
                $lastChildElement = $($childrenOfThis[length - 1]),
                $childrenOfLastChildElement = $lastChildElement.children();

            for (i = 0; i < length - 1; i += 1) {
                var $currentElement = $($childrenOfThis[i]);
                $currentElement
                    .css('visibility', 'visible')
                    .css('opacity', '1');
            }

            $lastChildElement
                .css('visibility', 'hidden')
                .css('opacity', '0');
            $childrenOfLastChildElement
                .css('visibility', 'hidden')
                .css('opacity', '0');
        });
    }
});