(function(){

	var videoWeb = document.getElementById("video");
	var playing = document.getElementById("play");
	var paused = document.getElementById("stop");
	navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(stream => videoWeb.srcObject = stream)
    .then(stream => pc.addStream(stream))
    .catch(function(err) {
       console.log(err);
    })
})();