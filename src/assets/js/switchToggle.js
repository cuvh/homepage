+function ($) {
    'use strict';

    // SWITCH TOGGLE CLASS DEFINITION
    // =========================

    var SwitchToggle = function (element, options) {
        this.$element    = $(element)
        this.$items      = this.$element.parent().children().not(this.$element)
    }

    SwitchToggle.TRANSITION_DURATION = 150

    SwitchToggle.DEFAULTS = {
    }

    SwitchToggle.prototype.show = function (e) {
        var that = this
        if ($.support.transition && this.$element.hasClass('fade')) {
            this.$items.removeClass('in');
            that.$element
                .one('bsTransitionEnd', function () {
                    that.$items.addClass('hidden')
                    that.$element.removeClass('hidden')
                    setTimeout(function () {
                        that.$element.addClass('in')
                    }, 50)
                })
                .emulateTransitionEnd(SwitchToggle.TRANSITION_DURATION)
        } else {
            this.$items.addClass('hidden')
            this.$element.removeClass('hidden')
        }

        return this
    }

    // CAROUSEL PLUGIN DEFINITION
    // ==========================

    function Plugin(option) {
        return this.each(function () {
            var $this   = $(this)
            var data    = $this.data('ecv.switchToggle')
            var options = $.extend({}, SwitchToggle.DEFAULTS, $this.data(), typeof option == 'object' && option)
            var action  = typeof option == 'string' ? option : options.show

            if (!data) $this.data('ecv.switchToggle', (data = new SwitchToggle(this, options)))
            if (action) data[action]()
        })
    }

    var old = $.fn.switchToggle

    $.fn.switchToggle             = Plugin
    $.fn.switchToggle.Constructor = SwitchToggle


    // SWITCH TOGGLE NO CONFLICT
    // =========================

    $.fn.switchToggle.noConflict = function () {
        $.fn.switchToggle = old
        return this
    }

    // CAROUSEL DATA-API
    // =================

    $(document)
        .on('click.ecv.switchToggle.data-api', '[data-toggle="switch-toggle"]', function (event) {
            var $this = $(event.target);

            $($($this.attr('data-target') || $this.attr('href'))).switchToggle('show');
        })
        .on('slide.bs.carousel', function (event) {
            var carousel = $(event.target).data('bs.carousel')

            if (carousel.options.switchToggle) {
                var container = $(carousel.options.switchToggle)
                var switchToggleIndex = carousel.getItemIndex($(event.relatedTarget))
                var $switchToggle = $(container).children().eq(switchToggleIndex)

                $switchToggle.switchToggle('show')
            }
        })

}(jQuery);
