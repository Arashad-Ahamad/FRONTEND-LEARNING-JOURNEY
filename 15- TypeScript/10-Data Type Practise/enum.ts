// enum Role {
//     Admin,
//     user,
//     Guset
// }

// let myRole1: Role = Role.Admin
// let myRole2: Role = Role.user
// let myRole3: Role = Role.Guset

// console.log(myRole1);
// console.log(myRole2);
// console.log(myRole3);

enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
} 
interface User {
    name: string;
    age: number;
    role: Role;
}

let user: User = {
    name: "Arshad",
    age: 27,
    role: Role.Admin
};

console.log(Role.Admin);
console.log(Role.User);
console.log(Role.Guest);