// // Array Destructuring (7 Questions)


// // Question 1
// // Destructure the first and second values.
// // const fruits = ["Apple", "Banana", "Orange"];
// // Expected
// // Apple
// // Banana

// const fruits = ["Apple", "Banana", "Orange"];
// const [one,two] = fruits
// console.log(one);
// console.log(two);


// // Question 2
// // Skip the second element.
// // const colors = ["Red", "Green", "Blue"];
// // Output
// // Red
// // Blue

// const colors = ["Red", "Green", "Blue"];
// const [color1, , color3] = colors
// console.log(color1);
// console.log(color3);


// // Question 3
// // Store the remaining values in another array.
// // const numbers = [10, 20, 30, 40, 50];
// // Expected
// // 10
// // [20,30,40,50]

// const numbers = [10, 20, 30, 40, 50];
// const [num1, ...others] = numbers
// console.log(num1);
// console.log(others);


// Question 4
// Swap two variables using destructuring.
// let a = 5;
// let b = 10;
// Expected
// a = 10
// b = 5

// let a = 5;
// let b = 10;





// Question 5
// Give default values.



// const names = ["Ali"]
// const lastName = ["Ahmed"]

// const fullName = [names , lastName]
// console.log(fullName);


// Expected



// Ali

// Ahmed



// Question 6
// Nested array destructuring.



// const data = ["HTML", ["CSS", "JavaScript"]];
// const [one , two] = data;
// console.log(one);
// console.log(two[0]);
// console.log(two[1]);


// Expected



// HTML

// CSS

// JavaScript



// Question 7
// Destructure all values.
// const marks = [80, 90, 95];

const marks = [80, 90, 95];
const [one, two , ...others] = marks
console.log(one);
console.log(two);
console.log(...others);


// Print all three.

// 📌 Object Destructuring (7 Questions)
// Question 8
// Destructure name and age.





// const user = {

// name: "Hasan",

// age: 23,

// city: "Lahore"

// };



// Expected



// Hasan

// 23



// Question 9
// Rename variables.





// const student = {

// name: "Ayesha",

// class: "10th"

// };



// Expected variables



// studentName

// studentClass



// Question 10
// Use default value.





// const employee = {

// name: "Ahmed"

// };



// Expected



// Ahmed

// 50000



// Question 11
// Nested object destructuring.





// const person = {

// name: "Ali",

// address: {

// city: "Karachi",

// country: "Pakistan"

// }

// };



// Expected



// Karachi

// Pakistan



// Question 12
// Destructure everything.





// const product = {

// title: "Laptop",

// price: 80000,

// brand: "Dell"

// };



// Print all values.

// Question 13
// Extract only email.





// const account = {

// username: "coder123",

// email: "coder@gmail.com",

// password: "12345"

// };



// Question 14
// Combine object and array destructuring.





// const company = {

// employees: ["Ali", "Ahmed", "Sara"]

// };



// Expected



// Ali

// Ahmed

// Sara



// 📌 Rest Operator (3 Questions)
// Question 15
// Collect remaining values.





// const numbers = [1,2,3,4,5];



// Expected



// 1

// 2

// [3,4,5]



// Question 16
// Collect remaining object properties.





// const user = {

// name: "Hasan",

// age: 22,

// city: "Lahore",

// country: "Pakistan"

// };



// Expected



// name

// remaining object



// Question 17
// Create a function using Rest Parameters.

// Example





// sum(10,20,30,40);



// Expected Output



// 100



// Hint:

// Use



// function sum(...numbers)



// 📌 Spread Operator (3 Questions)
// Question 18
// Merge two arrays.





// const frontend = ["HTML", "CSS"];

// const backend = ["Node", "MongoDB"];



// Expected



// ["HTML","CSS","Node","MongoDB"]



// Question 19
// Copy an array.





// const fruits = ["Apple","Banana","Orange"];



// Create a new copy using the spread operator.

// Question 20
// Merge two objects.





// const user = {

// name: "Hasan"

// };



// const details = {

// age: 22,

// city: "Lahore"

// };



// Expected





// {

// name: "Hasan",

// age: 22,

// city: "Lahore"

// }

