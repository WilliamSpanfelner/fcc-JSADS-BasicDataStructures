// Combine Arrays with the Spread Operator
// Insert one array in another with the spread operator

let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
console.log(thatArray);  // ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']

/* We have defined a function spreadOut that returns the
variable sentence.  Modify the function using the spread
operator so that it returns the array ['learning', 
'to', 'code', 'is', 'fun']. */

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence; // Change this line
    return sentence
}

console.log(spreadOut());