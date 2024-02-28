// Qno:23
/*Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False. 

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
 

let car:string ="subaru";
 
// Task 1 true
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
 
// Task 2 true
console.log("Is car != 'honda'? I predict True.");
console.log(car != 'honda');
 
// Test 3 true
console.log("Is car.length > 0? I predict True.");
console.log(car.length > 0);

// Test 4 true
console.log("Is car.length == 6 ? I predict True.");
console.log(car.length == 6);

 // Test 5 true
 console.log("car == subaru? I predict True.");
if(car == "subaru"){
    console.log(true)
}
else{
    console.log(false)
}

// Test 6 false
console.log("car == honda? I predict false.");
if(car == "honda"){
    console.log(true)
}
else{
    console.log(false)
}
// Test  7 false
console.log("Is car.length == 7? I predict false.");
console.log(car.length == 7);

// Test 8 false
console.log("Is car.length < 5? I predict False.");
console.log(car.length < 5);

// Test 9  false
console.log("Is car !== 'subaru'? I predict true.");
console.log(car !== 'subaru');
 
// Test 10 false
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'Subaru');
 
 
