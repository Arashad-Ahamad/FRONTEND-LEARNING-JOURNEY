// Example 1: Age Check Using if...else
// let age = 190
// let result

// if (age >= 18) {
//   result = 'Adult'
// } else {
//   result = 'Minor'  
// }
// console.log(result)

// ----------------------------------------
// Example 1: Age Check Using Ternary Operator
const age = 90
const result = age >= 18 ? 'Adult' : 'Minor'
console.log(result)

// ----------------------------------------
// Example 2: Even or Odd Number Using if...else
// let num = 3
// let result2

// if (num % 2 == 0) {
//     result2 = 'Even'
// } else {
//     result2 = 'Odd'
// }
// console.log(result2);

// ----------------------------------------
// Example 2: Even or Odd Number Using Using Ternary Operator
const num = 9
const result2 = num % 2 == 0 ? 'Even' : 'Odd'
console.log(result2)

// ----------------------------------------
//  Example 3: Direct Console Output Using Using Ternary Operator
console.log(10 > 5 ? '10 is greater' : '5 is greater')
// console.log(10 < 5 ? '10 is greater' : '5 is greater');

// ----------------------------------------
// Example 4: Student Grade Evaluation using if-else (Multiple Conditions)
// let marks = 90
// let grade

// if (marks >= 90) {
//   grade = 'A+'
// } else if (marks >= 80) {
//   grade = 'A'
// } else if (marks >= 70) {
//   grade = 'B'
// } else {
//   grade = 'Fail'
// }
// console.log(grade);

// ----------------------------------------
// Example 4: Student Grade Evaluation using using Ternary Operator (Multiple Conditions)
const marks = 70
const grade =
  marks >= 90 ? 'A+' : marks >= 80 ? 'A' : marks >= 70 ? 'B' : 'Fail'

console.log(grade)

// ----------------------------------------
// Number Positive, Negative, or Zero using Ternary Operator
const number = -9
const result3 = number > 0 ? 'Positive' : number < 0 ? 'Negative' : 'Zero'
console.log(result3)

// ----------------------------------------
// Gender-Based Message Using Ternary Operator
const gender = 'Male'
const userMessage = `${
  gender.toLowerCase() == 'male' ? 'He' : 'She'
} is a College Student.`
console.log(userMessage)

// ----------------------------------------
// Truthy & Falsy Values in Ternary Operator

// Question 1
const username = 'Arashad' // Non-empty string is truthy
const message = username ? `Welcome, ${username}!` : 'Guest User'
console.log(message) // Output: "Welcome, Arshad!"

// Question 2
const num2 = 0 // 0 is falsy
const output = num2 ? 'Valid number' : 'Invalid number'
console.log(output) // Output: 'Invalid number'

// Question 3
const user = null // Null is falsy
const userStatus = user ? 'User exists' : 'User not found'
console.log(userStatus) // Output: "User not found"

// Question 4
const a = 5
const b = 8
const c = 6
const largestNum = a >= b && a >= c ? a : b >= a && b >= c ? b : c
console.log(largestNum)

// Question 4
const a2 = 5
const b2 = 8
const c2 = 6

console.log(a2 > b2 && a2 > c2 ? a2 : b2 > c2 ? b2 : c2)

// ----------------------------------------
// Question 5
// What is the fundamental difference between ternary operator and if else statements?
// The ternary operator is a shorthand version of if-else. Both perform the same function—checking conditions—but:
// The ternary operator allows writing conditions in a single line, making the code concise and clean.
// The if-else statement is longer but improves readability, especially for complex logic.
// ----------------------------------------
// Question 6
// Can you explain why expressions can appear within statements but statements cannot appear within expressions in JavaScript?

// In JavaScript, expressions are those that return a value, whereas statements are those that perform an action.
// • Expressions can be written inside statements because they produce a value.
// Example:
// let result = 10 + 5;  // "10 + 5" is an expression that returns 15.
// console.log(result);   // Here, the expression is inside a statement.

// • Statements cannot be written inside expressions because statements do not return a value; they only perform operations.
// Example (Invalid):
// let x = if (true) { console.log("Hello"); };  // Error, because if statement does not return a value.
// Conclusion:

// • Expressions always return a value, so they can appear inside statements.
// • Statements only perform actions, so they cannot be placed inside expressions.

// ----------------------------------------
