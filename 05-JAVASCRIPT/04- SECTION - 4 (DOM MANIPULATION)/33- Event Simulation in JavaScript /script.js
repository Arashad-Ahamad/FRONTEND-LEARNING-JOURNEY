// Example 1: click Event Simulation
const btn1 = document.querySelector('#myBtn1')
btn1.addEventListener('click', function() {
    console.log('Button Clicked');
})

btn1.click()

// Question 1:
const btn2 = document.querySelector('#myBtn2')
btn2.addEventListener('click', () => {
    console.log('Hello World');
})
for(let i = 1; i <= 1000; i++) {
    btn2.click()
}

// Example 2: focus Event Simulation
const input1 = document.querySelector('#nameInput1')
input1.addEventListener('focus', () => {
    console.log('Input focused');
})

input1.focus()

// Question 2:
const input2 = document.querySelector('#nameInput2')
input2.addEventListener('focus', () => {
    console.log('focused');
})

setTimeout(() => {
    input2.focus()
}, 2000)

// Example 3: blur Event Simulation
const input3 = document.querySelector('#nameInput3')
input3.addEventListener('blur', () => {
    console.log('Blur');
})
input3.focus()
setTimeout(() => {
    input3.blur()
}, 2000)

// Example 4: submit Event Simulation
// const form = document.querySelector('#myForm')
// form.addEventListener('submit', (e) => {
// e.preventDefault
//     console.log('Form Submitted');
// })
// setTimeout(() => {
//     form.submit()
// }, 3000)

// Example 5: reset Event Simulation
const form2 = document.querySelector('#myForm2')
form2.addEventListener('reset', () => {
    console.log('Form Reset');
})
setTimeout(() => {
    form2.reset()
}, 3000)