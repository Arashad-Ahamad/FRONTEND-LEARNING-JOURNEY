// Question 1: Basic Closure example
function outerFunction() {
    let outerVar = 10;

    function innerFunction() {
        console.log(outerVar); // innerFunction accesses outerVar → Closure
    }

    return innerFunction;
}

let closureFunc1 = outerFunction(); // outerFunction runs, returns innerFunction
closureFunc1(); // Output: 10



// Question 2: Independent counters with closures
function createCounter() {
    let count = 0;

    return function () {
        return ++count; // Each closure has its own count variable
    };
}

let counter1 = createCounter(); // New closure, count = 0
let counter2 = createCounter(); // Separate closure, count = 0

console.log(counter1()); // Output: 1
console.log(counter2()); // Output: 1



// Question 3: Lexical scope inside closures
let message = "Global";

function outerFunction2() {
    let message = "Outer";

    function innerFunction() {
        console.log(message); // Refers to local 'message', not global
    }

    return innerFunction;
}

let closureFunc2 = outerFunction2();
closureFunc2(); // Output: Outer



// Question 4: Closure inside setTimeout callback
let num = 5;

function outerFunc() {
    let num = 10;

    setTimeout(function() {
        console.log(num); // Closure captures local num = 10
    }, 1000);
}

outerFunc(); // Output after 1 second: 10



// Question 5: Closure with arithmetic operation
let a = 1;

function outerFunc2() {
    let b = 2;

    function innerFunc() {
        let c = 3;

        console.log(a + b + c); // 1 + 2 + 3 = 6
    }

    return innerFunc;
}

let closureFunc3 = outerFunc2();
closureFunc3(); // Output: 6
