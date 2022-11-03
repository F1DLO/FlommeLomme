function setup() {
    createCanvas(640, 480);
    frameRate(30);
    firkant = new Firkant(width * 1 / 4 - 25, height * 1 / 4 - 25, 25, 25);
    cirkel = new Cirkel(width * 3 / 4 - 12.5, height * 3 / 4 - 12.5, 12.5);
}

function draw() {
    background(69);

    firkant.draw();
    flyt_firkant();

    cirkel.draw();
    flyt_cirkel();
}

function flyt_firkant() {
    if (firkant.x <= (width * 3 / 4) - firkant.w && firkant.y <= (height * 1 / 4) - firkant.h) {
        firkant.x += 3;
    }
    if (firkant.y <= (height * 3 / 4) - firkant.h && firkant.x >= (width * 3 / 4) - firkant.w) {
        firkant.y += 3;
    }
    if (firkant.x >= (width * 1 / 4) - firkant.w && firkant.y >= (height * 3 / 4) - firkant.h) {
        firkant.x -= 3;
    }
    if (firkant.y >= (height * 1 / 4) - firkant.h && firkant.x <= (width * 1 / 4) - firkant.w) {
        firkant.y -= 3;
    }
}

function flyt_cirkel() {
    if (cirkel.x <= (width * 3 / 4) - cirkel.r && cirkel.y <= (height * 1 / 4) - cirkel.r) {
        cirkel.x += 3;
    }
    if (cirkel.y <= (height * 3 / 4) - cirkel.r && cirkel.x >= (width * 3 / 4) - cirkel.r) {
        cirkel.y += 3;
    }
    if (cirkel.x >= (width * 1 / 4) - cirkel.r && cirkel.y >= (height * 3 / 4) - cirkel.r) {
        cirkel.x -= 3;
    }
    if (cirkel.y >= (height * 1 / 4) - cirkel.r && cirkel.x <= (width * 1 / 4) - cirkel.r) {
        cirkel.y -= 3;
    }
}