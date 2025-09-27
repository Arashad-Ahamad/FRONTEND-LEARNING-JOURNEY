//  Nested IF ELSE Statement in JavaScript

// Student Grade Check
const mark = 90
if (mark >= 50) {
  // Step 1: Check if student passed
  if (mark >= 80) {
    // Step 2: Check if marks are 80 or more
    console.log('Excellent! First Division')
  } else {
    //Step 3: If marks are between 50 and 79
    console.log('Good! Second Division')
  }
} else {
  // Step 4: If marks are less than 50
  console.log('Fail! Better luck Next time')
}

// Driving License Eligibility Check
const age = 19
const hasLicense = false
 
if (age >= 18) {
  // Step 1: Check if age is 18 or above
  if (hasLicense) {
    // Step 2: Check if person already has a license
    console.log('You can drive.')
  } else {
    // Step 3: If age is 18+ but no license
    console.log('You are eligible, but you need to get a license.')
  }
} else {
  // Step 4: If age is less than 18
  console.log('You are too young to drive.')
}

// Job Application Eligibility Check
const age2 = 25
const experience = 3
const hasDegree = true

if (age2 < 18) {
  console.log('You are too young to apply for a job.')
} else if (age2 >= 18 && age2 <= 60) {
  console.log('You are eligible to apply for a job.')

  if (experience >= 2 && hasDegree) {
    console.log('Congratulations! You qualify for a senior position.')
  } else {
    console.log('You can apply for a junior position.')
  }
} else {
  console.log('You have crossed the working age limit.')
}

// JavaScript Decision Making: Categorizing Users by Age

const username = 'Arshad Ahamad'
const userAge = 21

console.log(`Name: ${username}`)
console.log(`Age: ${userAge}`)

if (userAge >= 0 && userAge <= 4) {
  console.log(`${username} is a kid.`)
} else if (userAge >= 5 && userAge <= 17) {
  console.log(`${username} is a school student.`)
} else if (userAge >= 18 && userAge <= 24) {
  console.log(`${username} is a college student.`)
  console.log('And he/she is learning computer science.')

  if (username.length > 5) {
    console.log('Username has length greater than 5.')
  } else {
    console.log('Username is very short.')
  }
} else if (userAge >= 25 && userAge <= 45) {
  console.log(`${username} is a working professional.`)
} else if (userAge > 45) {
  console.log(`${username} is retired.`)
} else {
  console.log('Please enter a valid age.')
}