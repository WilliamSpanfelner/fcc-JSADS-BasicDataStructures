// Create complex multi-dimensional arrays
// Consider the following complex array:

let nestedArray = [
    ['deep'],
    [
        ['deeper'], ['deeper']
    ],
    [
        [
            ['deepest'], ['deepest']
        ],
        [
            [
                ['deepest-est?']
            ]
        ]
    ]
];

console.log(nestedArray[2][1][0][0][0]);  // deepest-est?

// Now let reset the value 5-levels in:
nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);  // deeper still