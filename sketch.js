var helecopterIMG, helecopterSprite
function preload()
{
	helecopterIMG=loadImage("helecopter.png")

}

function setup() {
	createCanvas(800, 700);
	
	helecopterSprite=createSprite(width/2, 200, 10,10);
	helecopterSprite.addImage(helecopterIMG)
	helecopterSprite.scale=0.6
	
}


function draw() {
  
  background(0);
   
  drawSprites();
 
}