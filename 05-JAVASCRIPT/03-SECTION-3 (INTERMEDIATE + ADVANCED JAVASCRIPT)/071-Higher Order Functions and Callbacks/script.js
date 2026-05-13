// -------------------------------------------------------------------
// Function Basics
// -------------------------------------------------------------------

// Example 1: Normal function (no parameter, no return)
function meraFunction() {
  console.log('Hi');
}
meraFunction(); // Output: Hi

// Example 2: Function with parameter and argument (no return)
function helloName(naam) {
  console.log('Hello ' + naam);
}
helloName('Arashad'); // Output: Hello Arashad

// Example 3: Function expression
const sayHello = function() {
  console.log('Hello');
}
sayHello(); // Output: Hello

// Example 4: Function with return value
function hi() {
  let a = 5;
  return a;
}
let result = hi();
console.log(result); // Output: 5

// Example 5: Function assigned to a variable and called
function sayhi() {
  console.log('Hello World');
}
const greet = sayhi;
greet(); // Output: Hello World

// -------------------------------------------------------------------
// You can pass almost anything as an argument to a function:
// -------------------------------------------------------------------

// Example 6: Passing number as argument
function show(num) {
  console.log(num);          
}
show(10); // Output: 10

// Example 7: Passing string as argument
function show2(msg) {
  console.log(msg);
}
show2('Hello'); // Output: Hello

// Example 8: Passing boolean
function check(value) {
  console.log(value);
}
check(true); // Output: true

// Example 9: Passing array
function printArray(a) {
  console.log(a);
}
const fruits2 = ['Apple', 'Banana', 'Grapes'];
printArray(fruits2); // Output: [ 'Apple', 'Banana', 'Grapes' ]

// Example 10: Passing object
function printUser(user) {
  console.log(`${user.name} is ${user.age} years old.`);
}
printUser({name: 'Arashad', age: 21}); // Output: Arashad is 21 years old.

// Example 11: Passing undefined, null, NaN, BigInt
function test(b) {
  console.log(b);
}
test(undefined);  // Output: undefined
test(null);       // Output: null
test(NaN);        // Output: NaN
test(10n);        // Output: 10n

// -------------------------------------------------------------------
// Callback Functions (function passed as argument)
// -------------------------------------------------------------------

// Example 12:
function greet2 () {
  console.log('Hello');
}
function callMe(func) {
  func();
}
callMe(greet2); // Output: Hello

// Example 13:
function display(name, age) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
}
function process(callBack) {
  let naam = 'Arashad';
  let umr = 21;
  callBack(naam, umr);
}
process(display); 
// Output:
// Name: Arashad
// Age: 21

// Example 14:
function hello2() {
  console.log('Hello, Arashad');
}
function excute(func) {
  func();
}
excute(hello2); // Output: Hello, Arashad

// Example 15:
function greet3(name) {
  console.log(`Hello ${name}`);
}
function excute2(func) {
  func('Ahad');
}
excute2(greet3); // Output: Hello Ahad

// Example 16:
function outerFunction(callBack) {
  let name = 'Khalid';
  callBack(name);
}
function greet4(n) {
  console.log(`Hello ${n}`);
}
outerFunction(greet4); // Output: Hello Khalid

// -------------------------------------------------------------------
// What can be returned from a function?
// -------------------------------------------------------------------

// Return Number
function getNumber() {
  return 10;
}
const number = getNumber();
console.log(number); // 10

// Return String
function getName() {
  return "Arshad";
}
const name = getName();
console.log(name); // Arshad

// Return Boolean
function isLoggedIn() {
  return true;
}
const loggedIn = isLoggedIn();
console.log(loggedIn); // true

// Return Null
function getNothing() {
  return null;
}
const nothing = getNothing();
console.log(nothing); // null

// Return Undefined
function notReturning() {}
const undefinedValue = notReturning();
console.log(undefinedValue); // undefined

// Return Object
function getUser() {
  return { name: "Arshad", age: 25 };
}
const user = getUser();
console.log(user); // { name: "Arshad", age: 25 }

// Return Array
function getFruits() {
  return ["apple", "banana", "mango"];
}
const fruits = getFruits();
console.log(fruits); // [ 'apple', 'banana', 'mango' ]

// Return Function
function outer() {
  return function() {
    return "Inner function";
  };
}
const inner = outer();
console.log(inner()); // Inner function

// Return Expression
function addTwo(a, b) {
  return a + b;
}
const sum = addTwo(2, 3);
console.log(sum); // 5

// Return Template String
function welcome(name) {
  return `Welcome, ${name}!`;
}
const greeting = welcome("Arshad");
console.log(greeting); // Welcome, Arshad!

// Conditional Return
function checkAge(age) {
  if (age >= 18) return "Adult";
  else return "Minor";
}
const ageStatus = checkAge(20);
console.log(ageStatus); // Adult

// Return Object with multiple values
function getDetails() {
  return {
    name: "Arshad",
    skills: ["HTML", "CSS", "JavaScript"]
  };
}
const details = getDetails();
console.log(details); // { name: 'Arshad', skills: [ 'HTML', 'CSS', 'JavaScript' ] }

// -------------------------------------------------------------------
// Higher-Order Functions
// -------------------------------------------------------------------

// Example 17: Function taking another function as argument
function higherOrder(callBack) {
  console.log('I am a higher order function');
  callBack();
}
function sayHello2() {
  console.log('Hello India');
}
higherOrder(sayHello2);
// Output:
// I am a higher order function
// Hello India

// Example 18: Function returning another function
function multiplier(x) {
  return function(y) {
    return x * y;
  };
}
const double = multiplier(2);
console.log(double(5)); // Output: 10

// Example 19:
function a(b) {
    console.log(typeof b);
    console.dir(b);
}

a(20)
a('Hello')
a([1, 2, 3])
a({name: 'Arashad', age: 21})
console.dir(a)

