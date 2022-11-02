function setup() {
  createCanvas(400, 400);
  frameRate(30);
  firkant = new Firkant(50, 50, 25, 25);
}

function draw() {
  background(220);

  firkant.draw();
  flyt_firkant();
}

function flyt_firkant () {
  if (firkant.x <= (width * 3/4) - firkant.w) {
      firkant.x += 3;
  }
  if (firkant.y < (height * 3/4) - firkant.h && firkant.x > (width * 3/4) - firkant.w) {
    firkant.y += 3;
  }
}
