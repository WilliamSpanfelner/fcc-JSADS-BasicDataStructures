// Copy Array Items Using slice()
/* Since the slice() method returns an array of
the items it extracted, these values can be assigned
to a new array leaving the original source untouched */

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);

console.log(weatherConditions, todaysWeather);
// ['rain', 'snow', 'sleet', 'hail', 'clear'] ['snow', 'sleet']

/* We have defined a function, forecast, that takes an array
as an argument. Modidy the function using slice() to 
extract information from the argument array and return a 
new array that contains the string elements warm and 
sunny. */

function forecast(arr) {
    // Only change code below this line

    return arr;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
