$(document).ready(function() {
    function movePersonData(method) {
        var $titleBottom = $('.title-bottom'),
            $titleBottomPersonData = $('.title-bottom .person-data'),
            personHtml = $titleBottomPersonData.html(),
            divPersonData = '<div class="-padding-m person-data">' + personHtml + '</div>';

        $titleBottomPersonData.remove();
        if (method == "append") {
            $titleBottom.append(divPersonData);
        } else if (method == "prepend") {
            $titleBottom.prepend(divPersonData);
        }
    }

    $(window).resize(function() {
        var $windowWidth = $(window).width();
        if ($windowWidth <= 768) {
            movePersonData('prepend');
        } else {
            movePersonData('append');
        }
    });

    function removeClassHide(lightbox, innerLightbox) {
        lightbox.removeClass('hide');
        lightbox.addClass('show');
        lightbox.css('opacity', '0.7');

        innerLightbox.removeClass('hide');
        innerLightbox.addClass('show');
        innerLightbox.css('opacity', '1');
    }

    function removeClassShow(lightbox, innerLightbox) {
        lightbox.removeClass('show');
        lightbox.addClass('hide');
        lightbox.css('opacity', '0');

        innerLightbox.removeClass('show');
        innerLightbox.addClass('hide');
        innerLightbox.css('opacity', '0');
    }

    $('a.example-image').click(function() {
      var lightBoxId = $(this).attr('href');
      var innerLightbox = $(lightBoxId);
      var lightbox = $('.lightbox');
      $('body').css('overflow-y', 'hidden');
      $('.fixed-header-elements').css('cssText', 'z-index: 20 !important');
      $('a.lightbox-hide').css('opacity', 1);

      if (lightbox.hasClass('hide') && innerLightbox.hasClass('hide')) {
          removeClassHide(lightbox, innerLightbox);
          $(innerLightbox).click(function() {
            $('a.lightbox-hide').css('opacity', 0);
            $('body').css('overflow-y', 'initial');
            $('.inner-lightbox').css('height', '');
            removeClassShow(lightbox, innerLightbox);
            $('.fixed-header-elements').css('z-index', 25);
          });
          
          $('a.lightbox-hide').click(function () {
            $('a.lightbox-hide').css('opacity', 0);
            $('body').css('overflow-y', 'initial');
            $('.inner-lightbox').css('height', '');
            removeClassShow(lightbox, innerLightbox);
            $('.fixed-header-elements').css('z-index', 25);
          });

          $(lightbox).click(function() {
            removeClassShow(lightbox, innerLightbox);
          });
      } else {
          removeClassShow(lightbox, innerLightbox);
          $(document).click(function() {
              removeClassHide(lightbox, innerLightbox);
          });

          $(lightbox).click(function() {
              removeClassHide(lightbox, innerLightbox);
          });
      }
    });

    $(function() {
        $('.example a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000, 'swing', function(){
                      $('.inner-lightbox').css('height', '100vh');
                    });
                    return false;
                }
            }
        });
    });
});
