let id:number | string =  12
id = 'Hello'

let data1:number | boolean | string | undefined = undefined
data1 = 10
data1 = 'Arashad'
data1 = true

let data:(string | number)[] = ['Arashad', 'Delhi', 10]

let user: {
    name:string
    age:string | number
} = {
    name:'Arashad',
    age: 21
}

console.log(user.name);
console.log(user.age);


let value: string | number = 'Hello'
if(typeof value === 'string') {
    console.log(value.toUpperCase());
}

// if(typeof value === 'number') {
//     console.log(value.toFixed(2));
// }