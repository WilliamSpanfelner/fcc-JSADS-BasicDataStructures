// Add Items Using splice()
/* The third paramater of the splice() method
is for replacing an item or items */

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);