$(document).ready(function(){
  'use strict';
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

  $('.carrousel-wrapper').on('swipeleft', function(){
    moveLeft();
  });

  $('.carrousel-wrapper .right-arrow').click(function(){
    moveRight();
  });

  $('.carrousel-wrapper').on('swiperight', function(){
    moveRight();
  });

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
