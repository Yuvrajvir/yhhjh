canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

boy_width = 100;
boy_height = 90;

background_image = "g1.jpg";

boy_image = "boy.png";

boy_x = 10;
boy_y = 10;

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	boy_imgTag = new Image(); //defining a variable with a new image
	boy_imgTag.onload = uploadboy; // setting a function, onloading this variable
	boy_imgTag.src = boy_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadboy() {
	ctx.drawImage(boy_imgTag, boy_x, boy_y, boy_width, boy_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
}

function up()
{
	if(boy_y >=0)
	{
		boy_y = boy_y - 10;
		console.log("When up arrow is pressed,  x = " + boy_x + " | y = " +boy_y);
		 uploadBackground();
		 uploadboy();
	}
}
function down()
{
	if(boy_y <=500)
	{
		boy_y =boy_y+ 10;
		console.log("When down arrow is pressed,  x = " + boy_x + " | y = " +boy_y);
		uploadBackground();
		 uploadboy();
	}
}
function left()
{
	if(boy_x >= 0)
	{
		boy_x =boy_x - 10;
		console.log("When left arrow is pressed,  x = " + boy_x + " | y = " +boy_y);
		uploadBackground();
		 uploadboy();
	}
}
function right()
{
	if(boy_x <= 700)
	{
		boy_x =boy_x + 10;
		console.log("When right arrow is pressed,  x = " + boy_x + " | y = " +boy_y);
		uploadBackground();
		uploadboy();
	  }
}
	
