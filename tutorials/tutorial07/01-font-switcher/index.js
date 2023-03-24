function makeBigger() {
   document.querySelector('#bigger');
   document.querySelector('body').style.fontSize = "x-large";
   document.querySelector('h1').style.fontSize = "x-large";
  
};

function makeSmaller() {
   document.querySelector('#smaller');
   document.querySelector('body').style.fontSize = "small";
   document.querySelector('h1').style.fontSize = "small";
};

/*
Tips:
1. First, in the index.html file, add an onclick attribute to each button.
   The value of the attribute should be a call to the corresponding function
   (see class demos).

2. Then modify the body of the "makeBigger" and 
   "makeSmaller" functions (in between the curly braces)
   to target the body element and set it's font size.
*/
