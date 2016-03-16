$(function () {
    $(window).on('load', function() {

        var $stepsContainer = $('#stepsContainer');

        if ($stepsContainer.length > 0) {

            var sh = parseInt($stepsContainer.outerHeight(true));
            var $stepImage = $('.v-base.step-image');
            var wh = $(this).height();
            var ih = parseInt($stepImage.outerHeight(true));
            var offsetTop = $stepImage.find('.v-middle-image:first').position().top;

            var controller = new ScrollMagic.Controller();
            window.scene = new ScrollMagic.Scene({
                duration: (sh - ih),
                offset: 0,
                triggerHook: "onLeave",
                triggerElement: '#stepsContainer'
            })
            .setPin(".v-base.step-image")
            .setClassToggle(".v-base.step-image", "centered")
            .addTo(controller);

            window.sceneFadeOut1 = new ScrollMagic.Scene({
                duration: (wh / 2 + offsetTop),
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

            window.sceneFadeOut2 = new ScrollMagic.Scene({
                duration: (wh / 2 + offsetTop),
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

            window.sceneFadeIn1 = new ScrollMagic.Scene({
                duration: (wh / 2 + offsetTop),
                offset: 0,
                triggerHook: "onLeave",
                triggerElement: '#step-one'
            })
            .setTween(tweenFadeIn1)
            .addTo(controller);

            window.sceneFadeIn2 = new ScrollMagic.Scene({
                duration: (wh / 2 + offsetTop),
                offset: 0,
                triggerHook: "onLeave",
                triggerElement: '#step-two'
            })
            .setTween(TweenMax.to('#step-three', 0.4, {opacity: 1}))
            .addTo(controller);

        }
    }).on('resize', function() {
        var $stepsContainer = $('#stepsContainer');

        if ($stepsContainer.length > 0) {

            var sh = parseInt($stepsContainer.outerHeight(true));
            var $stepImage = $('.v-base.step-image');
            var wh = $(this).height();
            var ih = parseInt($stepImage.outerHeight(true));
            var offsetTop = $stepImage.find('.v-middle-image:first').position().top;
            var duration = (wh / 2 + offsetTop);

            window.sceneFadeOut1.duration(duration);
            window.sceneFadeOut1.update(true);
            window.scene.duration((sh - ih));
            window.scene.update(true);
            window.sceneFadeOut2.duration(duration);
            window.sceneFadeOut2.update(true);
            window.sceneFadeIn1.duration(duration);
            window.sceneFadeIn1.update(true);
            window.sceneFadeIn2.duration(duration);
            window.sceneFadeIn2.update(true);
        }
    });
});
