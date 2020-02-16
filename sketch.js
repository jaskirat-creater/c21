var movingrect,fixedrect
var box1,box2

function setup() {
  createCanvas(800,400);
 movingrect=createSprite(200,100,50,50)
 fixedrect=createSprite(100,300,100,50)
 movingrect.shapeColor="green"
 fixedrect.shapeColor="green"
 box1=createSprite (200,100,55,66)
 box2=createSprite(100,100,50,40)
 box1.shapeColor="Blue"
 box2.shapeColor="Blue"
} 

function draw() {
  background(0,0,0);  
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY
  if( isTouching(movingrect,box2)){
    movingrect.shapeColor="red"
 box2.shapeColor="red"

  }
else{
  movingrect.shapeColor="green"
box2.shapeColor="blue"


}
  drawSprites();
}
