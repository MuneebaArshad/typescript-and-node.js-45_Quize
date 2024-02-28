// Qno:43
// Unchanged Magicians: Start with your work from Exercise 41. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

  //Array magician’s names. 
 const magicianNames:string [] =["harry porter","pinkro","David Copperfield","Neuro"];

function show_magicians(magicians:string[]):void
{
   for(const magician of magicians){
       console.log(magician);
   }
} 

function make_great(magician:string[]):string [] {
     const great_magicians: string[] = magician.map(magician =>`the Great ${magician}`);
     return great_magicians;
}
//add the great
 const great_magicians: string[] = make_great(magicianNames)
// original magiciation
console.log("Original Magicians:")
show_magicians(magicianNames);

//great magiciation
console.log("Great Magicians:")
show_magicians(great_magicians);
