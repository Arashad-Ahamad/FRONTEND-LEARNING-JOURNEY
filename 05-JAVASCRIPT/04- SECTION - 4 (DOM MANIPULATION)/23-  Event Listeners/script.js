// ------------------------------
// addEventListener()
// ------------------------------

// Example 1:
const btn1 = document.querySelector('#myBtn1')
btn1.addEventListener('click', function () {
  console.log('Button Clicked')
})

// ------------------------------
// Type of writing EventListener()
// ------------------------------

// Example 2: Anonymous Function
const btn2 = document.querySelector('#myBtn2')
btn2.addEventListener('click', function () {
  console.log('Clicked')
})

// Example 3: Named Function
function showMessage() {
  console.log('Hello world')
}
const btn3 = document.querySelector('#myBtn3')
btn3.addEventListener('click', showMessage)

// Example 4: Arrow Function
const btn4 = document.querySelector('#myBtn4')
btn4.addEventListener('click', () => {
  console.log('Hi')
})

// Example 5: Multiple Listeners on same Element
const btn5 = document.querySelector('#myBtn5')
btn5.addEventListener('click', function () {
  console.log('First Function')

  btn5.addEventListener('click', function () {
    console.log('Second Function')
  })
})

// Example 6: Double click Event
const btn6 = document.querySelector('#myBtn6')
btn6.addEventListener('dblclick', function () {
  console.log('Lucknow')
})

// Example 7:  Remove after first click
const btn7 = document.querySelector('#myBtn7')

function greet() {
  console.log('Dom')
  btn7.removeEventListener('click', greet)
}
btn7.addEventListener('click', greet)

// Example 8:  Remove after 3 seconds

function greet2() {
  console.log('Button Clicked')
}
const btn8 = document.querySelector('#myBtn8')
btn8.addEventListener('click', greet2)
setTimeout(function () {
  btn8.removeEventListener('click', greet2)
  console.log('Event Removed')
}, 3000)

// ------------------------------
// // Mini Project: Card Creator
// ------------------------------
const container = document.querySelector('.container')
const card = document.querySelector('.card')
let count = 1
card.addEventListener('click', function() {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.textContent = count
    count++
container.appendChild(newCard)
    
}) 


// cloneNode() use 
// card.addEventListener('click', function() {
//     const copy = card.cloneNode()
//     copy.classList.remove('add-card')
//     copy.textContent = count++
//     container.appendChild(copy)
// })


// ------------------------------
// Event bubbling and capturing
// ------------------------------
// Example 9: bubbling  (Defult)
const parent = document.querySelector('#box')
const child = document.querySelector('#child')

parent.addEventListener('click', function () {
  console.log('Parent')
})

child.addEventListener('click', function () {
  console.log('Child')
})

// Example 10: capturing
const parent2 = document.querySelector('#box2')
const child2 = document.querySelector('#child2')

parent2.addEventListener(
  'click',
  function () {
    console.log('Parent')
  },
  true
)

child2.addEventListener(
  'click',
  function () {
    console.log('Child')
  },
  true
)

// ------------------------------
// Event object
// ------------------------------
// Example 11:
const btn11 = document.querySelector('#myBtn11')
btn11.addEventListener('click', function (Event) {
  console.log(Event)
  console.log(Event.type)
  console.log(Event.target)
  console.log(Event.target.textContent)
})
// ------------------------------
//  Optional inline example handler
// ------------------------------
// Example 12:
function sayHello() {
  alert('Hello world')
}
