// Qno:27
/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.*/
 
//  for a green alien
let alien_color_green: string = 'green';

if (alien_color_green == 'green') {
    console.log('Alien is green: Player earned 5 points.!');
}else if(alien_color_green == 'yellow'){
    console.log('player earned 10 points.')
}else if(alien_color_green =='red'){
    console.log('Player just earned 15 points.')
}


// for a yellow alie
let alien_color_yellow: string = 'yellow';

if (alien_color_yellow == 'green') {
    console.log('player earned 5 points.!');
}else if(alien_color_yellow == 'yellow'){
    console.log('Alien is yellow: Player earned 10 points.')
}else if(alien_color_yellow =='red'){
    console.log('Player just earned 15 points.')
}
// for a red alien
 
let alien_color_red : string = 'red';

if (alien_color_red  == 'green') {
    console.log('player earned 5 points.!');
}else if(alien_color_red  == 'yellow'){
    console.log('player earned 10 points.')
}else if(alien_color_red  =='red'){
    console.log('Alien is red: Player just earned 15 points.')
}