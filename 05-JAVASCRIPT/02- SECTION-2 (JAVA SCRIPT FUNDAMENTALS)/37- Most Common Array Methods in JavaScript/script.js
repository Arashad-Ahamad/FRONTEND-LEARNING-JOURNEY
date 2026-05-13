// ----------------------------------------------------------------------------------------
// Example 1: push() method - Adding values at the end of the array
const colors = ['green', 'red']
colors.push('blue') // Adding 'blue' at the end
console.log(colors) // Output: ['green', 'red', 'blue']

// ----------------------------------------------------------------------------------------
// Example 2: push() method - Adding multiple values at the end of the array
const fruits = ['Apple', 'Banana']
fruits.push('mango', 'grapes', 'orange') // Adding multiple fruits at the end
console.log(fruits) // Output: ['Apple', 'Banana', 'mango', 'grapes', 'orange']

// ----------------------------------------------------------------------------------------
// Example 3: push() method - Adding multiple values at the end
const vegetables = ['carrot', 'potato', 'spinach']
vegetables.push('tomato', 'cucumber', 'lettuce', 'Beetroot', 'Bitter gourd') // Adding multiple vegetables
console.log(vegetables) // Output: ['carrot', 'potato', 'spinach', 'tomato', 'cucumber', 'lettuce', 'Beetroot', 'Bitter gourd']

// ----------------------------------------------------------------------------------------
// Example 4: push() method - Returns new length of the array
const nums = [10, 20, 30, 40, 50]
const newLength = nums.push(60, 70, 80, 90, 100) // Adding multiple numbers at the end
console.log(nums) // Output: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
console.log(newLength) // Output: 10 (New length of the array)

// ----------------------------------------------------------------------------------------
// Example 5: push() method - Adding multiple values and logging the updated length
const names = ['Arshad', 'Asif']
const updatedLength = names.push('Jack', 'Vishal', 'Asraf') // Adding names at the end
console.log(names) // Output: ['Arshad', 'Asif', 'Jack', 'Vishal', 'Asraf']
console.log(updatedLength) // Output: 5 (New length of the array)

// ----------------------------------------------------------------------------------------
// Example 6: push() method - Adding values from variables at the end
const animals = ['dog', 'cat', 'elephant']
const animal1 = 'lion'
const animal2 = 'Tiger'
animals.push(animal1, animal2) // Adding 'lion' and 'Tiger' at the end
console.log(animals) // Output: ['dog', 'cat', 'elephant', 'lion', 'Tiger']

// ----------------------------------------------------------------------------------------
// unshift() method - Adding values at the beginning of the array
const car = ['BMW', 'Audi', 'Mercedes']
car.unshift('Tesla') // Adding 'Tesla' at the beginning
console.log(car) // Output: ['Tesla', 'BMW', 'Audi', 'Mercedes']

// ----------------------------------------------------------------------------------------
// unshift() method - Adding multiple values at the beginning
const cities = ['Delhi', 'Lucknow']
cities.unshift('Mumbai', 'Kolkata', 'Chennai', 'Bangalore') // Adding multiple cities at the beginning
console.log(cities) // Output: ['Mumbai', 'Kolkata', 'Chennai', 'Bangalore', 'Delhi', 'Lucknow']

// ----------------------------------------------------------------------------------------
//  unshift() method - Adding a value and logging the updated length
const fruits2 = ['Mango', 'Banana']
const lengthAfterUnshift = fruits2.unshift('Apple') // Adding 'Apple' at the beginning
console.log(fruits2) // Output: ['Apple', 'Mango', 'Banana']
console.log(lengthAfterUnshift) // Output: 3 (New length of the array)

// ----------------------------------------------------------------------------------------
//  unshift() method - Adding multiple values and logging the updated array
const scores = [20, 30, 40]
scores.unshift(5, 10) // Adding '5' and '10' at the beginning
const updatedScores = scores // Storing updated array in variable
console.log(scores) // Output: [5, 10, 20, 30, 40]
console.log(updatedScores) // Output: [5, 10, 20, 30, 40]

// ----------------------------------------------------------------------------------------
//  Manually adding values at specific indexes in the array
const rainbow = ['Grey', 'Orange', 'black', 'Pink', 'Blue']

// Manually replacing values at specific indexes
rainbow[0] = 'Red' // Replacing 'Grey' with 'Red' at index 0
rainbow[2] = 'Yellow' // Replacing 'black' with 'Yellow' at index 2
rainbow[3] = 'Green' // Replacing 'Pink' with 'Green' at index 3
rainbow[5] = 'Indigo' // Adding 'Indigo' at index 5 (index 4 is empty)
rainbow[6] = 'Violet' // Adding 'Violet' at index 6

// Displaying the updated array
console.log(rainbow)
// Output: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']

