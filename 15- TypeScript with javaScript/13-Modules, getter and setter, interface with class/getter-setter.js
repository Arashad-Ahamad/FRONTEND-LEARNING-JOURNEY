// getter
// class User {
//     private _name:string
//     constructor (name:string) {
//         this._name = name
//     }
//     get username() {
//         return this._name
//     }
// }
// const user1 = new User('Arashad')
// console.log(user1.username);
// setter
// class Userinfo {
//     private _name:string = 'Aman'
// set userName(newName:string) {
//     this._name = newName
// }
// }
// const userinfo1 = new Userinfo()
// userinfo1.userName = 'Ahad'
// --------------
class User {
    constructor(name) {
        this._name = name;
    }
    get name1() {
        return this._name;
    }
    set name2(newName) {
        this._name = newName;
    }
}
const user = new User("Arshad");
console.log(user.name1);
user.name2 = "Aman";
console.log(user.name1);
export {};
//# sourceMappingURL=getter-setter.js.map