"use strict"; // Enables strict mode for catching common mistakes

//  Example 1: Lexical Scope
function outer() {
    let name = 'Arashad'; // Variable in outer function
    function inner() {
        console.log(name); // inner function can access outer variable (lexical scope)
    }
    inner(); // Output: Arashad
}
outer();

//  Example 2: Closure
function outer2() {
    let name = 'Arashad';
    function inner() {
        console.log(name); // inner remembers 'name' even after outer finishes
    }
    return inner; // inner is returned and still has access to 'name'
}
let myFunc = outer2();
myFunc(); // Output: Arashad

//  Example 3: Nested Functions (Lexical Scope)
const username = 'Arashad';
let userAge = 21;
var a = 50;

function subtract() {
    const x = 15;
    const y = 18;
    const z = 28;
    function child() {
        const childName = 'Aman';
        console.log(childName); // Aman
        console.log(z);         // 28
        console.log(y);         // 18
    }
    child();
}
subtract();

//  Example 4: Deep Lexical Scope (grandchild inside child inside subtract)
function subtract2() {
    const x = 15;
    const y = 18;
    const z = 28;
    function child() {
        const childName = 'Aman';
        function grandChild() {
            const grandChildName = 'Ahad';
            console.log(grandChildName); // Ahad
            console.log(childName);      // Aman
            console.log(x);              // 15
            console.log(a);              // 50 (global var)
        }
        grandChild();
    }
    child();
}
subtract2();

//  Example 6: Block Scope (let)
{
    let age = 25;
    console.log(age); //  Accessible inside block
}
// console.log(age); //  Error: Not accessible outside block

//  Example 7: Block Scope (const in if block)
if (true) {
    const city = 'Ghazipur';
    console.log(city); //  Accessible inside block
}
// console.log(city); //  Error: Not accessible outside

//  Example 8: var is NOT block scoped
if (true) {
    var name2 = 'Arashad';
    console.log(name2); //  Accessible
}
console.log(name2); //  Accessible (var is function-scoped)

//  Example 9: var is Function Scoped
function add() {
    var h = 12;
    console.log(h); //  Accessible inside function
}
add();
// console.log(h); //  Error: h is not defined outside

//  Example 10: Block Scope (let and const)
{
    let s = 20;
    const d = 10;
    console.log(s); // 20
    console.log(d); // 10
}
// console.log(s); //  Error
// console.log(d); //  Error

//  Example 11: Function Scope
function child2() {
    let a = 2;
    const b = 4;
    var f = 10;
    console.log(a); // 2
    console.log(b); // 4
    console.log(f); // 10
}
child2();
// console.log(a); //  Error
// console.log(b); //  Error
// console.log(f); //  Error

//  Example 14: Using undeclared variable (Strict mode will give error)
// function test() {
//     value = 100; //  Not allowed in strict mode
//     console.log(value);
// }
// test();
// console.log(value); //  Error: value is not defined
