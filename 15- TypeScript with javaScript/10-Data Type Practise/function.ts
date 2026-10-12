function greet():string {
    return 'Hello'
}

const a:string = greet()
console.log(a);

function add(a:number, b:number):number {
    return a+b
}

const result:number = add(10, 2)
console.log(result);

function message():void {
    console.log('Hello');
}
message()