// ----------------------------------------------------------------------------------------
// Another example where values are manually added at specific indexes
const fruits3 = []

// Manually adding values to empty array at specific indexes
fruits3[0] = 'Apple' // Adding 'Apple' at index 0
fruits3[1] = 'Banana' // Adding 'Banana' at index 1
fruits3[2] = 'Mango' // Adding 'Mango' at index 2

// Displaying the updated array
console.log(fruits3)
// Output: ['Apple', 'Banana', 'Mango']

// ----------------------------------------------------------------------------------------
// Another example where values are manually added at specific indexes
const company = ['Cisco', 'Google']

// Manually replacing values at specific indexes
company[0] = 'Apple' // Replacing 'Cisco' with 'Apple' at index 0
company[2] = 'Microsoft' // Adding 'Microsoft' at index 2 (index 1 is empty)
company[3] = 'IBM' // Adding 'IBM' at index 3

// Displaying the updated array
console.log(company)
// Output: ['Apple', 'Google', 'Microsoft', 'IBM']

// ----------------------------------------------------------------------------------------
// Example 1: pop() method – Removes the last element from the array
const colorList = ['red', 'green', 'blue', 'yellow']
colorList.pop() // 'yellow' ko remove karega (last element)
console.log(colorList) // Output: ['red', 'green', 'blue']

// ----------------------------------------------------------------------------------------
// Example 2: pop() method – Stores removed element in a variable
const animalList = ['dog', 'cat']
const lastAnimal = animalList.pop() // 'cat' remove hoga aur store hoga
console.log(animalList) // Output: ['dog']
console.log(lastAnimal) // Output: 'cat'

// ----------------------------------------------------------------------------------------
// Example 3: pop() method – Removing last number from array
const numberArray = [1, 2, 3, 4, 5]
const currentNumber = numberArray.pop() // 5 remove hoga
console.log(numberArray) // Output: [1, 2, 3, 4]
console.log(currentNumber) // Output: 5

// ----------------------------------------------------------------------------------------
// Example 4: push() + pop() – Add first, then remove last
const carModel = ['Toyota', 'BMW']
carModel.push('Mercedes', 'Rolls Royce') // Add 2 cars at the end
const removedCar = carModel.pop() // Remove 'Rolls Royce'
console.log(carModel) // Output: ['Toyota', 'BMW', 'Mercedes']
console.log(removedCar) // Output: 'Rolls Royce'

// ----------------------------------------------------------------------------------------
// Example 5: pop() method – Remove last item when only one item exists
const fruitBasket = ['Apple']
const removedFruit = fruitBasket.pop() // 'Apple' remove ho jayega
console.log(fruitBasket) // Output: []
console.log(removedFruit) // Output: 'Apple'

// ----------------------------------------------------------------------------------------
// Example 6: pop() on empty array – Nothing to remove
const emptyArray = []
const removedElement = emptyArray.pop() // undefined return karega
console.log(emptyArray) // Output: []
console.log(removedElement) // Output: undefined

// ----------------------------------------------------------------------------------------
// shift() method – Remove from beginning
const userNames = ['Arashad', 'Ahad', 'Ali']
userNames.shift()
console.log(userNames)

const queue = ['person1', 'person2', 'person3']
const removeQueue = queue.shift()
console.log(queue)
console.log(removeQueue)

const colors2 = ['red', 'green', 'yellow', 'black']
colors2.shift()
colors2.shift()
console.log(colors2)

const emptyarray = []
const removedItem = emptyarray.shift()
console.log(emptyarray)
console.log(removedItem)

// ----------------------------------------------------------------------------------------
// splice() method – Add/Remove/Change items
// ----------------------------------------------------------------------------------------
// splice() method - Remove at specific index

// Example 1: Remove 1 item from specific index
const shoppingList = ['milk', 'bread', 'eggs', 'butter']
shoppingList.splice(2, 1)
console.log(shoppingList)

// Example 2: Remove 2 numbers from index 1
const scores2 = [90, 80, 70, 60, 50]
scores2.splice(1, 2)
console.log(scores2)

// Example 3: Remove a hobby at index 1
const hobbies = ['coding', 'painting', 'gaming', 'reading']
hobbies.splice(1, 1)
console.log(hobbies)

// Example 4: Remove all books after index 2
const books = ['HTML', 'CSS', 'javaScript', 'React', 'Node']
books.splice(2)
console.log(books)

// Example 5:
const employees = ['Arashad', 'Ravi', 'Priya', 'john', 'Meena']
const firedEmployee = employees.splice(3, 1)
console.log(employees)
console.log(firedEmployee)

// Example 6:
const subjects = ['Math', 'English', 'Science', 'History', 'Geography']
const removedSubjects = subjects.splice(2, 2)
console.log(subjects)
console.log(removedSubjects)

