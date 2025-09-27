// Indexed Access
const message = 'Hello';
console.log(message);               // 'Hello'
console.log(message[0]);            // 'H'
console.log(message[2]);            // 'l'
console.log(message[4]);            // 'o'
console.log(message[6]);            // undefined (out of bounds)

const userIntro = 'My name is Arashad';
console.log(userIntro);             // 'My name is Arashad'
console.log(userIntro[8]);          // 'i'
console.log(userIntro[14]);         // 's'
console.log(userIntro[5]);          // 'm'

// String length property
console.log(message.length);        // 5
console.log(userIntro.length);      // 18

// String Methods

// toUpperCase() and toLowerCase()
console.log(message.toUpperCase()); // 'HELLO'
console.log(userIntro.toLowerCase()); // 'my name is arashad'

const userName = 'Arashad';
const upperCaseName = userName.toUpperCase();
console.log(upperCaseName);          // 'ARASHAD'

const lowerCaseName = userName.toLowerCase();
console.log(lowerCaseName);          // 'arashad'

// trim(), trimStart(), trimEnd()
const cityName = '              New York City                   ';
console.log(cityName);               // '              New York City                   '
const trimmedCityName = cityName.trim();
console.log(trimmedCityName);        // 'New York City'

const trimmedStartCityName = cityName.trimStart();
console.log(trimmedStartCityName);   // 'New York City                   '

const trimmedEndCityName = cityName.trimEnd();
console.log(trimmedEndCityName);     // '              New York City'

// Method Chaining
const firstName = '              Arashad                     ';
const trimmedFirstName = firstName.trim().toUpperCase();
console.log(trimmedFirstName);       // 'ARASHAD'

// includes() - Checks if a substring exists in a string
const finalMessage = "Hello, how are you?";
console.log(finalMessage.includes("how")); // true
console.log(finalMessage.includes("are")); // true
console.log(finalMessage.includes("bye")); // false
console.log(finalMessage.includes("hello")); // false
console.log(finalMessage.includes(",")); // true

// indexOf() - Returns index of first occurrence of a substring
const sentence = "I love coding in JavaScript.";
console.log(sentence.indexOf("coding")); // 7  
console.log(sentence.indexOf("JavaScript")); // 17
console.log(sentence.indexOf("Python")); // -1  
console.log(sentence.indexOf("S")); // 21
console.log(sentence.indexOf("i")); // 10
console.log(sentence.indexOf("t")); // 26
console.log(sentence.indexOf("Arashad")); // -1
console.log(sentence.indexOf("Z")); // -1

// replace() - Replaces the first occurrence of a substring
const text = 'I am learning CSS.';
console.log(text);
const newText = text.replace('CSS', 'JavaScript');
console.log(newText);               // 'I am learning JavaScript.'

// replaceAll() - Replaces all occurrences of a substring
const statement = "Sarah loves coffee. coffee makes her happy.";
console.log(statement);
const newStatement = statement.replaceAll("coffee", "Tea");
console.log(newStatement);          // 'Sarah loves Tea. Tea makes her happy.'

// concat() - Joins two or more strings
const fruit = "Mango";
const color = "Yellow";
const taste = "Sweet";
console.log(fruit.concat(color)); // 'MangoYellow'
console.log(fruit.concat(" is ", color)); // 'Mango is Yellow'
console.log(fruit.concat(" is ", color, " and ", taste, ".")); // 'Mango is Yellow and Sweet.'
console.log(fruit.concat(", Sweet, Yellow")); // 'Mango, Sweet, Yellow'

// padStart() - Pads the string from the beginning
const lastFourDigit = "7865";
console.log(lastFourDigit.padStart(16, "*")); // '************7865'

// padEnd() - Pads the string from the end
const startFourDigit = "7899";
console.log(startFourDigit.padEnd(16, "*")); // '7899************'

// charAt() - Returns the character at a specific index
const sentence2 = "JavaScript is a powerful programming language.";
console.log(sentence2.charAt(16));  // 'p'
console.log(sentence2.charAt(0));   // 'J'
console.log(sentence2.charAt(28));  // 'g'

// charCodeAt() - Returns the Unicode/ASCII value of a character at a specific index
const userName2 = "Arashad";
console.log(userName2.charCodeAt(0)); // 65
console.log(userName2.charCodeAt(4)); // 104
console.log(userName2.charCodeAt(6)); // 100
console.log(userName2.charCodeAt(7)); // NaN

// split() - Splits a string into an array of substrings
const sentence3 = "I am learning JavaScript";
const words = sentence3.split(" ");
console.log(words); // ['I', 'am', 'learning', 'JavaScript']

const userName3 = "Arashad";
const letters = userName3.split("");
console.log(letters); // ['A', 'r', 'a', 's', 'h', 'a', 'd']

// String Template Literal - Embedding expressions in strings
const product = "Laptop";
const price = 50000;
const result5 = `The product is ${product} and the price is ${price}`;
console.log(result5); // 'The product is Laptop and the price is 50000'

const city = "Lucknow";
const country = "India";
const result6 = `I live in ${city}, ${country}.`;
console.log(result6); // 'I live in Lucknow, India.'

const templateString = `My account number is ${lastFourDigit.padStart(16, "*")}.`;
console.log(templateString); // 'My account number is ************7865.'

const bankBalance = 9678977;
const message2 = `MY bank balance is $${bankBalance}.`;
console.log(message2); // 'MY bank balance is $9678977.'

