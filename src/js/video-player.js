/*
function throttle(fn, threshhold, scope) {
	threshhold || (threshhold = 250);
	var last,
		deferTimer;
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
}

var NEXT_VIDEO_LOADING_TRESHOLD = 50; //in percentage played from previous video

/!**
 * A classy way to play HTML5 videos on a loop without gaps
 * @author StaticData http://www.StaticData.org/
 * @constructor
 *!/
function VideoPlayer() {
}
var StaticData = {};

/!**
 * @param playlist An array of URLs to be played - see documentation for details
 * @param container The HTML ID of the element to insert videos into
 * @param baseurl The base URL to append to videos
 * @param options A list of additional <video> options, if any
 *!/
VideoPlayer.prototype.initialise = function (playlist) {
	StaticData.playlist = playlist;
	StaticData.preloaded = 0;
};

/!*VideoPlayer.prototype.preloadVideos = function () {
	for (var index in StaticData.playlist) {
		// Prepare HTML to insert
		// This is necessary to prevent the browser closing tags
		var htmlToInsert = "<video class='autoPlayWhenVisible' height='100%' width='100%' preload='auto' onplaying='this.controls=false' oncanplaythrough='VideoPlayer.preloaderCallback()' ontimeupdate='throttle(VideoPlayer.videoPlayCallback(\"" + StaticData.playlist[index] + "\"), 1000)' onended='VideoPlayer.videoCallback(\"" + StaticData.playlist[index] + "\")' id='" + StaticData.playlist[index] + "' style='display:none' webkit-playsinline" + StaticData.options + ">";
		htmlToInsert += "<source src='" + StaticData.baseurl + StaticData.playlist[index] + "/video.webm' type='video/webm;codecs=&quot;vp8, vorbis&quot;'>";
		htmlToInsert += "<source src='" + StaticData.baseurl + StaticData.playlist[index] + "/video.mp4' type='video/mp4'>";
		htmlToInsert += "</video>";

		// Insert the HTML
		document.getElementById(StaticData.container).innerHTML += htmlToInsert;
	}
};*!/

VideoPlayer.startPlaying = function () {
	var object = document.getElementById(StaticData.playlist[0]);
	object.style.display = 'inline-block';
	object.play();
};

VideoPlayer.videoCallback = function (id) {
	// Hide current object
	document.getElementById(id).style.display = 'none';

	// Find next object in array
	var index = StaticData.playlist.indexOf(id) + 1;
	if (index >= StaticData.playlist.length) index = 0;

	// Show next video
	var object = document.getElementById(StaticData.playlist[index]);
	object.style.display = 'inline-block';
	object.play();
};

VideoPlayer.videoPlayCallback = function (id) {
	var playingVideo = document.getElementById(id);
	var percentPlayed = Math.floor((100 / playingVideo.duration) * playingVideo.currentTime);
	if (percentPlayed >= NEXT_VIDEO_LOADING_TRESHOLD) {
		console.log('50% Played');
	}
};

VideoPlayer.preloaderCallback = function () {
	StaticData.preloaded++;
	if (StaticData.preloaded == 2) this.startPlaying();
};
*/
