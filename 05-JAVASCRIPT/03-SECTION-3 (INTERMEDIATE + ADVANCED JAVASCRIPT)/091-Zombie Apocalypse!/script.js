// ---------------------------------------
// Zombie Apocalypse!
// ---------------------------------------

// Question 1:
// Zombie Apocalypse: Fix thermometer error (+2 for every temperature)
const celsiusTemperatures = [38, 40, 35, 37, 38, 37, 39, 33, 35]
const fixedTemperatures = celsiusTemperatures.map((temp) => temp + 2)
console.log("Fixed Temperatures:", fixedTemperatures)

// Question 2:
// Convert fixed Celsius temperatures to Fahrenheit
const fixedTemperatures2 = celsiusTemperatures.map((temp) => temp + 2).map(c => (c * 9) / 5 + 32)
console.log("Fahrenheit Temperatures:", fixedTemperatures2)

// Question 3:
// Filter out healthy people (temperature < 104F)
const healthyPeople = celsiusTemperatures
  .map(temp => temp + 2)
  .map(c => (c * 9) / 5 + 32)
  .filter(f => f < 104)
console.log("Healthy People:", healthyPeople)

// Question 4:
// Calculate total food in warehouse 
const warehouse = [86, 76, 98, 50, 12, 98, 85, 84, 81]
const totalFood = warehouse.reduce((acc, curr) => acc + curr, 0)
console.log("Total Food in Warehouse:", totalFood)

// Question 5:
// One more healthy person joins (temperature 98.6F)
const healthyPeople2 = celsiusTemperatures
  .map(temp => temp + 2)
  .map(c => (c * 9) / 5 + 32)
  .filter(f => f < 104)
healthyPeople2.push(98.6)
console.log("Updated Healthy People:", healthyPeople2)

// Question 6:
// Some people recovered from quarantine, add their temperatures
const newPeople = [95, 93.2, 100.4, 98.6, 102.2, 91.4, 95.5]
const healthyPeople3 = celsiusTemperatures
  .map(temp => temp + 2)
  .map(c => (c * 9) / 5 + 32)
  .filter(f => f < 104)
healthyPeople3.push(98.6, ...newPeople)
console.log("Healthy People + Recovered:", healthyPeople3)

// Question 7:
// Process recovered people (newPeople) correctly (+2, then Fahrenheit, then filter < 104)
const processedNewPeople = newPeople
  .map(temp => temp + 2)
  .map(c => (c * 9) / 5 + 32)
  .filter(f => f < 104)

// Merge with previous healthy people
const healthyPeople4 = healthyPeople3.concat(processedNewPeople)
console.log("Final Healthy People List:", healthyPeople4)  

function showInfo(a, b) {
  console.log(arguments);  // Output: [Arguments] { '0': 10, '1': 20 }
  console.log(arguments[0]); // Output: 10
  console.log(arguments[1]); // Output: 20
}

showInfo(10, 20);
