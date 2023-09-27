// Add Key-Value Pairs to JavaScript Objects 
// Consider the following object:
const tekkenCharacter = {
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe',
    human: true
};

// now let's add a new key-value pair:

tekkenCharacter.origin = 'South Korea';
console.log(tekkenCharacter);
/* 
{
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe', 
    human: true, 
    origin: 'South Korea'
} 
*/

/* Let's add another key-value pair from the value of a 
variable (this requires bracket notation): */
const hairColor = 'dyed orange';
tekkenCharacter['hair color'] = hairColor;
console.log(tekkenCharacter);
/*
{
    player: 'Hwoarang', 
    fightingStyle: 'Tae Kwon Doe', 
    human: true, 
    origin: 'South Korea', 
    hair color: 'dyed orange'
}
*/

/* A foods object has been created with three entries. Using
the syntax of your choice, add three more entries to it:
bananas with a value of 13, grapes with a value of 35, and 
strawberries with a value of 27. */

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};

// Only change code below this line

// Only change code above this line

console.log(foods);
