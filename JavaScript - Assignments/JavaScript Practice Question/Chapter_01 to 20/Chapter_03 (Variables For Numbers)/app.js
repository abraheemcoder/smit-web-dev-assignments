// Q1
// Declare a variable called age & assign to it your age.
// Show your age in an alert box.

const { createElement } = require("react");

// Alert: I am 20 years old
let age = 20;
alert(`I am ${age} years old`);

// ===================================

// Q2
// Declare & initialize a variable to keep track of how many times a visitor has visited a web page.
// Show his/her number of visits on your web page.
// For example: "You have visited this site N times".
let userVisits = 4;
alert(`You have visited this site ${userVisits} times`);

// ===================================

// Q3
// Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
// Message: My birth year is 2006
//          Data type of my declared variable is number
let birthYear = 2006;
const q3Output = createElement("p");
q3Output.append(``)
console.log(`My birth year is ${birthYear}`);
console.log(typeof birthYear);

// ===================================

// Q4
// A visitor visits an online clothing store www.xyzClothing.com .
// Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
// Answer:
let visitorName = "John Doe";
let productName = "T-shirt(s)";
let productQuantity = 5;
let orderMsg = `${visitorName} ordered ${productQuantity} ${productName} on XYZ clothing store`;
console.log(orderMsg);
