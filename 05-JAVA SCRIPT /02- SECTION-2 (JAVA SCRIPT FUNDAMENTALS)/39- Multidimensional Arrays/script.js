// ─────────────────────────────────────────────
// Multidimensional Arrays
// ─────────────────────────────────────────────

// ─────────────────────────────────────────────
// One-Dimensional Array (1D)
// ─────────────────────────────────────────────
const names = ['Arashad', 'Hamid', 'Asif']
console.log(names) // Print the whole array
console.log(names[0]) // First element: 'Arashad'
console.log(names[1]) // Second element: 'Hamid'
console.log(names[2]) // Third element: 'Asif'

// ─────────────────────────────────────────────
// Two-Dimensional Array (2D)
// ─────────────────────────────────────────────
const numbers = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
]
console.log(numbers) // Print the whole 2D array

// First row
console.log(numbers[0]) // [10, 20, 30]
console.log(numbers[0][0]) // 10
console.log(numbers[0][1]) // 20
console.log(numbers[0][2]) // 30

// Second row
console.log(numbers[1]) // [40, 50, 60]
console.log(numbers[1][0]) // 40
console.log(numbers[1][1]) // 50
console.log(numbers[1][2]) // 60

// Third row
console.log(numbers[2]) // [70, 80, 90]
console.log(numbers[2][0]) // 70
console.log(numbers[2][1]) // 80
console.log(numbers[2][2]) // 90

// ─────────────────────────────────────────────
// Two-Dimensional Array (2D)
// ─────────────────────────────────────────────
const fruits = [
  ['apple', 'banana', 'cherry'],
  ['mango', 'grapes', 'orange'],
  ['kiwi', 'papaya', 'guava'],
]

console.log(fruits[0][0]) // apple
console.log(fruits[0][2]) // cherry
console.log(fruits[1][0]) // mango
console.log(fruits[1][1]) // grapes
console.log(fruits[2][1]) // papaya
console.log(fruits[2][2]) // guava

// ─────────────────────────────────────────────
// Three-Dimensional Array (3D)
// ─────────────────────────────────────────────
const cube = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
]

console.log(cube[0]) // First 2D array
console.log(cube[0][0]) // [1, 2]
console.log(cube[0][0][0]) // 1
console.log(cube[0][0][1]) // 2
console.log(cube[0][1]) // [3, 4]
console.log(cube[0][1][0]) // 3
console.log(cube[0][1][1]) // 4

console.log(cube[1]) // Second 2D array
console.log(cube[1][0]) // [5, 6]
console.log(cube[1][0][0]) // 5
console.log(cube[1][0][1]) // 6
console.log(cube[1][1]) // [7, 8]
console.log(cube[1][1][0]) // 7
console.log(cube[1][1][1]) // 8

// ─────────────────────────────────────────────
// Three-Dimensional Array (3D)
// ─────────────────────────────────────────────
const studetNames = [
  [
    ['Arashad', 'Asif'],
    ['Zoya', 'Afreen'],
  ],
  [
    ['sara', 'priya'],
    ['zoyti', 'juhi'],
  ],
]

console.log(studetNames[0]) // First group of students
console.log(studetNames[0][0][1]) // 'Asif'
console.log(studetNames[0][1][0]) // 'Zoya'

console.log(studetNames[1]) // Second group of students
console.log(studetNames[1][0][0]) // 'sara'
console.log(studetNames[1][1][0]) // 'zoyti'

// ─────────────────────────────────────────────
// Accessing deeply nested values from a 3D array
// ─────────────────────────────────────────────

const nestedArray = [
  [[1, 2], 3, 4], // Index 0
  [5, [6, 7], 8], // Index 1
  [9, 10, [11, 12]], // Index 2
]

// Access and print: 1, 2
console.log(nestedArray[0][0][0]) // 1
console.log(nestedArray[0][0][1]) // 2

// Access and print: 6, 7
console.log(nestedArray[1][1][0]) // 6
console.log(nestedArray[1][1][1]); // 7

// Access and print: 11, 12
console.log(nestedArray[2][2][0]) // 11
console.log(nestedArray[2][2][1]) // 12
