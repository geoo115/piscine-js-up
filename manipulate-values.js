// Define filterValues, mapValues, and reduceValues functions
const filterValues = (obj, cond) => {
    let result = {};
    Object.keys(obj).forEach(key => {
        if (cond(obj[key])) result[key] = obj[key];
    });
    return result;
};

const mapValues = (obj, cond) => {
    let result = {};
    Object.keys(obj).forEach(key => {
        result[key] = cond(obj[key]);
    });
    return result;
};

const reduceValues = (obj, cond, start) => {
    if (start === undefined) start = 0;
    let val = start;
    Object.keys(obj).forEach(key => {
        val = cond(val, obj[key]);
    });
    return val;
};

// Sample object
const sampleObject = {
    apple: 3,
    banana: 2,
    orange: 1,
};

// Example of using the functions
const filteredValues = filterValues(sampleObject, value => value > 2);
const mappedValues = mapValues(sampleObject, value => value * 2);
const reducedValues = reduceValues(sampleObject, (acc, value) => acc + value, 0);

console.log("Original Object:", sampleObject);
console.log("Filtered Values (Values greater than 2):", filteredValues);
console.log("Mapped Values (Doubled values):", mappedValues);
console.log("Reduced Values (Sum of values):", reducedValues);
