// ----------------------------------------------------
// shallow Copy using spread operator 
// ----------------------------------------------------

// Example 1: Shallow Copy with Nested Object
const original = {
  name: 'john',
  age: 28,
  address: {
    city: 'new york',
    zip: 10001,
  },
}

// Shallow copy using spread operator
const shallowCopy = { ...original }

// Modifying the top-level properties
shallowCopy.name = 'Arshad' // This will change the name in shallowCopy but not in original
shallowCopy.age = 21 // This will change the age in shallowCopy but not in original

// Modifying the nested property in the original object
original.address.city = 'Ghazipur' // This will modify the city in both original and shallowCopy because address is a reference
original.address.zip = 233227 // This will modify the zip in both original and shallowCopy for the same reason

// Printing both original and shallowCopy objects
console.log(original) // original: { name: 'john', age: 28, address: { city: 'Ghazipur', zip: 233227 } }
console.log(shallowCopy) // shallowCopy: { name: 'Arshad', age: 21, address: { city: 'Ghazipur', zip: 233227 } }

//------------------------------------------------------------------
// Example 2: Shallow Copy with Only Primitive Values
const obj = {
  name: 'jack',
  age: 25,
}

// Shallow copy (only primitive values, no nested objects)
const objCopy = { ...obj }

// Changing copied values (does NOT affect original)
objCopy.name = 'Vishal'
objCopy.age = 21

console.log(obj) // { name: 'jack', age: 25 }
console.log(objCopy) // { name: 'Vishal', age: 21 }

//------------------------------------------------------------------
// Example 3: Shallow Copy with Array Inside Object
const person = {
  name: 'Ali',
  skill: ['HTML', 'CSS'],
}

// Shallow copy (skill array is copied by reference)
const personCopy = { ...person }

// Changing top-level property (does NOT affect original)
personCopy.name = 'Arashad'

// Pushing new skill (affects both person and personCopy)
personCopy.skill.push('JavaScript')

console.log(person)
// { name: 'Ali', skill: ['HTML', 'CSS', 'JavaScript'] }

console.log(personCopy)
// { name: 'Arashad', skill: ['HTML', 'CSS', 'JavaScript'] }

//------------------------------------------------------------------
// Example 4: Shallow Copy of Array of Objects
const arr = [{ name: 'priya' }, { name: 'zoya' }]

// Shallow copy of array (objects inside are still references)
const shallowArr = [...arr]

// Modifying objects inside the copied array (affects both)
shallowArr[0].name = 'nargis'
shallowArr[1].name = 'Ali'

console.log(arr) // [{name: 'nargis'}, {name: 'Ali'}]
console.log(shallowArr) // [{name: 'nargis'}, {name: 'Ali'}]

//------------------------------------------------------------------
// Example 5: Shallow Copy of Simple Array
const user = ['Arashad', 'Nawshad']

// Shallow copy (primitive string values are copied by value)
const userCopy = [...user]

// Changing copied values (does NOT affect original)
userCopy[0] = 'Abdul'
userCopy[1] = 'Arif'

console.log(user) // ['Arashad', 'Nawshad']
console.log(userCopy) // ['Abdul', 'Arif']

//------------------------------------------------------------------
// ---------------------------------------------
//  Example 1: Object Cloning (Shallow Copy) using Object.assign()
const userID = {
  a: 1,
  b: 2,
}

const userIDCopy = Object.assign({}, userID) // Creates a shallow copy of userID

console.log(userID) // { a: 1, b: 2 }
console.log(userIDCopy) // { a: 1, b: 2 }

// ---------------------------------------------
//  Example 2: Shallow Copy Issue with Nested Object
const obj1 = {
  name: 'Arshad',
  social: {
    twitter: '@ArashadAhamad10',
  },
}

const obj1Copy = Object.assign({}, obj1) // Shallow copy - nested objects are still linked

