// Type Guard - typeof 


function printValue(value: string | number){
    if (typeof value === 'string') {
        console.log(value.toUpperCase());

    } else {
        console.log(value.toFixed(2));
    }

}

printValue(10)
printValue(199393939939999.34422)
printValue('Arashad')

// Type Guard — instanceof

class Dog {
    berk() {
        console.log('Dog is barking');
    }
}

class Cat {
    mewo (){
        console.log('Cat is meowing');
    }
}

function animalSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.berk()
    } else {
        animal.mewo()
    }
}

const dog1 = new Dog()
const cat1 = new Cat()

animalSound(dog1)
animalSound(cat1)


// Type Guard — in

type UserInfo = {
    name:string
}

type AdminInfo = {
    name:string
    permission: string
}

function checkUser1(user: UserInfo | AdminInfo) {
    if('permission' in user) {
        console.log('Admin:' + user.permission);

    } else {
        console.log('Name:' + user.name);
    }

}

const user1:UserInfo = {
    name:'Arashad'
}

const admin1:AdminInfo = {
    name: 'Aman',
    permission: 'Delete'
}


checkUser(user1)
checkUser(admin1)


//  Custom Type Guard

type User = {
  name: string;
};

type Admin = {
  name: string;
  permission: string;
};

function isAdmin(user: User | Admin): user is Admin {
  return "permission" in user;
}

function checkUser(user: User | Admin) {

  if (isAdmin(user)) {
    console.log("Admin:", user.permission);
  } else {
    console.log("User:", user.name);
  }

}

const user: User = {
  name: "Aman"
};

const admin: Admin = {
  name: "Arshad",
  permission: "delete"
};

checkUser(user);
checkUser(admin);