const DARK_BLUE = '#1D3557';
const MID_BLUE = '#457B9D';
const LIGHT_BLUE = '#A8DADC';
const WHITE = '#F1FAEE';
const RED = '#E63946';

let x = 100;
let y = 100;

function setup() {
  createCanvas(800, 800);
  strokeWeight(20.0);
  stroke(255, 100);
}

function draw() {
  background(DARK_BLUE);

  if (keyIsDown(LEFT_ARROW) && x > 0) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW) && x < 800) {
    x += 5;
  }

	if (keyIsDown(UP_ARROW) && y > 0) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW) && y < 800) {
    y += 5;
  }

  ellipse(x, y, 100, 100);
}
