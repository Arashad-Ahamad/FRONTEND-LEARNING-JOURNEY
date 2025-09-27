// -----------------------------------------
//  Function Examples (Independent)
// -----------------------------------------

//  Example 1: A simple function that prints a message
function greet() {
    console.log('Hello');
}
greet();  // Output: Hello

//  Example 2: A function with parameters that returns a sum
function add(a, b) {
    return a + b;
}
console.log(add(5, 3));  // Output: 8

// -----------------------------------------
//  Method Examples (Functions inside objects)
// -----------------------------------------

//  Example 3: Method inside an object using 'this' to access object properties
let person1 = {
    name: 'Arashad',
    greet: function() {
        console.log('Hello ' + this.name);
    }
};
person1.greet();  // Output: Hello Arashad

//  Example 4: A method inside an object that adds two numbers
let math = {
    add: function(a, b) {
        return a + b;
    }
};
console.log(math.add(3, 2));  // Output: 5

//  Example 5 (ES6 Syntax): Method using short syntax with 'this'
const person2 = {
    name: 'Ahad',
    sayHi() {
        return `Hi I am ${this.name}`;
    }
};
console.log(person2.sayHi());  // Output: Hi I am Ahad

//  Example 6 (ES6 Syntax): Another short method example
const user = {
    name: 'Nawshad',
    greet2() {
        return `Hi ${this.name}`;
    }
};
console.log(user.greet2());  // Output: Hi Nawshad

/*
--------------------------------------------
 Function vs Method - Quick Summary
--------------------------------------------

 Function:
- A reusable block of code.
- Defined outside of any object.
- Syntax: function functionName() {}
- Called directly using its name.

 Method:
- A function stored as a property inside an object.
- Syntax (traditional- ES5): key: function() {}
- Syntax (ES6): key() {}
- Called using object.methodName()
- Can use 'this' to refer to the object it belongs to.

 All methods are functions, but not all functions are methods.

*/
