type Name = string
let userName:Name = 'Arashad'
console.log(userName);

type Age=number;
let userAge:Age=25;

type User= {
    name:string
    age:number
    isLogin:boolean

}

let user1:User = {
    name: 'Arashad',
    age:21,
    isLogin: true
}

let user2:User = {
    name: 'Ahad',
    age:18,
    isLogin: false
}


type Id = string | number
let userId:Id

userId = 'Hello'
userId = 123