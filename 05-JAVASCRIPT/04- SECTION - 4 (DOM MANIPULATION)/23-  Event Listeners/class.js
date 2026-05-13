const container = document.querySelector('.container')
const card = document.querySelector('.card')
let count = 1
// card.addEventListener('click', function() {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.textContent = count
//     count++
// container.appendChild(newCard)
    
// }) 


// cloneNode() use 
card.addEventListener('click', function() {
    const copy = card.cloneNode()
    copy.classList.remove('add-card')
    copy.textContent = count++
    container.appendChild(copy)
})
