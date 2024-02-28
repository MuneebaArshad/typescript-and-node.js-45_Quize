// // Qno:24
// /*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array*/
// Tests for equality and inequality with strings
var string1 = "hello";
var string2 = "world";
console.log("Equality test:", string1 === string2); // False
console.log("Inequality test:", string1 !== string2); // True
// Tests using the lower case function
var string3 = "HELLO";
var string4 = "hello";
console.log("Lowercase equality test:", string3.toLowerCase() === string4.toLowerCase()); // True
// Numerical tests
var num1 = 10;
var num2 = 5;
console.log("Equality test:", num1 === num2); // False
console.log("Inequality test:", num1 !== num2); // True
console.log("Greater than test:", num1 > num2); // True
console.log("Less than test:", num1 < num2); // False
console.log("Greater than or equal to test:", num1 >= num2); // True
console.log("Less than or equal to test:", num1 <= num2); // False
// Tests using "and" and "or" operators
var condition_1 = true;
var condition_2 = false;
console.log("AND operator:", condition_1 && condition_2); //false
console.log("OR operator:", condition_1 || condition_2); //true
// Test whether an item is in an array
var array = [1, 2, 3, 4, 5];
var item1 = 3;
var item2 = 6;
console.log("Item in array test:", array.includes(item1)); // True
console.log("Item not in array test:", !array.includes(item2)); // True 
