let img;

class Entity {}

function preload() {
  img = loadImage("assets/pipe.png");
}

function setup() {
  createCanvas(900, 450);
}

function draw() {
  background(220);

  image(img, 0, 400, 69, 100);
  ellipse(50, 50, 80, 65).fill("#fae502").stroke(0, 0);
}
