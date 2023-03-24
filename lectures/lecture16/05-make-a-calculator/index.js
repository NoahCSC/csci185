function addNumbers() {
    // Your job: 
    //  +1. Access the first number that the user typed in and store it
    //    as a variable.
    // +2. Access the second number that the user typed in and store it
    //    as a variable.
    
    // 3. Convert the values stored inside of the two variables to a 
    //    number (so that you can do math)!
    // +4. Add the two numbers together.
    // 5. Write the result to the #answer section
   let firstNum = document.querySelector('#num1').value;
   let secondNum = document.querySelector('#num2').value;
   firstNum = Number(firstNum);
   secondNum = Number(secondNum);
   let result = firstNum + secondNum;
   document.querySelector('#answer').innerHTML = result;

}

function subtractNumbers() {
    // Same as above but subtract!
    let firstNum = document.querySelector('#num1').value;
   let secondNum = document.querySelector('#num2').value;
   firstNum = Number(firstNum);
   secondNum = Number(secondNum);
    let result = firstNum - secondNum;
   document.querySelector('#answer').innerHTML = result;
}

function multiplyNumbers() {
    // Same as above but multiply!
    let firstNum = document.querySelector('#num1').value;
   let secondNum = document.querySelector('#num2').value;
   firstNum = Number(firstNum);
   secondNum = Number(secondNum);
    let result = firstNum * secondNum;
   document.querySelector('#answer').innerHTML = result;
}

function divideNumbers() {
    // Same as above but divide!
    let firstNum = document.querySelector('#num1').value;
   let secondNum = document.querySelector('#num2').value;
   firstNum = Number(firstNum);
   secondNum = Number(secondNum);
    let result = firstNum / secondNum;
   document.querySelector('#answer').innerHTML = result;
}

