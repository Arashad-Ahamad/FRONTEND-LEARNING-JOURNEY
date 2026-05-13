// -------------------------------------------------------
// Using continue keyword with loops
// -------------------------------------------------------

// Example 1:
for (let i = 1; i <= 5; i++) {
  // If the value of i is 3, continue will skip this iteration
  if (i === 3) {
    continue // Skip the current iteration when i is 3
  }
  // If continue doesn't run, this line will execute and print i
  console.log(i) // Print the value of i
}

// Output: 1 2 4 5
// When i was 3, continue skipped that iteration, so 3 was not printed.

// -------------------------------------------------------

// Example 2:
for (let i = 1; i <= 10; i++) {
  // If i is an even number (i % 2 === 0), continue will skip this iteration
  if (i % 2 === 0) {
    continue // Skip even numbers
  }
  // If i is an odd number, it will print
  console.log(i) // Print the odd number i
}

// Output: 1 3 5 7 9
// When i was an even number (2, 4, 6, 8, 10), continue skipped those iterations,
// and only odd numbers were printed.

// -------------------------------------------------------

// Example 3:
for (let i = 1; i <= 10; i++) {
  // If i is either 5 or 7, continue will skip that iteration
  if (i === 5 || i === 7) {
    continue // Skip 5 and 7
  }
  // Print all other values of i
  console.log(i) // Print the value of i
}

// Output: 1 2 3 4 6 8 9 10
// When i was 5 or 7, continue skipped those iterations, so 5 and 7 were not printed.
