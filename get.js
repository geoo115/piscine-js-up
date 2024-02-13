function get(src, path) {
  let arr = path.split(".");
  for (let i = 0; i < arr.length; i++) {
    src = src[arr[i]];
    if (src === undefined) {
      return src;
    }
  }
  return src;
}

// Example usage
const src = { nested: { key: 'peekaboo' } };
const path = 'nested.key';

console.log(get(src, path)); // Output: 'peekaboo'