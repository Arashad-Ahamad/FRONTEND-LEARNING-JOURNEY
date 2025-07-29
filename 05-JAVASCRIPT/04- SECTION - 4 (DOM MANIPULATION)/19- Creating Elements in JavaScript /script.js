// Question 1:
 const container = document.querySelector('.container')
// const img = document.querySelector('.img')
// for(let i = 2; i <= 1000; i++) {
//     const copy = img.cloneNode(true)
//     copy.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     container.appendChild(copy)
// }

// Example 1:
const paragraph = document.createElement('p')
paragraph.textContent = 'Hello World'
paragraph.classList.add('my-para')
paragraph.id = 'text'
container.appendChild(paragraph )

// Question 2:
const card = document.querySelector('#card')
for (let i = 1; i <= 100; i++) {
   const newImg = document.createElement('img')
newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
card.appendChild(newImg) 
}

// Question 3:
const listContainer = document.querySelector('#listContainer')
const li1 = document.createElement('li')
li1.textContent = "Item 1"

const li2 = document.createElement('li')
li2.textContent =  "Item 2"

const li3 = document.createElement('li')
li3.textContent = "Item 3"
listContainer.append(li1, li2, li3)


