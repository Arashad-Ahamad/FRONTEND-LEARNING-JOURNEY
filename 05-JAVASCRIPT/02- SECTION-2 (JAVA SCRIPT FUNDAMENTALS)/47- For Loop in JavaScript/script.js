//----------------------------------------------------------
// For Loop in JavaScript
//----------------------------------------------------------
// Example 1: Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(`Number is: ${i}`); // Prints numbers 1, 2, 3, 4, 5
}

//----------------------------------------------------------
// Example 2: Print multiplication table of 5
for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i}: ${5 * i}`); // Prints 5*1=5, 5*2=10, ..., 5*10=50
}

//----------------------------------------------------------
// Example 3: Print all fruits from the array
let fruits = ["Apple", "Banana", "Mango", "Orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // Prints each fruit: Apple, Banana, Mango, Orange
}

//----------------------------------------------------------
// Example 4: Print all even numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i); // Prints even numbers like 2, 4, 6, ..., 100
    }
}

//----------------------------------------------------------
// Example 5: Print all odd numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 1) {
        console.log(i); // Prints odd numbers like 1, 3, 5, ..., 99
    }
}

//----------------------------------------------------------
//Question 1: Write a for loop in JavaScript to print 
// the multiplication table of 7 from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}

//----------------------------------------------------------
// Question 2: Write a for loop in JavaScript to print all 
// the numbers from 1 to 20 that are divisible by 3.
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

//----------------------------------------------------------
// Question 3:  Write a for loop to find the sum of 
// all even numbers between 1 and 50.
let sum = 0
for (let i = 1; i <= 50; i++) {
if (i % 2 === 0) {
    sum += i
}
}
console.log(sum);


//----------------------------------------------------------
console.log('Program Ended'); // Message indicating that the program has finished
