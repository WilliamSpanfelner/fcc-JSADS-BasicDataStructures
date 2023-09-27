/* Iterate through an Array's Items Using For Loops

/* A simple for loop offers greatest control over other
methods of iterating over arrays. */

function greaterThanTen(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

const result = greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
console.log(result); // [12, 14, 80]

/* We have defined a function, filteredArray, which takes
arr, a nested array, and elem as arguments, and returns a 
new array.  elem represents an elemnent that may or may
not be present on one or more of the arrays nested with 
arr.  Modify the function, using a for loop, to return a
filtered version of the passed array such that any array
nested within arr containing elem has been removed. */

function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line

    // Only change code above this line
    return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));