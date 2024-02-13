function words(str) {
  return str.split(' ');
}

function sentence(arr) {
  return arr.join(' ');
}

function yell(str) {
  return str.toUpperCase();
}

function whisper(str) {
  return '*' + str.toLowerCase() + '*';
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Example usage
let inputString = "Hello World";
let wordsArray = words(inputString);
console.log(wordsArray); // Output: ["Hello", "World"]

let joinedSentence = sentence(wordsArray);
console.log(joinedSentence); // Output: "Hello World"

let yelledString = yell(inputString);
console.log(yelledString); // Output: "HELLO WORLD"

let whisperedString = whisper(inputString);
console.log(whisperedString); // Output: "*hello world*"

let capitalizedString = capitalize(inputString);
console.log(capitalizedString); // Output: "Hello world"
