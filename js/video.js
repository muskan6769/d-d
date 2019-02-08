(function(){
	var video = document.getElementById("video");
	var vendorUrl = window.URL || window.webkitURL;

	navigator.getMedia = navigator.getUserMedia ||
						 navigator.webkitGetUserMedia ||
						 navigator.mozGetUserMedia ||
						 navigator.msGetUserMedia;
	navigator.getMedia({
		video: true,
		audio: true
	} , function(stream) {
		video.src = vendorUrl.createObjectURL(stream);
		video.play();
	} , function(error) {
		//error
	});
})();