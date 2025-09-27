// -----------------------------------------
// form Event
// -----------------------------------------

// Example 1: submit Event
const form1 = document.querySelector('#myForm1')
form1.addEventListener('submit', function(event) {
    event.preventDefault()
    console.log('From Submited');
})

// Example 2:  input Event
const input = document.querySelector('#box')
input.addEventListener('input', function(event) {
    console.log(event.target.value);
})

// Example 3:  focus Event
const field = document.querySelector('#focusField')
field.addEventListener('focus', function() {
    console.log('Hello');
})

// Example 4:  blur Event
const blurField = document.querySelector('#blurField')
blurField.addEventListener('blur', function() {
    console.log('Hi');
})

// Example 4:  change Event
const user = document.querySelector('#username')
user.addEventListener('change', function(event) {
    console.log(event.target.value);
})

// Example 5:  Reset Event
 const form2 = document.querySelector('#myForm2')
 form2.addEventListener('reset', function() {
    alert('From Reset')
 })

 // -----------------------------------------
//  Event object
// -----------------------------------------

const form3 = document.querySelector('#myForm3')
form3.addEventListener('click', (event) => {
    console.log(event.type);
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.target.tagName);
})
