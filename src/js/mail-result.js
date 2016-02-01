$(document).ready(function() {
  'use strict';

  var hash = window.location.href.substring(window.location.href.indexOf("?"));

  if (hash === "?sent=true") {
    if (pathname == "/join-the-force.html") {
      window.location.hash = "#frm";
      $(".starwars-form .container").html("<h2>Thank you, we will contact you soon! <br>May the force be with you!</h2>");
    }
    else if (pathname == "/growth-enhancer.html") {
      window.location.hash = "#frm";
      $(".growth-enhancer-form .container").html("<h2>Thank you, we will contact you soon!</h2>");
    }
    else if (pathname == "/job/graphic-designer.html") {
      window.location.hash = "#frm";
      $(".graphic-designer-form").html("<h2>Thank you, we will contact you soon!</h2>");
    }
  }

}());
