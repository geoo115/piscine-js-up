function triangle(str, n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      result += str;
    }
    if (i === n) {
      return result;
    } else {
      result += "\n";
    }
  }
  return result;
}

// function triangle(character, height) {
//   let result = '';

//   for (let i = 1; i <= height; i++) {
//       result += character.repeat(i);
//       if (i < height) {
//           result += '\n'; // Add a new line except for the last line
//       }
//   }

//   return result;
// }

// Example usage
const result = triangle('*', 5);
console.log(result);
/*
Output:
*
**
***
****
*****
*/
