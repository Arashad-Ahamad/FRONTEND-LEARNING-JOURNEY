//  let variable (Block Scoped)
let firstName = 'Arashad'; // String variable
let lastName = 'Ahamad'; // String variable
let age = 21; // Number variable
let isHappy = true; // Boolean variable

// Reassigning let variable (Allowed but commented out here)
// firstName = 'Ahad';
// firstName = 100;

let a; // Undefined variable (Declaration without assignment)
// a = 'Asif'; // Value assignment (Currently commented out)

let userIntro = 'Hi, my name is ' + firstName + ' ' + lastName + '. I am ' + age + ' years old.';
let b = null; // Null variable (Represents "no value")

//  Logging values and their data types
console.log(firstName); // Output: Arashad
console.log(typeof firstName); // Output: string
console.log(age); // Output: 21
console.log(typeof age); // Output: number
console.log(isHappy); // Output: true
console.log(typeof isHappy); // Output: boolean
console.log(userIntro); // Output: Hi, my name is Arashad Ahamad. I am 21 years old.
console.log(typeof userIntro); // Output: string
console.log(a); // Output: undefined (No value assigned)
console.log(typeof a); // Output: undefined
console.log(b); // Output: null
console.log(typeof b); // Output: object (JavaScript bug, null is a primitive)

//  const variable (Block Scoped, Cannot be Reassigned)
const hoursInDay = 24; // Constant variable (Value cannot be changed)
console.log(hoursInDay); // Output: 24

//  var variable (Function Scoped, Hoisted)
console.log(studentName1); // Output: undefined (Because of Hoisting)

var username = 'Jack'; // String variable
username = 30; // Changing value (Allowed in var)
var p; // Undefined variable
p = 8; // Assigning value

//  Block Scope Example
{
    var studentName = 'Oliver'; // Accessible outside the block (var does not have block scope)
}

//  Declaring variables with var, let, and const
var studentName1 = 'Arif'; // Function-scoped variable
let studentName2 = 'Adarsh'; // Block-scoped variable
const studentName3 = 'Imran'; // Block-scoped, constant variable

//  Logging values
console.log(username); // Output: 30
console.log(p); // Output: 8
console.log(studentName); // Output: Oliver (because var is function-scoped)
console.log(studentName1); // Output: Arif
console.log(studentName2); // Output: Adarsh
console.log(studentName3); // Output: Imran

// Naming Conventions in JavaScript
// Camel Case (Recommended in JavaScript)
let myVariableName = 'Camel Case';

// Snake Case (Common in Python but not in JavaScript)
let my_variable_name = 'Snake Case';

// Pascal Case (Used for Class names in JavaScript)
let MyVariableName = 'Pascal Case';
