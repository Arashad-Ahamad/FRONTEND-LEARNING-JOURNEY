'use strict';

// -----------------------------------------------------
//  Normal For Loop – Used with arrays (index-based)
// -----------------------------------------------------
const fruits = ['Apple', 'Banana', 'Mango'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // Output: Apple, Banana, Mango
}

// -----------------------------------------------------
//  for...in Loop – Used to loop over keys (in objects or array indexes)
// -----------------------------------------------------

//  For objects – loops through keys
const student = {
    name: 'Arashad',
    age: 21,
    course: 'JavaScript'
};

for (let key in student) {
    console.log(key);            // Output: name, age, course
    console.log(student[key]);   // Output: Arashad, 21, JavaScript
}

// For arrays – loops through index numbers
const colors = ['Red', 'Green', 'Blue', 'Yellow'];

for (let index in colors) {
    console.log(index);         // Output: 0, 1, 2, 3
    console.log(colors[index]); // Output: Red, Green, Blue, Yellow
}

// -----------------------------------------------------
//  for...of Loop – Used to loop over values directly (arrays, strings)
// -----------------------------------------------------

//  For arrays – gives direct values
const studentNames = ['Arashad', 'Asif', 'Nawshad', 'Ahad'];

for (let studentName of studentNames) {
    console.log(studentName); // Output: Arashad, Asif, Nawshad, Ahad
}

//  For strings – gives each character
const name2 = 'Arashad';

for (let letter of name2) {
    console.log(letter); // Output: A, r, a, s, h, a, d
}

// -----------------------------------------------------
//  Object.keys(), Object.values(), Object.entries()
// -----------------------------------------------------

const user2 = {
    Name: 'Ahad',
    Age: 16,
    city: 'Ghazipur'
};

console.log(Object.keys(user2));   // Output: ['Name', 'Age', 'city']
console.log(Object.values(user2)); // Output: ['Ahad', 16, 'Ghazipur']
console.log(Object.entries(user2)); // Output: [['Name','Ahad'], ['Age',16], ['city','Ghazipur']]

// -----------------------------------------------------
//  Using for...of with Object (via keys, values, entries)
// -----------------------------------------------------

const formData = {
    username: 'arashad123',
    email: '96arashad@gmail.com',
    password: 123456
};

//  Looping through keys
for (let key of Object.keys(formData)) {
    console.log(key); // Output: username, email, password
}

// Looping through values
for (let value of Object.values(formData)) {
    console.log(value); // Output: arashad123, 96arashad@gmail.com, 123456
}

//  Looping through key-value pairs using destructuring
for (let [key, value] of Object.entries(formData)) {
    console.log(`${key}: ${value}`);
    // Output:
    // username: arashad123
    // email: 96arashad@gmail.com
    // password: 123456
}

// Question 1:
const student3 = {
    name: 'John Doe',
    age: 20,
    grade: 'A'
};

let properties = "";

for (let key in student3) {
    properties += key + ",";
}

properties = properties.slice(0, -1);

console.log(properties);

// Question 2:
const student4 = {
    name: 'John Doe',
    age: 20,
    grade: 'A'
};

// Using for...of loop with Object.entries()
for (let [key, value] of Object.entries(student4)) {
    console.log(`${key}: ${value}`);
}

// Using for...in loop
for (let key in student4) {
    console.log(`${key}: ${student4[key]}`);
}