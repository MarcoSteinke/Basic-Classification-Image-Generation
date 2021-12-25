class P5Adapter {

    static canvasSize = 800;
    static backgroundColor = 220;

    constructor(pixels) {
        this.pixels = pixels;
    }
}

let adapter = new P5Adapter(64);

function setup() {
  createCanvas(P5Adapter.canvasSize, P5Adapter.canvasSize);
}

function draw() {
  background(P5Adapter.backgroundColor);
}


