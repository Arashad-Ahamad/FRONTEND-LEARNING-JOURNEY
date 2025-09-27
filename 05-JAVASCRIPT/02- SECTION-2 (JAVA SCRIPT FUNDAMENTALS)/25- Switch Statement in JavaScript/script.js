// Day of the week program using switch
const day = 1
switch (day) {
  case 1:
    console.log('Monday')
    break;
  case 2:
    console.log('Tuesday')
    break;
  case 3:
    console.log('Wednesday')
    break; 
  case 4:
    console.log('Thursday')
    break;
  case 5:
    console.log('Friday')
    break;
  case 6:
    console.log('Saturday')
    break;
  case 7:
    console.log('Sunday')
    break;
  default:
    console.log('Invalid Day')
}

// Favorite color selection using switch
const favColor = prompt('Enter your favorite color:') || ''; // Ensures no errors if prompt is canceled
// If the user cancels the prompt or does not enter anything (empty string), the favColor variable will be assigned '' (empty string).
// The benefit of this is that even if the user does not enter anything, the program will not throw an error and will execute smoothly.

switch (favColor.toLowerCase()) {
  case 'red':
    console.log('Red is a passionate color!');
    break;
  case 'blue':
    console.log('Blue is calming and serene.');
    break;
  case 'green':
    console.log('Green symbolizes nature and growth.');
    break;
  default:
    console.log(`${favColor} is also my favorite color.`);
}

// Check Vowel or Consonant using switch
const vowel = 'l'
switch (vowel.toLowerCase()) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    console.log('vowel')
    break;
  default:
    console.log('consonant')
}

// toll tax amount using switch
const vehicle = 'Bus'
switch (vehicle.toLowerCase()) {
  case 'car':
    console.log('Car Toll Tax: ₹50')
    break;
  case 'bike':
    console.log('Bike Toll Tax: ₹20')
    break;
  case 'bus':
    console.log('Bus Toll Tax: ₹100')
    break;
  case 'truck':
    console.log('Truck Toll Tax: ₹150')
    break;
  default:
    console.log('Invalid vehicle type')
}

// Currency Code to Full Form Converter using switch
const currency = 'USD'
switch (currency.toLowerCase()) {
  case 'usd':
    console.log('US Dollar')
    break;
    case 'eur':
      console.log('Euro')
      break;
      case 'inr':
        console.log('Indian Rupee')
        break;
        case 'gbp':
          console.log('British Pound')
        break;
        default:
          console.log('Invalid Currency Code')

}

// Grade evaluation using switch
const grade = 'C'
switch (grade.toLowerCase()) {
  case 'a':
    console.log(`Your score is between 85% to 100%.`)
    break;
  case 'b':
    console.log(`Your score is between 70% to 85%.`)
    break;
  case 'c':
    console.log(`Your score is between 60% to 70%.`)
    break;
  case 'd':
    console.log(`Your score is between 50% to 60%.`)
    break;
  case 'e':
    console.log(`Your score is between 40% to 50%.`)
    break;
  default:
    console.log(`Sorry, You Failed.`)
}

// Age-based classification using switch
const userName = 'Arashad'
const userAge = 21

switch (true) {
  case userAge >= 0 && userAge <= 4:
    console.log(`${userName} is a kid.`)
    break;
  case userAge >= 5 && userAge <= 17:
    console.log(`${userName} is a school student.`)
    break;
  case userAge >= 18 && userAge <= 24:
    console.log(`${userName} is a college student.`)
    break;
  case userAge >= 25 && userAge <= 45:
    console.log(`${userName} is a working professional.`)
    break;
  case userAge > 45:
    console.log(`${userName} is retired.`)
    break;
  default:
    console.log('Please enter a valid age.')
}

// Number Positive, Negative, or Zero using if-else
const num = -5

if (num < 0) {
  console.log('Negative');
} else if (num > 0) {
console.log('Positive');
} else {
console.log('Zero');
}

// Age Category Check using if-else
const category = 18
if (category >= 0 && category <= 12) {
  console.log('Child');
} else if (category >= 13 && category <= 19) {
  console.log('Teenager');
} else {
  console.log('Adult');
}

console.log('Program Ended!')