// // Qno:31
//  /*No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.*/
var userNames = ['admin', 'eric', 'Ali', 'Ayan', 'Subhan'];
// if (userNames.length === 0){
//     console.log ("we need to find some work")
// }else{
//     for(let user of userNames){
//         if (user === "admin"){
//             console.log("Hello admin, Would you like to see a status report?")
//         }else{
//             console.log(`Hello ${user}, thank you for login again`)
//         }
//     }
// }
userNames = [];
if (userNames.length === 0) {
    console.log("we need to find some users!");
}
