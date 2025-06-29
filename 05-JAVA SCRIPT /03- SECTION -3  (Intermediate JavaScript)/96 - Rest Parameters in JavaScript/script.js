// -----------------------------------
// Rest Parameters in JavaScript
// -----------------------------------

//  Rest Parameters:
// Allows a function to accept any number of arguments as an array.

// -----------------------------------
// Example 1: Collect all arguments into an array
function greet(...numbers) {
  // 'numbers' will be an array containing all the arguments
  console.log(numbers)
}
greet(1, 2, 3, 4, 5)
// Output: [1, 2, 3, 4, 5]

// -----------------------------------
// Example 2: Sum all arguments using Rest Parameters
function sumAll(...nums) {
  let sum = 0
  // Loop through all numbers in the 'nums' array
  for (let num of nums) {
    sum += num
  }
  console.log('Total Sum:', sum)
}
sumAll(10, 20, 30)
// Output: Total Sum: 60

// -----------------------------------
// Example 3: First parameter normal, rest grouped in array
function greet2(name, ...messages) {
  // 'name' is the first argument
  console.log('Name:', name)
  // 'messages' will be an array of remaining arguments
  console.log('Messages:', messages)
}
greet2('Arashad', 'Hello', 'Welcome', 'Good Morning')
// Output:
// Name: Arashad
// Messages: ['Hello', 'Welcome', 'Good Morning']

// -----------------------------------
// Example 4: Greet multiple people using Arrow Function
const greetAll = (...names) => {
  // Loop through each name in the 'names' array
  names.forEach((name) => {
    console.log('Hello', name)
  })
}
greetAll('Arashad', 'Ali', 'Hamid')
// Output:
// Hello Arashad
// Hello Ali
// Hello Hamid
