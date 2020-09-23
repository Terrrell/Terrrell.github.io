let scout;
let scoutscaler = 1.5;
let x, y;
let isMovingLeft, isMovingRight, isMovingUp, isMovingDown

function setup() {
  createCanvas(windowWidth, windowHeight);
  scout = loadImage("yes.png");
  x = width/2;
  y = height/2;
  isMovingLeft = false;
  isMovingRight = false;
  isMovingUp = false;
  isMovingDown = false;
}

function draw() {
  background(220);
  
  handleKeys();
  displayScout();
}

function handleKeys() {
  if (isMovingUp) {
    y -= 5;
  }
  if (isMovingDown) {
    y +=5;
  }
  if (isMovingLeft) {
    x -= 5;
  }
  if (isMovingRight) {
    x += 5;
  }
}

function keyPressed() {
  if (key === 'w') {
    isMovingUp = true;
  }
  if (key === 's') {
    isMovingDown = true;
  }
  if (key === 'a') {
    isMovingLeft = true;
  }
  if (key === 'd') {
    isMovingRight = true;
  }
}

function keyReleased() {
  if (key === 'w') {
    isMovingUp = false;
  }
  if (key === 's') {
    isMovingDown = false;
  }
  if (key === 'a') {
    isMovingLeft = false;
  }
  if (key === 'd') {
    isMovingRight = false;
  }
}

function displayScout() {
  image(scout, x, y, scout.width*scoutscaler, scout.height*scoutscaler)
  imageMode(CENTER)
}
  