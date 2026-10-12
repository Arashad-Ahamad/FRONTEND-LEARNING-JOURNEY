"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Question 1:
const user1 = new Promise((resolve) => {
    resolve('Arashad');
});
async function main() {
    const result = await user1;
    console.log(result);
}
main();
// Question 2:
const num = new Promise((resolve) => {
    resolve(100);
});
async function number() {
    const numResult = await num;
    console.log(numResult);
}
number();
async function getUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users?utm_source');
    const data = await response.json();
    return data;
    console.log(data);
}
const showData = getUser();
showData.then((data) => {
    console.log(data);
});
//# sourceMappingURL=promise.js.map