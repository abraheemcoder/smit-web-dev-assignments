// // Question_01
// // Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. 
// // Greet the user using his full name.
// // Answer:
// let firstName = prompt("enter your first name");
// let lastName = prompt("enter your last name");
// let fullName = firstName + " " + lastName;

// // Output
// alert(`Hello ${fullName}!`);
// console.log(`Hello ${fullName}!`);


// // Question_02
// // Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser
// // Answer:
// let favMobileModel = prompt("enter your favorite mobile model");
// let lengthOfString = favMobileModel.length;

// // Output
// console.log("My favorite phone is: " + favMobileModel);
// console.log("Length of string: " + lengthOfString);


// // Question_03
// //  Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .
// // Answer:
// let word = "Pakistani";
// let indexOfN = word.indexOf("n");

// // Output 
// console.log("String: " + word);
// console.log("Index of 'n': " + indexOfN);


// // Question_04
// // Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
// // Answer:
// let word2 = "Hello World";
// let indexOfL = word2.lastIndexOf("l");

// // Output 
// console.log("String: " + word2);
// console.log("Last index of 'l': " + indexOfL);


// // Question_05
// // Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
// // Answer:
// let word3 = "Pakistani";
// let charAtIndex3 = word3.charAt(3);

// // Output
// console.log("String: " + word3);
// console.log("Character at index 3: " + charAtIndex3);


// // Question_06
// // Repeat Q1 using string concat() method.
// // Answer:
// let firstName2 = prompt("enter your first name");
// let lastName2 = prompt("enter your last name");
// let space = " ";
// let fullName2 = firstName2.concat(space, lastName2);

// // Output
// console.log("Hello ".concat(fullName2, "!"));


// // Question_07
// // Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
// // Answer:
// let city = "Hyderabad";
// let newCity = city.replace("Hyder", "Islam");

// // Output
// console.log("City: " + city);
// console.log("After replacement: " + newCity);


// // Question_08
// // Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
// let msg = "Ali and Sami are best friends. They play cricket and football together.";
// let msg2 = msg.replaceAll("and", "&");

// // Output
// console.log(msg2);


// // Question_09
// // Write a program that converts a string “472” to a number 472. 
// // Display the values & types in your browser.
// let value1 = "472";
// let value2 = Number(value1);

// // Output
// console.log("Value: " + value1);
// console.log("type: " + typeof value1);
// console.log(value2);
// console.log("type: " + typeof value2);


// // Question_10
// // Write a program that takes user input. 
// // Convert and show the input in capital letters.
// // Answer:
// let userInput = prompt("Enter a lowercase word");
// let inputToUpperCase = userInput.toUpperCase();

// // Output
// console.log("User input: " + userInput);
// console.log("Upper case: " + inputToUpperCase);


// // Question_11
// // Write a program that takes user input. 
// // Convert and show the input in title case.
// // Answer:
// let userInput2 = prompt("Enter a word");
// let inputToTitleCase = userInput2.charAt(0).toUpperCase() + userInput2.slice(1).toLowerCase();

// // Output
// console.log("User input: " + userInput2);
// console.log("Tittle case: " + inputToTitleCase);


// // Question_12
// // Write a program that converts the variable num to string. 
// // let num = 35.36 ; 
// // Remove the dot to display “3536” display in your browser.
// // Answer:
// let num = 35.36;
// let str = String(num);
// let replaceDotToStr = str.replace(".", "");

// // Output
// console.log(num);
// console.log("type: " + typeof num);
// console.log(replaceDotToStr);
// console.log("type: " + typeof replaceDotToStr);


// Question_13
// Write a program to take user input and store username in a variable. 
// If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ . , !].  
// Note:   ASCII code of ! is 33 
//         ASCII code of , is 44 
//         ASCII code of . is 46 
//         ASCII code of @ is 64
// Answer:
let userName = prompt("Enter your username");

