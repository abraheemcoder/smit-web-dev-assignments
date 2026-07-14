// Question_01
// Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
// Result:
// The value of a is: 10
// The value of ++a is,'
// Now the value of a is: II
// The value of a++ is: 11
// Now the value of a is: 12
// The value of —a is: 11
// Now the value Of a is: II
// The value of a— is: II
// Now the value of a is: 10
// Answer:
// Heading
let q1Heading = "Result:";
document.getElementById("q1-heading").innerHTML = q1Heading;

// Value of a
let q1A = 10;
let q1Br = "<br>";
let q1Output = "The value of a is: " + q1A + q1Br + "----------------------" + q1Br + q1Br;

// Value of ++a
q1Output += "The value of ++a is: " + (++q1A) + q1Br + "Now the value of a is:" + q1A + q1Br + q1Br;

// Value of a++
q1Output += "The value of a++ is: " + (q1A++) + q1Br + "Now the value of a is:" + q1A + q1Br + q1Br;

// Value of --a
q1Output += "The value of --a is: " + (--q1A) + q1Br + "Now the value of a is:" + q1A + q1Br + q1Br;

// Value of a--
q1Output += "The value of a-- is: " + (q1A--) + q1Br + "Now the value of a is: " + q1A + q1Br + q1Br;

// Result
document.getElementById("q1-result").innerHTML = q1Output;


// Question_02
// What will be the output in variables a, b & result after execution of the following script: 
// var a = 2, b = 1; 
// var result = --a - --b + ++b + b--; 
// Explain the output at each stage: 
// --a; 
// --a - --b; 
// --a - --b + ++b; 
// --a - --b + ++b + b--;
// Answer:
let q2A = 2;
let q2B = 1;

// --a:
let step1 = --q2A;
console.log(step1); // 

// --a - --b:
// Now,
// a = 1 
// --b = 0
let step2 = step1 - --q2B;
console.log(step2);

// --a - --b + ++b:
// Now,
// a = 1
// b = 0
// ++b = 1 
let step3 = step2 + ++q2B;
console.log(step3);

// --a - --b + ++b + b--:
// Now,
// a = 1
// b = 1
// b-- = 1
let step4 = step3 + q2B--;

// Final Result
console.log(step4);


// Question_03
// Write a program that takes input a name from user & greet the user.
// Anewer:
let userName = prompt("Enter your name");
let greeting = "Hello " + userName + ", Welcome to our Website";

// Result
alert(greeting);
console.log(greeting);


// Question_04  (No Question_04)


// Question_05
// Write a program to take input a number from user & display it’s multiplication table on your browser. 
// If user does not enter a new number, multiplicationtable of 5 should be displayed by default.
// Answer:
// Take Number from user
let number = prompt("Enter a number to generate table");

// loop to Generate Table
let q5Result = "";
if(number === ""){
    number = 5;
} else if (number === null){
    number = 5;
}
for(let i = 1; i <= 10; i++){
    q5Result += number + " x " + i + " = " + (number * i) + "<br>";
}

// Heading
document.getElementById("q5-heading").innerHTML = "Table of " + number;

// Result
document.getElementById("q5-result").innerHTML = q5Result;


// Question_06
//  Take 
// a) Take three subjects name from user and store them in 3 different variables. 
// b) Total marks for each subjectis100, store it in another variable. 
// c) Take obtained marks for first subjectfromuser and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables. 
// e) Now calculatetotalmarksand percentage and show the result in browser like this.(Hint: user table)
// Answer:
// a) Take 3 subject from user
let firstSubName = prompt("Enter first subject name");
let secondSubName = prompt("Enter second subject name");
let thirdSubName = prompt("Enter third subject name");

//  b) Total marks for each subjec
let totalMarkForEachSub = 100;

// c) Take obtained marks for first subject
let obtainedMarksForFirstSub = prompt("Enter first subject obtained marks");
obtainedMarksForFirstSub = Number(obtainedMarksForFirstSub);

// d) Take obtained marks for remaining 2 subjects
let obtainedMarksForSecondSub = prompt("Enter second subject obtained marks");
obtainedMarksForSecondSub = Number(obtainedMarksForSecondSub);

let obtainedMarksForThirdSub = prompt("Enter third subject obtained marks");
obtainedMarksForThirdSub = Number(obtainedMarksForThirdSub);

// Heading
let q6Heading = "Marks Sheet";
document.getElementById("q6-heading").innerHTML = q6Heading;

// Subject Percentage
let firstSubPercent = (obtainedMarksForFirstSub / 100) * 100;
let secondSubPercent = (obtainedMarksForSecondSub / 100) * 100;
let thirdSubPercent = (obtainedMarksForThirdSub / 100) * 100;

// Total Marks
let totalMarks = 300;

// Total obtained Marks
let totalObtainedMarks = obtainedMarksForFirstSub + obtainedMarksForSecondSub + obtainedMarksForThirdSub;

// Total Percentage
let totalPercentage = (totalObtainedMarks / totalMarks) * 100;

// Result
let q6ResultRow1 = "<table border='2' cellpadding='10'>" + "<tr>" + "<th>" + "Subject" + "</th>"+ "<th>" + "Total Marks" + "</th>"+ "<th>" + "Obtained Marks" + "</th>"+ "<th>" + "Percentage" + "</th>" + "</tr>";

let q6ResultRow2 = "<tr>" + "<td>" + firstSubName + "</td>"+ "<td>" + totalMarkForEachSub + "</td>"+ "<td>" + obtainedMarksForFirstSub + "</td>"+ "<td>" + firstSubPercent+ "%"  + "</td>" + "</tr>";

let q6ResultRow3 = "<tr>" + "<td>" + secondSubName + "</td>"+ "<td>" + totalMarkForEachSub + "</td>"+ "<td>" + obtainedMarksForSecondSub + "</td>"+ "<td>" + secondSubPercent + "%" + "</td>" + "</tr>";

let q6ResultRow4 = "<tr>" + "<td>" + thirdSubName + "</td>"+ "<td>" + totalMarkForEachSub + "</td>"+ "<td>" + obtainedMarksForThirdSub + "</td>"+ "<td>" + thirdSubPercent + "%" + "</td>" + "</tr>";

let q6ResultRow5 =  "<tr>" + "<th>" + "Total" + "</th>"+ "<td>" + totalMarks + "</td>"+ "<td>" + totalObtainedMarks + "</td>"+ "<td>" + totalPercentage + "%" + "</td>" + "</tr>" + "</table>";

let q6Result = q6ResultRow1 + q6ResultRow2 + q6ResultRow3 + q6ResultRow4 + q6ResultRow5;

document.getElementById("q6-result").innerHTML = q6Result;