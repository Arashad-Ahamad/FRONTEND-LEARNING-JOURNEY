//  Example 1: Hoisting with var
console.log(userName); // Output: undefined
var userName = 'Arashad';

//  Example 2: Hoisting with let
// console.log(a); //  ReferenceError: Cannot access 'a' before initialization
// let a = 5;

//  Example 3: Hoisting with const
// console.log(b); //  ReferenceError: Cannot access 'b' before initialization
// const b = 10;

//  Example 4: Function Declaration (fully hoisted with body)
greet();
function greet() {
    console.log('Hello Arashad.');
}

//  Example 5: Function Expression with var
// sayHi(); //  TypeError: sayHi is not a function
// var sayHi = function() {
//     console.log('Hi');
// };

//  Example 6: Anonymous Function assigned to const (not hoisted)
// const message = function() {
//     console.log('Hello world!');
// };
// message(); //  Works only after definition

//  Example 7: IIFE (Immediately Invoked Function Expression)
(function () {
    console.log('Hi');
})();
