const count = document.querySelector('.count')
const minusBtn = document.querySelector('.minus-btn')
const plusBtn = document.querySelector('.plus-btn')
const changeBy = document.querySelector('.changeBy')
const resetBtn = document.querySelector('.reset-btn')

minusBtn.addEventListener('click', () => {
    const countValue = parseInt(count.textContent)
    const changeByValue = parseInt(changeBy.value)
    count.textContent = countValue  - changeByValue
})

plusBtn.addEventListener('click', () => {
    const countValue = parseInt(count.textContent)
    const changeByValue = parseInt(changeBy.value)
    count.textContent = countValue + changeByValue
})

resetBtn.addEventListener('click', () => {
    count.textContent = 0
})