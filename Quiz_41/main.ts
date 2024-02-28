// Qno:41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

//Array magician’s names. 
 const magicianNames:string [] = ["Harry Porter", "Pinkro", "David Copperfield", "Neuro", "Hermione Granger"]

 function show_magicians(magician:string[]):void
 {
    for(const items of magician){
        console.log(items);
    }

 }

// show the magician name.
show_magicians(magicianNames);

