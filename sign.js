function sign(n) {
  if (n === 0) {
    return 0;
  }
  if (n < 0) {
    return -1;
  }
  return 1;
}

function sameSign(a, b) {
  return sign(a) === sign(b);
}

console.log(sameSign(1, -2));


// const sign = (num) => num == 0 ? 0 : num > 0 ? 1 : -1;
// const sameSign = (num1, num2) => sign(num1) == sign(num2) ? true : false;
