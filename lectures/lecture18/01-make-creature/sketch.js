function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);


makeCreature(350,200,'cyan');

    

    





    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}
function makeCreature(x, y, color, color2='black') {
  
// your creature:
fill(color);
circle(x, y, 300);

fill(color2);
ellipse(x - 50, y - 50, 30, 40);
ellipse(x + 50, y - 50, 30, 40);

}
function mouseClicked() {
    makeCreature(mouseX,mouseY,'cyan');

}
function mouseDragged() {
    makeCreature(mouseX,mouseY,'cyan');
}