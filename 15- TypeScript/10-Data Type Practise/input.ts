const button = document.getElementById("getInfo") as HTMLButtonElement;

button.addEventListener("click", getInfo);

function getInfo() {
    const nameInput = document.getElementById("username") as HTMLInputElement;
    const name: string = nameInput.value;

    const emailInput = document.getElementById("email") as HTMLInputElement;
    const email: string = emailInput.value;

    const ageInput = document.getElementById("age") as HTMLInputElement;
    const age: string = ageInput.value;

    console.log(name, email, age);
}