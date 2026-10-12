"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getValue(user, key) {
    return user[key];
}
const user3 = {
    name: 'Arashad',
    age: 21,
    email: 'arashad@gmail.com'
};
console.log(getValue(user3, "name"));
console.log(getValue(user3, "age"));
console.log(getValue(user3, "email"));
//# sourceMappingURL=keyof.js.map