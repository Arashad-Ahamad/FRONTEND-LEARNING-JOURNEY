// -------------------------------
// Spread Operator Examples
// -------------------------------

// Example 1:
// Copying an array
const arr = [1, 2, 3]
const newArr = [...arr]  // Creates a new array by copying elements of arr
console.log(newArr);     // Output: [1, 2, 3]

// Example 2:
// Merging two arrays
const a = [1, 2]
const b = [3, 4]
const c = [...a, ...b]  // Combines arrays a and b
console.log(c);         // Output: [1, 2, 3, 4]

// Example 3:
// Adding elements in between an array
const nums = [2, 3]
const newNums = [1, ...nums, 4]  // Adds 1 at start and 4 at end
console.log(newNums);           // Output: [1, 2, 3, 4]

// Example 4:
// Copying an object
const obj1 = {name: 'Arashad'}
const obj2 = {...obj1}  // Creates a new object with same properties
console.log(obj2);      // Output: {name: 'Arashad'}

// Example 5:
// Merging two objects
const obj3 = {name: 'Ahad'}
const obj4 = {age: 17}
const merged = {...obj3, ...obj4}  // Combines both objects
console.log(merged);               // Output: {name: 'Ahad', age: 17}

// Example 6:
// Overwriting object properties
const obj5 = {name: 'Arashad', age: 18}
const obj6 = {...obj5, age: 21}  // 'age' is overwritten with 21
console.log(obj6);               // Output: {name: 'Arashad', age: 21}

// Example 7:
// Adding new properties to an object
const user = {name: 'Arashad'} 
const newUser = {...user, country: 'India'}  // Adds new property
console.log(newUser);                        // Output: {name: 'Arashad', country: 'India'}

// Example 8:
// Shallow copy issue with nested objects
const obj7 = {
    name: 'Arashad',
    adress: {
        city: 'lucknow'
    }
}
const copy = {...obj7}  // Shallow copy – inner objects still point to same reference
copy.adress.city = 'ghazipur'
console.log(copy);             // Output: {name: 'Arashad', adress: {city: 'ghazipur'}}
console.log(obj7.adress.city); // Output: 'ghazipur' (original also changes)

// Example 9:
// Spread a string into characters
const name2 = 'Arashad'
const letter = [...name2]  // Converts string to array of letters
console.log(letter);       // Output: ['A', 'r', 'a', 's', 'h', 'a', 'd']

// Example 10:
// Passing array elements as function arguments
function add(a, b, c) {
    return a + b + c
}
const numbers = [1, 2, 3]
console.log(add(...numbers));  // Output: 6

// Example 11:
// Using rest parameter in function (collect all arguments)
function show(...args) {
    console.log(args);  // args is an array of all arguments
}
show(1, 2, 3, 4);  // Output: [1, 2, 3, 4]

