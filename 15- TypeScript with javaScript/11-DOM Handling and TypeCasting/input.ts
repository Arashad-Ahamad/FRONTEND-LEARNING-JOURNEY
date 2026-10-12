const nameInput = document.querySelector('#name') as HTMLInputElement
const ageInput = document.querySelector('#age') as HTMLInputElement
const btn = document.querySelector('#btn') as HTMLButtonElement
const result = document.querySelector('#result') as HTMLParagraphElement

btn.addEventListener('click', ()=> {
    const name:string = nameInput.value
    const age:number = Number(ageInput.value)

    result.textContent = `Name: ${name}, Age:${age}`
})