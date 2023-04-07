function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    let y = 0;
    let width = 15;
    let x1 = 100;
    let x2 = 200;
    let x3 = 300;
    while (y <= 750) {
        fill('blue');
        circle(x1, y, width);
        fill('green');
        circle(x2, y, width);
        fill('orange');
        circle(x3, y, width);
        y += 20;
        width += 20;
        x1 += 20;
        x2 *= 1.04;
        x3 -= 20;
    }
   

    drawGrid(canvasWidth, canvasHeight);
}
