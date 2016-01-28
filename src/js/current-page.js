(function() {
  'use strict';

  var pathName = window.location.pathname;
  var page = pathName.substring(pathName.lastIndexOf('/'));

  $('.menu ul a').each(function(){
    var $this = $(this);

    if (page == '/' && pathName != '/bizdevs/') {
      if ($this.attr('href') == '/index.html') {
        var name = $this.text();

        $this.text("– " + name);
      }
    }

    if ($this.attr('href') == page) {
      var name = $this.text();

      $this.text("– " + name);
    }
  });
}());