var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");
var clearbtn = document.getElementById("clear");
ctx.fillStyle = '#ff00ff'

var clear_canvas = function(){
    ctx.clearRect(0,0,600,600);
    ctx.beginPath();
}

rid = 0

var animateDot = function(){
    var x = 25
    window.cancelAnimationFrame( rid );

    var drawDot = function(){
	ctx.clearRect(0,0,canvas.width,canvas.height)

	// console.log("dot");
	console.log(rid);
	ctx.beginPath();
	ctx.arc(x,300,25,0,2*Math.PI);
	ctx.fill();
	x++;

	rid =  window.requestAnimationFrame( drawDot );
    };
    drawDot();

};



var stopIt = function() {
    window.cancelAnimationFrame( rid );
};

var stopButton = document.getElementById("stop");
stopButton.addEventListener('click', stopIt);

canvas.addEventListener('click', animateDot());
