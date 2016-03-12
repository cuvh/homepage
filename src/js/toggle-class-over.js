/* exported ToggleClassOver */

/**
 * Toggle Class Over
 *
 * Will toggle a class of a fixed element when it goes over a target element
 * This is used to change color of an element while scrolling
 *
 * You can fine-tune the point where the class is toggled with data-offset-top and data-offset-bottom
 *
 * <nav
 *  data-toggle="toggle-class-over"
 *  data-class-name="navbar-color-primary"       | Which class name to toggle when over element
 *  data-offset-top="65"                         | Offset from the top of the element
 *  data-offset-bottom="30"                      | Offset from the bottom of the element
 *  data-target="[data-navbar-color-primary]">   | The target elements selector
 *     ...
 * </nav>
 *
 * <div data-navbar-color-primary>
 *     ...
 * </div>
 */
var ToggleClassOver = (function ($) {

    'use strict'

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME                = 'toggleClassOver'
    var DATA_KEY            = 'toggle-class-over'
    var EVENT_KEY           = '.' + DATA_KEY

    function intersectingBounds(offsetTop, offsetBottom, rect, bounds) {
        return $.grep(bounds, function (bound) {
            return (
                (rect.top + offsetTop) > bound.top
                && (rect.bottom - offsetBottom) < bound.bottom
            )
        })
    }

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    /**
     * @param  {jQuery} element
     * @param  {Object} options
     */
    function ToggleClassOver(element, options) {
        this.$element = $(element)
        this.rect = element.getBoundingClientRect()
        this.offsetTop = options.offsetTop || this.rect.height / 2
        this.offsetBottom = options.offsetBottom || this.rect.height / 2
        this.className = options.className
        this.$bounds = $(options.target);
    }

    ToggleClassOver.prototype.update = function () {
        var bounds = $.map(
            this.$bounds,
            function (elem) {
                return elem.getBoundingClientRect()
            }
        )
        var intersecting = intersectingBounds(
            this.offsetTop,
            this.offsetBottom,
            this.rect,
            bounds
        )

        this.$element.toggleClass(
            this.className,
            intersecting.length > 0
        );
    }

    // static

    ToggleClassOver._jQueryInterface = function (config, a1) {
        return this.each(function () {
            var $this   = $(this)
            var data    = $this.data(DATA_KEY)
            var _config = $.extend(
                true,
                {},
                $this.data(),
                typeof config === 'object' && config
            )

            if (!data) {
                data = new ToggleClassOver(this, _config)
                $this.data(DATA_KEY, data)
            }

            if (typeof config === 'string') {
                data[config](a1)
            }
        })
    }

    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(function () {
        var $elements = $('[data-toggle="toggle-class-over"]')[NAME]('update');;

        if ($elements.length) {
            $(window).on('scroll', function () {
                $elements[NAME]('update');
            })
        }
    });

    /**
    * ------------------------------------------------------------------------
    * jQuery
    * ------------------------------------------------------------------------
    */

    $.fn[NAME]                 = ToggleClassOver._jQueryInterface
    $.fn[NAME].ToggleClassOver = ToggleClassOver

    return ToggleClassOver

})(jQuery)
