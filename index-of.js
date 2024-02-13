// Function to find the index of the first occurrence of a value in an array
function indexOf(arr, value, startIndex = 0) {
  for (let i = startIndex; i < arr.length; i++) {
      if (arr[i] === value) {
          return i;
      }
  }
  return -1;
}

// Function to find the index of the last occurrence of a value in an array
function lastIndexOf(arr, value, startIndex = arr.length - 1) {
  let lastIndex = -1;
  for (let i = startIndex; i >= 0; i--) {
      if (arr[i] === value) {
          lastIndex = i;
          break; // Once you find the last occurrence, you can exit the loop
      }
  }
  return lastIndex;
}

// Function to check if a value is included in an array
function includes(arr, value) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
          return true;
      }
  }
  return false;
}

console.log(lastIndexOf(['t', 0, 0, 't'], 't', 2));
