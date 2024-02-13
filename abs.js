function isPositive(number) {
  return number > 0;
}

function abs(number) {
  if (number < 0) {
    return -number;
  }
  return number;
}

// let isPositive = (num) => (num <= 0) ? false : true;
// let abs = (num) => (isPositive(num)) ? num : (num == 0) ? 0 : -1*num;

// Example usage
let positiveNumber = 7;
let negativeNumber = -5;

console.log(isPositive(positiveNumber)); // Output: true
console.log(isPositive(negativeNumber)); // Output: false

console.log(abs(positiveNumber)); // Output: 7
console.log(abs(negativeNumber)); // Output: 5
