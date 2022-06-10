
// Create canvas variable
var canvas = new fabric.canvas('myCanvas');
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";


	// to upload images
	function new_image(get_image)
{
fabric.image.fromUrl('getimage.jpg', function (img)){
    block_image_object = Img;
}
block_image_object.ScaleToWidth(700);
block_image_object.ScaleToHeight(510);
	block_image_object({
        top:0,
        left:0
    });
    canvas.add(block_image_object);
};
    
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '?') // add appropriate keycode
	{
		// upload red ranger
		new_image('rr1.png');
		console.log("r")
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		// upload green ranger
		new_image('gr.png');
		console.log("g")
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		// upload yellow ranger
		new_image('yr.png');
		console.log("y")
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		// upload pink ranger
		new_image('pr.png');
		console.log("p")
	}
	if(keyPressed == '66')
	{
		block_x = 700;
	// upload blue ranger
	new_image('br.png');
		console.log("b")
	}
	
}

