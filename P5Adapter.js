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

let adapter = new P5Adapter(8);

function setup() {
  createCanvas(P5Adapter.canvasSize, P5Adapter.canvasSize);
}

function draw() {
  background(P5Adapter.backgroundColor);
}


