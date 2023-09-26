// Remove Items Using splice()
/* The splice method will remove any number
of consecutive elements from anywhere within 
the array. 

The splice() takes up to three parameters: an index 
for where to start removing items, and the number of 
items to remove are the first two.*/
let array = ['today', 'was', 'not', 'so', 'great'];
array.splice(2, 2);
console.log(array);  // ['today', 'was', 'great']

// The splice() method also returns another array:
array = ['I', 'am', 'feeling', 'really', 'happy'];
let newArray = array.splice(3, 2);
console.log(array, newArray);  // ['I', 'am', 'feeling'] ['really', 'happy']

/* We've initialized an array arr. Use splice() to remove
elements from arr, so that it only contains elements that 
sum to the value of 10. */

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line

// Only change code above this line
console.log(sum, arr);
