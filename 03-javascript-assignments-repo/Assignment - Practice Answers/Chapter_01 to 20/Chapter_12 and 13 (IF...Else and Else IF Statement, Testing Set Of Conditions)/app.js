// // Question_01
// //  Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
// // Answer:
// let inputChar = prompt("Enter a character\nCharacter must be number, uppercase letter or lower case letter");
// let code = inputChar.charCodeAt(0);
// if(code >= 48 && code <= 57){
//     alert("The character is a number");
//     console.log("The character is a number");
// } else if(code >= 65 && code <= 90){
//     alert("The character is an uppercase letter");
//     console.log("The character is an uppercase letter");
// } else if(code >= 97 && code <= 122){
//     alert("The character is an lowercase letter");
//     console.log("The character is an lowercase letter");
// }


// // Question_02
// // Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
// // Answer:
// let firstInt = parseInt(prompt("Enter a first Integer"));
// let secondInt = parseInt(prompt("Enter a second Integer"));

// if (firstInt > secondInt) {
//     console.log("First integer is larger");
//     console.log(firstInt);
// } else if (firstInt < secondInt) {
//     console.log("Second integer is larger");
//     console.log(secondInt);
// } else {
//     console.log("Both integers are equal");
// }


// // Question_03
// // Write a program that takes input a number from user & state whether the number is positive, negative or zero.
// // Answer:
// let userNum = parseFloat(prompt("Enter a positive or negative number or zero"));

// if (userNum > 0) {
//     console.log("The number is positive");
// } else if (userNum < 0) {
//     console.log("The number is negative");
// } else if (userNum === 0) {
//     console.log("The number is zero");
// } else {
//     console.log("Invalid number");
// }


// Question_04
// Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise