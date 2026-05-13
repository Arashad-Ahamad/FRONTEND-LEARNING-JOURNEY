// -------------------------------------------
// Function Declaration
// -------------------------------------------

// Example 1: Function Declaration
function greet() {
    console.log('Hello');
}
greet(); // Call the function

// -------------------------------------------
// Function Expression
// -------------------------------------------

// Example 2: Function Expression (anonymous function assigned to a variable)
const greet2 = function () {
    console.log('Hello');
}
greet2(); // Call the function

// Example 3: Function Expression with parameters and return
const add = function(a, b) {
    return a + b;
}
console.log(add(5, 9)); // Output: 14

// -------------------------------------------
// Arrow Functions
// -------------------------------------------

// Example 4: Arrow function with no parameters
const greet3 = () => {
    console.log('Hello World');
}
greet3(); // Output: Hello World

// Example 5: Arrow function with return keyword
const greet4 = () => {
    return 'Hello India';
}
console.log(greet4()); // Output: Hello India

// Example 6: Arrow function with one parameter
const userName = name => {
    return name;
}
console.log(userName('Arashad')); // Output: Arashad

// Example 7: Arrow function with two parameters and return
const add2 = (a, b) => {
    return a + b;
}
console.log(add2(10, 21)); // Output: 31

// Example 8: Arrow function returning an object (with return keyword)
const getUser = () => {
    return { name: 'Arashad', age: 21 };
}
console.log(getUser()); // Output: { name: 'Arashad', age: 21 }

// -------------------------------------------
// Arrow Functions - Implicit Return
// -------------------------------------------

// Example 9: Implicit return with no curly braces
const sayHello = () => 'Hello USA';
console.log(sayHello()); // Output: Hello USA

// Example 10: Implicit return with one parameter
const greet5 = name => name;
console.log(greet5('Ahad')); // Output: Ahad

// Example 11: Implicit return with two parameters
const add3 = (a, b) => a + b;
console.log(add3(5, 3)); // Output: 8

// Example 12: Implicit return of an object (must wrap object in parentheses)
const getUser2 = () => ({ name: 'Jack', age: 25 });
console.log(getUser2()); // Output: { name: 'Jack', age: 25 }

// Example 13: Implicit return of a dynamic object using parameters
const getUser3 = (name, age) => ({ Name: name, Age: age });
console.log(getUser3('Nawshad', 22)); // Output: { Name: 'Nawshad', Age: 22 }
 
// Example 14: Implicit return - square of a number
const square = (n) => n * n;
console.log(square(3)); // Output: 9

// Example 15: Implicit return - check even number
const isEven = num => num % 2 === 0;
console.log(isEven(4)); // Output: true

// Example 16: Arrow function inside setTimeout
setTimeout(() => {
    console.log('Hello Arashad');
}, 3000); // Output after 3 seconds: Hello Arashad

// Example 17: Concatenate first name and last name
const getFullName = (firstName, lastName) => firstName + " " + lastName;
console.log(getFullName('Arashad', 'Ahamad')); // Output: Arashad Ahamad
