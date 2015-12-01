$(document).ready(function () {
      $('.member-wrapper').mouseover(function () {
        var i, length,
          $this = $(this),
          $childrenOfThis = $this.children();
          length = $childrenOfThis.length,
          $lastChildElement = $($childrenOfThis[length - 1]),
          $childrenOfLastChildElement = $lastChildElement.children();
        
        for (i = 0; i < length- 1; i += 1) {
          var $currentElement = $($childrenOfThis[i]);
          $currentElement
            .css('visibility', 'hidden')
            .css('opacity', '0');
        }
        
        $lastChildElement
          .css('visibility', 'visible')
          .css('opacity', '1');
        $childrenOfLastChildElement
          .css('visibility', 'visible')
          .css('opacity', '1');
      });
      
      $('.member-wrapper').mouseleave(function () {
        var i, length,
          $this = $(this),
          $childrenOfThis = $this.children();
          length = $childrenOfThis.length,
          $lastChildElement = $($childrenOfThis[length - 1]),
          $childrenOfLastChildElement = $lastChildElement.children();
        
        for (i = 0; i < length- 1; i += 1) {
          var $currentElement = $($childrenOfThis[i]);
          $currentElement
            .css('visibility', 'visible')
            .css('opacity', '1');
        }
        
        $lastChildElement
          .css('visibility', 'hidden')
          .css('opacity', '0');
        $childrenOfLastChildElement
          .css('visibility', 'hidden')
          .css('opacity', '0');
      });
    });