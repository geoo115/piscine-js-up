const replica = (...objs) => {
    let res = objs[0]
    objs.forEach(obj => {
        Object.keys(obj).forEach(key => {
            if (toString.call(obj[key]).slice(8, -1) === 'Object') replica(obj[key])
            if (Array.isArray(obj[key])) {
                for (let i = 0; i < obj[key].length; i++) {
                    if (toString.call(obj[key][i]).slice(8, -1) === 'Object') replica(obj[key][i])
                }
            }
            if (toString.call(res[key]).slice(8, -1) === 'Object' && toString.call(obj[key]).slice(8, -1) === 'Object') {
                Object.keys(obj[key]).forEach((val) => {
                    res[key][val] = obj[key][val]
                })
            } else {
                res[key] = obj[key]
            }
        })
    })
    return res
};

// Example usage:
const obj1 = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    },
    hobbies: ['reading', 'coding']
};

const obj2 = {
    age: 31,
    address: {
        city: 'San Francisco',
        state: 'CA'
    },
    hobbies: ['traveling']
};

const result = replica(obj1, obj2);
console.log(result);