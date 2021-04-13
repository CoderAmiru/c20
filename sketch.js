var movingrect
var fixedrect

function setup() {

  createCanvas(800,400);
  movingrect=createSprite(400, 200, 50, 100);
  fixedrect=createSprite(400, 250, 50, 50);
  fixedrect.shapeColor="blue"
  movingrect.shapeColor="blue"
  
}

function draw() {
  background(255,255,255);  
  movingrect.x=mouseX
  movingrect.y=mouseY
if (movingrect.x-fixedrect.x<=movingrect.width/2+fixedrect.width/2
  && fixedrect.x-movingrect.x<=movingrect.width/2+fixedrect.width/2
  &&movingrect.y-fixedrect.y<=movingrect.height/2+fixedrect.height/2
  && fixedrect.y-movingrect.y<=movingrect.height/2+fixedrect.height/2){
    fixedrect.shapeColor="red"
    movingrect.shapeColor="red"

  }
  else{
    fixedrect.shapeColor="blue"
    movingrect.shapeColor="blue"
  }



  drawSprites();
}




