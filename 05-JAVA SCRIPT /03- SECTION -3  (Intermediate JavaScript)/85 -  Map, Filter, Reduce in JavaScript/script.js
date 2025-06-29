'use strict'

//--------------------------------------------
// map() Array Method
//--------------------------------------------

// Example 1: Double each number in the array
const numbers = [1, 2, 3, 4, 5]
const double = numbers.map(function (num) {
  return num * 2
})
console.log(double) // Output: [2, 4, 6, 8, 10]

// Example 2: Using arrow function to double numbers
const numbers2 = [1, 2, 3, 4, 5]
const double2 = numbers2.map((num) => {
  return num * 2
})
console.log(double2) // Output: [2, 4, 6, 8, 10]

// Example 3: One-line arrow function to double
const numbers3 = [1, 2, 3, 4, 5]
const double3 = numbers3.map((num) => num * 2)
console.log(double3) // Output: [2, 4, 6, 8, 10]

// Example 4: Convert all names to uppercase
const names = ['arashad', 'ahamad']
const capitalized = names.map((name) => {
  return name.toUpperCase()
})
console.log(capitalized) // Output: ['ARASHAD', 'AHAMAD']

// Example 5: Add 18% tax to each price
const prices = [100, 200, 300, 400, 800]
const pricesWithTax = prices.map((price) => {
  return price + (price * 18) / 100
})
console.log(pricesWithTax) // Output: [118, 236, 354, 472, 944]

// Example 6: Add index numbers before each fruit
const fruits = ['apple', 'banana', 'mango']
const numberedFruits = fruits.map((fruit, index) => {
  return `${index}. ${fruit}`
})
console.log(numberedFruits) // Output: ['0. apple', '1. banana', '2. mango']

// Example 7: Convert array of names to objects with Ids
const names2 = ['Arashad', 'Ahamad']
const objArray = names2.map((name, index) => {
  return { Id: index, name: name }
})
console.log(objArray)
// Output: [{ Id: 0, name: 'Arashad' }, { Id: 1, name: 'Ahamad' }]

// Example 8: Convert object to an array of strings
const person = {
  name: 'Ahad',
  age: 18,
  city: 'ghazipur',
}
const result = Object.entries(person).map(([key, value]) => {
  return `${key}: ${value}`
})
console.log(result)
// Output: ['name: Ahad', 'age: 18', 'city: ghazipur']

//----------------------------
// Practice Questions
//----------------------------

// Question 1: Square each number
const numbers4 = [2, 4, 6, 8]
const squareNumbers = numbers4.map((num) => {
  return num * num
})
console.log(squareNumbers) // Output: [4, 16, 36, 64]

// Question 2: Apply 10% discount to each price
const prices2 = [300, 500, 700, 900]
const finalPrice = prices2.map((price) => {
  return price - (price * 10) / 100
})
console.log(finalPrice) // Output: [270, 450, 630, 810]

// Question 3: Find the length of each fruit name
const fruits2 = ['apple', 'banana', 'mango']
const length = fruits2.map((fruit) => {
  return fruit.length
})
console.log(length) // Output: [5, 6, 5]

// Question 4: Square only even numbers, keep odd as is
const numbers5 = [1, 2, 3, 4, 5]
const doubleEvenNumbers = numbers5.map((num) => {
  if (num % 2 === 0) {
    return num * num
  } else {
    return num
  }
})
console.log(doubleEvenNumbers) // Output: [1, 4, 3, 16, 5]

console.log('******************** filter() Array Method ********************')

//--------------------------------------------
// filter() Array Method
//--------------------------------------------

//  Example 1: Filter even numbers
const numbers6 = [3, 22, 18, 23, 44, 64]
const evenNumbers = numbers6.filter((num) => {
  return num % 2 === 0 // Keep only numbers divisible by 2
})
console.log(evenNumbers) //  [22, 18, 44, 64]

//  Example 2: Filter adults (age 18+)
const ages = [12, 22, 18, 35, 15]
const adults = ages.filter((age) => {
  return age >= 18 // Keep age 18 or more
})
console.log(adults) //  [22, 18, 35]

//  Example 3: Filter names that start with 'A'
const names3 = ['Hamid', 'Arashad', 'Wahid', 'Nawshad', 'Ali']
const aNames = names3.filter((name) => {
  return name.startsWith('A') // Keep names that start with 'A'
})
console.log(aNames) //  ['Arashad', 'Ali']

//  Question 1: Filter passed marks (35 or more)
const marks = [22, 35, 37, 39, 55, 18]
const passed = marks.filter((mark) => {
  return mark >= 35 // Keep marks 35 or more
})
console.log(passed) //  [35, 37, 39, 55]

//  Question 2: Filter active users
const users = [
  { name: 'Arashad', active: true },
  { name: 'Hamid', active: false },
  { name: 'Ali', active: true },
]
const activeUsers = users.filter((user) => {
  return user.active // Keep only users with active: true
})
console.log(activeUsers)
/*  
[
  { name: 'Arashad', active: true },
  { name: 'Ali', active: true }
]
*/

