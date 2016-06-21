var handleAutoPlayVisible = function() {
	var r = !!navigator.userAgent.match(/(iPad|iPhone|iPod)/g);

	$(window).on('load scroll', function() {
		$("video.autoPlayWhenVisible:visible").each(function() {
			if (0 == r) {
				var video = this;
				if ($(video).is(":in-viewport")) {
					video.play();
				} else {
					video.pause();
				}
			} else {
				$(this).attr("controls", "true");
			}
		});
	});
};

$(document).ready(function () {
	$(document).on({
		'show': function () {
			$('#videosContainer video:visible').get(0).play();
		},
		'hide': function () {
			$('#videosContainer video:visible').get(0).pause();
		}
	});

	handleAutoPlayVisible();
});
