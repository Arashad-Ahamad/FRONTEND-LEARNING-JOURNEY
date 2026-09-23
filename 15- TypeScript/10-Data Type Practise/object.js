let user1 = {
    name: 'Arashad',
    age: 23,
    isStudent: true
};
console.log(user1.name);
console.log(user1.age);
let user2 = {
    name: 'Arashad',
    age: 23
};
user2.city = 'Delhi';
console.log(user2);
// Index Signature
let user3 = {
    name: 'Aman',
    age: 20,
    isActive: true,
    city: undefined
};
user3.salary = 30000;
console.log(user3);
// Nested Object
let user4 = {
    name: 'Ahad',
    age: 18,
    adress: {
        city: 'Noida',
        pincode: 123
    }
};
console.log(user4);
export {};
//# sourceMappingURL=object.js.map