// Example 7:
const tasks = ['task1', 'task2', 'task3']
const nothingRemoved = tasks.splice(1, 0)
console.log(tasks)
console.log(nothingRemoved)

// Example 8:
const versions = ['v1', 'v2', 'v3', 'v4', 'v5']
const outdated = versions.splice(0, 3)
console.log(versions)
console.log(outdated)

// ----------------------------------------------------------------------------------------
// splice() method –  Insert  at specific index
// Example 1: Insert fruit at index 2
const fruits4 = ['apple', 'banana', 'orange']
fruits4.splice(2, 0, 'mango')
console.log(fruits4)

// Example 2: Insert numbers in middle
const numbers = [10, 20, 50, 60]
numbers.splice(2, 0, 30, 40)
console.log(numbers)

// Example 3: Insert friend at the beginning
const friends = ['Arshad', 'Zoya', 'Nargish']
friends.splice(0, 0, 'Simran')
console.log(friends)

// Example 4: Insert toppings into pizza
const toppings = ['cheese', 'olives']
const result = toppings.splice(1, 0, "capsicum", "jalapeno")
console.log(toppings);
console.log(result);

// Example 5: Add two programming languages before JavaScript
const languages = ['HTML', 'CSS', 'JavaScript']
languages.splice(2, 0, 'C',  'C++')
console.log(languages);

// ----------------------------------------------------------------------------------------
// splice() method  – Add/Remove/Change items (Replace)
// Example 1: Replace a fruit
 const fruits5 = ['apple', 'banana', 'mango']
 fruits5.splice(1, 1, 'orange')
 console.log(fruits5);

//  Example 2: Replace number at index 0
const numbers2 = [100, 200, 300]
numbers2.splice(0, 1, 999)
console.log(numbers2);

// Example 3: Replace 2 elements with 1
const cities2 = ['Delhi', 'Pune', 'Mumbai', 'Chennai']
cities2.splice(1, 2, 'Hyderabad')
console.log(cities2);

// Example 4: Replace movie and return removed
const movies = ['Dangal', 'KGF', 'Pushpa']
const removedMovie = movies.splice(2, 1, 'RRR')
console.log(movies);
console.log(removedMovie);

// Example 5: Replace a subject in middle
const subjects2 = ['Math', 'Science', 'History']
subjects2.splice(2, 1, 'Geography')
console.log(subjects2);

// ----------------------------------------------------------------------------------------
// indexOf() method - Index of value
// Example 1: Colors list
const colorList2 = ['red', 'green', 'blue', 'yellow']
console.log(colorList2.indexOf('blue'));
console.log(colorList2.indexOf('red'));

// Example 2: Student names
const studentName = ['Ali', 'Hamid', 'Sneha', 'Hamza', 'Vishal', 'wahid']
const namePosition = studentName.indexOf('Vishal')
console.log(studentName);
console.log(namePosition);

// Example 3: Devices
const devieList = ['leptop', 'tebet', 'mobile']
const devicePosition =  devieList.indexOf('leptop')
console.log(devicePosition);

// Example 4: Book titles
const  bookTitles = ['Gita', 'Bible', 'Quran']
const searchResult = bookTitles.indexOf('Quran')
console.log(bookTitles);
console.log(searchResult);

// Example 5: Cities
const cityName = ['Delhi', 'Mumbai', 'Lucknow']
const cityIndex = cityName.indexOf('Pune')
console.log(cityName);
console.log(cityIndex);

// ----------------------------------------------------------------------------------------
// includes() method - Checks if value exists
// Example 1: Check item exists
const fruits6 = ['apple', 'banana', 'mango']
const hasBanana = fruits6.includes('banana')
console.log(fruits6);
console.log(hasBanana); 

// Example 2: Item not found
const colors3 = ['red', 'green', 'blue']
const hasYellow = colors3.includes('Yellow')
console.log(hasYellow);

// Example 3:
const cities3 = ['London', 'Pune', 'Lucknow']
console.log(cities3.includes('Mumbai'));

// Example 4:
const devices2 = ['mobile', 'leptop', 'tablet']
const result2 = devices2.includes('tablet')
console.log(result2);

// ----------------------------------------------------------------------------------------
// concat() method – Joining two or more arrays
// The concat() method is used to combine two or more arrays.
// It returns a new array without changing the original arrays.

// Example 1: Combine two arrays
const boys = ['Arashad', 'Asif', 'Abdul']
const girls = ['Zoya', 'Priya']
const students = boys.concat(girls)
console.log(students);

// Example 2: Combine three arrays
const fruits7 = ['apple', 'banana']
const veggies = ['carrot', 'tomato']
const nuts = ['almond', 'cashew']
const allItems = fruits7.concat(veggies, nuts)
console.log(allItems);

