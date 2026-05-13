// -----------------------------------
//  appendChild() 
// -----------------------------------
// Example 1: New Element Add
const container = document.querySelector('#container')
const para = document.createElement('p')
para.textContent = 'Hello World'
container.appendChild(para)

// Example 2: Multiple Element Add
const list = document.querySelector('#list')
const li1 = document.createElement('li')
li1.textContent = 'Item 1'
list.appendChild(li1)

const li2 = document.createElement('li')
li2.textContent = 'Item 2'
list.appendChild(li2)

// Example 3:
const box2 = document.querySelector('#box2')
const para2 = document.querySelector('#myPara')
box2.appendChild(para2)

// Example 4: TextNode Add
const box3 = document.querySelector('#box3')
const text = document.createTextNode('Dom')
box3.appendChild(text)

// Example 5: commentNode Add
const comment = document.createComment('comment')
box3.appendChild(comment)

// -----------------------------------
//  append() 
// -----------------------------------

// Example 6: Single Element Add
const box4 = document.querySelector('#box4')
const para3 = document.createElement('p')
para3.textContent = 'JavaScript'
box4.append(para3)

// Example 7:
const parent = document.querySelector('#parent')
const p1 = document.createElement('p')
p1.textContent = 'Arashad'

const p2 = document.createElement('p')
p2.textContent = 'Ahamad'

const comment2 = document.createComment('This is a comment')

parent.append(p1, p2, 'Html', comment2)

// Example 8:
const card2 = document.querySelector('#card2')
const myPara2 = document.querySelector('#myPara2')
card2.append(myPara2)

// -----------------------------------
//  cloneNode
// -----------------------------------

// Example 9:
const box5 = document.querySelector('#box5')
const copy = box5.cloneNode(true)
document.body.appendChild(copy)

// Question 1:
const list2 = document.querySelector('#list2')
const item2 = document.querySelector('.item2')
for (let i = 2; i <= 1000; i++) {
    const copy = item2.cloneNode(true)
    copy.textContent = 'item' + i
    list2.appendChild(copy)

}