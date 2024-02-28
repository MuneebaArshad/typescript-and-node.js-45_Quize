// // Qno:16
// /*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/


 
// step 1
let guestArr:string[] = ["Ayan","Subhan","Ali"];
let cantAttend = "Ali";
let newGuest:string = "Muneeba";

guestArr[guestArr.indexOf(cantAttend)] = newGuest;
console.log(guestArr);

guestArr.map((items) =>
console.log(`Dear ${guestArr}, please join us for  biggest dinner table..`)
);
// step 2
let guest_beg:string = "Arshad Ali"
guestArr.unshift(guest_beg)
console.log(guestArr);

// step 3
let middleGuest:string = "Aira"
let middleIndex = guestArr.length/2
guestArr.splice(middleIndex,0,middleGuest)
console.log(guestArr);

// step 4
guestArr.push("Hina")
console.log(guestArr);

// step 5
guestArr.map((item)=>
console.log(`Dear ${item}, you are invited please join us for dinner `)
);