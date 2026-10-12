const button = document.getElementById("getInfo");
button.addEventListener("click", getInfo);
function getInfo() {
    const nameInput = document.getElementById("username");
    const name = nameInput.value;
    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    const ageInput = document.getElementById("age");
    const age = ageInput.value;
    console.log(name, email, age);
}
export {};
//# sourceMappingURL=input.js.map