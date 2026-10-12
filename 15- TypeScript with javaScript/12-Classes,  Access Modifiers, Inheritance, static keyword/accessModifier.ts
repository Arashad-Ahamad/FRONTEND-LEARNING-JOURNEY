// public
class Info {
    name: string
    age: number
    constructor(name:string, age:number) {
        this.name = name
   this.age = age

    }
}

const info1 = new Info('Arashad', 21)
console.log(info1.age);
console.log(info1.name);

// private 
class ageInfo {
    private age:number

    constructor (age:number) {
        this.age = age
    }

    showAge():void {
        console.log(this.age);
    }


}

// protected 

class nameInfo {
    protected name:string
    constructor (name: string) {
        this.name = name

    }
    }


    class admin extends nameInfo {
        showAge() {
            console.log(this.name);  // Allowed
        }
    }
