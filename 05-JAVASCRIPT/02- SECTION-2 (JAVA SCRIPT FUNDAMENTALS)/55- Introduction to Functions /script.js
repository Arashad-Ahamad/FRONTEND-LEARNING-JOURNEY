// ---------------------------------------------------------
// 1. Simple Function Without Parameters
// ---------------------------------------------------------

// Example 1: A simple function that prints a greeting message
function greet() {
  console.log('Hello, Arashad');
}
// Call the function
greet(); // Output: Hello, Arashad

// ---------------------------------------------------------

// Example 2: A function that adds two numbers and prints the result
function addNumber() {
  let a = 5;
  let b = 3;
  console.log(a + b);
}
// Call the function
addNumber(); // Output: 8

// ---------------------------------------------------------

// Example 3: A function that shows a message to turn on the light
function turnOnLight() {
  console.log('Light is ON');
}
// Call the function
turnOnLight(); // Output: Light is ON

// ---------------------------------------------------------

// Example 4: A function that displays today’s date
function showDate() {
  console.log('Today is April 29, 2025');
}
// Call the function
showDate(); // Output: Today is April 29, 2025


// ---------------------------------------------------------
// 2. Functions With Parameters (Input passed in the call)
// ---------------------------------------------------------

// Example 5: A function that takes a name and prints a greeting
function bio(name) {
  console.log(`Hello ${name}!`);
}
// Call the function with a name
bio('Asif'); // Output: Hello Asif!

// ---------------------------------------------------------

// Example 6: A function that adds two numbers passed as arguments
function add(a, b) {
  console.log(`Sum is: ${a + b}`);
}
// Call the function with values
add(5, 3); // Output: Sum is: 8

// ---------------------------------------------------------

// Example 7: A function that combines first and last name
function getFullName(firstName, lastName) {
  console.log(`Full Name: ${firstName + lastName}`);
}
// Call the function with two strings
getFullName('Arashad ', 'Ahamad'); // Output: Full Name: Arashad Ahamad

// ---------------------------------------------------------

// Example 8: A function that calculates the area of a rectangle
function areaOfRectangle(length, width) {
  console.log(`Area is: ${length * width}`);
}
// Call the function with length and width
areaOfRectangle(5, 8); // Output: Area is: 40

// ---------------------------------------------------------

// Example 9: A function to check if a number is even or odd
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    console.log(`${number} is Even`);
  } else {
    console.log(`${number} is Odd`);
  }
}
// Call the function with different numbers
checkEvenOdd(2);   // Output: 2 is Even
checkEvenOdd(3);   // Output: 3 is Odd
checkEvenOdd(12);  // Output: 12 is Even
checkEvenOdd(23);  // Output: 23 is Odd
checkEvenOdd(100); // Output: 100 is Even
checkEvenOdd(125); // Output: 125 is Odd

// ---------------------------------------------------------

// Example 10: A function that finds and prints the greater of two numbers
function findGreater(a, b) {
  if (a > b) {
    console.log(`${a} is Greater`);
  } else if (b > a) {
    console.log(`${b} is Greater`);
  } else {
    console.log(`${a} and ${b} are Equal`);
  }
}
// Call the function with two numbers
findGreater(30, 29); // Output: 30 is Greater
    
// ---------------------------------------------------------
//  Example 11: Default Parameter

// Function Define with Default Parameter
function introduceMe(username = 'Guest') {
  console.log(`My name is ${username}`);
}

// Function Call with argument
introduceMe('Arashad');   // Output: My name is Arashad

// Function Call without argument (uses default)
introduceMe();            // Output: My name is Guest

// ---------------------------------------------------------
//  Example 12: Multiple Parameters without Default Values

function intro(username, profession, age) {
  // Print values using template literals
  console.log(`My name is ${username}.`);
  console.log(`I am a ${profession}.`);
  console.log(`I am ${age} years old.`);
}

// Function Call with all arguments
intro('Arashad', 'Software Engineer', 21);
/*
Output:
My name is Arashad.
I am a Software Engineer.
I am 21 years old.
*/

intro('Asif', 'Banker', 25);
/*
Output:
My name is Asif.
I am a Banker.
I am 25 years old.
*/
