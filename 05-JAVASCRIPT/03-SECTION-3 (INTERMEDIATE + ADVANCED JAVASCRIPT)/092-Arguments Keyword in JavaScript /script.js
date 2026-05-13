// -------------------------------------
// Arguments keyword in JavaScript
// -------------------------------------

//  Example 1: Accessing arguments using the 'arguments' object
function greet() {
    console.log(arguments);       // Logs all arguments as an array-like object
    console.log(arguments[0]);    // Logs: 1
    console.log(arguments[1]);    // Logs: 2
    console.log(arguments[2]);    // Logs: 3
    console.log(arguments[3]);    // Logs: 4
    console.log(arguments[4]);    // Logs: 5
}
greet(1, 2, 3, 4, 5);

//  Example 2: Finding the number of arguments passed
function showArgs() {
    console.log(arguments.length); // Logs: 9 (total number of arguments)
}
showArgs(12, 13, 14, 15, 16, 17, 18, 19, 20);

//  Example 3: Looping through all arguments
function printAll() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]); // Logs each argument one by one
    }
}
printAll('Arashad', 21, 'India');

//  Example 4: Using parameters with arguments
function showInfo(a, b) {
    console.log(arguments); // Logs all arguments even if not declared in parameter list
}
showInfo(10, 20);


