// Math Object in JavaScript
// Properties on Math Object
// Math.PI
console.log(Math.PI); // Output: 3.141592653589793
// Math.SQRT2
console.log(Math.SQRT2); // Output: 1.4142135623730951
// Math.E
console.log(Math.E); // Output: 2.718281828459045

// Methods on Math Object

// Math.sqrt(x) - Returns the square root of a number
const num = 16;
const result = Math.sqrt(num);
console.log(result); // Output: 4

const num2 = 25;
const result2 = Math.sqrt(num2);
console.log(result2); // Output: 5

const num3 = 100;
const result3 = Math.sqrt(num3);
console.log(result3); // Output: 10

console.log(Math.sqrt(36)); // Output: 6
console.log(Math.sqrt(81)); // Output: 9

// Math.pow(x, y) - Returns the value of x raised to the power y
const base = 2;
const exponent = 4;
const result5 = Math.pow(base, exponent);
console.log(result5); // Output: 16

console.log(Math.pow(5, 2)); // Output: 25
console.log(Math.pow(3, 3)); // Output: 27
console.log(Math.pow(2, 6)); // Output: 64

// Math.floor(x) - Rounds down to the nearest integer
console.log(Math.floor(4.7)); // Output: 4
console.log(Math.floor(9.99)); // Output: 9
console.log(Math.floor(2.99999999999)); // Output: 2
console.log(Math.floor(5)); // Output: 5
console.log(Math.floor(-7)); // Output: -7

console.log(Math.floor(-4.7)); // Output: -5
console.log(Math.floor(-9.1)); // Output: -10
console.log(Math.floor(-6.5)); // Output: -7

// Math.ceil(x) - Rounds up to the nearest integer
console.log(Math.ceil(4.1)); // Output: 5
console.log(Math.ceil(6.3)); // Output: 7
console.log(Math.ceil(8.7)); // Output: 9
console.log(Math.ceil(9.9)); // Output: 10
console.log(Math.ceil(2)); // Output: 2
console.log(Math.ceil(-3)); // Output: -3
console.log(Math.ceil(-5.9)); // Output: -5
console.log(Math.ceil(-1.3)); // Output: -1

// Math.round(x) - Rounds to the nearest integer
console.log(Math.round(2.3)); // Output: 2
console.log(Math.round(2.4)); // Output: 2
console.log(Math.round(4.5)); // Output: 5
console.log(Math.round(5.7)); // Output: 6
console.log(Math.round(-4.2)); // Output: -4
console.log(Math.round(-4.5)); // Output: -4
console.log(Math.round(-4.7)); // Output: -5

// Math.random() - Returns a random value between 0 and 1
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

// random decimal between 0 and 20 (excluding 20)
console.log(Math.random() * 20);
// random integer between 0 and 20 (excluding 20)
console.log(Math.floor(Math.random() * 20));

// Random decimal between 0 and 30 (including 30)
console.log(Math.random() * 31);
// Random integer between 0 and 30 (including 30)
console.log(Math.floor(Math.random() * 31));

// Infinity in JavaScript
console.log(8 / 0);
console.log(-10 / 0);
console.log(typeof Infinity);

// NaN in JavaScript
console.log(0 / 0);
console.log("Hello" * 5);

// document.writeln() - Writes output to the HTML page

// document.writeln("Hello, World!"); // Writes in the HTML document
// document.writeln("Welcome to JavaScript!"); // Writes on the next line in the HTML document

// Math Question Solve - Calculates the area of a rectangle

// const width = +prompt('Please Enter Rectangle Width')
// console.log(width);
// const height = +prompt('Please Enter Rectangle Height')
// console.log(height);
// const result6 = width * height
// console.log(result6);
//  document.writeln(`Rectangle Area: ${width * height}`)