// Check if an Object has a Property
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

/* There are two ways to check for keys or properties
in an object: the hasOwnProperty() method and the in 
keyword. */

console.log(foods.hasOwnProperty('oranges'));  // true
console.log('oranges' in foods);  // true

/* Finish writing the function so that it returns true if the
object passed to it contains all four names, Alan, Jeff, 
Sarah, and Ryan and returns false otherwise. */

let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(userObj) {
    // Only change code below this line

    // Only change code above this line
}

console.log(isEveryoneHere(users));