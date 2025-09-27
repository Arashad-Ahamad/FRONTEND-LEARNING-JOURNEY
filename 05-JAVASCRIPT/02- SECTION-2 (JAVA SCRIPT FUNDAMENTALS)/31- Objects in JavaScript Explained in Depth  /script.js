//  Example 1 – Simple object creation & access
const person = {
  name: 'Arashad',
  age: 21,
  city: 'Ghazipur',
}
console.log(person) // Print the whole object
console.log(person.age) // Access age using dot notation
console.log(person.name) // Access name using dot notation
console.log(person['city']) // Access city using bracket notation

//  Example 2 – Object with space in key & using variables as keys
const user = {
  'full name': 'Arashad Ahamad',
  age: 21,
  city: 'London',
}
const keyCity = 'city'
const keyAge = 'age'
console.log(user)
console.log(user['full name']) // Access key with space using brackets
console.log(user[keyCity]) // Access using variable as key
console.log(user[keyAge])

//  Example 3 – Numeric keys
const scores = {
  1: 'one',
  2: 'Two',
}
console.log(scores)
console.log(scores[1]) // Access using number
console.log(scores[2])
console.log(scores['1']) // Access using string (same as number key)
console.log(scores['2'])

//  Example 4 – Mixed key types
const obj = {
  username: 'Arashad',
  100: 'marks',
}
console.log(obj)
console.log(obj.username) // Access using dot
console.log(obj['username']) // Access using bracket
console.log(obj[100]) // Numeric key
console.log(obj['100']) // Same as above

//  Example 5 – Special characters in keys
const user2 = {
  name2: 'Asif',
  'full name': 'Asif Ahmed',
  123: 'ID',
  '@admin': true,
}
console.log(user2)
console.log(user2.name2)
console.log(user2['full name']) // Space in key
console.log(user2[123]) // Numeric key
console.log(user2['@admin']) // Special char key

//  Example 6 – Add & update object values
const mobile = {
  brand: 'Apple',
  model: '15pro max',
  price: 150000,
}
console.log(mobile)
// console.log(mobile.brand);
// console.log(mobile.model);
// console.log(mobile.price);

// console.log(mobile['brand']);
// console.log(mobile['model']);
// console.log(mobile['price']);

// Add new key-value pairs
mobile.country = 'India'
mobile.manufacturing = 2025

// Update existing values
mobile.price = 100000
mobile.model = '14pro'

//  Example 7 – Empty object & adding properties later
const student = {} // Create empty object
student.name = 'aman' // Add properties
student.class = 'B.A'
console.log(student)
console.log(student.name)

//  Example 8 – Nested object and updating values
const user3 = {
  name: 'jack',
  address: {
    city: 'Lucknow',
    state: 'up',
  },
}
// console.log(user3);
// console.log(user3.name);
// console.log(user3.address.city);
// console.log(user3.address.state);
// console.log(user3.address);

// console.log(user3['name']);
// console.log(user3['address']['city']);
// console.log(user3['address']['state']);
// console.log(user3['address']);

// Update values inside nested object
user3.name = 'Faheem'
user3.address.city = 'Mumbai'
user3.address.state = 'Maharashtra'

// Add new key-value pairs
user3.age = 25
user3.address.pincode = 1234

console.log(user3) // Final updated object

// Practice 1
//  Two separate objects with same data but different memory
const profile1 = {
  firstName: 'Arashad',
  lastName: 'Ahamad',
  age: 21,
  education: 'BA geography',
  city: 'Ghazipur',
}

const profile2 = {
  firstName: 'Arashad',
  lastName: 'Ahamad',
  age: 21,
  education: 'BA geography',
  city: 'Ghazipur',
}

console.log(profile1 === profile2) // false
//  Reason: Even though data is same, both objects are stored in different memory locations.

//  One object with two references (same memory)
const profile3 = {
  firstName: 'Arashad',
  lastName: 'Ahamad',
  age: 21,
  education: 'BA geography',
  city: 'Ghazipur',
}

const profile4 = profile3 // profile4 is pointing to same object as profile3

console.log(profile4 === profile3) // true
//  Reason: Both variables point to the same memory location (same object)

//  Practice 2
const userA = {
  firstname: 'Adrash',
}

// console.log(userA.age); // undefined (no such property)
console.log(userA['first' + 'name']) // 'Adrash'
//  Reason: 'firstname' is accessed using computed string

//  Practice 3
const userB = {
  firstname: 'Ayan',
  lastName: 'Ahmed',
  address: {
    city: 'Bangalore',
    pincode: 1234,
    moreDetails: {
      Population: 1332241,
      area: '1234 sq km',
    },
  },
}

// Adding new properties dynamically
userB.age = 21 // adds age property
userB['is-Student'] = true // adds a key with dash using bracket notation

console.log(userB) // Shows the full object with new properties
console.log(userB.address.city) // 'Bangalore'
console.log(userB.address.moreDetails.area) // '1234 sq km'

// Adding a new nested property
userB.address.moreDetails.weather = 'Nice' // adds weather key inside moreDetails

console.log(userB.address.moreDetails.weather) // 'Nice'

// Question
var car = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2020,
}
console.log(car['model'])
