/*
Author :Lai Jiang
*/

var canvas = document.getElementById("screen"); 
var context = canvas.getContext("2d"); 

var x = 50;
var y = 50;

function init(){
	context.fillStyle = "skyblue";
}

function move_box(dx,dy){
	x+=dx;
	y+=dy;
}

function update(){
	if(key.a){move_box(-5,0);}
	if(key.d){move_box(5,0);}
	if(key.w){move_box(0,-5);}
	if(key.s){move_box(0,5);}
}

function draw(){
	context.clearRect(0,0, canvas.width,canvas.height);
	context.fillRect(x,y,50,50);
	 
}

function main(){
	update();
	draw();
}

window.onload = function(){
	init();
	setInterval(main,1000/80);
};