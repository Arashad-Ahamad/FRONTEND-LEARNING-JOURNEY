interface UserDetails {
    name:string
    age:number
    greet():void
}

class User implements UserDetails {
    name:string
    age:number
    constructor(name:string, age:number) {
        this.name = name
        this.age=age
    }

    greet(): void {
        console.log('Hello' + this.name);
    }
}

const user1 =new  User('Arashad', 21)
console.log(user1.name);
console.log(user1.age);