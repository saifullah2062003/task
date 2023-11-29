// Lecture-2 Task-1 
let firstNum = 300;
let secondNum = 200;
let sum = firstNum + secondNum;
let sub = firstNum - secondNum;
let multi = firstNum * secondNum;
let div = firstNum / secondNum;
let end = firstNum % secondNum;
document.getElementById("demo1").innerHTML = "Sum is = "  + sum;
document.getElementById("demo2").innerHTML = "Sub is = " + sub;
document.getElementById("demo3").innerHTML = "Multipilication is = " + multi;
document.getElementById("demo4").innerHTML = "Divition is = " + div;
document.getElementById("demo5").innerHTML = "Percentage is = " + end;

// task-2 
let r = 2;
let circle = 3.1416*r**2;
document.getElementById('circle').innerHTML = "Circle is = " + circle;
// square
let area = 2;
document.getElementById('square').innerHTML = "Square is = " +area**2;
// rectangle
let width = 10;
let height = 10;
let rectangle = width * height;
document.getElementById('rectangle').innerHTML = "Rectangle is = " + rectangle;
// pentagon 
let p = 10;
let a = 5;
document.getElementById('pentagon').innerHTML = "Pentagon is = "+ 0.5 * p * a;
// triangle 
let b = 10;
let h = 10;
document.getElementById('triangle').innerHTML = "Triangle is = " + b * h / 2;
// hexagon 
let s = 10;
let hexagon =(5.196/2)*10**2;
document.getElementById('hexagone').innerHTML = "Hexagon is = " + hexagon;



// task-3 
//Celsius
let fahrenheit = 100;
let sm = 5 / 9;
let centrigrate = (fahrenheit-32) * sm;
document.getElementById('fahranhit').innerHTML = "Celsius is = " + parseInt(centrigrate);


// task-01

let num = 60;

if (num >= 80 && num <= 100) {
    document.getElementById('saiful1').innerHTML = 
    "Your grade is= 4.00";
} else if (num >= 70 && num < 80) {
    document.getElementById('saiful2').innerHTML = "Your grade is = 3.50";
} else if (num >= 60 && num < 70) {
    document.getElementById('saiful3').innerHTML = "Your grade is = 3.00";
} else if (num >= 50 && num < 60) {
    document.getElementById('saiful4').innerHTML = "Your grade is = 2.50";
} else if (num < 50) {
    document.getElementById('saiful5').innerHTML = "Your grade is = 0.00";
}