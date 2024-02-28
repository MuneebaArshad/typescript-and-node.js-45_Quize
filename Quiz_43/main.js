// Qno:43
// Unchanged Magicians: Start with your work from Exercise 41. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
//Array magician’s names. 
var magicianNames = ["harry porter", "pinkro", "David Copperfield", "Neuro"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magician) {
    var great_magicians = magician.map(function (magician) { return "the Great ".concat(magician); });
    return great_magicians;
}
//add the great
var great_magicians = make_great(magicianNames);
// original magiciation
console.log("Original Magicians:");
show_magicians(magicianNames);
//great magiciation
console.log("Great Magicians:");
show_magicians(great_magicians);
