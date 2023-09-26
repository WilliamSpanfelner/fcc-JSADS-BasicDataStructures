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