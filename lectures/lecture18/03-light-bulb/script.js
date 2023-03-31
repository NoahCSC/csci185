const imgOn = "https://www.w3schools.com/js/pic_bulbon.gif";
const imgOff = "https://www.w3schools.com/js/pic_bulboff.gif";
const elem = document.querySelector("#my_image");

function turnOnOff() {
console.log('Image clicked');
// Toggle switch *//
if (elem.src === imgOff) {
    elem.src = imgOn;  
} else {
    elem.src = imgOff;
}


}
