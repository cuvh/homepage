$(document).on('click', '[data-copy-from]', function () {
	var copyTextarea = $($(this).data('copy-from'))[0];
  	copyTextarea.select();

  	try {
	    document.execCommand('copy');
  	} catch (err) {}
});
