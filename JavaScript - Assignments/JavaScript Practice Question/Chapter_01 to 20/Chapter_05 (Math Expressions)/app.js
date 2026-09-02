// Q1
// Write a program that take two numbers & add them in a new variable. Show the result in your console.
// Addition(+):
let firstNumber = 3;
let secondNumber = 5;
let sum = firstNumber + secondNumber;
console.log(sum);

// ===================================

// Q2
// Repeat task1 for subtraction, multiplication, division & modulus.
let firstNum = 3;
let secondNum = 5;
// Subtraction (-):
let resultOfSubtraction = firstNum - secondNum;
console.log(resultOfSubtraction);

// Multiplication (*):
let resultOfMultiplication = firstNum * secondNum;
console.log(resultOfMultiplication);

// Division (/):
let resultOfDivision = firstNum / secondNum;
console.log(resultOfDivision);

// Modulus  (Remainder %):
let resultOfModulus = firstNum % secondNum;
console.log(resultOfModulus);

// ===================================

// Q3
// Do the following using JS Mathematic Expressions:
// a. Declare a variable.
// b. Show the value of variable in your console like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your console like “Initial value: 5”.
// e. Increment the variable. (Increment means plus variable value by 1)
// f. Show the value of variable in your console like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your console like “Value after addition is: 13”.
// i. Decrement the variable. (Decrement means minus variable value by 1)
// j. Show the value of variable in your console like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.
// a.
let num;
// b.
console.log(`Value after variable declaration is: ${num}`);
// c.
num = 5;
// d.
console.log(`Initial value: ${num}`);
// e. Increment ( Pre-increment: ++variable and Post-increment: variable++)
++num;
// f.
console.log(`Value after increment is: ${num}`);
// g.
num += 7;
// h.
console.log(`Value after addition is: ${num}`);
// i. Decrement ( Pre-decrement: --variable and Post-decrement: variable--)
--num;
// j.
console.log(`Value after decrement is: ${num}`);
// k.
let remainder = num % 3;
// l.
console.log(`The remainder is : ${remainder}`);

// ===================================

// Q4
// Cost of one movie ticket is 600 PKR.
// Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.
// Example output: "Total cost to buy 5 tickets to a movie is 3000PKR"
let costOfOneTicket = 600;
let costOfFiveTickets = costOfOneTicket * 5;
console.log(`Total cost to buy 5 tickets to a movie is ${costOfFiveTickets} PKR`);

// ===================================

// Q5
// Write a script to display multiplication table of any number in your console.
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
// prompt(""): Use for taking data form User
let number = prompt("Enter a number to generate table", 5);
// Number(): Use to convert only number string into number
// parseInt(): Extracts integer (whole number) from the beginning of a string & convert into number
// parseFloat(): Extracts decimal number from the beginning of a string & convert into number
number = parseInt(number);
console.log(`Table of ${number}`);
// for(initialization; condition; increment){}: Use to creating loop
// condition: how long loop run
// <=: less than and equal to
// +=: For adding & storing variable value
// ++: For increment
// loop to Generate Table
let table = "";
for (let i = 1; i <= 10; i++) {
  table += `${number} x ${i} = ${number * i}\n`;
}
console.log(table);

// ===================================

// Q6
// The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae: •℃ = (℉ - 32) x 5 / 9
//                      •℉ = (℃ x 9 / 5) + 32
let celsiusTemp = prompt("Convert ℃ into ℉", 0);
celsiusNum = parseFloat(celsiusTemp);
celsiusToFahrenheit = ((celsiusNum * 9) / 5 + 32);
// Fahrenheit temperature
console.log(`${celsiusNum}℃ is ${celsiusToFahrenheit}℉`);

let fahrenheitTemp = prompt("Convert ℉ into ℃", 212);
fahrenheitNum = parseFloat(fahrenheitTemp);
fahrenheitToCelsius = ((fahrenheitNum - 32) * 5) / 9;
// Celsius temperature
console.log(`${fahrenheitNum}℉ is ${fahrenheitToCelsius}℃`);

// ===================================

// Q7
// Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your console.
let priceOfItem1 = 650;
let priceOfItem2 = 100;
let quantityOfItem1 = 3;
let quantityOfItem2 = 7;
let shippingCharges = 100;
let totalCostOfOrder = ( priceOfItem1 * quantityOfItem1 ) + ( priceOfItem2 * quantityOfItem2 ) + shippingCharges;
console.log(totalCostOfOrder);

// ===================================

// Q8
// Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your console
let totalMarks = 980;
let marksObtained = 804;
let percentage = (marksObtained / totalMarks) * 100;
console.log(`${percentage.toFixed(2)}%`);

// ===================================

// Q9
// Assume we have 10 US dollars & 25 Saudi Riyals.
// Write a script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 277.69 Pakistani Rupee and 1 Saudi Riyal = 73.86 Pakistani Rupee)
let dollarRate = 277.69;
let riyalRate = 73.86;
let totalCurrency = (10 * dollarRate) + (25 * riyalRate);
console.log(totalCurrency);

// ===================================

// Q10
// Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
let someNumber = 5;
let finalNum = ((someNumber + 5) * 10) / 2;
console.log(finalNum);

// ===================================

// Q11
// The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the console like so: “They are either NN or NN years old”.
let currentYear = 2026;
let birthYear = 2006;
let age1 = currentYear - birthYear;
let age2 = age1 - 1;
console.log(`They are either ${age1} or ${age2} years old`);

// ===================================

// Q12
// The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The area is NN”.
// (Hint : Area of a circle = π r2, π = 3.142)
let pi = 3.142;
// a. 
let radiusOfCircle = 20;
// b. 
let circumferenceOfCircle = 2 * pi * radiusOfCircle;
console.log(`The circumference is ${circumferenceOfCircle.toFixed(2)}`);
let areaOfCircle = pi * (radiusOfCircle * radiusOfCircle);
console.log(`The area is ${areaOfCircle}`);

// ===================================

// Q13
// The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the console like so: “You will need NNNN snack to last you until the ripe old age of NN”.
// Answer:
let snack = "chocolatto";
let currentage = 20;
let maximumAge = 100;
let snackPerDay = 2;
let snackNeeded = (maximumAge - currentage) * 365 * snackPerDay;
console.log(`You will need ${snackNeeded} ${snack} to last you until the ripe old age of ${maximumAge}`);