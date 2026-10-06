// Question 1: Class Decorator
function Logger(target: Function){
    console.log("Class created:", target.name);

}


@Logger
class User5 {
    name:string
    constructor(name:string) {
        this.name = name
    }

    greet(){
        console.log(`Hello ${this.name}`);
    }
}


const user5 = new User5('Arashad')
user5.greet()
console.log(user5);

// Question 2: Property Decorator
function LogProperty(target: undefined,
  context: ClassFieldDecoratorContext):void {
    console.log("Property:", context.name);
}

class User6 {
    @LogProperty
    name:string = 'Arashad'
}

const user6 = new User6()
console.log(user6.name);

// Question 3: Method Decorator
function Logger2(
  value: Function,
  context: ClassMethodDecoratorContext
) {
  console.log("Method:", context.name);
}

class User7 {
  @Logger2
  greet() {
    console.log("Hello Arshad");
  }
}

const user7 = new User7();

user7.greet();
