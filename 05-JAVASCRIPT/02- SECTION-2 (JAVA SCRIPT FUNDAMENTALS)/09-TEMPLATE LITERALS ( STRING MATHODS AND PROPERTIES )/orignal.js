// Indexed

const message = 'Hello'
console.log(message);
console.log(message[0]);
console.log(message[2]);
console.log(message[4]);
console.log(message[6]);

const userIntro = 'My name is Arashad'
console.log(userIntro);
console.log(userIntro[8]);
console.log(userIntro[14]);
console.log(userIntro[5]);

// String length property
console.log(message.length);
console.log(userIntro.length);

// String Methods

// toUpperCase() and toLowerCase()

console.log(message.toUpperCase());
console.log(userIntro.toLowerCase());

const userName = 'Arashad'
const upperCaseName = userName.toUpperCase()
console.log(upperCaseName);

const lowerCaseName = userName.toLowerCase()
console.log(lowerCaseName);

// trim() 
const cityName = '              New York City                   '
console.log(cityName);

const trimmedcityName = cityName.trim()
console.log(trimmedcityName);

// trimStart()
const trimmedStartCityName = cityName.trimStart();
console.log(trimmedStartCityName);

// trimEnd() 
const trimmedEndCityName = cityName.trimEnd();
console.log(trimmedEndCityName);

// Method Chaining
const firstName = '              Arashad                     ';
const trimmedFirstName = firstName.trim().toUpperCase()
console.log(trimmedFirstName);

// includes()
const finalmessage = "Hello, how are you?";

console.log(finalmessage.includes("how")); // true
console.log(finalmessage.includes("are")); // true
console.log(finalmessage.includes("bye")); // false
console.log(finalmessage.includes("hello")); // false
console.log(finalmessage.includes(",")); // true

// indexOf()
const sentence = "I love coding in JavaScript.";

console.log(sentence.indexOf("coding")); // 7  
console.log(sentence.indexOf("JavaScript")); // 17
console.log(sentence.indexOf("Python")); // -1  
console.log(sentence.indexOf("S")); // 21
console.log(sentence.indexOf("i")); // 10
console.log(sentence.indexOf("t")); // 26
console.log(sentence.indexOf("Arashad")); // -1
console.log(sentence.indexOf("Z")); // -1

// replace()
const text = 'I am learning CSS.'
console.log(text);

const newText = text.replace('CSS', 'JavaScript')
console.log(newText);

const replaceText = text.replace('a', 'A')
console.log(replaceText);

// replaceAll
const statement = "Sarah loves coffee. coffee makes her happy.";
console.log(statement);

const newStatement = statement.replaceAll("coffee", "Tea");
console.log(newStatement); 

const newStatement2 = statement.replaceAll("e", "E")
console.log(newStatement2);

// concat()

const fruit = "Mango";
console.log(fruit);

const color = "Yellow";
console.log(color);

const  taste = "Sweet"
console.log(taste);

const result1 = fruit.concat(color);
console.log(result1);

const result2 = fruit.concat(" is ", color);
console.log(result2); // Mango is Yellow

const result3 = fruit.concat(" is ", color, " and ", taste, ".");
console.log(result3);

const result4 = fruit.concat(", Sweet, Yellow");
console.log(result4);

// padStart()
const lastFourDigit = "7865";

const maskedBankAccountNumber = lastFourDigit.padStart(16, "*")
console.log(maskedBankAccountNumber);

const maskedBankAccountNumber2 = lastFourDigit.padStart(10, "$")
console.log(maskedBankAccountNumber2);

const maskedDigt= lastFourDigit.padStart(8, ".")
console.log(maskedDigt);

const lastDigit = "786567899";
const maskedBankAccountNumber3 = lastDigit.padStart(16, "*")
console.log(maskedBankAccountNumber3);

// padEnd()
const startFourDigit = "7899";
const maskedAccountNumber = startFourDigit.padEnd(16, "*")
console.log(maskedAccountNumber);

// charAt()
const sentence2 = "JavaScript is a powerful programming language.";
console.log(sentence2);

const letter = sentence2.charAt(16);
console.log(letter); // p
const letter2 = sentence2.charAt(0);
console.log(letter2); 
const letter3 = sentence2.charAt(28);
console.log(letter3); 

// charCodeAt()
const userName2 = "Arashad";

const code = userName2.charCodeAt(0);
console.log(code); 
const code2 = userName2.charCodeAt(4);
console.log(code2); 
const code3 = userName2.charCodeAt(6);
console.log(code3); 
const code4 = userName2.charCodeAt(7);
console.log(code4); 

// split()
const sentence3 = "I am learning JavaScript";
const words = sentence3.split(" ");
console.log(words);

const userName3 = "Arashad";
const letters = userName3.split("");
console.log(letters);

// String Template Literal
const product = "Laptop"
const price = 50000
const result5 = `The product is ${product} and the price is ${price}`
console.log(result5);

const city = "Lucknow"
const country = "India"  
const result6 = `I live in ${city}, ${country}.`
console.log(result6);

const templateString = `My account number is ${lastFourDigit.padStart(16, "*")}.`
console.log(templateString);

const bankBalance = 9678977
const message2 = `MY bank balance is $${bankBalance}.`
console.log(message2);
