// Question_01
// Declare a variable called age & assign to it your age.
// Show your age in an alert box.
// Alert: I am 20 years old
// Answer:
let age = 20;

// Alert
alert("I am "+ age +" years old");


// Question_02
// Declare & initialize a variable to keep track of how many times a visitor has visited a web page.
// Show his/her number of visits on your web page.
// For example: "You have visited this site N times".
// Answer:
let userVisits = 4;

// Alert
alert("You have visited this site " + userVisits + " times")


// Question_03
// Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
// Message: My birth year is 2006
//          Data type of my declared variable is number
// Answer:
let birthYear = 2006;
let q3para1 = "My birth year is " + birthYear;
let q3para2 = "Data type of my declared variable is " + typeof birthYear;
let q3Br = "<br>"

// Message
document.getElementById("q3-result").innerHTML = q3para1 + q3Br + q3para2;

// Console
console.log(birthYear);
console.log(typeof birthYear);


// Question_04
// A visitor visits an online clothing store www.xyzClothing.com .
// Write a script to store in variables the following information: 
// a. Visitor’s name 
// b. Product title 
// c. Quantity i.e. how many products a visitor wants to order 
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”. 
// Answer:
let visitorName = "John Doe ";
let productName = " T-shirt(s) ";
let quantity = 5;
let q3Output = visitorName + "ordered "+ quantity + productName + "on XYZ Clothing store"

// Message
document.getElementById("q4-result").innerHTML = q3Output

// Console
console.log(visitorName)
console.log(productName)
console.log(quantity)