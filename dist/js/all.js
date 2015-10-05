/*
  Data Loader

  On window.load event this function scans for DOM elements containing data-tlrk-plugin attrubute.
  Then it tries to launch a jquery plugin for each name found in the attribute value.
  The values can be space separated words (similar to the class attribute).

  Each plugin name is checked in the jquery function namespace ($.fn[]).

  The parameters for each plugin are fetched with the getPluginDataAttribs function below.
  See the function comments for more info.

  N.B: for camel-case plugin names the naming of the attributes should include the lowercase
  name of the plugin.
  For example, if we have plugin named camelCasePlugin, the data attributes containing
  the plugin options should look like data-camelcaseplugin-option.

  Shake well before use.
  */


;(function ( $, window, document, undefined ) {
  "use strict";

  /*
    getPluginDataAttribs

    Parses the attributes of the element, searching for "data-pluginname-*" pattern
    and generates an object with the options and their values.

    E.G.: running getPluginDataAttribs on this element:
    <div data-pluginname-option="something" data-pluginname-option-two="something else">
    will produce the following object:
    {option: "something", optionTwo: "something else"}

    The "data-pluginname" part is stripped and the remaining part is converted to camel case.
    I.E: option-two becomes optionTwo.

    Boolean attributes should be provided as true|false strings and are converted automatically.

    @ param {DOM Element} el
    @ param {string} pluginName
    @ return {object}

  */

  function getPluginDataAttribs (el, pluginName) {
    var attrs = el.attributes,
        al, i, name, ccName,
        ret = {},
        rx = /-([\da-z])/gi;

    function camelCase(text) {
      return text.replace(rx, function(a, l) {return l.toUpperCase();});
    }

    function parseValue(val) {

      function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      }

      if (val.toLowerCase() === "false") {
        return false;
      }
      if (val.toLowerCase() === "true") {
        return true;
      }
      if (isNumber(val)) {
        return parseInt(val, 10);
      }
      return val;
    }

    for (i = 0, al = attrs.length; i < al; i++) {
      name = attrs[i].name;
      if (name.indexOf("data-" + pluginName) > -1) {
        ccName = camelCase(attrs[i].name.replace("data-"+ pluginName +"-", ""));
        ret[ccName] = parseValue(attrs[i].value);
      }
    }

    return ret;
  }

  $(document).ready(function() {
    $("[data-ench-plugin]").each(function () {
      var $el = $(this),
          plugins = this.getAttribute("data-ench-plugin").split(" "),
          l = plugins.length,
          plugin, i;

      for (i = 0; i < l; i++) {
        plugin = plugins[i];
        if ($.isFunction($.fn[plugin])) {
          $el[plugin](getPluginDataAttribs(this, plugin.toLowerCase()));
        }
      }
    });
  });

})( jQuery, window, document );

;(function ( $, window, document, undefined ) {
  "use strict";

  var pluginName = "scrollment",
  defaults = {
    action: "is-fixed",
    animation: "",
    position: 4/5
  };

  function Plugin ( element, options ) {
    this.element = element;
    this.$element = $(element);
    this.options = $.extend( {}, defaults, options );
    this._name = pluginName;
    this.$window = $(window);
    this.elemPosition = -1;
    this.winHeight = 0;

    this.runWatcher();
  }

  Plugin.prototype = {

    runWatcher: function () {
      if(this.$window.width() < 561) {
        return;
      }
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
       return;
      }
      this.options.position = this.matchPosition();
      this.$element.addClass(this.options.animation);

      this.checkForElemPos();
      this.checkForWinHeight();
      this.checkForExec();
      var that = this;
      $(window).scroll(function () {
        that.checkForElemPos();
        that.checkForExec();
      });
      // console.log(this.options.position);

      this.onResizeWin();

    },

    checkForExec: function () {
      var scroll = $(window).scrollTop() + (this.winHeight * this.options.position);
      // console.log("sc: " + scroll);
      if(scroll > this.elemPosition && !this.$element.hasClass(this.options.action)) {
        // console.log(this.elemPosition + " relpos" + this.$element.offset().top + " sc" + scroll + " " + this.$element.attr("src") + " wh" + (this.winHeight * this.options.position));
        this.$element.addClass(this.options.action);
      }
    },

    checkForElemPos: function () {
      this.elemPosition = this.$element.offset().top;
      // console.log("ep: " + this.elemPosition);
    },

    checkForWinHeight: function () {
      this.winHeight = this.$window.height();
      // console.log("wh: " + this.winHeight);
    },

    //blackbox
    onResizeWin: function () {
      var that = this;
      var rtime = new Date(1, 1, 2000, 12,0,0);
      var timeout = false;
      var delta = 200;
      $(window).resize(function() {
          rtime = new Date();
          if (timeout === false) {
              timeout = true;
              setTimeout(resizeend, delta);
          }
      });

      function resizeend() {
          if (new Date() - rtime < delta) {
              setTimeout(resizeend, delta);
          } else {
              timeout = false;
              //resizing finished
              that.checkForElemPos();
              that.checkForExec();
          }
      }
    },

    matchPosition: function () {
      var numb = 0.8;
      switch (this.options.position) {
        case 0:
            numb = 0;
            break;
        case "1/5":
            numb = 0.2;
            break;
        case "2/5":
            numb = 0.4;
            break;
        case "3/5":
            numb = 0.6;
            break;
        case "4/5":
            numb = 0.8;
            break;
        case "5/5":
            numb = 1;
            break;
      }
      return numb;
    }

  };

  $.fn[ pluginName ] = function ( options ) {
    return this.each(function() {
      if ( !$.data( this, "plugin_" + pluginName ) ) {
        $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
      }
    });
  };

})( jQuery, window, document );
