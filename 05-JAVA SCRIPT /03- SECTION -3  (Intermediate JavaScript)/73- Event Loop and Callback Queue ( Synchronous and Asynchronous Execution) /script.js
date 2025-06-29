// -----------------------------------------------------
// Synchronous
// -----------------------------------------------------

// Example 1: Simple Console Logs (Line-by-Line Execution)
console.log('Hello');
console.log('World');

// Example 2: Normal Functions (Without Delay)
function greet() {
    console.log('Good Morning');
}
function bye() {
    console.log('Good Bye');
}
greet();
bye();

// Example 3: Loop Example (Blocking Code)
for (let i = 0; i < 3; i++) {
    console.log(`Loop: ${i}`);
}
console.log('Done');

// Example 4: Math or Calculation
let a = 10;
let b = 20;
let sum = a + b;
console.log(`Sum: ${sum}`);

// -----------------------------------------------------
// Asynchronous
// -----------------------------------------------------

// Example 5: setTimeout() (Runs after a delay)
setTimeout(function() {
    console.log('Arshad');
}, 2000); // 2 second delay

// Example 6: setInterval() (Runs repeatedly every 1 second)
let message = setInterval(function() {
    console.log('Hi');
}, 1000);

// Stop the interval after 3 seconds and print 'End'
setTimeout(function() {
    clearInterval(message);
    console.log('End');
}, 4000);

// -----------------------------------------------------
// Final Code
// -----------------------------------------------------

// Example 7:

console.log("1");

setTimeout(function () {
  console.log("2");
}, 2000);

console.log("3");
