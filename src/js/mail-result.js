$(document).ready(function() {
  'use strict';

  var hash = window.location.href.substring(window.location.href.indexOf("?"));

  if (hash === "?sent=true") {
    window.location.hash = "#frm";
    $(".starwars-form .container").html("<h2>Thank you, we will contact you soon! <br>May the force be with you!</h2>");
  }

}());
