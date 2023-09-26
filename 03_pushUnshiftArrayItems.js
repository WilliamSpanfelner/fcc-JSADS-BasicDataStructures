/* Add Items to an Array with push() and unshift() */

/* The push and unshift methods take one or more items
and add them to an array, either at the end or the 
beginning respectively. */

let twentyThree = "XXIII";
let romanNumerals = ['XXI', 'XXII'];
romanNumerals.unshift('XIX', 'XX');
console.log(romanNumerals);  // ['XIX', 'XX', 'XXI', 'XXII']

romanNumerals.push(twentyThree);
console.log(romanNumerals);  // ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']