obj1Copy.social.twitter = '@new_handle' // Changing nested object also affects original

console.log(obj1) // { name: 'Arshad', social: { twitter: '@new_handle' } }
console.log(obj1Copy) // { name: 'Arshad', social: { twitter: '@new_handle' } }
// ---------------------------------------------
//  Example 3: Using Object.assign() to create a shallow copy of an object
const user1 = {
  name: 'arashad',
  age: 21,
}

// Creating an empty object
const user2 = {}

// Copying properties from user1 to user2 (shallow copy)
Object.assign(user2, user1)

// Changing the name property in user2
user2.name = 'Shahid'

// Logging both objects
console.log(user1) // Output: { name: 'arashad', age: 21 } — original object remains unchanged
console.log(user2) // Output: { name: 'Shahid', age: 21 } — copied object with updated name

// ---------------------------------------------
//  Example 4: Using Object.assign() to create a shallow copy of an array
const fruits6 = ['mango', 'apple', 'orange']

// Creating an empty array
const myFruits = []

// Copying elements from fruits6 to myFruits (shallow copy)
Object.assign(myFruits, fruits6)

// Modifying the first element of myFruits
myFruits[0] = 'grapes'

// Logging both arrays
console.log(fruits6) // Output: ['mango', 'apple', 'orange'] — original array remains unchanged
console.log(myFruits) // Output: ['grapes', 'apple', 'orange'] — copied array with updated element

// ---------------------------------------------
//  Example 5: Array Cloning using Object.assign()
const numbersArr = [10, 20, 30]

const copiedNumbersArr = Object.assign([], numbersArr) // Shallow copy of array

copiedNumbersArr[0] = 90

console.log(numbersArr) // [10, 20, 30]
console.log(copiedNumbersArr) // [90, 20, 30]

// ---------------------------------------------
//  Example 6: Cloning Array of Objects (Shallow Copy)
const dataList = [{ topic: 'JavaScript' }]

const cloneList = Object.assign([], dataList) // Only outer array is cloned, inner object is shared

cloneList[0].topic = 'CSS' // This change affects both arrays

console.log(dataList) // [ { topic: 'CSS' } ]
console.log(cloneList) // [ { topic: 'CSS' } ]

// ---------------------------------------------
//  Example 7: Merging Objects using Object.assign()
const basicInfo = {
  name: 'Arashad',
  age: 21,
  country: 'India',
}

const contactInfo = {
  email: '96arashad@gmail.com',
  phone: 1234567890,
}

const mergedUser = Object.assign({}, basicInfo, contactInfo) // Merges both objects

console.log(mergedUser)
// Output:
// { name: 'Arashad', age: 21, country: 'India', email: '96arashad@gmail.com', phone: 1234567890 }

// ---------------------------------------------
//  Example 8: Merging Arrays using Object.assign() (not recommended)
const arr1 = ['a', 'b']
const arr2 = ['c', 'd']

const mergedUsingAssign = Object.assign([], arr1, arr2) // Index-based merge, may overwrite

console.log(mergedUsingAssign)
// Output: [ 'c', 'd' ]

// ---------------------------------------------
//  Example 9: Merging Arrays using Spread Operator (recommended)
const letters1 = ['a', 'b']
const letters2 = ['c', 'd']

const mergedWithSpread = [...letters1, ...letters2] // Proper merging of two arrays

console.log(mergedWithSpread)
// Output: [ 'a', 'b', 'c', 'd' ]

// ---------------------------------------------
//  Example 10: Merging Objects using Spread Operator
const defaultSettings = {
  notifications: true,
}

const userSettings = {
  theme: 'dark',
  autoSave: true,
}

const finalSettings = { ...defaultSettings, ...userSettings } // Combines both objects

console.log(finalSettings)
// Output: { notifications: true, theme: 'dark', autoSave: true }

