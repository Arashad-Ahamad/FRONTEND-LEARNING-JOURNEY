// ----------------------------------------
// Keydown Event
// ----------------------------------------

// Example 1: keydown on entire document (e.key)
document.addEventListener('keydown', function (e) {
    console.log('e.key:', e.key)
})

// Example 2: keydown on document (e.code)
document.addEventListener('keydown', function (e) {
    console.log('e.code:', e.code)
})

// Example 3: keydown on specific element (h1)
const heading = document.querySelector('h1')
heading.addEventListener('keydown', function (e) {
    console.log('e.key:', e.key)
})

// Example 4:keydown on input field
const input = document.querySelector('#name')
input.addEventListener('keydown', function (e) {
    console.log(e.key)
})

// ----------------------------------------
// Keyup Event
// ----------------------------------------

// Example 5: keyup on document
document.addEventListener('keyup', function (e) {
    console.log(e.key)
})

// Example 6: keyup on specific paragraph element
const para = document.querySelector('p')
para.addEventListener('keyup', function (e) {
    console.log(e.key)
})
