function isPrime(digit) {
  if (digit < 2) return false;
   
  for (let i = 2; i <= Math.sqrt(digit); i++) {
    if (digit % i === 0) return false;
  }
  return true
  
}

function sumPrimes(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumPrimes(5))