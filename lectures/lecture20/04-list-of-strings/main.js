const names = [
    "Jane", "Brenda", "Wanda", "Maria", "Jasper",
    "John", "Malik", "Arjun", "Larry", "Curly", "Moe", "Noah", "Megan"
];


// use a while loop to output a message for each
// item in the array:
let i = 0;
while (i < names.length) {
const outputElement = document.querySelector('#output');
outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[i]}!</p>`);
i++;
}