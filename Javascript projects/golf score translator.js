const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(num1, num2) {
  if (num2 === 1) {
    return names[0];
  } else if (num2 <= (num1 - 2)) {
    return names[1];
  } else if (num2 === (num1 - 1)) {
    return names[2];
  } else if (num2 === num1) {
    return names[3] 
  } else if (num2 === (num1 + 1)) {
    return names[4]
  } else if (num2 === (num1 + 2)) {
    return names[5]
  } else (num2 >= (num1 + 3)); {
    return names[6]
  }
}