// Example 3: Original arrays stay the same
const a = [1, 2]
const b = [3, 4]
const result3 = a.concat(b)
console.log(result3);
console.log(a);
console.log(b);

// Example 4: Store in a new variable
const part1 = ['intro', 'basis']
const part2 = ['advaned']
const fullCourse = part1.concat(part2)
console.log(fullCourse);

// Example 5: Concatenate values (not just arrays)
const skill = ['HTML', 'CSS']
const updatedSkills = skill.concat('JavaScript, Rect')
console.log(skill);
console.log(updatedSkills); 

// ----------------------------------------------------------------------------------------
// reverse() method – Reverse order of array
// The reverse() method is used to reverse the order of elements in an array.
// It modifies the original array.

// Example 1: Simple array reverse
const numbers3 = [1, 2, 3, 4, 5]
numbers3.reverse()
console.log(numbers3);

// Example 2: Reversing strings inside an array
const names2 = ['Arashad', 'Zoya', 'Simran']
names2.reverse()
console.log(names2);

// Example 3: Store reversed array in new variable
const letters = ['a', 'b', 'c']
const reversedLetters = letters.reverse()
console.log(letters);
console.log(reversedLetters); 

// Example 4: Reverse with numbers and strings
const mix = [100, 'apple', true, null]
const result4 = mix.reverse()
console.log(mix);
console.log(result4);

// ----------------------------------------------------------------------------------------
// sort() method – Sort array 
// The sort() method is used to sort the elements of an array.
// By default, it sorts the array as strings in ascending order.
// It modifies the original array.

// Example 1: Sorting strings alphabetically
const fruitsList2 = ['banana', 'apple', 'mango']
fruitsList2.sort()
console.log(fruitsList2);

// Example 2: A to Z (Alphabetical order)
const namesList = ['Zoya', 'Hamid', 'Priya', 'Arashad']
namesList.sort()
console.log(namesList);

// Example 4: Sorting numbers ( default sort is wrong!)
const numbersList = [40, 100, 1, 5, 50]
numbersList.sort()
console.log(numbersList);  //(Wrong for numbers!)

// ----------------------------------------------------------------------------------------
// slice() method – Copy part of array
// slice() returns a shallow copy of a part of an array.
// It does not change the original array.

// Syntax:
// array.slice(start, end)
// start: starting index (included)
// end: ending index (excluded)

// Example 1: Slice first 2 elements
const colors4 = ['red', 'green', 'blue', 'yellow']
const result5 = colors4.slice(0, 2)
console.log(colors4);
console.log(result5);

// Example 2: Slice from middle
const items = ["pen", "pencil", "eraser", "scale"];
const part = items.slice(1, 3);
console.log(items);
console.log(part);        // ["pencil", "eraser"]

// Example 3: 
const nums2 = [10, 20, 30, 40, 50, 60, 70 , 80]
const nums2CopyArray = nums2.slice(2, 5)
console.log(nums2);
console.log(nums2CopyArray);

// Example 4: 
const animalsList2 = ['cat', 'dog', 'cow', 'goat']
const lastThree = animalsList2.slice(1)
console.log(animalsList2);
console.log(lastThree);

// Example 5: Copy full array
const original = ['a', 'b', 'c']
const copy = original.slice()
console.log(original);
console.log(copy);

// Example 4: Negative indexes (from end)
let nums3 = [10, 20, 30, 40, 50];
let lastTwo = nums3.slice(-2);

console.log(lastTwo);     // [40, 50]

// ----------------------------------------------------------------------------------------
// length Properties – Size of array (Array.length – Count items)

// Example 1: Total number of elements
const techStack = ['HTML', 'CSS', 'JavaScript']
console.log(techStack.length);

// Example 2:
let fruits8 = ["apple", "banana", "mango", 'kiwi', 'grapes', 'orange'];
console.log(fruits8.length);  

// ----------------------------------------------------------------------------------------
// delete keyword in array
// What it does:
// It removes the value at a specific index in an array,
// BUT it does not change the length of the array.
// It leaves undefined or empty (hole) in that position.
// Note: It’s better to use splice() when you want to properly remove items from an array and also update the length.
// Don’t use delete in arrays (use splice() instead)

// Example 1: 
const languages2 = ["HTML", "CSS", "JavaScript"];
delete languages2[1];

console.log(languages2);     
console.log(languages2.length); 

// ----------------------------------------------------------------------------------------
// in Keyword in Arrays
// in keyword checks if a specific index exists in an array.
// Syntax:
// index in array

// Example 1: Check if index exists
const colors5 = ['red', 'green', 'yellow', 'black', 'blue']
console.log(0 in colors5);
console.log(1 in colors5);
console.log(4 in colors5);
console.log(5 in colors5);
console.log(7 in colors5);

