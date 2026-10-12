interface User {
    name:string
    age:number
    email:string
}

function getValue(user:User, key: keyof User) {
    return user[key]

}

const user3:User = {
    name:'Arashad',
    age:21,
    email:'arashad@gmail.com'
}

console.log(getValue(user3, "name"));
console.log(getValue(user3, "age"));
console.log(getValue(user3, "email"));