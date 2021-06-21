var iss,spaceCraft
var issImg,spaceCraftImgLeft,spaceCraftImgRight,spaceCraftImg,spaceCraftDown
var bgImg,docking
var gameState=1
function preload(){
issImg=loadImage("iss.png")
bgImg=loadImage("spacebg.jpg")
spaceCraftImg=loadImage("spacecraft1.png")
spaceCraftImgLeft=loadImage("spacecraft3.png")
spaceCraftDown=loadImage("spacecraft2.png")
spaceCraftImgRight=loadImage("spacecraft4.png")
}
function setup() {
  createCanvas(800,400);
  iss= createSprite(400,140)
  iss.addImage("iss",issImg)
  iss.scale=0.4

  spaceCraft= createSprite(400, 300, 50, 50);
  spaceCraft.addImage("spaceCraft",spaceCraftImg)
  spaceCraft.addImage("spaceCraft2",spaceCraftImgLeft)
  spaceCraft.addImage("spaceCraft3",spaceCraftDown)
  spaceCraft.addImage("spaceCraft4",spaceCraftImgRight)
  spaceCraft.scale=0.15

  docking=createSprite(368,140,2,2)
  docking.shapeColor="lightblue"
}

function draw() {
  background(bgImg);  
  console.log(mouseY)
  
    if(keyDown("left")){
      spaceCraft.x=spaceCraft.x-3
      spaceCraft.changeImage("spaceCraft2",spaceCraftImgLeft)
    }
    
    if(keyDown("right")){
      spaceCraft.x=spaceCraft.x+3
      spaceCraft.changeImage("spaceCraft4",spaceCraftImgRight)
    }
    if(keyDown("down")){
      spaceCraft.y=spaceCraft.y+3
      spaceCraft.changeImage("spaceCraft3",spaceCraftDown)
    }
    if(keyDown("up")){
      spaceCraft.y=spaceCraft.y-3
      spaceCraft.changeImage("spaceCraft3",spaceCraftDown)
    }
  
  
  if(spaceCraft.isTouching(docking)){
    fill("white")
    textSize(20)
    text("DOCKING SUCCESFUL",200,380)
  }
  drawSprites();
}