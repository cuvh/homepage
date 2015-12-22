(function() {
  'use strict';

  $('.upload').change(function() {
    var filename = $(this).val();
    var lastIndex = filename.lastIndexOf("\\");
    if (lastIndex >= 0) {
        filename = filename.substring(lastIndex + 1);
    }
    $('.filename').text(filename);
});
}());
