// Partial

interface User {
    name:string
    age:number
    email:string
}

const updateUser:Partial<User> = {
    name:'Arashad'
}
console.log(updateUser);
const updateUser1:Partial<User> = {
    email: 'arashad@gmail.com'
}
console.log(updateUser1);

// Required

interface UserInfo {
    name?:string
    age?:number
    email?: string
}

const updateUserInfo:Required<UserInfo> = {
    name: 'Arashad',
    age:21,
    email:'arashad@gmail.com'

}
console.log(updateUserInfo);

// Readonly

interface User2 {
    name:string
    age:number
}

const updateUser2:Readonly<User2> = {
    name:'Aman',
    age:28
}

// updateUser2.name = 'Arashad'
console.log(updateUser2);

// Pick

interface User3 {
    name:string
    age:number
    email:string
    adress:string
    phone:string
}

type userBasic = Pick<User3, 'name' | 'phone'>

const user4:userBasic = {
    name: 'Arashad',
    phone:'28736379'
}

console.log(user4);

// Record

type Mark = Record<string, number>

const studentMarks:Mark = {
    Arashad: 98,
    aman:95,
    ahad:79

}
console.log(studentMarks);

// Fixed keys 

type Role = "admin" | "user" | "guest";

type Permissions = Record<Role, boolean>;

const permissions: Permissions = {
  admin: true,
  user: true,
  guest: false
};

console.log(permissions);

//  Omit
interface User6 {
    name:string
    age:number
    email:string
    password:string
}

type publicUser = Omit<User6, 'password'>

const user6:publicUser = {
    name: 'Raj',
    age:21,
    email:'raj@gmail.com'

}

console.log(user6);


// Exclude

type Role2 = 'admin' | 'user' | 'guest'
type userRole = Exclude<Role2, 'guest'>
const role:userRole = 'admin'
const role2:userRole = 'user'

console.log(role);
console.log(role2);

// Extract

type Role3 = 'admin' | 'user' |'guest'
type userRole3 = Extract<Role3, 'admin' | 'user'>
const role3:userRole3 = 'admin'
console.log(role3);

// NonNullable
type Name = string | null | undefined
type vaildName = NonNullable<Name>
const name:vaildName = 'Arashad'
console.log(name);