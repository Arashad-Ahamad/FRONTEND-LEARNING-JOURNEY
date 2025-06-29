//  Optimize Decision Making Using Else If and Else

//  Taking user input
const userName = prompt('Please Enter Your Name.');
const userAge = parseInt(prompt('Please Enter Your Age.'));

console.log(`Name: ${userName}`);
console.log(`Age: ${userAge}`);

//  Decision making based on age
if (userAge >= 0 && userAge <= 4) {
  console.log(`${userName} is a kid.`);
} else if (userAge >= 5 && userAge <= 17) {
  console.log(`${userName} is a school student.`);
} else if (userAge >= 18 && userAge <= 24) {
  console.log(`${userName} is a college student.`);
  console.log('And he/she is learning computer science.');
} else if (userAge >= 25 && userAge <= 45) {
  console.log(`${userName} is a working professional.`);
} else if (userAge > 45) {
  console.log(`${userName} is retired.`);
} else {
  console.log('Please Enter a valid Age.');
}

//  Understanding Truthy & Falsy values in If-Else

if (12) {
  console.log('Hello'); //  Executes (because 12 is truthy)
}

if (0) {
  console.log('World'); //  Will not execute (because 0 is falsy)
} else {
  console.log('India'); //  Executes
}

if (20) {
  console.log('USA'); // Executes (because 20 is truthy)
} else {
  console.log('UK');
}

//  Pass or Fail Logic
const mark = 35;
if (mark >= 40) {
  console.log('Pass');
} else {
  console.log('Fail');
}

//  Even or Odd Number
const num = 12;
if (num % 2 === 0) {
  console.log(`${num} is an Even number`);
} else {
  console.log(`${num} is an Odd number`);
}

//  Check Age for Voting
const age = 15;
if (age >= 18) {
  console.log('You are eligible to vote.');
} else {
  console.log('You are not eligible to vote.');
}

// Find the Largest Number
const num1 = 10
const num2 = 200
const num3 = 30

if (num1 >= num2 && num1 >= num3) {
  console.log(`${num1} is the largest number.`);
} else if (num2 >= num1 && num2 >= num3) {
  console.log(`${num2} is the largest number.`);
} else {
  console.log(`${num3} is the largest number.`);
}

//  Taking College Details
const collegeName = prompt('Please Enter Your College Name.') || 'Not Provided';
const rollNumber = prompt('Please Enter Your Roll Number.') || 'Not Provided';

console.log(`College Name: ${collegeName}`);
console.log(`Roll Number: ${rollNumber}`);

//  Taking user input
const username2 = prompt('Please Enter Your Name.');
const userAge2 = parseInt(prompt('Please Enter Your Age.'));

if (username2) {
  console.log(`User Name: ${username2}`);
} else if (!isNaN(userAge2)) {
  console.log(`User Age: ${userAge2}`);
} else {
  console.log('Invalid input.');
}


