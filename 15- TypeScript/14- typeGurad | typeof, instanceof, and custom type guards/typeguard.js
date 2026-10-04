"use strict";
// Type Guard - typeof 
Object.defineProperty(exports, "__esModule", { value: true });
function printValue(value) {
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
printValue(10);
printValue(199393939939999.34422);
printValue('Arashad');
// Type Guard — instanceof
class Dog {
    berk() {
        console.log('Dog is barking');
    }
}
class Cat {
    mewo() {
        console.log('Cat is meowing');
    }
}
function animalSound(animal) {
    if (animal instanceof Dog) {
        animal.berk();
    }
    else {
        animal.mewo();
    }
}
const dog1 = new Dog();
const cat1 = new Cat();
animalSound(dog1);
animalSound(cat1);
function checkUser1(user) {
    if ('permission' in user) {
        console.log('Admin:' + user.permission);
    }
    else {
        console.log('Name:' + user.name);
    }
}
const user1 = {
    name: 'Arashad'
};
const admin1 = {
    name: 'Aman',
    permission: 'Delete'
};
checkUser(user1);
checkUser(admin1);
function isAdmin(user) {
    return "permission" in user;
}
function checkUser(user) {
    if (isAdmin(user)) {
        console.log("Admin:", user.permission);
    }
    else {
        console.log("User:", user.name);
    }
}
const user = {
    name: "Aman"
};
const admin = {
    name: "Arshad",
    permission: "delete"
};
checkUser(user);
checkUser(admin);
//# sourceMappingURL=typeguard.js.map