const openModalBtn = document.querySelector('.openModalBtn')
const popup = document.querySelector('.popup')
const closeModalBtn = document.querySelector('.closeModalBtn')

openModalBtn.addEventListener('click', ()=> {
popup.classList.add('open_model')
})

closeModalBtn.addEventListener('click',   ()=> {
    popup.classList.remove('open_model')
})