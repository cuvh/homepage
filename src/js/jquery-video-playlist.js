/* Copyright 2016, Enhancv Ltd. Licensed under BSD-3-Clause
 * See license text at https://github.com/enhancv/jquery-video-playlist/LICENSE */

/* exported VideoPlaylist */

var VideoPlaylist = (function ($) {

	'use strict';

	/**
	 * ------------------------------------------------------------------------
	 * Constants
	 * ------------------------------------------------------------------------
	 */

	var NAME = 'videoPlaylist';
	var DATA_KEY = 'videoPlaylist';

	var Selector = {
		WIDGET: '[data-update="video-playlist"]',
		WIDGET_CAPTION: '[data-update="video-caption"]'
	};

	var Default = {
		firstVideoTimeTreshold: 2, //in seconds of video played
		nextCaptionTimeTreshold: 0.5, //in seconds of video played
		nextVideoLoadTimeTreshold: 83, //in percent of video played
		fadeOutCaptionDuration: 500, //in ms
		fadeInCaptionDuration: 500, //in ms
		fadeOutVideoDuration: 500, //in ms
		fadeInVideoDuration: 500, //in ms
	};

	/**
	 * ------------------------------------------------------------------------
	 * Class Definition
	 * ------------------------------------------------------------------------
	 */

	/**
	 * @param  {jQuery} element
	 * @param  {Object} options
	 */
	function VideoPlaylist(element, options) {
		this.$element = $(element);
		this.buffering = {};
		var $allVideos = this.$element.find('video');
		var that = this;
		$allVideos.each(function() {
			that.buffering[this.id] = false;
		});
		this._options = this._getOptions(options || {});
	}

	// getters

	VideoPlaylist.Default = Default;

	VideoPlaylist.NAME = NAME;

	VideoPlaylist.DATA_KEY = DATA_KEY;

	VideoPlaylist.prototype.options = function () {
		return this._options;
	};

	// public
	// ------------------------------------------------------------------------

	/**
	 * Update an option directly
	 *
	 * @param  {String} name
	 * @param  {mixed} value
	 */
	VideoPlaylist.prototype.option = function (name, value) {
		this._options[name] = value;
	};

	VideoPlaylist.prototype.init = function () {
		var $allVideos = this.$element.find('video');
		var $firstObject = $allVideos.first();

		$allVideos
			.on('playing', function () {
				this.controls = false;
			})
			.on('canplaythrough', this._preloaderCallback.bind(this))
			.on('timeupdate', this._throttle(this._videoPlayCallback.bind(this), 900))
			.on('ended', this._videoCallback.bind(this));

		$firstObject[0].load();

		// If the video is in the cache of the browser,
		// the 'canplaythrough' event might have been triggered
		// before we registered the event handler.
		if ($firstObject[0].readyState > 3) {
			this._preloaderCallback.bind(this);
		}
	};

	// private
	// ------------------------------------------------------------------------

	VideoPlaylist.prototype._getOptions = function (options) {
		return $.extend(true, {}, Default, options);
	};

	VideoPlaylist.prototype._throttle = function (fn, threshhold, scope) {
		threshhold || (threshhold = 250);
		var last, deferTimer;
		return function () {
			var context = scope || this;

			var now = +new Date,
				args = arguments;
			if (last && now < last + threshhold) {
				// hold on to it
				clearTimeout(deferTimer);
				deferTimer = setTimeout(function () {
					last = now;
					fn.apply(context, args);
				}, threshhold);
			} else {
				last = now;
				fn.apply(context, args);
			}
		};
	};

	VideoPlaylist.prototype._videoPlayCallback = function (e) {
		var $currentVideo = $(e.currentTarget);
		var $allVideos = this.$element.find('video');

		if ($allVideos.index($currentVideo) == 0 && !$currentVideo.hasClass('active') && $currentVideo[0].currentTime >= this._options.firstVideoTimeTreshold) {
			$currentVideo[0].pause();
			$currentVideo[0].currentTime = 0;
			//$currentVideo[0].load();
			$currentVideo.addClass('active');
			$currentVideo.fadeIn(this._options.fadeInVideoDuration);
		} else if ($currentVideo.length > 0 && $currentVideo.hasClass('active')) {
			var percentPlayed = Math.floor((100 / $currentVideo[0].duration) * $currentVideo[0].currentTime);
			if ($currentVideo[0].currentTime >= this._options.nextCaptionTimeTreshold) {
				this._handleVideoCaption($currentVideo[0]);
			}

			var $object = this._findNext($currentVideo);
			var objectId = $object[0].id;

			if (percentPlayed >= this._options.nextVideoLoadTimeTreshold && !this.buffering[objectId]) {
				this.buffering[objectId] = true;
				$object[0].load();
			}
		}
	};

	VideoPlaylist.prototype._preloaderCallback = function (e) {
		e.currentTarget.play();
	};

	VideoPlaylist.prototype._findNext = function ($currentObject) {
		var $allVideos = this.$element.find('video');
		var index = $allVideos.index($currentObject) + 1;
		if (index >= $allVideos.length) {
			index = 0;
		}
		return $allVideos.eq(index);
	};

	VideoPlaylist.prototype._videoCallback = function (e) {
		var $currentObject = $(e.currentTarget);

		// Find next video
		var $object = this._findNext($currentObject);
		var $that = this;

		$object[0].pause();
		$object[0].currentTime = 0;

		// Hide current video
		$currentObject.fadeOut(this._options.fadeOutVideoDuration, function() {
			$currentObject.removeClass('active');
			// Show next video
			$object[0].play();
			$object.addClass('active');
			$that.buffering[$object[0].id] = false;
			$object.fadeIn($that._options.fadeInVideoDuration);
		});
	};

	VideoPlaylist.prototype._handleVideoCaption = function (playingVideo) {
		var that = this;
		var sloganText = $(playingVideo).data("caption");
		var $sloganMessageEl = $(Selector.WIDGET).parent().find(Selector.WIDGET_CAPTION);

		if (sloganText && $sloganMessageEl.length > 0 && $sloganMessageEl.html() !== sloganText) {
			$sloganMessageEl.fadeOut(this._options.fadeOutCaptionDuration, function () {
				$sloganMessageEl.html(sloganText).fadeIn(that._options.fadeInCaptionDuration);
			});
		}
	};

	// static
	// ------------------------------------------------------------------------

	VideoPlaylist._jQueryInterface = function (config, a1, a2, a3) {
		return this.each(function () {
			var $this = $(this);
			var data = $this.data(DATA_KEY);
			var _config = $.extend(
				true,
				{},
				Default,
				$this.data(),
				typeof config === 'object' && config
			);

			if (!data) {
				data = new VideoPlaylist(this, _config);
				$this.data(DATA_KEY, data);
			}

			if (typeof config === 'string') {
				data[config](a1, a2, a3);
			}
		});
	};

	/**
	 * ------------------------------------------------------------------------
	 * Data Api implementation
	 * ------------------------------------------------------------------------
	 */

	$(document)
		.ready(function () {
			$(Selector.WIDGET)[NAME]('init');
		});

	/**
	 * ------------------------------------------------------------------------
	 * jQuery
	 * ------------------------------------------------------------------------
	 */

	$.fn[NAME] = VideoPlaylist._jQueryInterface;
	$.fn[NAME].VideoPlaylist = VideoPlaylist;

	return VideoPlaylist;

})(jQuery);
