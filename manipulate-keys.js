const filterKeys = (obj, cond) => {
    let result = {};
    Object.keys(obj).forEach(key => (cond(key)) ? result[key] = obj[key] : undefined)
    return result
}

const mapKeys = (obj, cond) => {
    let result = {};
    Object.keys(obj).forEach(key => result[cond(key)] = obj[key])
    return result
}

const reduceKeys = (obj, cond, start) => {
    if (start === undefined) return Object.keys(obj).reduce((prev, curr) => cond(prev, curr))
    return Object.keys(obj).reduce((prev, curr) => cond(prev, curr), start)
}

// Sample object
const sampleObject = {
    apple: 3,
    banana: 2,
    orange: 1,
};

// Example of using the functions
const filteredKeys = filterKeys(sampleObject, key => key.includes('a'));
const mappedKeys = mapKeys(sampleObject, key => key.toUpperCase());
const reducedKeys = reduceKeys(sampleObject, (acc, key) => acc + sampleObject[key], 0);

console.log("Original Object:", sampleObject);
console.log("Filtered Keys (Keys containing 'a'):", filteredKeys);
console.log("Mapped Keys (Uppercase keys):", mappedKeys);
console.log("Reduced Keys (Sum of values):", reducedKeys);
