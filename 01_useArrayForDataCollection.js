// Use an Array to Store a Collection of Data

/* An array data structure can be one or multi-dimensional.
It can also contain a mixture of data types. */

let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);  // 7

let complexArray = [
    [
        {
            one: 1,
            two: 2
        },
        {
            three: 3,
            four: 4
        }
    ],
    [
        {
            a: "a",
            b: "b"
        },
        {
            c: "c",
            d: "d"
        }
    ]
];

console.log(complexArray.length);  // 2