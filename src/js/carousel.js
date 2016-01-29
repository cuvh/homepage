$(document).ready(function(){
  'use strict';

  function swipedetect(el, callback){

    var touchsurface = el,
    swipedir,
    startX,
    startY,
    distX,
    distY,
    threshold = 150, //required min distance traveled to be considered swipe
    restraint = 100, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 300, // maximum time allowed to travel that distance
    elapsedTime,
    startTime,
    handleswipe = callback || function(swipedir){}

    touchsurface.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0]
        swipedir = 'none'
        //dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        //e.preventDefault()
    }, false)

    touchsurface.addEventListener('touchmove', function(e){
        //e.preventDefault() // prevent scrolling when inside DIV
    }, false)

    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
            }
        }
        handleswipe(swipedir)
        //e.preventDefault()
    }, false)
}

  var TIMEOUT = 1000;
  function moveLeft(){
    var $active = $('.circle-control.active');
    var page = $active.data('page');

    if (page != 1) {
      $('#page'+page).hide();
      $('#page'+(page-1)).fadeIn(TIMEOUT);
      $active.removeClass('active');
      $($('.circle-control').get(page - 2)).addClass('active');
    }
  }

  function moveRight(){
    var $active = $('.circle-control.active');
    var page = $active.data('page');

    if (page != 4) {
      $('#page'+page).hide();
      $('#page'+(page+1)).fadeIn(TIMEOUT);
      $active.removeClass('active');
      $($('.circle-control').get(page)).addClass('active');
    }
  }

  $('.carrousel-wrapper .left-arrow').click(function(){
    moveLeft();
  });


  $('.carrousel-wrapper .right-arrow').click(function(){
    moveRight();
  });

  var carousel = $('.carrousel-wrapper').get(0);
  if (carousel) {
    swipedetect(carousel, function(swipeDir){
      if (swipeDir == 'left') {
        moveRight();
      }
      if (swipeDir == 'right') {
        moveLeft();
      }
      else {
          return true;
      }
    });
  }


  $('.circle-control').click(function(){
    var $this = $(this);
    var $active = $('.circle-control.active');
    var lastPage = $active.data('page');
    var newPage = $this.data('page');

    $active.removeClass('active');
    $this.addClass('active');

    $('#page'+lastPage).hide();
    $('#page'+newPage).fadeIn(TIMEOUT);
  });

});
