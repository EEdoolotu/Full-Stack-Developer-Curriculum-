function addTogether(num1, num2) {
  // Case 1: two arguments
  if (arguments.length === 2) {
    if (typeof num1 !== "number" || isNaN(num1) || typeof num2 !== "number" || isNaN(num2)) {
      return undefined; // invalid input
    }
    return num1 + num2;
  }

  // Case 2: one argument (currying)
  if (arguments.length === 1) {
    if (typeof num1 !== "number" || isNaN(num1)) {
      return undefined;
    }
    return function(c) {
      if (typeof c !== "number" || isNaN(c)) {
        return undefined;
      }
      return num1 + c;
    };
  }

  // Case 3: no arguments
  return undefined;
}
