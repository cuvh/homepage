$(document).ready(function(){
    $('.ench-logo').each(function(){
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        $.get(imgURL, function(data) {
            var $svg = jQuery(data).find('svg');

            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }

            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            $svg = $svg.removeAttr('xmlns:a');

            $img.replaceWith($svg);

        }, 'xml').then(function(){
          $(window).scroll(function () {
            var logo = $('.ench-logo');
            var logoTop = logo.position().top;
            var logoBottom = logoTop + logo.outerHeight();

            $(".section").each(function(){
              var whiteSection = $(this);
              var whiteSectionTop = whiteSection.position().top - $(window).scrollTop() + 15;
              var whiteSectionBottom = whiteSection.position().top - $(window).scrollTop() + whiteSection.height();

              if (logoTop >= whiteSectionTop && logoTop <= whiteSectionBottom) {
                 if(whiteSection.css('background-color') == 'rgb(255, 255, 255)'){
                    $('.ench-logo path, .ench-logo polygon').css("fill", "#07c1a3");
                 } else {
                    $('.ench-logo path, .ench-logo polygon').css("fill", "white");
                }
             }
          });
        });
    });
});
});
