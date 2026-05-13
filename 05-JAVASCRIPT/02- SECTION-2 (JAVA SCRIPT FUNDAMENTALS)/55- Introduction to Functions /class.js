//  Example 1: Default Parameter

// Function Define with Default Parameter
function introduceMe(username = 'Guest') {
    console.log(`My name is ${username}`);
}

// Function Call with argument
introduceMe('Arashad');   // Output: My name is Arashad

// Function Call without argument (uses default)
introduceMe();            // Output: My name is Guest



//  Example 2: Multiple Parameters without Default Values

function intro(username, profession, age) {
    // Print values using template literals
    console.log(`My name is ${username}.`);
    console.log(`I am a ${profession}.`);
    console.log(`I am ${age} years old.`);
}

// Function Call with all arguments
intro('Arashad', 'Software Engineer', 21);
/*
Output:
My name is Arashad.
I am a Software Engineer.
I am 21 years old.
*/

intro('Asif', 'Banker', 25);
/*
Output:
My name is Asif.
I am a Banker.
I am 25 years old.
*/
