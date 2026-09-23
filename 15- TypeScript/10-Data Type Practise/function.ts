function greet():string {
    return 'Hello'
}

const a = greet()
console.log(a);

function add(a:number, b:number):number {
    return a+b
}

const result = add(10, 2)
console.log(result);

function message():void {
    console.log('Hello');
}
message()