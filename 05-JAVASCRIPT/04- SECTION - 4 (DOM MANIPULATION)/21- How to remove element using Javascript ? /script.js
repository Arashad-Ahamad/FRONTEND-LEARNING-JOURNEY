// Example 1:
const span = document.querySelector('#span')
const card = document.querySelector('#card')
card.removeChild(span)

// Example 2:
const box = document.querySelector('h2')
box.remove()
console.log(box)

// Example 3:
let box2 = document.querySelector('h3')
box2.remove()
box2 = null
console.log(box2)

// Example 4:
document.querySelector('div').remove()

// Example 5:
document.querySelector('#list').children[1].remove()
