let canvas
let array = []
function setup() {
  canvas = createCanvas(400, 400);
  noStroke()
  frameRate(60)
}

function draw() {
  background(220);
  if(mouseIsPressed) {
    array.push(
      {
        x: Math.round(mouseX),
        y: Math.round(mouseY)
      }
    )
  }
  array.forEach(entry => ellipse(entry.x, entry.y, 5, 5))
  
}

function keyPressed() {
  if(keyCode === ENTER) {
    console.table(array)
    array = []
  }
}
