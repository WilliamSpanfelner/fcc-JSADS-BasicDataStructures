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
