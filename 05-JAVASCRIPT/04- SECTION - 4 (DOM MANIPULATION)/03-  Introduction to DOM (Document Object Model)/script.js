// Display the document object in the console
console.log(document) // Shows the entire HTML document
console.dir(document) // Shows the document in JavaScript object format

// -----------------------------------
// Element Selection Methods
// -----------------------------------

// Example 1: getElementById()
// Selects a single element by its ID
const heading = document.getElementById('intro')
console.log(heading)

// Example 2: getElementsByClassName()
// Selects all elements with the given class (returns HTMLCollection)
const allParas = document.getElementsByClassName('myclass')
console.log(allParas)

// Example 3: getElementsByClassName() with specific index
// Selecting individual elements using index
const paras = document.getElementsByClassName('greet')
let firstPara = paras[0] // First element with class "greet"
let thirdPara = paras[2] // Third element with class "greet"
console.log(firstPara)
console.log(thirdPara)

// Example 4: getElementsByTagName()
// Selects all <p> tags in the document
const paras3 = document.getElementsByTagName('p')
console.log(paras3)

// Example 5: getElementsByTagName() within a specific element
// Selects all <span> tags inside the element with ID "box"
const box = document.getElementById('box')
const spansInBox = box.getElementsByTagName('span')
console.log(spansInBox)

// Example 6: Selecting a specific <span> inside #box
// Selecting the third <span> (index starts at 0)
const thirdSpan = box.getElementsByTagName('span')[2]
console.log(thirdSpan)

// Example 7: querySelector() by ID
// Selects the first element that matches the selector
const el = document.querySelector('#intro')
console.log(el)

// Example 8: querySelector() by class
// Selects the first element with class "myclass"
const el2 = document.querySelector('.myclass')
console.log(el2)

// Example 9: querySelector() by tag
// Selects the first <h2> element
const el3 = document.querySelector('h2')
console.log(el3)

// Example 10: querySelector() nested selection
// Selects the first <span> inside the element with ID "box"
const el4 = document.querySelector('#box span')
console.log(el4)

// Example 11: querySelectorAll() by class
// Selects all elements with class "myclass" (returns NodeList)
const allMsg = document.querySelectorAll('.myclass')
console.log(allMsg)

// Example 12: querySelectorAll() nested selection
// Selects all <span> elements inside #box
const allspan = document.querySelectorAll('#box span')
console.log(allspan)

// ----------------------------------------
//  HTML Element Update
// ----------------------------------------

// ----------  Text Content (No HTML Parsing) ----------

//  Example 13: Get text from #card
const result2 = document.getElementById('card')
console.log(result2.textContent) // "Hi"

//  Example 14: Get text from #new (strips tags)
const result = document.getElementById('new')
console.log(result.textContent)

//  Example 15: Set text in #yet
const result3 = document.getElementById('yet')
result3.textContent = 'Hello from js.'
console.log(result3)

//  Example 16: Change text of heading
const element2 = document.getElementById('myHeading')
element2.textContent = 'Welcome to DOM World.'
console.log(element2)

//  Example 17: Set plain text (won’t render HTML)
const result4 = document.getElementById('empty')
result4.textContent = '<b>Hello</b>' // Will display tags as text
console.log(result4)

//  Example 18: Replace all inner content with text
const text = document.getElementById('msg')
text.textContent = 'Welcome'
console.log(text)

// ----------  innerHTML (Parses HTML Tags) ----------

//  Example 19: Set italic content
const box2 = document.getElementById('demo')
box2.innerHTML = '<i>Hello Arshad</i>'
console.log(box2)

//  Example 20: Add heading + paragraph
const contentBox = document.getElementById('content')
contentBox.innerHTML = '<h2>Welcome</h2><p>Hello</p>'
console.log(contentBox)

//  Example 21: Replace old content with new
const a = document.getElementById('box2')
a.innerHTML = '<h2>New content added</h2>'
console.log(a)

//  Example 22: Get current innerHTML
const b = document.getElementById('box2')
console.log(b.innerHTML)

//  Example 22 (alt): Update message
const msgElement = document.getElementById('msg2')
msgElement.innerHTML = 'Updated Message'
console.log(msgElement)

//  Example 23: Append content without replacing
const c = document.getElementById('add')
c.innerHTML += '<p>New Content</p>'
console.log(c)

// ----------------------------------------
//  Change CSS Styles using JavaScript
// ----------------------------------------
//  Example 24:
const el5 = document.getElementById('para')

// Apply multiple styles
el5.style.color = 'red' // Text color
el5.style.border = '5px solid green' // Border
el5.style.backgroundColor = 'pink' // Background color
el5.style.padding = '10px' // Padding
el5.style.fontSize = '20px' // Font size
el5.style.textAlign = 'center' // Text alignment

// ----------------------------------------
//  Attributes vs Properties
// ----------------------------------------

//  Example 25: Read property values
const input = document.getElementById('nameInput')
console.log(input.type) // property
console.log(input.value) // property

//  Example 26: Change property (live)
const input2 = document.getElementById('userInput')
input2.type = 'email' // changes input type to email
console.log('Updated type:', input2.type)

//  Example 27: Difference between value property and attribute
const input3 = document.getElementById('myInput')
input3.value = 'name' // updates visible value
console.log('Live value:', input3.value) // "name"
console.log('HTML attribute:', input3.getAttribute('value')) // "original"

