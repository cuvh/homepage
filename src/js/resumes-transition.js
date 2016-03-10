$(function () {
    $(window).on('load', function() {
        var sh = parseInt($('#stepsContainer').outerHeight(true));
        var wh = $(this).height();
        var ih = parseInt($('.v-base.step-image').outerHeight(true));

        var offsetTop = $(".v-base.step-image").find('.v-middle-image:first').position().top;

        var controller = new ScrollMagic.Controller();
        var scene = new ScrollMagic.Scene({
            duration: (sh - ih),
            offset: 50,
            triggerHook: "onLeave",
            triggerElement: '#stepsContainer'
        })
        .addIndicators()
        .setPin(".v-base.step-image")
        .addTo(controller);

        var sceneFadeOut1 = new ScrollMagic.Scene({
            duration: (wh/2 + offsetTop),
            offset: 0,
            triggerHook: "onCenter",
            triggerElement: '#step-one'
        })
        .setTween(TweenMax.to('#step-one', 0.4, {opacity: 0}))
        .addTo(controller);

        var tweenFadeOut2 = new TimelineMax();

        tweenFadeOut2.add([
            TweenMax.to('#step-two', 0.4, {opacity: 0}),
            TweenMax.to('#cv-image-3', 0.4, {opacity: 0, delay: 0.2}),
            TweenMax.to('#cv-image-4', 0.4, {opacity: 1, delay: 0.4})
        ]);

        var sceneFadeOut2 = new ScrollMagic.Scene({
            duration: (wh/2 + offsetTop),
            offset: 150,
            triggerHook: "onCenter",
            triggerElement: '#step-two'
        })
        .setTween(tweenFadeOut2)
        .addTo(controller);

        var tweenFadeIn1 = new TimelineMax();

        tweenFadeIn1.add([
            TweenMax.to('#step-two', 0.4, {opacity: 1}),
            TweenMax.to('#cv-image-2', 0.4, {opacity: 1}),
            TweenMax.to('#cv-image-3', 1, {opacity: 1, delay: 0.2})
        ]);

        var sceneFadeIn1 = new ScrollMagic.Scene({
            duration: (wh/2 + offsetTop),
            offset: 0,
            triggerHook: "onLeave",
            triggerElement: '#step-one'
        })
        .setTween(tweenFadeIn1)
        .addTo(controller);

        var sceneFadeIn2 = new ScrollMagic.Scene({
            duration: (wh/2 + offsetTop),
            offset: 0,
            triggerHook: "onLeave",
            triggerElement: '#step-two'
        })
        .setTween(TweenMax.to('#step-three', 0.4, {opacity: 1}))
        .addTo(controller);
    });
});
