// -------------------------------------------------------
//  setTimeout function
// -------------------------------------------------------

// Example 1: Show message after 3 seconds
setTimeout(function () {
  console.log('Hello World');
}, 3000);

// Example 2: Call a function after 5 seconds
function greet() {
  console.log('Hello Arashad');
}
setTimeout(greet, 5000);

// Example 3: Check execution order
console.log('Hi');
setTimeout(function () {
  console.log('Macbook');
}, 2000);
console.log('Mobile');

// Example 4:

// Step 1: Define a named function
function showApple() {
  console.log('Apple');
}

// Step 2: Call the function after 2 seconds using setTimeout
setTimeout(showApple, 2000);

// Step 3: This runs immediately
console.log('Banana');


// -------------------------------------------------------
//  clearTimeout function
// -------------------------------------------------------

// Example 5: Cancel a scheduled timeout
let alarm = setTimeout(function () {
  console.log('India');
}, 3000);
clearTimeout(alarm); //  This will cancel the timeout, so nothing will print

// Example 6: Cancel a timeout after 2 seconds
let result = setTimeout(function () {
  console.log('Mobile');
}, 5000);

console.log('Tablet');

setTimeout(function () {
  clearTimeout(result); //  "Mobile" will not print
  console.log('Leptop'); //  This will print after 2 seconds
}, 2000);

// -------------------------------------------------------
//  setTimeout and clearTimeout Demonstration
// -------------------------------------------------------
// Example 7:
// Step 1: Schedule a message to show after 1 second
let mobileTimeout = setTimeout(function () {
  console.log('Apple');  // This will print after 1 second
}, 1000);

// Step 2: This message prints immediately
console.log('Banana');  // Prints instantly

// Step 3: Try to cancel the timeout after 6 seconds
setTimeout(function () {
  clearTimeout(mobileTimeout); //  Too late! "Apple" already printed
  console.log('Grapes');     // This will print after 6 seconds
}, 6000);

// -------------------------------------------------------
//  setInterval function
// -------------------------------------------------------

// Example 8: Repeating message every 3 seconds (commented out)
/*
setInterval(function() {
  console.log('Ghazipur');
}, 3000);
*/


// -------------------------------------------------------
//  clearInterval function
// -------------------------------------------------------

// Example 9: Start and immediately cancel the interval
/*
let a = setInterval(function() {
  console.log('Ghazipur');
}, 3000);
clearInterval(a); //  It stops immediately, so nothing is printed
*/

// Example 10: Stop interval after 6 seconds
const id = setInterval(function () {
  console.log('Ahad');
}, 2000);

setTimeout(function () {
  clearInterval(id); //  Stops after 6 seconds
  console.log('Aman'); //  This prints once after stopping
}, 6000);

// Example 11: Stop interval after 4.5 seconds
const id2 = setInterval(function () {
  console.log('Usa');
}, 2000);

setTimeout(function () {
  clearInterval(id2); //  Stops after 4.5 seconds
  console.log('Uk');
}, 4500);
