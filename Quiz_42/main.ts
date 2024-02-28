// Qno:42
// Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

//Array magician’s names. 
 const magicianNames:string [] =["Harry Porter", "Pinkro", "David Copperfield", "Neuro", "Hermione Granger"]

 function  make_great(magicians:string[]):void{

     for(let i = 0; i< magicians.length; i++) {
            magicians[i] = magicians[i] + ' the great'
    }
 }


make_great(magicianNames);
show_magicians(magicianNames);
