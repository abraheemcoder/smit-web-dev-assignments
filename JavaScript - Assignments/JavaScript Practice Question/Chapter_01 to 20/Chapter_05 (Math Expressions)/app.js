// Question_01
// Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// Answer:
// Addition(+):
let firstNumber = 3;
let secondNumber = 5;
let sum = firstNumber + secondNumber;

// Output
document.getElementById("question1-add").innerHTML = "Sum of 3 and 5 is " + sum;


// Question_02
// Repeat task1 for subtraction, multiplication, division & modulus.
// Answer:
let firstNum = 3;
let secondNum = 5;

// Subtraction (-):
let resultOfSubtraction = firstNum - secondNum;

// Output
document.getElementById("question2-minus").innerHTML = "Result of Subtraction is " + resultOfSubtraction;

// Multiplication (*):
let resultOfMultiplication = firstNum * secondNum;

// Output
document.getElementById("question2-multiple").innerHTML = "Result of Multiplication is " + resultOfMultiplication;

// Division (/):
let resultOfDivision = firstNum / secondNum;

// Output
document.getElementById("question2-divide").innerHTML = "Result of Division is " + resultOfDivision;

// Modulus  (Remainder %):
let resultOfModulus = firstNum % secondNum;

// Output
document.getElementById("question2-remain").innerHTML = "Result of Modulus is " + resultOfModulus;


// Question_03
// Do the following using JS Mathematic Expressions:
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable. (Increment means plus variable value by 1)
// f. Show the value of variable in your browser like “Value after increment is: 6”. 
// g. Add 7 to the variable. 
// h. Show the value of variable in your browser like “Value after addition is: 13”. 
// i. Decrement the variable. (Decrement means minus variable value by 1)
// j. Show the value of variable in your browser like “Value after decrement is: 12”. 
// k. Show the remainder after dividing the variable’s value by 3.  
// l. Output : “The remainder is : 0”.
// Answer:
let firstValue;
document.getElementById("question3-b").innerHTML = "Value after variable declaration is " + firstValue;

firstValue = 5;
document.getElementById("question3-d").innerHTML = "Initial value: " + firstValue;

// Increment ( Pre-increment: ++variable and Post-increment: variable++)
document.getElementById("question3-f").innerHTML = "After increment is: " + ++firstValue;

let secondValue = firstValue + 7;
document.getElementById("question3-h").innerHTML = "After addition is: " + secondValue;

// Decrement ( Pre-decrement: --variable and Post-decrement: variable--)
document.getElementById("question3-j").innerHTML = "After decrement is: " + --secondValue;

let thirdValue = 3;
let remainder = secondValue % thirdValue;
document.getElementById("question3-l").innerHTML = "The remainder is: " + remainder;


// Question_04
// Cost of one movie ticket is 600 PKR. 
// Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. 
// Example output: "Total cost to buy 5 tickets to a movie is 3000PKR"
// Answer:
let costOfOneTicket = 600;
let costOfFiveTickets = costOfOneTicket * 5;
document.getElementById("question4-cost").innerHTML = "Total cost to buy 5 tickets to a movie is " + costOfFiveTickets + "PKR";


// Question_05
// Write a script to display multiplication table of any number in your browser. 
// E.g: "Table of 4
//       4x1=4
//       4x2=8
//       4x3=12
//       4x4=16
//       4x5=20
//       4x6=24
//       4x7=28
//       4x8=32
//       4x9=36
//       4x10=40"
// Answer:
// prompt(""): Use for taking data form User

// Take Number form User
let number = prompt("Enter a number to generate table");

// Number(): Use to convert only number string into number
// parseInt(): Extracts integer (whole number) from the beginning of a string & convert into number
// parseFloat(): Extracts decimal number from the beginning of a string & convert into number

// Convert Prompt input to Number
number = parseFloat(number);

// Heading
document.getElementById("question5-heading").innerHTML = "Table of " + number;

// for(initialization; condition; increment){}: Use to creating loop
// condition: how long loop run
// <=: less than and equal to
// +=: For adding & storing variable value
// ++: For increment
// loop to Generate Table
let result = "";
for(let i = 1; i <= 10; i++){
    result += number + "x" + i + "=" + (number * i) + "<br>";
}

// Result
document.getElementById("question5-table").innerHTML = result;


// Question_06
// The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
// a.  Store a Celsius temperature into a variable. 
// b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
// c.  Now store a Fahrenheit temperature into a variable. 
// d. Convert it to Celsius & output “NNoF is NNoC”. 
// Conversion Formulae: •℃ = (℉ - 32) x 5 / 9
//                      •℉ = (℃ x 9 / 5) + 32
// Answer:
let celsiusTemp = (70 - 32) * 5 / 9;
let fahrenheitTemp = (25 * 9 / 5) + 32;
// Celsius temperature
document.getElementById("question6-c").innerHTML = "70℉ is " + celsiusTemp + "℃";

