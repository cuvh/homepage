(function() {
  'use strict';

  var pathName = window.location.pathname;
  var page = pathName.substring(pathName.indexOf('/'));

  $('.menu ul a').each(function(){
    var $this = $(this);
    
    if ($this.attr('href') == page) {
      var name = $this.text();

      $this.text("– " + name);
    }
  });
}());
