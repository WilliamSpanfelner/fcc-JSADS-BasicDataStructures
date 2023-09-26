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