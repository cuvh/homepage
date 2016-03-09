$(function () {
    // get window height
    $(window).on('load', function() {
        var sh = parseInt($('#stepsContainer').outerHeight(true));
        var ih = parseInt($('.v-base.step-image').outerHeight(true));

        var controller = new ScrollMagic.Controller();
        var scene = new ScrollMagic.Scene({
            duration: (sh - ih),
            offset: 50,
            triggerHook: "onLeave",
            triggerElement: '#stepsContainer'
        })
        // .setTween(TweenMax.to('#1 .animated', 0.5, {opacity: 0}))
            .addIndicators()
            .setPin(".v-base.step-image")
            .addTo(controller);
    });
});
