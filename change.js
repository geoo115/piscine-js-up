let get = (arg) =>  {
  return sourceObject[arg]
}
let set = (arg, arg2) =>  {
  return sourceObject[arg] = arg2
}

// Example
const myObject = {
  name: 'John',
  age: 25,
  country: 'US'
};

console.log(get(myObject, 'name'));  // Output: John
console.log(get(myObject, 'age'));   // Output: 25

set(myObject, 'age', 26);
console.log(myObject.age); 