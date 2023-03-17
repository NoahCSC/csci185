
function makeRed() {
    // your code here...
    console.log('Change background to red');
    document.querySelector('#section1').style.backgroundColor = 'red';
    document.querySelector('#section1').style.color = 'white';
};

function makeBlue() {
    // your code here...
    console.log('Change background to blue');
    document.querySelector('#section2').style.backgroundColor = 'blue';
    document.querySelector('#section2').style.color = 'white';
};

function makePink() {
    // your code here...
    console.log('Change background to pink');
    document.querySelector('#section3').style.backgroundColor = 'pink';
    document.querySelector('#section3').style.color = 'white';
};

function makeOrange() {
    // your code here...
    console.log('Change background to orange');
    document.querySelector('#section4').style.backgroundColor = 'orange';
    document.querySelector('#section4').style.color = 'white';
};
function clearscreen() {
    // your code here...
    console.log('Clear all sections to default');
    document.querySelector('#section1').style.backgroundColor = 'white';
    document.querySelector('#section1').style.color = 'black';
    document.querySelector('#section2').style.backgroundColor = 'white';
    document.querySelector('#section2').style.color = 'black';
    document.querySelector('#section3').style.backgroundColor = 'white';
    document.querySelector('#section3').style.color = 'black';
    document.querySelector('#section4').style.backgroundColor = 'white';
    document.querySelector('#section4').style.color = 'black';
   
};

