// Copy an Array with the Spread Operator
// The spread operator is written like this ...

let thisArray = [true, true, undefined, false, null];

let thatArray = [...thisArray];
console.log(thatArray);  // [true, true, undefined, false, null]

/* We have defined a function, copyMachine which takes 
arr (an array) and num (a number) as arguments.  The 
function is supposed to return a new array made up of num
copies of arr.  We have done most ofthe work for you, but
it doesn't work quite right yet.  Modify the function using
spread syntax so that it works correctly (hint: another
method we have already covered might come in handy
here!). */

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        // Only change code below this line
        newArr.push([...arr]);
        // Only change code above this line
        num--;
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));