//  Question 3: Filter words longer than 4 letters
const words = ['apple', 'dog', 'banana', 'cat', 'elephent']
const result2 = words.filter((word) => {
  return word.length > 4 // Keep words with length > 4
})
console.log(result2) //  ['apple', 'banana', 'elephent']

//  Question 4:
const students = [
  { name: 'Arshad', age: 21 },
  { name: 'Ali', age: 19 },
  { name: 'Hamid', age: 25 },
  { name: 'Nawshad', age: 17 },
]
const adultNames = students
  .filter((student) => {
    return student.age >= 20
  })
  .map((student) => {
    return student.name
  })

console.log(adultNames)

console.log('******************** reduce() Array Method ********************')

//--------------------------------------------
// reduce() Array Method
//--------------------------------------------

// Question 1: Sum of numbers in an array

const numbers7 = [1, 2, 3, 4, 5]
const sum = numbers7.reduce((acc, curr) => {
  return acc + curr
}, 0)
console.log(sum)

// Question 2:

// const words2 = ['I', 'am', 'Arashad']
// const sentence = words2.reduce((acc, curr) => {
//   return acc + ' ' + curr
// }, '')
// console.log(sentence);

// Question 3: Join words to make a sentence

const words2 = ['I', 'am', 'Arashad']
const sentence = words2.reduce((acc, curr) => {
  return acc + ' ' + curr
})
console.log(sentence)

// Question 4:  Multiply all numbers

const arr = [5, 2, 3]
const multiply = arr.reduce((acc, curr) => {
  return acc * curr
}, 1)

console.log(multiply)

// Question 5: Total age of students

const students2 = [
  { name: 'Arashad', age: 21 },
  { name: 'Ahad', age: 11 },
  { name: 'Zoya', age: 18 },
  { name: 'Hamid', age: 30 },
]

const totalAge = students2.reduce((acc, student) => {
  return acc + student.age
}, 0)
console.log(totalAge)

// Question 6:  Count frequency of fruits

const fruits3 = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
const count = fruits3.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1
  return acc
}, {})
console.log(count)

// Question 7:  Find the maximum number

const nums = [12, 45, 67, 23, 89, 34]
const max = nums.reduce((acc, curr) => {
  return curr > acc ? curr : acc
}, nums[0])
console.log(max)

// Question 8:  Count even and odd numbers
const numbers8 = [1, 2, 3, 4, 5, 6, 10, 22]
const countEvenOdd = numbers8.reduce(
  (acc, curr) => {
    if (curr % 2 === 0) {
      acc.even += 1
    } else {
      acc.odd += 1
    }
    return acc
  },
  { even: 0, odd: 0 }
)
console.log(countEvenOdd)

// Question 9: Make a frequency object of letters in a word
const word = 'banana'
const result3 = word.split('').reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1
  return acc
}, {})
console.log(result3)

// Question 10: Group students by age
const students9 = [
  { name: 'Arashad', age: 21 },
  { name: 'Ali', age: 18 },
  { name: 'Hamid', age: 21 },
  { name: 'Zoya', age: 18 },
  { name: 'Nawshad', age: 22 },
  { name: 'Alim', age: 18 },
]
const grouped = students9.reduce((acc, student) => {
  if (acc[student.age]) {
    acc[student.age].push(student.name)
  } else {
    acc[student.age] = [student.name]
  }
  return acc
}, {})
console.log(grouped)

//-----------------------------------------------------------
// mix of filter() + map() + reduce()
//-----------------------------------------------------------

// Question 11:
// Given an array of numbers, filter out t
// he even numbers and return a new array with only odd numbers.

const numbers9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const oddNumber = numbers9.filter((num) => {
  return num % 2 !== 0
})
console.log(oddNumber)

// Question 12:
// Given an array of numbers, find
// the product of all the elements in the array.

const numbers10 = [1, 2, 3, 4, 5]
const multiply2 = numbers10.reduce((acc, num) => {
  return acc * num
}, 1)

console.log(multiply2)

// Question 12:
// Given an array of numbers, create a new array that
// contains the squares of only the odd numbers.

const numbers11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const oddNumberSquares = numbers11
  .filter((num) => {
    return num % 2 !== 0
  })
  .map((num) => num * num)

console.log(oddNumberSquares)

// Question 13:
// Given an array of objects representing products with a price property,
// calculate the total cost of all products after applying a 10% discount.

const products = [
  { name: 'Product 1', price: 100 },
  { name: 'Product 2', price: 200 },
  { name: 'Product 3', price: 300 },
]

const totalCost = products.reduce((acc, product) => {
  const discountedPrice = product.price - (product.price * 10) / 100
  return acc + discountedPrice
}, 0)

console.log(totalCost)
