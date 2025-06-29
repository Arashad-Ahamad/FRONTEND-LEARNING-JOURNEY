// ----------------------------------------------------------
// Question 1:
// Create a function that calculates the area of different shapes.
// Function: calculateArea(shape, dimensions)
// shape = "rectangle", "circle", "right-triangle"
// dimensions = array of numbers needed for that shape
// ----------------------------------------------------------

function calculateArea(shape, dimensions) {
  if (!Array.isArray(dimensions)) {
    return "Error: Dimensions must be an array";
  }

  switch (shape) {
    case "rectangle":
      if (dimensions.length < 2) {
        return "Error: Rectangle needs length and width";
      }
      return dimensions[0] * dimensions[1];

    case "circle":
      if (dimensions.length < 1) {
        return "Error: Circle needs radius";
      }
      const radius = dimensions[0];
      return Number((Math.PI * radius * radius).toFixed(2)); // π * r² (rounded to 2 decimal)

    case "right-triangle":
      if (dimensions.length < 2) {
        return "Error: Right triangle needs base and height";
      }
      return 0.5 * dimensions[0] * dimensions[1];

    default:
      return "Error: Unknown shape";
  }
}

// ✅ Test cases:
console.log(calculateArea("rectangle", [5, 10]));       // 50
console.log(calculateArea("circle", [7]));              // 153.94
console.log(calculateArea("right-triangle", [3, 4]));   // 6
console.log(calculateArea("hexagon", [3]));             // Error: Unknown shape



// ----------------------------------------------------------
// Question 2:
// Create a function to calculate interest on a bank balance.
// Function: calculateInterest(balance, rate)
// balance = amount in account, rate = annual interest rate in decimal
// ----------------------------------------------------------

function calculateInterest(balance, rate) {
  if (typeof balance !== "number" || typeof rate !== "number") {
    return "Error: Balance and rate must be numbers";
  }

  return balance * rate; // Simple Interest formula
}

// ✅ Test cases:
console.log(calculateInterest(1000, 0.05)); // 50
console.log(calculateInterest(5000, 0.03)); // 150



// ----------------------------------------------------------
// Question 3:
// Create a function to calculate total calories burned in a workout.
// Function: calculateCaloriesBurned(activities)
// activities = array of numbers, each number is calories burned per activity
// ----------------------------------------------------------

function calculateCaloriesBurned(activities) {
  if (!Array.isArray(activities)) {
    return "Error: Input must be an array";
  }

  // Add all activity values using reduce
  return activities.reduce((total, cal) => total + cal, 0);
}

// ✅ Test cases:
console.log(calculateCaloriesBurned([100, 150, 200]));       // 450
console.log(calculateCaloriesBurned([50, 75, 100, 150]));    // 375
