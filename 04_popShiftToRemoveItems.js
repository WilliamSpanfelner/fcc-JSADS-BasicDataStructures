/* Remove items from an Array with pop() and 
shift() */

/* The pop() and shift() methods are near opposites
of push() and unshift() although neither takes an 
argument */

let greetings = ['Whats up?', 'hello', 'see ya!'];
greetings.pop();
console.log(greetings);  // ['Whats up?', 'hello']

greetings.shift();
console.log(greetings);  // ['hello']

// Return the value of a removed element like this:

let popped = greetings.pop();
console.log(greetings);  // []

/* We have defined a function, popShift, which takes an
array as an argument and returns a new array.  Modify the 
function, using pop() and shift(), to remove the first
and last elements of the argument array, and assign the 
removed elements to their corresponding variables, so that
the returned array contains their values. */

function popShift(arr) {
    let popped;  // Change this line
    let shifted;  // change this line
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));