class Firkant {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    draw() {
        fill(0, 0, 255);
        rect(this.x, this.y, this.w, this.h);
    }
}
class Cirkel {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.d = this.r * 2;
    }

    draw() {
        fill(255, 255, 0);
        ellipse(this.x, this.y, this.d);
    }
}