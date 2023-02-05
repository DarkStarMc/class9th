var box;
function setup() {
  createCanvas(1280,720);
  box=createSprite(60,60,60,60);
}

function draw() 
{
  background(rgb(0,255,255));
 if (keyIsDown(RIGHT_ARROW)){
  box.x=box.x+5;
 }
 if (keyIsDown(LEFT_ARROW)){
  box.x=box.x-5;
 }
 if (keyIsDown(UP_ARROW)){
  box.y=box.y-5;
 }
 if (keyIsDown(DOWN_ARROW)){
  box.y=box.y+5;
 }
 drawSprites();
}




