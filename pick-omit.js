// Define the pick function
function pick(obj, keys) {
  if (typeof keys === 'string') {
    keys = [keys];
  }

  const result = {};

  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }

  return result;
}

// Define the omit function
function omit(obj, keys) {
  if (typeof keys === 'string') {
    keys = [keys];
  }

  const result = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key) && !keys.includes(key)) {
      result[key] = obj[key];
    }
  }

  return result;
}

// Example usage:
const inputObject = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

const keysToPick = ['a', 'c'];
const keysToOmit = 'b';

const pickedResult = pick(inputObject, keysToPick);
const omittedResult = omit(inputObject, keysToOmit);

console.log("Original Object:", inputObject);
console.log("Picked Result:", pickedResult);
console.log("Omitted Result:", omittedResult);
