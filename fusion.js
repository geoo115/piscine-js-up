function fusion(a, b) {
    let result = {};
    let use = Object.keys(a).length > Object.keys(b).length ? a : b;

    Object.keys(use).forEach((key) => {
        if (Array.isArray(a[key]) && Array.isArray(b[key])) {
            result[key] = a[key].concat(b[key]);
        } else if (typeof a[key] === 'string' && typeof b[key] === 'string') {
            result[key] = a[key] + ' ' + b[key];
        } else if (typeof a[key] === 'number' && typeof b[key] === 'number') {
            result[key] = a[key] + b[key];
        } else if (
            typeof a[key] === 'object' &&
            typeof b[key] === 'object' &&
            a[key] !== null &&
            b[key] !== null
        ) {
            result[key] = fusion(a[key], b[key]);
        } else {
            if (b[key] !== undefined) {
                result[key] = b[key];
            } else {
                result[key] = a[key];
            }
        }
    });

    return result;
}

// Example usage:
const obj1 = {
    a: 1,
    b: 'hello',
    c: [1, 2, 3],
    d: { x: 10, y: 20 },
};

const obj2 = {
    b: 'world',
    c: [4, 5, 6],
    d: { z: 30 },
    e: 'extra',
};

const result = fusion(obj1, obj2);
console.log(result);
