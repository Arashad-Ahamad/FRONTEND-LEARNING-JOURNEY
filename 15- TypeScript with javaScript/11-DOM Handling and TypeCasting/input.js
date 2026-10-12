const nameInput = document.querySelector('#name');
const ageInput = document.querySelector('#age');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
btn.addEventListener('click', () => {
    const name = nameInput.value;
    const age = Number(ageInput.value);
    result.textContent = `Name: ${name}, Age:${age}`;
});
export {};
//# sourceMappingURL=input.js.map