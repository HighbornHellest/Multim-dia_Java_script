var c = document.getElementById("Canvas1");
var ctx = c.getContext("2d");

//talaj

ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(0,800, 300,0, 2*3.141592);
ctx.fill();
ctx.arc(450, 900, 350, 0, 2*3.141592);
ctx.fill();
ctx.arc(1000, 1000, 450, 0,2*3.141592);
ctx.fill();

//bombák

function bombs(ctx, x,y)
{
ctx.fillStyle = "gray";

ctx.beginPath();
ctx.fillRect(x,y,30,30);
ctx.arc(x+15,y+30,15,0,3.141592);
ctx.fill();

}

var x_current = 120;
var y_current = 150;

for( var i=0; i<10;++i)
{
bombs(ctx,x_current,y_current);
x_current+= 75;
y_current+= 30;
}

var worm = new Image();
worm.src="worm.png";
worm.onload = function()
{
ctx.drawImage(this, 350, 510, 50,50);
};

var rep = new Image();
rep.src="plane.png";
rep.onload = function ()
{
ctx.drawImage(this, 100, 50, 50,50);
};