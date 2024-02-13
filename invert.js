function invert(obj) {
  const inverted = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      inverted[obj[key]] = key;
    }
  }
  return inverted;
}

// Example usage:
const originalObj = { a: 1, b: 2, c: 3 };
const invertedObj = invert(originalObj);
console.log(invertedObj); // Output: { '1': 'a', '2': 'b', '3': 'c' }
