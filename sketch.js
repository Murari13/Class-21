var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 600, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect2 = createSprite(600, 300, 50, 80);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;
  fixedRect2.velocityY=2;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(fixedRect2,movingRect)){
    movingRect.shapeColor = "red";
    fixedRect2.shapeColor = "red";
  }
  else{
  movingRect.shapeColor = "green";
  fixedRect2.shapeColor = "green";
  }

  bounceOff(fixedRect2,fixedRect);
  drawSprites();
}