// ---------------------------------------------
//  Example 11: Object Merging with Overwriting using Spread
const permanentAddress2 = {
  city: 'Ghazipur',
  state: 'Uttar Pradesh',
}

const temporaryAddress2 = {
  city: 'New Delhi',
  state: 'Delhi',
}

const fullAddress2 = { ...permanentAddress2, ...temporaryAddress2 } // Overwrites same keys

console.log(fullAddress2)
// Output: { city: 'New Delhi', state: 'Delhi' }

// ----------------------------------------------------
// Deep Copy using JSON method
// ----------------------------------------------------

//  Example 1: Deep copy of a simple object
const originalObject = {
  name: 'khalid',
  age: 25,
}

// Creating a deep copy using JSON
const deepCopy = JSON.parse(JSON.stringify(originalObject))

// Modifying the deep copy (original remains unchanged)
deepCopy.name = 'sarukh'
deepCopy.age = 52

console.log(originalObject) // Output: { name: 'khalid', age: 25 }
console.log(deepCopy) // Output: { name: 'sarukh', age: 52 }

// ----------------------------------------------------
//  Example 2: Deep copy of a nested object
const username = {
  name: 'Alwina',
  age: 18,
  address: {
    city: 'delhi',
    country: 'India',
  },
}

// Creating a deep copy using JSON
const usernameCopy = JSON.parse(JSON.stringify(username))

// Modifying the copy (original nested object is not affected)
usernameCopy.name = 'Ayan'
usernameCopy.address.city = 'Lucknow'

console.log(username) // city remains: 'delhi'
console.log(usernameCopy) // city is changed to: 'Lucknow'

// ----------------------------------------------------
//  Example 3: Deep copy of an array
const numbers = [10, 20, 30, 40, 50]

// Creating a deep copy using JSON
const numbersCopy = JSON.parse(JSON.stringify(numbers))

// Modifying the copied array
numbersCopy[0] = 99
numbersCopy[4] = 80

console.log(numbers) // Output: [10, 20, 30, 40, 50]
console.log(numbersCopy) // Output: [99, 20, 30, 40, 80]

// ----------------------------------------------------
//  Example 4: Deep copy of an array of objects
const bioData = [
  { name: 'Arashad', age: 21 },
  { name: 'Asif', age: 25 },
]

// Creating a deep copy using JSON
const deepCopy2 = JSON.parse(JSON.stringify(bioData))

// Modifying objects inside the copied array
deepCopy2[0].name = 'Ahad'
deepCopy2[1].age = 8

console.log(bioData) // Original data stays the same
console.log(deepCopy2) // Modified copy

// ----------------------------------------------------
//  Deep Copy using structuredClone()
// ----------------------------------------------------

//  Example 1: Deep copy of a simple object
const original2 = {
  name: 'Seraj',
  age: 45,
}

// Create a deep copy using structuredClone
const deepCopy3 = structuredClone(original2)

// Modify the copied object
deepCopy3.name = 'Subhan'
deepCopy3.age = 60

console.log(original2) // Original object remains unchanged
console.log(deepCopy3) // Modified deep copy

// ----------------------------------------------------
//  Example 2: Deep copy of a nested object
const studentData = {
  name: 'Shahbaz',
  age: 23,
  address: {
    city: 'samstipur',
    state: 'bihar',
  },
}

// Create a deep copy using structuredClone
const studentDataCopy = structuredClone(studentData)

// Modify properties in the copied object
studentDataCopy.age = 25
studentDataCopy.address.city = 'New Delhi'
studentDataCopy.address.state = 'Delhi'

console.log(studentData) // Original address stays same
console.log(studentDataCopy) // Modified address in copy

// ----------------------------------------------------
//  Example 3: Deep copy of object with undefined value
const user9 = {
  name: 'mac',
  age: undefined,
}

// Create a deep copy using structuredClone
const deepCopy4 = structuredClone(user9)

// Modify the copied object
deepCopy4.name = 'aman'
deepCopy4.age = 18

