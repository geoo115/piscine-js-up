const vowels = /[AaEeIiOoUu]/;
function vowelDots(str) {
  let returnstr = "";
  str.split("").forEach((letter) => {
    returnstr += letter.replace(vowels, letter + ".");
  });
  return returnstr;
}

// Example usage
const result = vowelDots('hello world');
console.log(result);
// Output: 'he.llo worl.d'
