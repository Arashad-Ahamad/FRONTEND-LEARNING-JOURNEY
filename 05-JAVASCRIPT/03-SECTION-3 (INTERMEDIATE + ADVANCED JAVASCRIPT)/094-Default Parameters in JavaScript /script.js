// ---------------------------------------
//  Default Parameters in JavaScript (ES6)
// ---------------------------------------

//  Example 1: Normal Function WITHOUT default value
function greet(name) {
  console.log('Hello ' + name);
}

greet('Arashad');  // Output: Hello Arashad
greet();           // Output: Hello undefined (because no value was passed)


//  Example 2: Function WITH default parameter
function greet2(name = 'Stranger') {
  console.log('Hello ' + name);
}

greet2('Ahad');   // Output: Hello Ahad
greet2();         // Output: Hello Stranger (default value used)


//  Example 3: Function with MULTIPLE default parameters
function introduce(name = 'Guest', age = 18) {
  console.log('Name: ' + name);
  console.log('Age: ' + age);
}

introduce('Ali', 30);   // Output: Name: Ali, Age: 30
introduce();            // Output: Name: Guest, Age: 18 (default values used)


//  Example 4: Return message using default values
function sendMessage(name = "Myself", msg = "Good Morning") {
    return `${name} says ${msg}`;
}

console.log(sendMessage());           // Output: Myself says Good Morning
console.log(sendMessage("Arshad"));   // Output: Arshad says Good Morning
console.log(sendMessage("Ali", "Hello!")); // Output: Ali says Hello!