// Example 1: Sum (Addition) Function
function sumNumber(a, b) {
    return a + b;
  }
  
  // Sum Examples:
  const result5 = sumNumber(10 + 5, 6 + 4); // 25
  const result6 = sumNumber(20 - 5, 3 + 2); // 20
  const result7 = sumNumber(sumNumber(5, 7), sumNumber(3 + 1, 6)); // 22
  
  console.log(result5, result6, result7); // Output: 25 20 22
  
  //----------------------------------------------------------------
  // Example 2: Decrease (s) Function
  function decreaseNumber(a, b) {
    return a - b;
  }
  
  // Decrease Examples:
  const result8 = decreaseNumber(10 + 5, 6 + 4); // 5
  const result9 = decreaseNumber(20 - 5, 3 + 2); // 10
  const result10 = decreaseNumber(decreaseNumber(40, 6), decreaseNumber(8, 2)); // 28
  
  console.log(result8, result9, result10); // Output: 5 10 28
  