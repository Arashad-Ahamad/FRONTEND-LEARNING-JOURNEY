// Example 1: Simple addition of two numbers
function add(a, b) {
  return a + b;
}

let result1 = add(10, 6); // 10 + 6 = 16
console.log(result1); // Output: 16

//----------------------------------------

// Example 2: Multiplication of two numbers
function multiplyNumber(x, y) {
  let result = x * y;
  return result;
}

let output = multiplyNumber(6, 5); // 6 * 5 = 30
console.log(output); // Output: 30

//----------------------------------------

// Example 3: Check if a number is even
function isEven(num) {
  return num % 2 === 0; // Even number returns true, odd returns false
}

let check = isEven(4); // 4 is even, so true
console.log(check); // Output: true

//----------------------------------------

// Example 4: Greeting message
//  Incorrect way (prints in function, but doesn't return anything)
// function greet(name) {
//   console.log(`Hello, ${name}`);
// }
// let result2 = greet('Arashad')
// console.log(result2); // undefined

//  Correct way (returns a greeting string)
function greet(name) {
  return `Hello, ${name}`;
}

let result2 = greet('Arashad'); // returns "Hello, Arashad"
console.log(result2); // Output: Hello, Arashad

//----------------------------------------

// Example 5: Subtraction of two numbers
function Subtraction(a, b) {
  return a - b;
}

let result3 = Subtraction(10, 5); // 10 - 5 = 5
console.log(result3); // Output: 5

//----------------------------------------

// Example 6: Code after `return` does NOT run

function test() {
  console.log('start'); // This will print "start" to the console
  return 'Done';        // Function exits here and returns the string 'Done'
  console.log('This will not run.'); //  This line is never executed
}

let result4 = test(); // Calls the function — prints "start", returns "Done"
console.log(result4); // Output: Done

//----------------------------------------

// Example 7: Sum using expressions and nested functions
function sumNumber(a, b) {
  return a + b;
}

// 10 + 5 = 15, 6 + 4 = 10 => sumNumber(15, 10) = 25
const result5 = sumNumber(10 + 5, 6 + 4);

// 20 - 5 = 15, 3 + 2 = 5 => sumNumber(15, 5) = 20
const result6 = sumNumber(20 - 5, 3 + 2);

// Inner: sumNumber(5, 7) = 12, sumNumber(4, 6) = 10 => sumNumber(12, 10) = 22
const result7 = sumNumber(sumNumber(5, 7), sumNumber(3 + 1, 6));

console.log(result5, result6, result7); // Output: 25 20 22

//----------------------------------------------------------------

// Example 8: Subtraction with expressions and nested function calls
function decreaseNumber(a, b) {
  return a - b;
}

// 10 + 5 = 15, 6 + 4 = 10 => decreaseNumber(15, 10) = 5
const result8 = decreaseNumber(10 + 5, 6 + 4);

// 20 - 5 = 15, 3 + 2 = 5 => decreaseNumber(15, 5) = 10
const result9 = decreaseNumber(20 - 5, 3 + 2);

// Inner: decreaseNumber(40, 6) = 34, decreaseNumber(8, 2) = 6 => decreaseNumber(34, 6) = 28
const result10 = decreaseNumber(decreaseNumber(40, 6), decreaseNumber(8, 2));

console.log(result8, result9, result10); // Output: 5 10 28

//----------------------------------------------------------------
// Question 1:
function eligibleToVote(age){
  return age >= 18
}
let check2 = eligibleToVote(19)
console.log(check2);

//----------------------------------------------------------------
// Question 2:
function getDiscountedPrice(originalPrice, DiscountPercent) {
 let discount = (originalPrice * DiscountPercent) / 100
  return originalPrice - discount
}
let finalPrice = getDiscountedPrice(1000, 20)
console.log(finalPrice);