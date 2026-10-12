// Question 1:

interface User {
  [key: string]: string;
}

const user: User = {
  name: "Arshad",
  city: "Delhi",
  job: "Developer"
};


// Question 2:

interface Marks {
  [key: string]: number;
}

const marks: Marks = {
  Arshad: 80,
  Aman: 75,
  Rahul: 90
};

// Question 3:

interface PhoneBook {
  readonly  [key:string]: number
}
const phonebook:PhoneBook = {
    Arashad: 9338393,
    Aman: 1999292,
    Ahad: 27282

}