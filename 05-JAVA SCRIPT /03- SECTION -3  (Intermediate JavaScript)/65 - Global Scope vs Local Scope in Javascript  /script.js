// Example 1: Global Scope
let username1 = 'Arashad'; // Global scope

function greet() {
    console.log('Hello ' + username1); //  Accessible
}
greet();
console.log(username1); //  Accessible


// Example 2: Global Scope
let y = 300; // Global scope

if (true) {
    console.log(y); //  Accessible
}
console.log(y); //  Accessible


// Example 3: Local Scope (Function Scope)
function sayHi() {
    let greeting = 'Hi'; // Function scope
    console.log(greeting); //  Accessible
}
sayHi();
// console.log(greeting);  Error: greeting is not defined


// Example 4: Local Scope (Block Scope)
{
    let age = 21; // Block scope
    console.log(age); //  Accessible
}
// console.log(age);  Error: age is not defined


// Example 5: Local Scope (Block Scope)
if (true) {
    let city = 'Delhi'; // Block scope
    console.log(city); //  Accessible
}
// console.log(city);  Error: city is not defined


// Example 6: Global + Local Scope
let username2 = 'Arashad'; // Global scope

function showMessage() {
    let message = `Welcome ${username2}`; // Function scope
    console.log(message); //  Accessible
}
showMessage();
console.log(username2); //  Accessible
// console.log(message);  Error: message is not defined


// Example 7: Function Scope
function test() {
    let x = 10; // Function scope
    console.log(x); //  Output: 10
}
test();
// console.log(x);  Error: x is not defined


// Example 8: Function Scope
function add() {
    const a = 5; // Function scope
    console.log(a); //  Output: 5
}
add();
// console.log(a);  Error: a is not defined


// Example 9: Function Scope
function user() {
    var username3 = 'Asif'; // Function scope
    console.log(username3); //  Accessible
}
user();
// console.log(username3);  Error: username3 is not defined
