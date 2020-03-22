// Store your name in a varibale.
var name = "Oluwatobiloba Light";

// Store your courses in an array.
var courses = ["HTML", "CSS", "JS", "NodeJS", "Python"];


console.log("My name is " + name + " and I am taking the courses below:");

// Display the number of courses
for (var i = 0; i < courses.length; i++) {
  console.log(courses[i]);
}

// Display your name and courses and do one of the following:  
// 1. If the number of courses you are doing is an odd number, find and display all odd numbers from 1-200 (inclusive)

if (courses.length % 2 !== 0) {
  // find and display all odd numbers from 1 - 200
  console.log(
    "The number of courses I am taking is even and the even numbers from 1 - 200 are:"
  );
  for (var i = 0; i <= 200; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

// 2. If the number of courses you are doing is an even number, find and display all even numbers from 1-200 (inclusive)

if (courses.length % 2 === 0) {
  // find and display all even numbers from 1 - 200
  console.log(
    "The number of courses I am taking is even and the even numbers from 1 - 200 are:"
  );
  for (var i = 0; i <= 200; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
