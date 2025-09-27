// Question 1:
const fruitsList = document.querySelector('#fruitList')
fruitsList.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    console.log('You Clicked:' + e.target.textContent)
  }
})

// Question 2:
const container = document.querySelector('#buttonContainer')
container.addEventListener('click', function (e) {
  if (e.target.tagName === 'BUTTON') {
    document.body.style.backgroundColor = e.target.textContent.toLowerCase()
  }
})
const newBtn = document.createElement('button')
newBtn.textContent = 'Yellow'
container.appendChild(newBtn)
