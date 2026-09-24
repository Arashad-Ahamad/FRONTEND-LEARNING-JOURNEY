type Person = {
    name: string
}

type Employee = {
    age: number
}

type EmployeePerson = Person & Employee

let user:EmployeePerson = {
    name:'Arashad',
    age:21
}
console.log(user);