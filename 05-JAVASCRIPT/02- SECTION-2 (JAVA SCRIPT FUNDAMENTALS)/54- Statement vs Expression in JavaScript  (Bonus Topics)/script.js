// --------------------------------------------------------------------------
// Expressions in JavaScript
// --------------------------------------------------------------------------

// 1. Arithmetic Expression
let sum = 5 + 3;  // This is an expression: 5 + 3 evaluates to 8, which is assigned to sum
console.log(sum); // This is a statement: It calls a function to print the result (8) in the console

// 2. Variable Assignment (Expression)
let x = 10;  // This is an expression: The value 10 is assigned to variable x
console.log(x); // This is a statement: It prints the value of x (10)

// 3. Function Call (Expression)
console.log("Hello, World!"); // This is an expression: Function call which outputs the string to the console

// 4. Logical Expression
let isEven = (x % 2 === 0); // This is an expression: The result of (x % 2 === 0) is assigned to isEven
console.log(isEven); // This is a statement: It prints the value of isEven (true or false) to the console

// 5. Ternary Operator (Expression)
let result = (x > 5) ? "Yes" : "No"; // This is an expression: The ternary operator evaluates the condition and assigns "Yes" or "No" to result
console.log(result); // This is a statement: It prints the value of result ("Yes" or "No") to the console

// 6. Return Statement in Function (Expression)
function add(a, b) {
    return a + b; // This is an expression: The result of a + b is returned from the function
}
let sumResult = add(5, 3); // This is an expression: Calling the function and assigning the return value to sumResult
console.log(sumResult); // This is a statement: It prints the result of the sum (8)

// Expressions are parts of the code that evaluate to a value.

// --------------------------------------------------------------------------
// Summary of Expressions:
// Arithmetic Expressions: 5 + 3, x % 2 === 0 (evaluates to a value)

// Variable Assignment: let x = 10 (value assigned to variable)

// Function Call: console.log("Hello") (function that returns a value)

// Logical Expressions: x % 2 === 0 (condition check evaluates to true or false)

// Ternary Operator: (x > 5) ? "Yes" : "No" (evaluates to one of the values)

// Return Expression: return a + b (function evaluates and returns a value)

// --------------------------------------------------------------------------



// --------------------------------------------------------------------------
// Statements in JavaScript
// --------------------------------------------------------------------------

// 1. Variable Declaration (Statement)
let y; // This is a statement: Declaring a variable y, but not assigning a value yet

// 2. Assignment Statement
x = 20; // This is a statement: Assigning the value 20 to the variable x

// 3. If-Else Statement (Condition check)
if (x > 10) { // This is a statement: Conditional check, if x is greater than 10, the first block will execute
    console.log("Greater than 10"); // This is a statement: It prints the message if the condition is true
} else {
    console.log("Less or equal to 10"); // This is a statement: It prints this message if the condition is false
}

// 4. For Loop Statement
for (let i = 0; i < 3; i++) { // This is a statement: A loop statement to iterate and run the code block for 3 iterations
    console.log(i); // This is a statement: It prints the value of i in each iteration (0, 1, 2)
}

// 5. Function Declaration (Statement)
function greet() { // This is a statement: Function declaration
    console.log("Hello!"); // This is a statement: Inside the function, we print the greeting message
}
greet(); // This is a statement: Function call to execute the greet function

// 6. Return Statement (Statement in a function)
function checkEven(num) {
    if (num % 2 === 0) {
        return true; // This is a statement: Returning 'true' if the number is even
    }
    return false; // This is a statement: Returning 'false' if the number is odd
}
let isEvenNumber = checkEven(6); // This is a statement: Function call that evaluates to a value
console.log(isEvenNumber); // This is a statement: It prints the return value from checkEven function (true or false)

// --------------------------------------------------------------------------

// Variable Declaration: let y; (just declares a variable)

// Assignment: x = 20 (assigns a value to a variable)

// Control Flow: if statement, for loop, etc. (they control the flow but don't evaluate to a value)

// Function Declaration: function greet() {} (declaring a functio

// --------------------------------------------------------------------------