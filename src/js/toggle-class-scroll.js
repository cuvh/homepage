/* exported ToggleClassScroll */

/**
 * Toggle Class Scroll
 *
 * Will toggle a class if the page is scrolled
 *
 * <nav
 *  data-toggle="toggle-class-scroll"
 *  data-class-name="navbar-color-primary"       | Which class name to toggle when over element
 *  data-offset="65">                            | Offset from the top of the element
 *     ...
 * </nav>
 */
var ToggleClassScroll = (function ($) {

    'use strict'

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME                = 'toggleClassScroll'
    var DATA_KEY            = 'toggle-class-scroll'
    var EVENT_KEY           = '.' + DATA_KEY

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    /**
     * @param  {jQuery} element
     * @param  {Object} options
     */
    function ToggleClassScroll(element, options) {
        this.$element = $(element)
        this.className = options.className
        this.offset = options.offset || 0
    }

    ToggleClassScroll.prototype.update = function () {
        this.$element.toggleClass(
            this.className,
            $(window).scrollTop() > this.offset
        );
    }

    // static

    ToggleClassScroll._jQueryInterface = function (config, a1) {
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
                data = new ToggleClassScroll(this, _config)
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
        var $elements = $('[data-toggle="toggle-class-scroll"]');

        if ($elements.length) {
            $(window).on('scroll', function (event) {
                $elements.each(function () {
                    $(this)[NAME]('update');
                })
            })
        }
    });

    /**
    * ------------------------------------------------------------------------
    * jQuery
    * ------------------------------------------------------------------------
    */

    $.fn[NAME]                   = ToggleClassScroll._jQueryInterface
    $.fn[NAME].ToggleClassScroll = ToggleClassScroll

    return ToggleClassScroll

})(jQuery)
