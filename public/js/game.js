var canvas=null;
var ctx =null;
var frameRate = 1000/30;
var frame=0;
var assets= [];
var frames = [];
setup = function() {
	var body = document.getElementById('body');
	var canvas = document.createElement('canvas');

	ctx = canvas.getContext('2d');
	
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	body.appendChild(canvas);

	// Create a new image with:
	// a 'src' attribute of "/media/img/gamedev/ralphyrobot.png"
	// and an 'onload' attribute of onImageLoad
	// YOUR CODE HERE
	img = new Image();
	img.onload=onImageLoad;
	img.src="/media/img/gamedev/ralphyrobot.png";
	for (var i = 0; i < assets.length; i++) {
		frames.push(new Image());
		frames[i].onload = onImageLoad;
		frames[i].src = assets[i];
	}
	setInterval(animate,frameRate);

};
var animate = function(){
	context.drawImage(frames[frame],192,192);
	frame = (frame + 1) % frames.length;

};

var onImageLoad = function(){
	// Use the console.log function to print a statement to the browser console.
	// This will print once the image has been downloaded.
	// YOUR CODE HERE
	console.log("git here");
};

setup();