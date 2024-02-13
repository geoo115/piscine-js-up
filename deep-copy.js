function deepCopy(obj) {
    if (Array.isArray(obj)) {
        return obj.map(item => deepCopy(item));
    } else if (Object.prototype.toString.call(obj) === '[object Object]') {
        const result = {};
        Object.keys(obj).forEach(key => {
            result[key] = deepCopy(obj[key]);
        });
        return result;
    } else {
        return obj;
    }
}

// Example usage:
const originalObject = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    },
    hobbies: ['reading', 'coding']
};

const copiedObject = deepCopy(originalObject);

console.log(copiedObject);
