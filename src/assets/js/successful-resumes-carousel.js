function byChunks(items, chunkSize) {
    const pieces = items.length / chunkSize;

    var wrapper = jQuery("<div/>");
    var dots = jQuery("<div />");
    var item;

    for (var i = 0; i < pieces; i++) {
        item = $("<div/>", {
            class: "successful-resumes-carousel-align",
        });

        for (var j = 0; j < chunkSize; j++) {
            item.append($(items[i * chunkSize + j]));
        }

        wrapper.append(
            $("<div/>", {
                class: "item item-bg m-top-5 " + (i === 0 ? "active" : ""),
            }).append(item)
        );

        dots.append(
            $("<li />", {
                "data-target": "#resume",
                class: i === 0 ? "active" : "",
                "data-slide-to": i,
            })
        );
    }

    $("#resume-dots").html(dots.html());
    $(".successful-resumes-carousel-items").html(wrapper.html());

    if (pieces > 1) {
        $(".successful-resumes-resumes-list .carousel-control").show();
    } else {
        $(".successful-resumes-resumes-list .carousel-control").hide();
    }
}

function onResize(items) {
    var CHUNK_SIZE = 1;

    var width = document.body.scrollWidth;

    if (width >= 1200) {
        CHUNK_SIZE = 4;
    } else if (width >= 992) {
        CHUNK_SIZE = 3;
    } else if (width >= 768) {
        CHUNK_SIZE = 2;
    }

    if ($(".slick-slider.successful-resumes-carousel-items").length) {
        $("#resume").slick("unslick");
    }
    //
    byChunks(items, CHUNK_SIZE, "hidden-xs hidden-md hidden-lg");

    $("#resume").slick({
        dots: true,
        infinite: true,
    });
}

(function() {
    var items = jQuery(".resumes-hidden-wrapper .resume-container");

    $(window).resize(function() {
        onResize(items);
    });
    onResize(items);

    $(".carousel-famous-big").slick({
        dots: true,
    });
})();
