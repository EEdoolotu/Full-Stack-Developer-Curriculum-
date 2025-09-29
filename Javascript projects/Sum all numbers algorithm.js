function sumAll([num1, num2]) {
  const numbers = [num1, num2];
  let max = Math.max(...numbers)
  let min = Math.min(...numbers)
  let new_numbers = 0;

  for (let i = min; i <= max; i++){
    new_numbers += i
  }
  return new_numbers;

}
console.log(sumAll([10, 5]))