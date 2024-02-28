// Qno:21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


 
type Person = {
    name: string;
    age: number;
    hasDriverLicense: boolean;
  };
  

  const person1: Person = {
    name: "Subhan",
    age: 12,
    hasDriverLicense: false
  };
  
  const person2: Person = {
    name: "Ayan",
    age: 18,
    hasDriverLicense:true
    
  };
  
  // Print information about each person
  console.log("Person 1:", person1);
  console.log("Person 2:", person2);
  