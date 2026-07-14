// Question_01
// Declare 3 variables in one statement.
// Answer:
let myName = "Abdul Raheem", age = 20, birthPlace = "Karachi";

console.log(myName, age, birthPlace);


// // Question_02
// // Declare 5 legal & 5 illegal variable names.
// // Answer:
// // 5 Legal Variables Names:
// let myNames;
// let _age;
// let $price;
// let user1;
// let total_marks;

// // 5 Illegal Variable Names:
// let 1st;       // can't start with Number
// let my-name;   // Hyphen not allowed
// let var;       // JS reserved Keyword 
// let user name; // Space not allowed
// let @price;    // Special character not allowed


// // Question_03
// // Display this in your browser 
// // a) A starting heading “Rules for naming JS variables”.
// // b) Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable 
// // c) Variables must begin with a ______, ______ or _____. For example $user, _user or user 
// // d) Variable names are case _________.
// // e) Variable names should not be JS _________.
// Solve:
// a) Main heading <h1>Rules for naming JS variable</h1>.
// b) Variable names can only contain letters, numbers, $ and _. For example $my_1stVariable 
// c) Variables must begin with a letter, $ or _. For example $user, _user or user 
// d) Variable names are case sensitive.
// e) Variable names should not be JS keywords. 

// // Answer:
 
let heading = "Rules for naming JS variable";
let lineB = "Variable names can only contain <b>letters</b>, <b>numbers</b>, <b>$</b> and <b>_</b>. <br>For example: <b>$my_1stVariable</b>.";
let lineC = "Variables must begin with a <b>letter</b>, <b>$</b> or <b>_</b>. <br>For example: <b>$user</b>, <b>_user</b> or <b>user</b>.";
let lineD = "Variable names are <b>case sensitive</b>.";
let lineE = "Variable names should not be <b>JS keywords</b>.";

document.getElementById("q3-a").innerHTML = heading;
document.getElementById("q3-b").innerHTML = lineB;
document.getElementById("q3-c").innerHTML = lineC;
document.getElementById("q3-d").innerHTML = lineD;
document.getElementById("q3-e").innerHTML = lineE;