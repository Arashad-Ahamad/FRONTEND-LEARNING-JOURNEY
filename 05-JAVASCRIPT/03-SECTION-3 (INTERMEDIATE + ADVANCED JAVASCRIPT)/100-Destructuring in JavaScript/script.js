// ----------------------------------------
// Array Destructuring
// ----------------------------------------

// Example 1: Normal Method
const numbers = [10, 20, 30]
const number1 = numbers[0]
const number2 = numbers[1]
const number3 = numbers[2]
console.log(number1) // 10
console.log(number2) // 20
console.log(number3) // 30

// Example 2: Destructuring Method
const numbers2 = [10, 20, 30]
const [num1, num2, num3] = numbers2
console.log(num1) // 10
console.log(num2) // 20
console.log(num3) // 30

// Example 3: Extra variable will be undefined
const marks = [70, 80]
const [a, b, c] = marks
console.log(a) // 70
console.log(b) // 80
console.log(c) // undefined

// Example 4: Skip 2nd value
const nums = [1, 2, 3]
const [d, , e] = nums
console.log(d) // 1
console.log(e) // 3

// Example 5: Skip elements
const data = [100, 200, 300, 400]
const [, f, , g] = data
console.log(f) // 200
console.log(g) // 400

// Example 6: Default values
const data2 = [900]
const [h = 500, i = 600] = data2
console.log(h) // 900
console.log(i) // 600

// Example 7: All default values (empty array)
const [x = 1, y = 2, z = 3] = []
console.log(x) // 1
console.log(y) // 2
console.log(z) // 3

// Example 8: Partial default values
const arr = [5, 6]
const [m = 1, n = 2, o = 3] = arr
console.log(m) // 5
console.log(n) // 6
console.log(o) // 3

// Example 9: Direct destructuring
const [j, k, l] = [700, 800, 900]
console.log(j) // 700
console.log(k) // 800
console.log(l) // 900

// ----------------------------------------
// Object Destructuring
// ----------------------------------------

// Example 10: Normal Method
const person = {
  name1: 'Arashad',
  age1: 21,
  city1: 'Ghazipur',
}
const name1 = person.name1
const age1 = person.age1
console.log(name1) // Arashad
console.log(age1) // 21

// Example 11: Destructuring
const person2 = {
  name2: 'Arashad',
  age2: 21,
  city2: 'Ghazipur',
}
const { name2, age2 } = person2
console.log(name2) // Arashad
console.log(age2) // 21

// Example 12: Default value
const person3 = {
  name3: 'Ahad',
}
const { name3, age3 = 18 } = person3
console.log(name3) // Ahad
console.log(age3) // 18

// Example 13: Rename variables
const person4 = {
  name4: 'Arif',
  age4: 30,
}
const { name4: username, age4: userAge } = person4
console.log(username) // Arif
console.log(userAge) // 30

// Example 14: Nested object
const user = {
  name: 'Arashad',
  address: {
    city: 'Ghazipur',
    state: 'UP',
  },
}
const {
  address: { city, state },
} = user
console.log(city) // Ghazipur
console.log(state) // UP

// Example 15: Nested with rename and default value
const user2 = {
  name: 'Faheem',
  address: {
    city2: 'Ghazipur',
  },
}
const {
  address: { city2: myCity, state2 = 'Not given' },
} = user2
console.log(myCity) // Ghazipur
console.log(state2) // Not given

// ----------------------------------------
// Destructuring in Function Parameters
// ----------------------------------------

// Example 16: Normal function with object
function printUser(user3) {
  console.log(user3.name5)
  console.log(user3.age5)
}
const user3 = {
  name5: 'Arashad',
  age5: 21,
}
printUser(user3)

// Example 17: Destructuring in function parameter
function printUser2({ name6, age6 }) {
  console.log(name6) // Arashad
  console.log(age6) // 21
}
const user4 = {
  name6: 'Arashad',
  age6: 21,
}
printUser2(user4)

// Example 18: Default value in function parameter
function greet({ name = 'Guest' }) {
  console.log(`Hello ${name}`)
}
greet({ name: 'Arashad' }) // Hello Arashad
greet({}) // Hello Guest

// Example 19: Destructuring with object
function showAddress({ city3, state3 }) {
  console.log(`City: ${city3}`)
  console.log(`State: ${state3}`)
}
const address = {
  city3: 'Ghazipur',
  state3: 'UP',
}
showAddress(address)

// Example 20: Nested destructuring in function parameter
function displayUser({ name7, address3: { city4 } }) {
  console.log(`Name: ${name7}`)
  console.log(`City: ${city4}`)
}
const user5 = {
  name7: 'Arashad',
  address3: {
    city4: 'Ghazipur',
    state4: 'UP',
  },
}
displayUser(user5)

// Example 21: Array destructuring in function parameter
function printNames([first, second]) {
  console.log(`First: ${first}`)
  console.log(`Second: ${second}`)
}
const names = ['Arashad', 'Ahamad']
printNames(names)

// Example 22:
const colors = [
  'red',
  'green',
  'blue',
  'yellow',
  'pink',
  'orange',
  'white',
  'gray',
  'brown',
  'black',
]
const { 9: color10 } = colors
console.log(color10)

// Question 1:

const userProfile = {
  username2: 'adarsh',
  email: 'adarsh@example.com',
  age: 17,
  country: 'India',
}
const { username2, email } = userProfile

console.log(`Username: ${username2}, Email: ${email}`)

// Question 2:
const { a1, b1, ...rest } = { a1: 1, b1: 2, c1: 3, d1: 4 }
console.log(a1, b1, rest)

// Question 3:
const obj = { 'user name': 'ProCodrr' }
const { ['user name']: userName } = obj
console.log(userName)

// Question 4:
const fruits = [
  'apple',
  'banana',
  'cherry',
  'date',
  'elderberry',
  'fig',
  'grape',
]
const { 4: fruit5 } = fruits
console.log(fruit5)
