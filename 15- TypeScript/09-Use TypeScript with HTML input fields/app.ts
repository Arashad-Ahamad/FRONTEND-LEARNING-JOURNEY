// Function create kar rahe hain
// :void = function koi value return nahi karega
function getInfo(): void {

    // HTML se username input ko select kar rahe hain
    // as HTMLInputElement = TypeScript ko bata rahe hain ki ye input hai
    const nameInput =
        document.getElementById("username") as HTMLInputElement;


    // HTML se email input ko select kar rahe hain
    const emailInput =
        document.getElementById("email") as HTMLInputElement;


    // HTML se age input ko select kar rahe hain
    const ageInput =
        document.getElementById("age") as HTMLInputElement;


    // Input ke andar user ne jo name likha hai wo le rahe hain
    const name: string = nameInput.value;


    // Input ke andar user ne jo email likha hai wo le rahe hain
    const email: string = emailInput.value;


    // ageInput.value string deta hai
    // Number() string ko number mein convert karta hai
    const age: number = Number(ageInput.value);


    // Console mein name print
    console.log("Name:", name);

    // Console mein email print
    console.log("Email:", email);

    // Console mein age print
    console.log("Age:", age);
}


// HTML se Get Info button select kar rahe hain
const button =
    document.getElementById("getInfoBtn") as HTMLButtonElement;


// Button par click event laga rahe hain
// Click hone par getInfo function chalega
button.addEventListener("click", getInfo);