var canvas;
var canvasContext;
var ballX = 50;

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	canvasContext.fillStyle = 'black';
	canvasContext.fillRect(0, 0, canvas.width, canvas.height);
	setInterval(drawEverything, 50);
}

function drawEverything() {
	ballX = ballX + 5;
	canvasContext.fillStyle = 'black';
	canvasContext.fillRect(0,0,canvas.width,canvas.height);
	canvasContext.fillStyle = 'white';
	canvasContext.fillRect(225,210,200,200);
	canvasContext.fillStyle = 'red';
	canvasContext.fillRect(ballX,100,10,10);
}
