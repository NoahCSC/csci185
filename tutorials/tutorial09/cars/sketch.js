const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// feel free to change these values as you like!
const c1 = {
    x: 100,
    y: 100,
    width: 200,
    speed: 2,
    color: 'hotpink'
};
const c2 = {
    x: canvasWidth - 100,
    y: 500,
    width: 200,
    speed: 3,
    color: 'green'
};


// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


// animation loop:
function draw() {
    // clear the canvas:
    clear();

    // move the car:
    c1.x += c1.speed;
if (c1.x > canvasWidth + 70) {
    c1.x = -70;}

    // redraw the car:
    drawCar(c1.x, c1.y, c1.width, c1.color);
    
    // draw the grid (optional -- feel free to remove this line):
   // drawGrid(canvasWidth, canvasHeight);
   c2.x -= c2.speed;
   if (c2.x < -50) {
    c2.x = canvasWidth + 50;
   }
   drawCar(c2.x, c2.y, c2.width, c2.color);

}


// this function's job is to draw a car based on the 
// parameters the user passes in (x, y, size, fillColor, and wheelColor)
function drawCar(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);
    
    // body
    fill(fillColor);
    rect(x - size/4, y - (size/5 + size/7), size / 2, size/7); // top
    rect(x - size/2, y - size/5, size, size/5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}
