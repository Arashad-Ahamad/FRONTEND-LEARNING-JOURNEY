// Creating an array
const fruits = ['apple', 'banana', 'mango']
console.log(fruits) // ['apple', 'banana', 'mango']

// Accessing items using index
console.log(fruits[0]) // apple (index 0)
console.log(fruits[1]) // banana (index 1)
console.log(fruits[2]) // mango (index 2)

// Updating an item using index
fruits[1] = 'orange' // replacing 'banana' with 'orange'
console.log('Updated fruits:', fruits) // ['apple', 'orange', 'mango']

// Adding a new item using index
fruits[3] = 'kiwi' // adding 'kiwi' at index 3
console.log('Added kiwi:', fruits) // ['apple', 'orange', 'mango', 'kiwi']

// Adding at a later index (creates empty slots)
fruits[6] = 'pineapple' // indexes 4 and 5 will be empty (undefined)
console.log('With gaps:', fruits)
// Output: ['apple', 'orange', 'mango', 'kiwi', <2 empty items>, 'pineapple']

// Checking each index
console.log('Index 4:', fruits[4]) // undefined
console.log('Index 5:', fruits[5]) // undefined
console.log('Index 6:', fruits[6]) // pineapple

//  Question 1: Accessing Array Elements
const fruitCollection = ['apple', 'banana', 'mango']
console.log(fruitCollection) // ['apple', 'banana', 'mango']
console.log(typeof fruitCollection) // object
console.log(fruitCollection[0]) // apple
console.log(fruitCollection[1]) // banana
console.log(fruitCollection[2]) // mango

//  Question 2: Accessing Numbers
const nums = [10, 30, 40, 60, 90]
console.log(nums) // [10, 30, 40, 60, 90]
console.log(nums[0]) // 10
console.log(nums[2]) // 40
console.log(nums[4]) // 90

//  Question 3: Updating Value in Array
const bag = ['pen', 'copy', 'mobile']
bag[2] = 'book' // index 2 update
console.log(bag) // ['pen', 'copy', 'book']

//  Question 4: Multiple Updates
const numbers = [10, 20, 30, 100]
numbers[0] = 5
numbers[1] = 4
numbers[3] = 9
console.log(numbers) // [5, 4, 30, 9]
console.log(numbers[1]) // 4
console.log(numbers[0]) // 5

//  Question 5: Adding at Specific Index
const colors = ['red', 'green']
colors[2] = 'yellow'
colors[5] = 'blue'
console.log(colors) // ['red', 'green', 'yellow', empty × 2, 'blue']
console.log(colors[2]) // yellow
console.log(colors[4]) // undefined
console.log(colors[5]) // blue

//  Question 6: Add New Name
const names = ['Arshad', 'Ravi']
names[2] = 'Vishal'
console.log(names) // ['Arshad', 'Ravi', 'Vishal']

//  Question 7:
// Created an array that contains one object
const items = [
  {
    name: 'Arshad',
    age: 25,
    hobby: 'Coding',
  },
]

// Accessing the object inside the array
console.log(items) // Logs the whole array
console.log(items[0]) // Logs the first object
console.log(items[0].name) // Accesses 'name' from the object
console.log(items[0].hobby) // Accesses 'hobby' from the object

//  Question 8:
// Created an array with two objects inside
const students = [
  {
    name: 'Ali',
    marks: 85,
    subject: 'Math',
  },
  {
    name: 'Sara',
    marks: 92,
    subject: 'Science',
  },
]

// Accessing first student
console.log(students[0]) // { name: 'Ali', marks: 85, subject: 'Math' }
console.log(students[0].name) // Ali
console.log(students[0].marks) // 85

// Accessing second student
console.log(students[1]) // { name: 'Sara', marks: 92, subject: 'Science' }
console.log(students[1].name) // Sara
console.log(students[1].subject) // Science

//  Question 9:
// Creating an object with an array inside it
let myObject = {
  array: ['apple', 'banana', 'mango'],
}

// Accessing the array inside the object
console.log(myObject.array) // Output: ['apple', 'banana', 'mango']

//  Question 10:
 //Comparing two different array objects
//console.log([] === []); // false

// Explanation:
// Each '[]' creates a new array object in memory.
// Even if contents are same, their memory address is different.
// So === returns false (they are not the same object).

//  Question 11:
const user = [
    { name: 'jons', age: 25 },
    { name: 'jane', age: 28 },
  ];
  
  console.log(user[1]); // { name: 'jane', age: 28 }
  
  user[0].age = 35; // Update age of the first object
  console.log(user); 
  // [{ name: 'jons', age: 35 }, { name: 'jane', age: 28 }]
  
