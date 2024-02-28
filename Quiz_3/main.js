// Qno:3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// Store a person's name in a variable
var personName = "Muneeba arshad ali";
// Print name in lowercase
console.log(personName.toLowerCase());
//  Print name in uppercase
console.log(personName.toUpperCase());
//  Print name in titlecase
console.log(personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
