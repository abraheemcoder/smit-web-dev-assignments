// Question_01
// Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
// Answer:
let city = prompt("Enter your city name");

if (city.toLowerCase() === "karachi"){
    alert("welcome to city of lights");
} else {
    alert("Please come to Karachi");
};


// Question_02
// Write a program to take “gender” as input from user. 
// If the user is male, give the message: Good Morning Sir. 
// If the user is female, give the message: Good Morning Ma’am.
// Answer:
let gender = prompt("Enter your gender");

if (gender.toLowerCase() === "male"){
    alert("Good Morning Sir")
} else if (gender.toLowerCase() === "female"){
    alert("Good Morning Ma'am");
} else {
    alert("Please enter your gender");
};


// Question_03
// Write a program to take input color of road traffic signal from the user & show the message according to this table:
// Message: Red: Must Stop
//          Yellow: Ready to move
//          Green: Move now
// Answer:
let color = prompt("Enter Signal color");

if (color.toLowerCase() === "red"){
    alert("Must Stop");
} else if (color.toLowerCase() === "yellow"){
    alert("Ready to move");
} else if (color.toLowerCase() === "green"){
    alert("Move now");
} else {
    alert("Please enter right signal color");
};


// Question_04
// Write a program to take input remaining fuel in car (in litres) from user. 
// If the current fuel is less than 0.25litres, 
// show the message “Please refill the fuel in your car”
// Answer: 
let fuel = prompt("Enter your fuel amount in litre");
fuel = Number(fuel);

if (fuel < "0.25"){
    alert("Please refill the fuel in your car");
} else {
    alert("enjoy your drive");
};


// Question_05
// Run this script, & check whether alert message would be displayed or not. 
// Record the outputs. 
// a. var a = 4; 
// if (++a === 5){ 
// alert("given condition for variable a is true"); 
// };

// b. var b = 82; 
// if (b++ === 83){ 
// alert("given condition for variable b is true"); 
// };

//  c. var c = 12; 
// if (c++ === 13){ 
// alert("condition 1 is true"); 
// }; 
// if (c === 13){ 
// alert("condition 2 is true"); 
// }; 
// if (++c < 14){ 
// alert("condition 3 is true"); 
// }; 
// if (c === 14){ 
// alert("condition 4 is true"); 
// }; 
 
// d. var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
// alert("The cost equals"); 
// };

//  e. if (true){ 
// alert("True"); 
// }; 
// if (false){ 
// alert("False"); 
// };

// f. if ("car" < "cat"){ 
// alert("car is smaller than cat"); 
// };
// Answer:

// a ==> true
var a = 4; 
if (++a === 5){ 
alert("given condition for variable a is true"); 
};

// b ==> false
var b = 82; 
if (b++ === 83){ 
alert("given condition for variable b is true"); 
};

// c
var c = 12; 
// Condition 1  ==> false
if (c++ === 13){ 
alert("condition 1 is true"); 
}; 
// Condition 2  ==> true
if (c === 13){ 
alert("condition 2 is true"); 
}; 
// Condition 3  ==> false
if (++c < 14){ 
alert("condition 3 is true"); 
};
// Condition 4  ==> true
if(c === 14){ 
alert("condition 4 is true"); 
};

// d ==> true
var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
alert("The cost equals"); 
};

// e
if (true){ 
alert("True"); 
};              // Alert show
if (false){ 
alert("False"); 
};              // Alert not show

// f ==> true
if("car" < "cat"){ 
alert("car is smaller than cat"); 
};


// Question_06
// Write a program to take input the marks obtained in three subjects & total marks. 
// Compute & show the resulting percentage on your page. 
// Take percentage & compute grade as per following 
// table:   Percentage %                   Grade     Remarks
//          Greater than or equal to 80    A-one     Excellent
//          Greater than or equal to 70    A         Good
//          Greater than or equal to 60    B         You need to improve
//          Less than 60                   Fail      Sorry

// Show the total marks, marks obtained, percentage, grade & remarks 
// like this: Marks Sheet
//            Total marks : 300
//            Marks obtained : 219
//            Percentage : 73%
//            Grade: B
//            Remarks : You need to improve
// Answer:
// Heading
let q6Heading = "Marks Sheet";
document.getElementById("q6-heading").innerHTML = q6Heading;
console.log(q6Heading);

// Obtained Marks for three subject
let obtainedMarksForFirstSub = prompt("Enter first subject obtained marks");
obtainedMarksForFirstSub = parseFloat(obtainedMarksForFirstSub);
console.log(obtainedMarksForFirstSub);

let obtainedMarksForSecondSub = prompt("Enter second subject obtained marks");
obtainedMarksForSecondSub = parseFloat(obtainedMarksForSecondSub);
console.log(obtainedMarksForSecondSub);

