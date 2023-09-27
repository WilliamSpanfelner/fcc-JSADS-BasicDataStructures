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