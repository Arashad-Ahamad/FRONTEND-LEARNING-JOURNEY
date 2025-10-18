const firstBasket = document.querySelector('#Basket-1 span')
const secondBasket = document.querySelector('#Basket-2 span')
const leftArrow = document.querySelector('#left-arrow')
const rightArrow = document.querySelector('#right-arrow')

const totalApple = 10
let secondBasketAppleCount = 0
let firstBasketAppleCount = totalApple - secondBasketAppleCount

firstBasket.innerText = firstBasketAppleCount
secondBasket.innerText = secondBasketAppleCount

rightArrow.addEventListener('click', () => {
  if (firstBasketAppleCount > 0) {
    firstBasketAppleCount--
    firstBasket.innerText = firstBasketAppleCount
    secondBasketAppleCount++
    secondBasket.innerText = secondBasketAppleCount
  }
})

leftArrow.addEventListener('click', () => {
  if (secondBasketAppleCount > 0) {
    firstBasketAppleCount++
    firstBasket.innerText = firstBasketAppleCount
    secondBasketAppleCount--
    secondBasket.innerText = secondBasketAppleCount
  }
})
