// ---------------------------------
// forEach Array method Examples
// ---------------------------------

//  Example 1: Print index and value of each fruit
const fruits = ['apple', 'banana', 'mango'];
fruits.forEach(function (fruit, index) {
    console.log(`${index}: ${fruit}`);
});

console.log('*************************');

//  Example 2: Same as above using arrow function
const fruits2 = ['apple', 'banana', 'mango'];
fruits2.forEach((fruit2, index2) => {
    console.log(`${index2}: ${fruit2}`);
});

console.log('*************************');

//  Example 3: Print only the values from colors array
const colors = ['red', 'green', 'blue', 'yellow'];
colors.forEach((value) => {
    console.log(value);
});

console.log('*************************');

//  Example 4: Multiply each number by 2 and print
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
    console.log(num * 2);
});

console.log('*************************');

// ---------------------------------
// Practice Questions using forEach
// ---------------------------------

//  Question 1: Print each name in UPPERCASE
const names = ['arashad', 'namwshad', 'hamid', 'ali'];
names.forEach((name) => {
    console.log(name.toUpperCase());
});

console.log('*************************');

//  Question 2: Print "Pass" if marks >= 35 else "Fail"
const marks = [22, 47, 35, 19, 50];
marks.forEach((mark) => {
    if (mark >= 35) {
        console.log('Pass');
    } else {
        console.log('Fail');
    }
});

console.log('*************************');

//  Question 3: Print each student's name and age
const students = [
    { name: 'Arashad', Age: 21 },
    { name: 'Nawshad', Age: 23 },
    { name: 'Ali', Age: 10 },
    { name: 'Hamid', Age: 7 }
];
students.forEach((pupil) => {
    console.log(`${pupil.name} is ${pupil.Age} years old.`);
});

console.log('*************************');

//  Question 4: Print whether each number is Even or Odd
const nums = [10, 23, 33, 44, 5, 10, 13];
nums.forEach((num) => {
    if (num % 2 === 0) {
        console.log(`${num}: Even`);
    } else {
        console.log(`${num}: Odd`);
    }
});

console.log('*************************');

//  Question 5: Calculate the total sum of numbers using forEach
let sum = 0;
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach((num) => {
    sum += num;
});
console.log(`Total Sum: ${sum}`);

console.log('*************************');

//  Question 6:
const fruits3 = ['apple', 'banana', 'cherry'];
let totalLength = 0;
fruits3.forEach(
    (fruit) => {
        totalLength += fruit.length
    }
)
console.log(totalLength);