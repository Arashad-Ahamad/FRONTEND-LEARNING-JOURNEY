//---------------------------------------------------------------
// Practical Questions
//---------------------------------------------------------------
// Question 1: Write JavaScript code that prints all 
// the numbers from 1 to 10 inclusive using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//---------------------------------------------------------------
// Question 2: Write JavaScript code that calculates 
// the sum of all the numbers from 1 to 1000 inclusive and prints the result.
let sum = 0
for (let i = 1; i <= 1000; i++ ) {
    sum+= i
}
console.log(sum);

//---------------------------------------------------------------
// Question 3: 
// Write JavaScript code that finds the maximum number in an array of 
// numbers [5, 10, 2, 8, 15] and prints the result.

let numbers = [5, 10, 2, 8, 15]
let maxnumber = Math.max(...numbers) 
console.log(maxnumber);

//---------------------------------------------------------------
// Question 4: 
// Write JavaScript code that takes a string "hello" as 
// input and prints the string reversed ("olleh") using a for loop.

let str = "hello";
let reversedStr = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}

console.log(reversedStr);  // Output: "olleh"

//---------------------------------------------------------------
// Question 5: 
// Write JavaScript code that counts the number of 
// vowels (a, e, i, o, u) in a string "javascript" and prints the result.
let str2 = 'JavaScript'
let count2 = 0
for (let i = 0; i < str2.length; i++) {
    if ('aeiou'.includes(str2[i]))
        count2++
}
console.log(count2);

//---------------------------------------------------------------
// Question 6: 
// Write JavaScript code that prints the Fibonacci sequence up to
//  the 10th term. (The Fibonacci sequence is a series of numbers 
// where each number is the sum of the two preceding ones, starting with 0 and 1.)

let n = 10;  // Print Fibonacci sequence up to the 10th term
let a = 0, b = 1;

console.log(a);  // Print the first number

for (let i = 1; i < n; i++) {
    let nextTerm = a + b;  // Calculate the next Fibonacci number
    console.log(nextTerm);  // Print the next term
    a = b;  // Update a
    b = nextTerm;  // Update b
}

//---------------------------------------------------------------
// Question 7: Write JavaScript code that checks whether a given number is a 
// prime number or not. Print "Prime" if it's a prime number, otherwise print "Not Prime".

let number = 7; 

if (number <= 1) {
  console.log("Not Prime");
} else {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log("Prime");
  } else {
    console.log("Not Prime");
  }
}

//---------------------------------------------------------------
// Question 8: Write JavaScript code that generates a random password of length 8 consisting of 
// uppercase letters, lowercase letters, and numbers. 
// (Hint: You can use the Math.random() function to generate random numbers and convert them to characters.)

let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let password = "";

for (let i = 0; i < 8; i++) {
  let randomIndex = Math.floor(Math.random() * characters.length);
  password += characters[randomIndex];
}

console.log("Random Password:", password);


//---------------------------------------------------------------
// Question 9:
// Write JavaScript code that prints all the prime numbers between 1 and 100.

for (let num = 2; num <= 100; num++) {
    let isPrime = true;
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
  
    if (isPrime) {
      console.log(num);
    }
  }
  
  //---------------------------------------------------------------
// Question 10: Write JavaScript code that calculates the factorial of a given number. 
// (The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.)

let number2 = 5; 

let factorial = 1;

for (let i = 1; i <= number2; i++) {
  factorial *= i;
}

console.log("Factorial of " + number2 + " is: " + factorial);
