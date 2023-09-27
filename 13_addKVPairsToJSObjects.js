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
