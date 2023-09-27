/* Generate an Array of All Object Keys with 
Object.keys() */

const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
};

// Object.keys() method generates an array of object keys.
console.log(Object.keys(users));  // ['Alan', 'Jeff', 'Sarah']