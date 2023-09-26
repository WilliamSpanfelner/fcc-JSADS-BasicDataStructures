// Copy Array Items Using slice()
/* Since the slice() method returns an array of
the items it extracted, these values can be assigned
to a new array leaving the original source untouched */

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);

console.log(weatherConditions, todaysWeather);
// ['rain', 'snow', 'sleet', 'hail', 'clear'] ['snow', 'sleet']