// Qno:32
/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
// let current_users: string[] = ['admin', 'Eric', 'Ali', 'ayan', 'Arshad'];
// let new_users: string[] = ['Ahsan', 'faisal', 'ali', 'admin', 'Subhan'];
// let current_users_lower :string [] = current_users.map(user => user.toLowerCase())
// for (let new_user  of new_users) { 
//     if(current_users_lower.includes (new_users.tolowerCase()))  {
//         console.log(`Sorry, the username ${new_user } is already taken. Please choose a new one.`);
//     }else{
//         console.log(`Great! The username ${new_user } is available.`)
//     }
// }
var current_users = ['admin', 'Eric', 'Ali', 'ayan', 'Arshad'];
var new_users = ['Ahsan', 'faisal', 'ali', 'admin', 'Subhan'];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log("Sorry, the username ".concat(new_user, " is already taken. Please choose a new one."));
    }
    else {
        console.log("Great! The username ".concat(new_user, " is available."));
    }
}
