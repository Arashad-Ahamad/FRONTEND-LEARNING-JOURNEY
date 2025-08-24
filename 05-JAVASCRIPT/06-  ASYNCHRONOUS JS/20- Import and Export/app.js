
// ------------------------------
// Exports
// ------------------------------

// Example 1: Normal named exports
export const pi = 3.1;              // variable export
export function add(a, b) {         // function export
  return a + b;
}
export function subtract(a, b) {    // function export
  return a - b;
}

// Example 2: Multiple exports at once
const a = 'Arshad';
function greet(x, y) {
  return x * y;
}
const b = 10;

// exporting all together
export { a, greet, b };

// Example 3: Rename export
function addition(a, b) {
  return a + b;
}
// Exporting with rename: addition → sum
export { addition as sum };

// Example 4: Normal export
function sub(c, d) {
  return c - d;
}
export { sub };

// ------------------------------
//  Default Export
// ------------------------------
// Example 5:
export default function multiply(a, b) {
    return a * b
}

