var col = 0;
var r = 0;
var b = 255;
var g = 255

function setup() {
  createCanvas(600, 400);
}

function draw() {
  //bakgrunnen
  background(r, g, b);
  r = map(mouseX, 0, 600, 0, 255)
  b = map(mouseX, 0, 600, 255, 0)
  g = map(mouseY, 0, 400, 0, 255)

  //ellipsen
  noStroke();
  ellipse(mouseX, mouseY, 50, 50)
  fill(255)

  //linjen
  stroke(0, 0, 0)
  line(300, 0, 300, 400)

}