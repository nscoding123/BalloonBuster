//This Program Creates a Balloon Buster Project 5!
//Created by: Neeti Suggula on 12/6/2020

//This creates Variables for the code
var ground, backgroundImage;
var bow, bowImage;
var ballonRed, ballonImageRed
var ballonGreen, ballonImageGreen;
var ballonBlue, ballonImageRed;
var ballonPink, ballonImagePink;
var redB, blueB, greenB, pinkB;
var arrow, arrowImage, arrowGroup;
var score;

function preload() {
  // loads my images
  backgroundImage = loadImage("background0.png");
  bowImage = loadImage("bow0.png");
  ballonImageRed = loadImage("red_balloon0.png");
  ballonImageGreen = loadImage("green_balloon0.png");
  ballonImageBlue = loadImage("blue_balloon0.png");
  ballonImagePink = loadImage("pink_balloon0.png");
  arrowImage = loadImage("arrow0.png");
}

function setup() {
  // creates the canvas
  createCanvas(400, 400);

  // creates the ground sprite
  ground = createSprite(0, 0, 400, 400);
  ground.addImage("ground", backgroundImage);
  ground.x = ground.width / 2;
  ground.scale = 2.3;

  // creates the bow sprite
  bow = createSprite(380, 200, 50, 50);
  bow.addImage("bow", bowImage);
  score = 0;

  //Creates group
  redB = new Group();
  blueB = new Group();
  pinkB = new Group();
  greenB = new Group();
  arrowGroup = new Group();


}

function draw() {
  // creates the background
  background(220);


  // Background in motion
  ground.velocityX = -4;
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  // moving the bow with the mouse
  bow.y = mouseY;

  // Arrow generation
  if (keyDown("space")) {
    createarrow();
    arrow.y = bow.y;

  }

  //Prints balloon colors at random
  var select_balloon = Math.round(random(1, 4));
  //Prints Text in console bar about random numbers
  console.log(select_balloon)
  //Creates a Balloon every 80 spaces

  if (World.frameCount % 80 == 0) {
    //This statement helps in printing the balloon color

    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else if (select_balloon == 4) {
      pinkBalloon();
    }
  }

  //If the balloon his the arrow both of them get destroyed
  if (arrowGroup.isTouching(redB)) {
    redB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;
  }
  if (arrowGroup.isTouching(greenB)) {
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 2;
  }

  if (arrowGroup.isTouching(blueB)) {
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 3;
  }

  if (arrowGroup.isTouching(pinkB)) {
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 4;
  }

  // draws the sprites
  drawSprites();
  // how score looks 
  text("Score : " + score, 290, 30);

}
//Creates Arrow when space is pressed
function createarrow() {
  arrow = createSprite(400, 200, 10, 20);
  arrow.lifetime = 150;
  arrow.scale = 0.3;
  arrow.velocityX = -4;
  arrow.addImage("arrow", arrowImage);
  arrowGroup.add(arrow);
}
//These functions Print at random, generates speed, and size
function redBalloon() {
  var ballonRed = createSprite(0, Math.round(random(20, 370)), 10, 10);
  ballonRed.addImage(ballonImageRed);
  ballonRed.velocityX = 3;
  ballonRed.lifetime = 150;
  ballonRed.scale = 0.1;
  redB.add(ballonRed);
}

function greenBalloon() {
  var ballonGreen = createSprite(0, Math.round(random(20, 370)), 10, 10);
  ballonGreen.addImage(ballonImageGreen);
  ballonGreen.velocityX = 3;
  ballonGreen.lifetime = 150;
  ballonGreen.scale = 0.1;
  greenB.add(ballonGreen);
}

function blueBalloon() {
  var ballonBlue = createSprite(0, Math.round(random(20, 370)), 10, 10);
  ballonBlue.addImage(ballonImageBlue);
  ballonBlue.velocityX = 3;
  ballonBlue.lifetime = 150;
  ballonBlue.scale = 0.1;
  blueB.add(ballonBlue);
}


function pinkBalloon() {
  var ballonPink = createSprite(0, Math.round(random(20, 370)), 10, 10);
  ballonPink.addImage(ballonImagePink);
  ballonPink.velocityX = 3;
  ballonPink.lifetime = 150;
  ballonPink.scale = 1;
  pinkB.add(ballonPink);
}