// Fahrenheit temperature
document.getElementById("question6-f").innerHTML = "25℃ is " + fahrenheitTemp + "℉";


// Question_07
//  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1 
// b. Price of item 2 
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
// Answer:
let heading = "Shopping cart"
let priceOfItem1 = 650;
let priceOfItem2 = 100;
let quantityOfItem1 = 3;
let quantityOfItem2 = 7;
let shippingCharger = 100;
let totalCostOfOrder = (priceOfItem1 * quantityOfItem1) + (priceOfItem2 * quantityOfItem2) + shippingCharger;
let br = "<br>"

// Heading
document.getElementById("question7-heading").innerHTML = heading;

// order
document.getElementById("question7-data").innerHTML = "Price of item 1 is " + priceOfItem1 + br + "Quantity of item 1 is " + quantityOfItem1 + br + "Price of item 2 is " + priceOfItem2 + br + "Quantity of item 2 is " + quantityOfItem2 + br + "Shipping charges is " + shippingCharger;

// Receipt
document.getElementById("question7-receipt").innerHTML = "Total cost of your order is " + totalCostOfOrder;


// Question_08
// Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
// Answer:
let totalMarks = 980;
let marksObtained = 804;
let percentage = (marksObtained / totalMarks) * 100;
let q8Br = "<br>";
let q8Heading = "Marks Sheet";

// Heading
document.getElementById("question8-heading").innerHTML = q8Heading;

// Output
document.getElementById("question8-para").innerHTML = "Total marks: " + totalMarks + q8Br + "Marks obtained: " + marksObtained + q8Br + "Percentage: " + percentage;


// Question_09
// Assume we have 10 US dollars & 25 Saudi Riyals. 
// Write a script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression. 
// (Exchange rates : 1 US Dollar = 279.04 Pakistani Rupee and 1 Saudi Riyal = 74.49 Pakistani Rupee)
// Answer:
let totalCurrency = (10 * 279.04) + (25 * 74.49);
let q9Heading = "Currency in PKR";

// Heading
document.getElementById("question9-heading").innerHTML = q9Heading;

// Output
document.getElementById("question9-para").innerHTML = "Total Currency in PKR: " + totalCurrency;


// Question_10
// Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// a. Add 5 
// b. Multiply by 10 
// c. Divide the result by 2 
// Perform all calculations in a single expression
// Answer:
let someNumber = 5;
let resultNum = ((someNumber + 5) * 10) / 2;
document.getElementById("question10-para").innerHTML = resultNum;


// Question_11
// The Age Calculator: Forgot how old someone is? Calculate it! 
// a. Store the current year in a variable. 
// b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored values. 
// Output them to the screen like so: “They are either NN or NN years old”.
// Answer:
let currentYear = 2026;
let birthYear = 2006;
let age1 = currentYear - birthYear;
let age2 = age1 - 1;
let q11Heading = "Age Calculator";
let q11Br = "<br>";

// Heading
document.getElementById("question11-heading").innerHTML = q11Heading;

// Output
document.getElementById("question11-para").innerHTML = "Currenr Year: " + currentYear + q11Br + "Birth Year: " + birthYear + q11Br + "“They are either " + age1 + " or " + age2 + " years old";


// Question_12
// The Geometrizer: Calculate properties of a circle. 
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”. 
// (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The area is NN”. 
// (Hint : Area of a circle = π r2, π = 3.142)
// Answer:
let radiusOfCircle = 20;
let pi = 3.142;
let circumferenceOfCircle = (2 * pi) * 20;
let areaOfCircle = (pi * (radiusOfCircle * radiusOfCircle));
let q12Heading = "The Geometrizer";
let q12Br = "<br>"

// Heading
document.getElementById("question12-heading").innerHTML = q12Heading;

// Output
document.getElementById("question12-para").innerHTML = "Radius of a circle: " + radiusOfCircle + q12Br + "The circumference is " + circumferenceOfCircle + q12Br + "The area is: " + areaOfCircle;


// Question_13
// The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. 
// a. Store your favorite snack into a variable 
// b. Store your current age into a variable. 
// c. Store a maximum age into a variable. 
// d. Store an estimated amount per day (as a number). 
// e. Calculate how many would you eat total for the rest of your life. 
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
// Answer:
let snack = " chocolatto ";
let currentage = 20;
let maximumAge = 100;
let snackPerDay = 2;
let snackNeeded = (maximumAge - currentage) * 365 * snackPerDay;
let q13Heading = "The Lifetime Supply Calculator"
let q13Br = "<br>"

// Heading
document.getElementById("question13-heading").innerHTML = q13Heading;

// Output
document.getElementById("question13-para").innerHTML = "Favorite Snack: " + snack + q13Br + "Current Age: " + currentage + q13Br + "Estimated Maximum Age: " + maximumAge + q13Br + "You will need " + snackNeeded + snack + "to last you until the ripe old age of " + maximumAge;


