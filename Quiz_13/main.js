// Qno:13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// Store favorite transportation in an array.
var transportation = ["Honda.", "Audi.", "Civic."];
// Print statements  
transportation.map(function (items) { return console.log("I would like to own a ".concat(items)); });
