//-------------------------------------------------
// while loop in JavaScript
//-------------------------------------------------
//  Example 1: Print numbers from 1 to 5
let i = 1
while (i <= 5) {
  console.log(i) // prints 1, 2, 3, 4, 5
  i++
}

//-------------------------------------------------
//  Example 2: Print "welcome Arshad" 5 times
let count = 1
while (count <= 5) {
  console.log(`welcome Arshad`)
  count++
}

//-------------------------------------------------
//  Example 3: Countdown from 5 to 1
let num = 5
while (num > 0) {
  console.log(num) // prints 5, 4, 3, 2, 1
  num--
}

//-------------------------------------------------
//  Example 4: Loop will run while number < 3 OR number === 5
let numbers = 0
while (numbers < 3 || numbers === 5) {
  console.log(numbers) // prints 0, 1, 2
  numbers++
}

//-------------------------------------------------
//  Example 5: Loop runs only once because condition becomes false after first run
let isDone = false
while (!isDone) {
  console.log(`Working...`)
  isDone = true // after this, !isDone becomes false
}

//-------------------------------------------------
//  Example 6: Loop runs until a <= 5 AND b >= 1
let a = 1
let b = 5
while (a <= 5 && b >= 1) {
  console.log(`a: ${a}, b: ${b}`)
  a++
  b--
}

//-------------------------------------------------
// Question 1: Print numbers from 1 to 100 using a while loop
let num2 = 1 // Initialize the variable num2 with 1

// Run the loop as long as num2 is less than or equal to 100
while (num2 <= 100) {
  console.log(num2) // Print the current value of num2
  num2++ // Increase num2 by 1
}

//-------------------------------------------------
// Question 2: Print all names from an array with numbering
let names = [
  'Arashad',
  'Sahbaz',
  'Asif',
  'Nawshad',
  'Abdul',
  'Arif',
  'jack',
  'zoya',
] // Array of names
let i2 = 0 // Start index from 0

// Loop through the array until the end
while (i2 < names.length) {
  console.log(`${i2 + 1}. ${names[i2]}`) // Print (index + 1) and the name at current index
  i2++ // Move to the next index
}

//-------------------------------------------------
// Question 3: Print all even numbers from 2 to 50 using a while loop in JavaScript.
let num3 = 2 // starting from the first even number

// Loop runs until num3 is less than or equal to 50
while (num3 <= 50) {
  console.log(num3) // Print the current even number
  num3 += 2 // Increase num3 by 2 to get the next even number
}

//-------------------------------------------------
// Question 4: Use a while loop in JavaScript to find the sum of all numbers from 1 to 100.
let sum = 0 // to store the total sum
let num4 = 1 // start from 1

while (num4 <= 100) {
  sum += num4 // add the current number to sum
  num4++ // move to the next number
}

console.log(sum) // print the final sum

//-------------------------------------------------
// Program completed
console.log('End program')