console.log(user9) // { name: 'mac', age: undefined }
console.log(deepCopy4) // { name: 'aman', age: 18 }

// ----------------------------------------------------
// ----------------------------------------------------
// Question 1: Student Info
const studentInfo = {
  fullName: 'zara khan',
  grade: 'A',
  marks: {
    math: 40,
    science: 60,
  },
}

const clonedStudent = structuredClone(studentInfo)

clonedStudent.fullName = 'Aman khan'
clonedStudent.marks.math = 99

console.log(studentInfo) // Original stays unchanged
console.log(clonedStudent) // Modified copy

// ----------------------------------------------------
// Question 2:  Product Data
const Product = {
  id: 101,
  name: 'smartphone',
  specs: {
    brand: 'samsung',
    ram: '8GB',
  },
}
const productCopy = structuredClone(Product)
productCopy.name = 'Tablet'
productCopy.specs.ram = '16GB'

console.log(Product) // Original stays unchanged
console.log(productCopy)  // Modified copy
 
// ----------------------------------------------------
// Question 3: Profile Settings
const profileSettings = {
  theme: 'dark',
  notifications: {
    email: true,
    sms: false,
  },
}

const newSettings = structuredClone(profileSettings)
newSettings.theme = 'light'
newSettings.notifications.sms = true

console.log(profileSettings) // Original settings intact
console.log(newSettings) // Updated copy

// ----------------------------------------------------
// Question 4:
const fruits = ['apple', 'banana', 'grapes']
const fruitsCopy = structuredClone(fruits)

fruitsCopy[0] = 'orange'
console.log(fruits) // ['apple', 'banana', 'grapes']
console.log(fruitsCopy) // ['orange', 'banana', 'grapes']

// ----------------------------------------------------
// Question 5:
const nums = [1, 2, 3, 4, 5]

// Deep copy using structuredClone
const numsCopy = structuredClone(nums)
// Modify the copied array
numsCopy[4] = 99

console.log(nums) // [1, 2, 3, 4, 5]  original unchanged
console.log(numsCopy) // [1, 2, 3, 4, 99]  copied modified

// ----------------------------------------------------
// Question 6:
// Step 1: Create an object name ⇒ user like below.
// Step 2: Now print the user’s name in the console.
// Step 3: Create a variable user4 and assign user3 to it.
// Now is this a Shallow Copy or Deep Copy?

const user3 = {
  name: 'Amit',
  address: {
    city: 'Delhi',
    pincode: 110001,
  },
}

const user4 = user3 // Reference copy → Same memory address
const user5 = { ...user3 } // Shallow copy → New memory for outer object only
const user6 = structuredClone(user3) // Deep copy → New memory for both outer and inner objects

console.log(user3)

// Object-level comparison
console.log(user3 === user4) // true → Same memory address (reference copy)
console.log(user3 === user5) // false → Different memory address (shallow copy)
console.log(user3 === user6) // false → Different memory address (deep copy)

// Shallow Copy: nested object (address) is still the same
console.log(user3.address === user5.address) // true → Same memory address (shared nested object)

// Deep Copy: nested object (address) is also new
console.log(user3.address === user6.address) // false → Different memory address (not shared)

// ----------------------------------------------------
// Question 7:
// Guess the output of the below code.

const original3 = {
  name: 'Amit',
  address: {
    city: 'Delhi',
    pincode: 110001,
  },
}

const copy2 = Object.assign({}, original3)
copy2.address.city = 'Mumbai'
console.log(original3.address.city) //Mumbai

// ----------------------------------------------------
// Question 8:
// Guess the output of the below code.

const people = [
  'Rahul',
  { name: 'Sita', address: { city: 'Kolkata', pincode: 700001 } },
]
const shallowCopy5 = people.slice()
shallowCopy5[1].address.city = 'Hyderabad'
console.log(people[1].address.city) // 'Hyderabad'
