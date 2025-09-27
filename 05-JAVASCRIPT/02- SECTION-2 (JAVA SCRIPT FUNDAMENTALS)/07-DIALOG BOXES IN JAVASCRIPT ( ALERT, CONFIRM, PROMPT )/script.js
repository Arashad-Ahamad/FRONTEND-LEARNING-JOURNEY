// alert() does NOT return any value, so alertResult will be undefined
const alertResult = alert("Are you sure?");
console.log(alertResult); // Output: undefined

// confirm() returns true if OK is clicked, false if Cancel is clicked
const response = confirm("Do you want to continue?");
console.log(response); // Output: true or false

// prompt() returns the user input or null if Cancel is clicked 
const userName = prompt("What is your name?");
console.log(userName); // Output: user input or null
