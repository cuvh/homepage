function isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints;
}

function preloadImages(images) {
    if (images.length > 0) {
        var img = new Image();
        img.onload = function() {
            preloadImages(images.slice(1));
        };
        img.src = images[0];
    }
}

$(function() {
    preloadImages(
        $.map($("div[data-preload]"), function(item) {
            return item.dataset && item.dataset.preload;
        })
    );

    // load lines background after all resources are downloaded
    $(".dating-resume-lines, .homepage-lines").css(
        "background-image",
        "url(/img/homepage/lines-bg.png)"
    );

    if (isTouchDevice()) {
        $("body").css("cursor", "pointer");
        $('[data-toggle="popover"]').popover({ trigger: "hover" });
    } else {
        $('[data-toggle="popover"]').popover({ trigger: "focus" });
    }

    $(document).on("show.bs.popover", function(event) {
        $('[data-toggle="popover"]')
            .not(event.target)
            .popover("hide");
    });

    $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" });

    $(".carousel").bcSwipe();

    $('[data-toggle="popover"]')
        .eq(4)
        .popover("show");

    $(window).load(function() {
        $('#landing-tips [data-toggle="popover"]')
            .eq(0)
            .popover("show");
    });

    // Tandem tags filter
    $(".tandem .tandem-all").click(function() {
        $(".active").removeClass("active");
        $(this).addClass("active");
        $(".tandem .abillity-tandem-1, .tandem .abillity-tandem-2").show();
    });

    $(".tandem .tandem-1").click(function() {
        $(".active").removeClass("active");
        $(this).addClass("active");
        $(".tandem .abillity-tandem-1").show();
        $(".tandem .abillity-tandem-2").hide();
    });

    $(".tandem .tandem-2").click(function() {
        $(".active").removeClass("active");
        $(this).addClass("active");
        $(".tandem .abillity-tandem-2").show();
        $(".tandem .abillity-tandem-1").hide();
    });

    $(".who-are-you .select-state, .who-are-you .carousel-indicators li").click(function() {
        setTimeout(function() {
            $('.state-view.active [data-toggle="popover"]')
                .first()
                .popover("show");
        }, 610);
    });

    if ($(window).width() > 768) {
        $(document).mousemove(function(e) {
            var x = e.clientX;
            var y = e.clientY;

            var pageWidth = $(window).width();

            $("#parallax-1")
                .css("left", -(pageWidth / 40 / 2) + x / 40)
                .css("top", y / 55);

            $("#parallax-2")
                .css("left", -(pageWidth / 15 / 2) + x / 15)
                .css("top", y / 35);
        });

        $(".testimonial-image").tilt({
            glare: true,
            maxGlare: 1,
            maxTilt: 35,
        });
    }

    $(".carousel-container").slick({
        dots: true,
    });

    if ($(".homepage-blog-latest").html()) {
        $.getJSON("https://blog.enhancv.com/feed/json").success(function(data) {
            var articleWrapper = $("<div />");

            data.items.forEach(function(item) {
                articleWrapper.append(
                    '<div class="inline-block m-right-5">' +
                        '<a target="_blank" href="' +
                        item.url +
                        '" class="text-inverse">“' +
                        item.title +
                        "”</a>" +
                        '<p class="text-muted">' +
                        item.comments_count +
                        " Comments</p>" +
                        "</div>"
                );
            });

            $(".articles-scrollable").html(articleWrapper.html());
        });
    }
});

window.sr = ScrollReveal();
sr.reveal(".animate-in", {
    scale: 1,
    easing: "ease-out",
    distance: "50px",
    viewFactor: $(window).width() > 768 ? 0.6 : 0.45,
});

sr.reveal(".spotlight-animate", {
    scale: 1,
    easing: "ease-out",
    distance: "50px",
    delay: 500,
    viewFactor: $(window).width() > 768 ? 0.6 : 0.45,
});

(function() {
    var isDesktop = $(window).width() > 768;

    for (var i = 0; i < 5; i++) {
        sr.reveal("#benefits-item-" + i, {
            scale: 1,
            delay: isDesktop ? i * 100 : 0,
            easing: "ease-out",
            distance: "50px",
            viewFactor: isDesktop ? 0.6 : 0.45,
        });
    }
})();
