// ======================================
// LOCAL STORAGE BASIC OPERATIONS
// ======================================

// ---------- Store String & Number ----------
localStorage.setItem('username', 'Arashad')
localStorage.setItem('age', 21) // Stored as string "21"

console.log('Username:', localStorage.getItem('username')) // "Arashad"
console.log('Age:', localStorage.getItem('age')) // "21"

// ---------- Remove Specific Data ----------
localStorage.removeItem('username')
console.log('After removing username:', localStorage.getItem('username')) // null

// ---------- Clear All Data ----------
console.log('Before clear, age:', localStorage.getItem('age')) // "21"
// localStorage.clear(); // Uncomment to clear everything
console.log('After clear, age:', localStorage.getItem('age')) // null

// ---------- Store & Retrieve Number ----------
localStorage.setItem('score', 100)
console.log('Score (string):', localStorage.getItem('score')) // "100"
console.log('Score (number):', Number(localStorage.getItem('score'))) // 100

// ---------- Store & Retrieve Array ----------
let fruits = ['Apple', 'Banana', 'Mango']
localStorage.setItem('fruits', JSON.stringify(fruits))

let getFruits = JSON.parse(localStorage.getItem('fruits'))
console.log('Fruits Array:', getFruits) // ["Apple", "Banana", "Mango"]
console.log('Second fruit:', getFruits[1]) // "Banana"

// ---------- Store & Retrieve Object ----------
let user = { name: 'Arashad', age: 21 }
localStorage.setItem('user', JSON.stringify(user))

let getUser = JSON.parse(localStorage.getItem('user'))
console.log('User Object:', getUser) // {name: "Arashad", age: 21}
console.log('User age:', getUser.age) // 21

// ======================================
//  LOCAL STORAGE WITH INPUT FIELDS (Live Update)
// ======================================

// ---------- Select DOM Elements ----------
const nameElement = document.querySelector('.nameTag') // Span to display name
const nameInput = document.querySelector('.name') // Name input field
const ageElement = document.querySelector('.ageTag') // Span to display age
const ageInput = document.querySelector('.age') // Age input field

// ---------- Load Data from Local Storage ----------
// If values exist in Local Storage, load them; otherwise, keep empty strings

nameElement.textContent = localStorage.getItem('myName') || ''
nameInput.value = localStorage.getItem('myName') || ''

ageElement.textContent = localStorage.getItem('myAge') || ''
ageInput.value = localStorage.getItem('myAge') || ''

// ---------- Update Name in Local Storage & UI ----------
// Whenever the user types in the name input, save it in Local Storage
// and update the displayed name in real time

nameInput.addEventListener('input', (e) => {
  localStorage.setItem('myName', e.target.value) // Save to Local Storage
  nameElement.textContent = e.target.value // // Update UI
})

// ---------- Update Age in Local Storage & UI ----------
// Whenever the user types in the age input, save it in Local Storage
// and update the displayed age in real time

ageInput.addEventListener('input', (e) => {
  localStorage.setItem('myAge', e.target.value) // Save to Local Storage
  ageElement.textContent = e.target.value // Update UI
})
