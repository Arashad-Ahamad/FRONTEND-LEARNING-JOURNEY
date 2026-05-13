Switch Statement in JavaScript - Summary in Detail
1. Definition:
switch statement JavaScript में multiple conditions को handle करने का एक structured तरीका है। यह तब useful होता है जब हमें किसी variable की value को कई अलग-अलग संभावित values से compare करना होता है।

2. Syntax:
javascript
Copy
Edit
switch(expression) {
    case value1:
        // Code executes if expression === value1
        break;
    
    case value2:
        // Code executes if expression === value2
        break;

    default:
        // Code executes if no case matches
}
👉 expression: जिसे compare किया जाता है।
👉 case value: अलग-अलग संभावित values जिनसे expression की तुलना की जाती है।
👉 break: execution को रोकने के लिए।
👉 default: कोई भी case match न होने पर execute होता है।

3. Example Explanations:
✅ Example 1: Basic Switch Statement (Numbers)

javascript
Copy
Edit
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day number!");
}
Output: Wednesday

👉 अगर day = 3, तो "Wednesday" print होगा।
👉 break statement अगला case execute होने से रोकता है।

