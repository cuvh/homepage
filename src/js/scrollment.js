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