//  Example 28: Set attribute (affects both initially)
const input4 = document.getElementById('my')
input4.setAttribute('value', 'userName') // sets HTML attribute
console.log('Attribute value:', input4.getAttribute('value')) // "userName"
console.log('Live value:', input4.value) // "userName"

//  Example 29: Change image src property
const img = document.getElementById('myImage')
img.src = 'new.jpg' // changes image source
console.log('New image source:', img.src) // full URL printed

// ----------------------------------------
// GLOBAL VARIABLES IN DOM
// ----------------------------------------

//  Example 30: var creates global scope + adds to window object
var name2 = 'Arashad'
console.log(name2) // "Arashad"
console.log(window.name2) //  var goes into window object

//  Best Practice: Use let or const (No window pollution)
let firstName = 'Arashad'
console.log(firstName) // "Arashad"
console.log(window.firstName) // undefined  clean scope

// ----------------------------------------
//  Example 31: let/const are block scoped and do NOT pollute window
let g = 10
const h = 30

console.log(g) // 10
console.log(h) // 30
console.log(window.g) // undefined
console.log(window.h) // undefined

// ----------------------------------------
//  Example 32: Access DOM elements using getElementById
//  DON'T use element IDs as variable names
//  DO use different names for variables and element IDs

//  Bad (Assume there's an input with id="introInput" in HTML)
var introInput = 'Ahmed' //  same as element ID
console.log(introInput) // "Ahmed"
console.log(window.introInput) // "Ahmed"  conflict
console.log(document.getElementById('introInput')) //  correct element

//  Best Practice:
const introInputElement = document.getElementById('introInput')
console.log(introInputElement.value) //  safe and clear

// ----------------------------------------
//  Example 33: Predefined name conflict (DANGEROUS!)
//  Don't use names like: location, name, event, history, top, parent, etc.

//  Bad:
// var location = 'Ghazipur' //  This will overwrite window.location
// console.log(location) // "Ghazipur"
// console.log(window.location.href) //  May behave unexpectedly

//  Good:
const myLocation = 'Delhi'
console.log(myLocation) // "Delhi"
// console.log(window.myLocation) //   undefined (because const is NOT added to window)

// ----------------------------------------
//  Example 34: Get value of input field (Correct Way)

// Assume: <input id="userIntroInput" type="text" value="mobile">
const userIntro = document.getElementById('userIntroInput').value
console.log(userIntro) //  "mobile"

// ----------------------------------------
// DOM ELEMENT CREATION
// ----------------------------------------
//  Example 35: Create <p> and append at the end of body
 const para = document.createElement('p')
 para.textContent = 'Hello i am here.'
 document.body.appendChild(para)

 //  Example 36: Create <p> and add it to the beginning of body
 const para2 = document.createElement('p')
 para2.textContent = 'I am a first line.'
 document.body.prepend(para2)

 //  Example 37:  Append a new <p> inside the #box container
const newEl = document.createElement('p')
newEl.textContent = 'Hello Arashad'
document.getElementById('box').appendChild(newEl)

 //  Example 38: Append a new <h1> inside the #msg div
 const newEl2 = document.createElement('h1')
 newEl2.textContent = 'Hello Dom'
 const parent = document.getElementById('msg')
 parent.appendChild(newEl2)

  //  Example 39: Prepend a new <p> inside the #box container
  const firstPr = document.createElement('p')
  firstPr.textContent = 'First Paragraph'
  const countainer = document.getElementById('box')
  countainer.prepend(firstPr)

  //  Example 40: Insert a <p> before <h2 id="introUser"> in the body
  const newPara = document.createElement('p')
  newPara.textContent = 'Before h2'
  const new2 = document.getElementById('introUser')
  document.body.insertBefore(newPara, new2)

   //  Example 41: Insert a <p> before #roundcard inside #box
   const para3 = document.createElement('p')
   para3.textContent = 'Inserted'
   const parent2 = document.getElementById('box')
   const target = document.getElementById('roundcard')
   parent2.insertBefore(para3, target)

// ----------------------------------------
// METHOD: parent.replaceChild(newChild, oldChild)
// ----------------------------------------
 //  Example 42: Replace a <p> with a new <h1> element
 const newPara2 = document.createElement('h1')
 newPara2.textContent = 'New Replaced'
 const parent3 = document.getElementById('mainBox')
 const oldPara = document.getElementById('old')
 parent3.replaceChild(newPara2, oldPara )

//  Example 43: Replace a <b> with an <i> element
const italic = document.createElement('i')
italic.textContent = 'Italic Text'
const parent4 = document.getElementById('mainBox')
const bold = document.getElementById('boldText')
parent4.replaceChild(italic, bold)

// ----------------------------------------
// METHOD: parent.removeChild(child)
// ----------------------------------------

//  Example 44:  Remove a child using its ID
const dad = document.getElementById('main')
const child = document.getElementById('firstChild')
dad.removeChild(child)

//  Example 45: Remove another child element
const parentBox = document.getElementById('contentBox')
const secondPara = document.getElementById('SecondPara')
parentBox.removeChild(secondPara)

// ----------------------------------------
// METHOD: element.remove()
// ----------------------------------------
//  Example 46: Remove a paragraph directly
const  third = document.getElementById('para3')
third.remove()

//  Example 47: Remove a list or container directly
const listParent = document.getElementById("wrapper")
listParent.remove()