let obtainedMarksForThirdSub = prompt("Enter third subject obtained marks");
obtainedMarksForThirdSub = parseFloat(obtainedMarksForThirdSub);
console.log(obtainedMarksForThirdSub);

// Total Obtained Marks
let marksObtained = obtainedMarksForFirstSub + obtainedMarksForSecondSub + obtainedMarksForThirdSub;
console.log(marksObtained);

// Total Marks
let totalMarks = prompt("Enter Total marks of three subject");
totalMarks = parseFloat(totalMarks);
console.log(totalMarks);

// Percentage
let percentage = (marksObtained / totalMarks) * 100;
percentage.toFixed(3);
console.log(percentage);

// Grade
let grade;
if(percentage >= 80){
    grade = "A-one";
} else if(percentage >= 70){
    grade = "A";
} else if(percentage >= 60){
    grade = "B";
} else {
    grade = "Fail";
}
console.log(grade);

// Remarks
let remarks;
if(grade == "A-one"){
    remarks = "Excellent";
} else if(grade == "A"){
    remarks = "Good";
} else if(grade == "B"){
    remarks = "You need to improve";
} else if(grade == "Fail"){
    remarks = "Sorry";
}
console.log(remarks);

// Result
let q6Br = "<br>"
document.getElementById("q6-result").innerHTML = "Total marks: " + totalMarks + q6Br + "Marks obtained: " + marksObtained + q6Br + "Percentage: " + percentage.toFixed(3) + "%" + q6Br + "Grade: " + grade + q6Br + "Remarks: " + remarks;


// Question_07
// Guess game: 
// Store a secret number (ranging from 1 to 10) in a variable. 
// Prompt user to guess the secret number. 
// a. If user guesses the same number, show“Bingo!Correct answer”. 
// b. If the guessed number +1 is the secret number,show “Close enough to the correct answer”.
// Answer:
// Secret Number
let secretNum = Math.floor(Math.random() * 10) + 1;
console.log(secretNum);

// User Number
let usernum = prompt("Guess the right number\nHint: number between 1 t0 10");
usernum = parseInt(usernum);
if(secretNum == usernum){
    alert("Bingo! Correct answer");
} else if (secretNum + 1 == usernum || secretNum - 1 == usernum){
    alert("Close enough to the correct answer");
} else {
    alert("Try again");
}


// Question_08
//  Write a program to check whether the given number is divisible by 3. 
// Show the message to the user if the number is divisible by 3.
// Answer:
let num = prompt("Enter a number");
let checkNum = num % 3;
console.log(checkNum);
if(checkNum === 0){
    alert("The number is divisible by 3");
    console.log("The number is divisible by 3");
} else {
    alert("The number is not divisible by 3");
    console.log("The number is not divisible by 3");
}


// Question_09
// Write a program that checks whether the given input is an even number or an odd number.
// Answer:
let q9Num = prompt("Enter an even or odd number");
console.log(q9Num);
if(q9Num % 2 === 0){
    alert("The given number is an even number");
    console.log("The given number is an even number");
} else {
    alert("The given number is an odd number");
    console.log("The given number is an odd number");
}


// Question_10
// Write a program that takes temperature as input and shows a message based on following criteria 
// a. T > 40 then “It is too hot outside.” 
// b. T > 30 then “The Weather today is Normal.” 
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
let T = prompt("Enter temperature of your area");
if(T > 40){
    alert("It is too hot outside");
    console.log("It is too hot outside");
} else if(T > 30){
    alert("The Weather today is Normal");
    console.log("The Weather today is Normal");
} else if(T > 20){
    alert("Today’s Weather is cool");
    console.log("Today’s Weather is cool");
} else if(T > 10){
    alert("OMG! Today’s weather is so Cool");
    console.log("OMG! Today’s weather is so Cool");
} else {
    alert("OMG! Today’s weather is very Cool");
    console.log("OMG! Today’s weather is very Cool");
}


// Question_11
// Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: 
// a. First number 
// b. Second number 
// c. Operation (+, -, *, /, %) 
// Compute & show the calculated result to user.
let firstNum = +prompt("Enter a first number");
let secondNum = +prompt("Enter a second number");
let operation = prompt("Enter an Operation (+, -, *, /, %)");
if(operation === "+"){
    alert("ressult = " + (firstNum + secondNum));
    console.log(firstNum + secondNum);
} else if(operation === "-"){
    alert("ressult = " + (firstNum - secondNum));
    console.log(firstNum - secondNum);
} else if(operation === "*"){
    alert("ressult = " + (firstNum * secondNum));
    console.log(firstNum * secondNum);
} else if(operation === "/"){
    alert("ressult = " + (firstNum / secondNum));
    console.log(firstNum / secondNum);
} else if(operation === "%"){
    alert("ressult = " + (firstNum % secondNum));
    console.log(firstNum % secondNum);
} else {
    alert("invalid operator");
}