const DARK_BLUE = '#1D3557';
const MID_BLUE = '#457B9D';
const LIGHT_BLUE = '#A8DADC';
const WHITE = '#F1FAEE';
const RED = '#E63946';

let x = 100;
let y = 100;
let angle = 0.0;
let seg_length = 50;

function setup() {
  createCanvas(800, 800);
  strokeWeight(20.0);
  stroke(255, 100);
}

function draw() {
  background(DARK_BLUE);

  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }

  ellipse(x, y, 20, 20);

}
