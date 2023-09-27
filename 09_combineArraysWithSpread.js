// Combine Arrays with the Spread Operator
// Insert one array in another with the spread operator

let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
console.log(thatArray);  // ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']