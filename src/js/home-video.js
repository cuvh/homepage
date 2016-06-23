$(document).ready(function () {
	var options = {
		videoId: '128418807',
		wrapperZIndex: 19,
		parameters: {
			api: 1,
			background: 1,
			color: '00c092',
			player_id: 'vimelar-player',
		}
	};

	var $homeSection = $('.section.-home');

	function initHomeVideo() {
		$('#videosContainer').vimelar(options);

		var $vimeoVideo = $('#vimelar-player');

		$f($vimeoVideo[0]).addEvent('ready', function (player_id) {
			var froogaloop = $f(player_id);

			$(document).on({
				'show': function () {
					froogaloop.api('play');
				},
				'hide': function () {
					froogaloop.api('pause');
				}
			});

			$(window).on('load scroll', function() {
				if ($vimeoVideo.is(":in-viewport")) {
					froogaloop.api('play');
				} else {
					froogaloop.api('pause');
				}
			});

			froogaloop.addEvent('playProgress', function(data) {
				//console.log('playProgress event : ' + data.seconds + ' : ' + data.percent + ' : ' + data.duration);
				var $videoCaptions = $('.video-caption');
				var $nextCaption = $videoCaptions.filter(function() {
					var $caption = $(this);
					return $caption.data('showOn') == parseInt(data.seconds) && !$caption.hasClass('active');
				});
				var $currentCaption = $videoCaptions.filter(function() {
					return $(this).hasClass('active');
				});

				if (window.matchMedia("(min-width: 768px)").matches) {
					$homeSection.css({'background': "none"});
				}

				if ($currentCaption.length && $nextCaption.length) {
					$currentCaption.fadeOut(500, function () {
						$currentCaption.removeClass('active');
						$nextCaption.fadeIn(500).addClass('active');
					});
				} else if ($nextCaption.length) {
					$nextCaption.fadeIn(500).addClass('active');
				}
			});
		});
	}

	function showIframe(event) {
		if (event) {
			if (window.matchMedia("(min-width: 768px)").matches) {
				if (!$('#vimelar-player').length && !/Edge/.test(navigator.userAgent)) {
					initHomeVideo();
				} else if (!/Edge/.test(navigator.userAgent)) {
					$homeSection.css({'background': "none"});
				}
			} else {
				$homeSection.css({'background': "url('/images/home-video-bg.png') center center no-repeat #00c092"});
			}
		} else if (window.matchMedia("(min-width: 768px)").matches && !/Edge/.test(navigator.userAgent)) {
			initHomeVideo();
		}
	}

	$(window).on('resize', showIframe);

	// Initialize it once on document ready
	showIframe();
});
