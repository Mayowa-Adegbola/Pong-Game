var canvas;
var canvasContext;
var ballX = 50;
var ballSpeedX = 5;

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	
	var framesPerSecond = 30;
	setInterval(function() {
			moveEverything();
			drawEverything();	
		}, 1000/framesPerSecond);

};

//function to reverse ball direction
function moveEverything() {
	ballX = ballX + ballSpeedX;
	if(ballX < 0) {
		ballSpeedX = -ballSpeedX;
	}
	if(ballX > canvas.width) {
		ballSpeedX = -ballSpeedX;
	}
}

function drawEverything() {
	// next line blanks out the screen with black color
	colorRect(0,0,canvas.width,canvas.height,'black');

	// this is left player paddle
	colorRect(0,210,10,100,'white');

	// next line draws the ball
	colorRect(ballX,100,10,10,'red');
}

function colorRect(leftX,topY, width,height, drawColor) {
	canvasContext.fillStyle = drawColor;
	canvasContext.fillRect(leftX,topY, width,height);
}
