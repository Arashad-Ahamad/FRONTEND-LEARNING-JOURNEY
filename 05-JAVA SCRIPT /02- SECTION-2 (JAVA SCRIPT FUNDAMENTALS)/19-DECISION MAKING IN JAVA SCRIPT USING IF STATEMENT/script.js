// Decision Making in JavaScript using If Statement

if (18 > 15) console.log("hi");  // This condition is true, so "hi" will be printed.

if (20 > 160) console.log("India"); // This condition is false, so "India" will NOT be printed.
console.log("world");  // This is outside the if statement, so it will always be printed.

const userAge = 28;
if (userAge >= 18) {
  console.log("Hello");
}

const userAge2 = 15;
if (userAge2 >= 18) {
  console.log("Hello World");
}

const userAge3 = 19;
if (userAge3 >= 18 && userAge3 <= 24) {
  console.log("Hi Arashad");
}

const userAge4 = 25;
if (userAge4 >= 18 && userAge4 <= 24) {
  console.log("Asif");
  console.log("Nawshad");
}

// Taking user input
const userName = prompt("Please Enter Your Name.");
const userAge6 = parseInt(prompt("Please Enter Your Age."));
console.log(`Name: ${userName}`); 
console.log(`Age: ${userAge6}`);

if (userAge6 >= 0 && userAge6 <= 4) {
  console.log(`${userName} is a kid.`);
}

if (userAge6 >= 5 && userAge6 <= 17) {
  console.log(`${userName} is a school student`);
}

if (userAge6 >= 18 && userAge6 <= 24) {
  console.log(`${userName} is a college student.`);
  console.log(`And he/she is learning computer science.`);
}

if (userAge6 >= 25 && userAge6 <= 45) {
  console.log(`${userName} is a working professional.`);
}

if (userAge6 > 45) {
  console.log(`${userName} is retired.`);
}

// Here’s how you can check if a number is even or odd using an if statement in JavaScript
// Step 1: Create a variable and assign a number
const num = 11; // You can change this number

// Step 2: Check if the number is even or odd
if (num % 2 === 0) {
  console.log(`${num} is even.`);
} 

if (num % 2 !== 0) {
  console.log(`${num} is odd.`);
}


// Here is the code to find the largest number among three numbers
// Step 1: Create three variables and assign numbers to them
const a = 15;
const b = 25;
const c = 10;

// Step 2: Check which number is the largest
if (a >= b && a >= c) {
  console.log(`${a} is the largest number.`);
}

if (b >= a && b >= c) {
  console.log(`${b} is the largest number.`);
}

if (c >= a && c >= b) {
  console.log(`${c} is the largest number.`);
}
