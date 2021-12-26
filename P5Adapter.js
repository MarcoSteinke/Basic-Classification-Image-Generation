class P5Adapter {

    static canvasSize = 800;
    static backgroundColor = 220;

    constructor(pixels) {
        this.pixels = pixels;
        this.grid = new Grid(pixels);
    }

    getGridInformation() {
        return this.grid.getData();
    }

    addData(rowIndex, columnIndex, value) {
        console.log(`${rowIndex}, ${columnIndex}`);
        this.grid.set(rowIndex, columnIndex, value);
    }
}

class Grid {

    constructor(size) {
        this.data = this.initializeEmptyMatrix(size);
    }

    // Enable indexing from 1 to size, thus the grid is
    // accessible as Array[1,64][1,64]
    get(rowIndex,columnIndex) {
        return this.data[rowIndex-1][columnIndex-1];
    }

    // Enable indexing from 1 to size, thus the grid is
    // accessible as Array[1,64][1,64]
    set(rowIndex,columnIndex, value) {
        this.data[rowIndex-1][columnIndex-1] = value;
    }

    // Return the grid's internal data as two-dimensional array
    // of dimension size x size
    getData() {
        return this.data;
    }

    // Initialize a matrix of zeroes of dimension size x size.
    initializeEmptyMatrix(size) {
        const matrix = new Array(size).fill(new Array(size).fill(0));
        console.log(`Initialized empty matrix with size ${size}`);
        console.table(matrix);
        return matrix;
    }

    // Prints the matrix into a table
    print() {
        console.table(this.data);
    }
}

let adapter = new P5Adapter(128);

function setup() {
    noStroke()
    createCanvas(P5Adapter.canvasSize, P5Adapter.canvasSize);
}

// Draw a grid into the canvas
function drawGrid(grid) {
    grid.forEach( 
        (vector, rowIndex) => vector.forEach(
            (element, columnIndex) => {
                color(0)
                rect(rowIndex * (P5Adapter.canvasSize / adapter.pixels), columnIndex * (P5Adapter.canvasSize / adapter.pixels), P5Adapter.canvasSize / adapter.pixels, P5Adapter.canvasSize / adapter.pixels, color(0));
                color(255)
            }
        )
    );
}

function mouseClicked() {
    performDraw(adapter);
}

function performDraw(adapter) {
    adapter.addData(Math.floor(mouseX/(P5Adapter.canvasSize / adapter.pixels)), (Math.floor(mouseY/(P5Adapter.canvasSize / adapter.pixels))), 1);
}

function draw() {
  background(P5Adapter.backgroundColor);
  drawGrid(adapter.getGridInformation());
}


