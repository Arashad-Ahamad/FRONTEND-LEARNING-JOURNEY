// -------------------------------------------------------
// Using break keyword with loops
// -------------------------------------------------------

// Example 1: for loop with break
for (let i = 1; i <= 5; i++) {
  // When i equals 2, break the loop
  if (i == 2) {
    break // Loop will break here when i == 2
  }
  console.log(i) // This will print 1
}
// Output: 1 (Loop stops at i == 2)

// -------------------------------------------------------
// Example 2: while loop with break
let i = 1
while (i <= 5) {
  console.log(i) // Prints 1, 2, 3
  if (i == 3) {
    break // Break the loop when i == 3
  }
  i++ // Increment i
}
// Output: 1, 2, 3 (Loop stops at i == 3)

// -------------------------------------------------------
// Example 3: for loop with break
for (let num = 1; num <= 10; num++) {
  console.log(num) // Prints numbers from 1 to 5
  if (num === 5) {
    break // Break the loop when num == 5
  }
}
// Output: 1, 2, 3, 4, 5 (Loop stops at num == 5)

// -------------------------------------------------------
// Example 4: for loop with break
for (let i = 8; i <= 15; i++) {
  console.log(i) // Prints numbers from 8 to 10
  if (i === 10) {
    break // Break the loop when i == 10
  }
}
// Output: 8, 9, 10 (Loop stops at i == 10)

// -------------------------------------------------------
// Example 5: Searching in an array using break
let numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10, 9]
let targetValue = 9
let foundIndex = -1 // If the target is not found, it will remain -1
for (let i = 0; i < numbers.length; i++) {
  // Loop through the array
  if (numbers[i] === targetValue) {
    foundIndex = i // Store the index when targetValue (9) is found
    break // Break the loop once the targetValue is found
  }
}
console.log(foundIndex) // Will print 4, as 9 is found at index 4
// Output: 4 (Index of 9 is 4)

// -------------------------------------------------------
// Program Ended
console.log('Program Ended')

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
// When i was an even number (2, 4, 6, 8, 10), 
// continue skipped those iterations,
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
// When i was 5 or 7, continue skipped those iterations,
//  so 5 and 7 were not printed.
