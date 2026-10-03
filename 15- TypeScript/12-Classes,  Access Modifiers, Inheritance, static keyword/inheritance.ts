class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  eat() {
    console.log(this.name + " is eating");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog is barking");
  }
}

const dog1 = new Dog("Tommy");
console.log(dog1.eat());
console.log(dog1.bark());