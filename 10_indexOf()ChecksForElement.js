/* Check for the Presence of an Element With 
indexOf() */

/* indexOf() takes an element as an argument
and returns the first element index or -1 if the 
element doesn't exist. */

let fruit = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
console.log(fruit.indexOf('dates'));  // -1
console.log(fruit.indexOf('oranges'));  // 2
console.log(fruit.indexOf('pears'));  // 1

/* indexOf() can be incredibly useful for quickly checking
for the presence of an element on an array.  We have defined
a function, quickCheck, that takes and array and an element
as arguments. Modify the function using indexOf() so that it
returns true if the passed element exists on the array, 
and false if it does not. */

function quickCheck(arr, elem) {
    // Only change code below this line
    if (arr.indexOf(elem) > -1) {
        return true
    }
    return false
    // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));