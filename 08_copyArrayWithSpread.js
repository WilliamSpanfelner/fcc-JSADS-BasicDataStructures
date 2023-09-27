// Copy an Array with the Spread Operator
// The spread operator is written like this ...

let thisArray = [true, true, undefined, false, null];

let thatArray = [...thisArray];
console.log(thatArray);  // [true, true, undefined, false, null]