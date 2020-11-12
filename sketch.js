var redBalloon, redBalalloonImg
var greenBalloon, greenBalalloonImg
var pinkBalloon, pinkBalalloonImg
var blueBalloon, blueBalalloonImg

var backround, backImg

var bow, bowImg
var arrow, arrowImg

function preload() {
  //load your images here 

  redBalalloonImg = loadImage("red_balloon0.png")
  greenBalalloonImg = loadImage("green_balloon0.png")
  pinkBalalloonImg = loadImage("pink_balloon0.png")
  blueBalalloonImg = loadImage("blue_balloon0.png")
  backImg = loadImage("background0.png")
  bowImg = loadImage("bow0.png")
  arrowImg = loadImage("arrow0.png")
}

function setup() {
  createCanvas(600, 600);

  backround = createSprite(200, 200, 600, 600);
  backround.scale = 2;
  backround.addImage(backImg);
  backround.x = backround.width / 2;


  bow = createSprite(500, 160, 20, 20)
  bow.addImage(bowImg);
  backround.velocityX = -4;

  for (var i = 70; i < 350; i = i + 50) {

    redBalloon = createSprite(25, i, 20, 20)
    redBalloon.addImage(redBalalloonImg)
    redBalloon.scale = 0.05
  }
  for (var b = 70; b < 300; b = b + 50) {

    greenBalloon = createSprite(60, b, 20, 20)
    greenBalloon.addImage(greenBalalloonImg)
    greenBalloon.scale = 0.05
  }
  for (var c = 70; c < 250; c = c + 50) {

    pinkBalloon = createSprite(95, c, 20, 20);
    pinkBalloon.addImage(greenBalalloonImg)
    pinkBalloon.scale = 0.05
  }

  for (var a = 70; a < 200; a = a + 50) {

    blueBalloon = createSprite(130, a, 20, 20);
    blueBalloon.addImage(blueBalalloonImg)
    blueBalloon.scale = 0.05
  }

}

function draw() {

  background(180);
 if(keyDown("space")){
arrrow();
}
 
  drawSprites()

  if (backround.x < 200) {
    backround.x = backround.width / 2
  }


  bow.y = World.mouseY;


function arrrow() {

  arrow = createSprite(500, bow.y, 5, 10)


  arrow.addImage("arrowIm", arrowImg)
  arrow.scale = 0.2;
  arrow.y = bow.y;

    arrow.velocityX = -6;
    return arrow;
  
  }
}