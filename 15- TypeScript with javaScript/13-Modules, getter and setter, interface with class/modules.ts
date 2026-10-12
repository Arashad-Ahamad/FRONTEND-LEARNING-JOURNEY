export class User {
    name:string
    constructor (name:string) {
        this.name = name

    }

    sayHello () {
        console.log('Hello' + this.name);
    }
}

export function add(a:number, b:number):number {
    return a+b
}
const name:string = 'Aman'

export default name
