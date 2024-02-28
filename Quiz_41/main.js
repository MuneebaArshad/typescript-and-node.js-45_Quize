// Qno:41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
//Array magician’s names. 
var magicianNames = ["Harry Porter", "Pinkro", "David Copperfield", "Neuro", "Hermione Granger"];
function show_magicians(magician) {
    for (var _i = 0, magician_1 = magician; _i < magician_1.length; _i++) {
        var items = magician_1[_i];
        console.log(items);
    }
}
// show the magician name.
show_magicians(magicianNames);
