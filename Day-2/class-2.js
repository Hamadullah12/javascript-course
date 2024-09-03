// console.log("welcome to the class 2 of learning javascript")

// let num1 = 23;
// let num2 = 43;
// console.log("Total sum of these values is :", num1+num2 );


// TEMPLATE LITERAL
// They are used to add embedded expressin in a string.

// let cupPrice = 54;
// let platePrice = 34;
// let output = `the price is : ${cupPrice + platePrice} Rupees.` //backtick ``
// console.log(output);

// OPERATORS

// 1: Arithmetic operators

// +,-,*,/,%,**

// 2: Unary operator
// ++a, a++, --a, a--

// 3:Assignment operator

// =, +=, -=, *=, /=, %=

// 4:Comparison Operator

// >, >=, <, <=, ==, !=, ===.
// EXAMPLE

// let age = 18 ;
// console.log(age < 18);
// console.log(age > 18);
// console.log(age >= 18);
// console.log(age != 18);
// console.log(age == 18);

// let a = 34;
// let st = '34';
// a == st The answer is true because it just look for value
// a === st; 
// so the ans is false

// The case is sensitive in === it will also look for type means it compare both value and type


// CONDITIONAL STATEMENTS

// If statement


// let age = 19;

// if (age >= 18){
//  console.log("you are eligible for vote")
//     console.log("you are eligible for wedding")
// }

// let age = 13;

// if(age >= 18){
//     console.log("you can drive")
// }
//     if (age < 18){
//         console.log("you cant't drive")
//     }

// let firstName = 'Hamad';

// if(firstName == 'Hamad') { 
//   console.log(`Welcome ${firstName} `);    
// }


// create a traffic light system program?

// let color = "green";
// if (color === "red") {
// console.log("STOP")
// }

// if(color === "yellow") {
//     console.log("ready yourself")
// }

// if(color === "green") {
//     console.log("you can go")
// }

// why we are using === insted of == because it is for case sensitive and thats why we use it.

// ELSE IF STATEMENT
// else if  statement is defined as when one condition is not valid than utilized the other condition
// let age = 17;

// if (age >= 18) {
//     console.log("You are adult");
// }

// else if(age < 18) {
//     console.log("You are not adult");
// }

// Marks System

// let marks = 18;

// if(marks >= 80) {
//     console.log("A++ Bohut zabardast")
// } 
// else if(marks >=60) {
//     console.log("A Zabardast")
// }

// else if(marks >= 40) {
//     console.log("B Achi Koshish")
// }

// else if(marks <= 30) {
//     console.log("Tum thu malang hu bethe")
// }

// creating a traffic light system  program with if statement , else if statement , and else statement.

// let color = "red";

// if(color === "red") {
//     console.log("stop")
// }else if(color === "yellow") {
//     console.log("ready")
// }else if(color === "green") {
//     console.log("go")
// }else{
//     console.log("tujhe nahi dekh raha pagal hain ishara kharab hain chal jaldi kar")
// }

// We are writing a program for popcorn 

// let popcornSize = "L";

// if(popcornSize === "Xl") {
//     console.log("The price is Rs:250");
// } else if(popcornSize === "L") {
//     console.log("The price is Rs:200");
// }else if(popcornSize === "M") {
//     console.log("The price is Rs:100");
// }else if(popcornSize === "S") {
//     console.log("THE price is Rs:50");
// }

// NESTED IF STATEMENTSS

// let marks = 79;

// if (marks >= 50) {
//     console.log("Pass")
//     if(marks >= 80) {
//         console.log("Grade : A+")
//     }else{
//         console.log("Grade :B")
//     }
//     }
//     else if(marks < 50) {
//     console.log("Thu bacha insan hain agle dafa de dena pass hojayega")
// }

// LOGICAL OPERATORS

// 1:LOGICAL AND OPERATOR:  "&&" this is the symbol

// Rules that AND OPERATOR FOLLOW:
// 1: True and True = true 
// 2:t and f = false
// 3:f and t = false
// 4:f and f = false
// let marks = 29;

// if (marks >= 33 && marks >= 80) {
//     console.log("Pass");
//     console.log("You got A+ Grade");
// } else if(marks < 33 && marks < 40) {
//     console.log("Fail");
//     console.log("Agli dafa karlega");
// }

// Practice question
// for logical and operator
// let methaPhal = "apple";

// if(("apple"[0] === 'a') && ("apple".length > 3)) {
//     console.log(" its a really good string");
// } else {
//     console.log("not a good string");
// }

// 2:Logical OR Operator: "||"

// it will give us the result if one condition is true
// T || F = T , F || F = F.

// let marks = 13;
// if(marks >=33 || marks >= 80) {
//     console.log("Pass");
//     console.log("grade A");
// }else{
//     console.log("Fail")
// }

// LOGICAL NOT OPERATOR  "!"
// is defined as to reverse the result


// let marks = 53;
// if(!(marks >=33)) {
//     console.log("Pass");
//     console.log("grade A");
// }else{
//     console.log("Fail")
// }

// COMPLETE EXAMPLE FOR LOGICAL OPERATOR

// let marks = 19;

// if((marks > 33 && marks < 80) || !false){
//     console.log("Pass")
// }
// the checking of condition will start from left side first it will check the && conditions then || and then !.

// let num = 8;

// if((num%4 == 0) &&((num-1 == 5 || num+1 == 9))){
//     console.log("the conditions are true");
// }else{
//     console.log("Conditions are false");
// }

// if(1) {
//     console.log("true value");
// }else{
//     console.log("false")
// }

// SWITCH STATEMENT : It is used when we have to compare a fixed value.

// Traffic light system

// let color = "green";

// switch (color) {
//     case "red":
//         console.log("Ruck jaa Bhai");
//         break; 

//     case "yellow":
//         console.log("Tayyar ho ja");
//         break;

//     case "green":
//         console.log("chal nikal jalde kar");
//         break;

//     default:
//         console.log("bhai tujhe yahan ka nahi pata qannnon ");
// }

/* So how this statement works it will first check the color green with the red if it compared successfully so it will give us the answer 
and stop it and will not check the other condition due to break . if it doesnt so it will check other condition and it will not stop until compared with his value. */

// ASSIGNMENT : we have to write a program for switch statement in which we have to compare week days with number value.

// let toDay = "2";

// switch (toDay) {
//     case "1":
//         console.log("Monday");
//         break;

//     case "2":
//         console.log("Tuesday");
//         break;

//     case "3":
//         console.log("Wednesday");
//         break;

//     case "4":
//         console.log("Thursday");
//         break;


//     case "5":
//         console.log("Friday");
//         break;

//     case "6":
//         console.log("Saturday");
//         break;


//     case "7":
//         console.log("Sunday");
//         break;
// }

// ALERT: It is used to display the message to the user.

// alert("Today is tuesday");

// what is console.error ? > to display error message in console

// alert("Its raining ");
// console.error("Write the correct form");

// what is console.warn?

// console.log("testing ");
// console.warn("Outside is danger");


// PROMPT: It is to take data from user .

// let fullName = prompt('What is your name?');

// console.log(fullName);

// let firstName = prompt("Enter your First Name:");
// let lastName = prompt("Enter your Last Name:");
// console.log('Welcome :'+ " " + firstName , lastName + "!");
// // we can also use alert 
// let message = ('Welcome :' + " " + firstName + " " + lastName);
// alert(message);


// QUIZ TEST

// i have a variable num which has some value so i have to print "good "
//  if the number is divided by 10 else print bad if it doesnt divided by 10  

// let num = 898;

// if(num %  10 == 0) {
//     console.log("good this value is divided by 10");
// }else {
//     console.log("bad this value is not divided by 10");
// }

// 2 : Take the username and age as a input and then return using alert.

// let userName = prompt("Enter your Name.");
// let userAge = prompt("Enter your Age.");
// let verification = (userName + " " + 'is' + " " + userAge + " " + 'years old.');
// alert(verification);

// 3: You have to make three quarters for 12 months and done it by using switch statements.

// let months = "quat3";

// switch (months) {
//     case "quat1":
//         console.log("Jan, Feb, Mar");
//         break;

//     case "quat2":
//         console.log("Apr, May, June");
//         break;

//     case "quat3":
//         console.log("Jul, Aug, Sep");
//         break;

//     case "quat4":
//         console.log("Oct, Nov, Dec");
//         break;
//     default:
//         console.log("put the right data");
// }

// 3: golden string
// let goldenStr = "Adventure";

// if ((goldenStr[0] === 'A' && goldenStr.length > 5 )) {
//  console.log("goldern string");
// }else{
//     console.log("bad string");
// }

// 4:write the program which give that the two num have same last digit

// let num1 =47852;
// let num2 =32;

// if((num1%10)==(num2%10)) {
//     console.log("yes these two num have same last digit which is ", num1%10);
// }else{
//     console.log("no");
// }

// 5:find the greater valye

// let x = 34;
// let y = 7;
// let z = 13;

// if (x > y) {
//     if (x > z) {
//         console.log(x," is largest");
//     } else {
//         console.log(z, "is largest");
//     }
// } else {
//     if (y > z) {
//         console.log(y, " is greater");
//     } else {
//         console.log(z, " is greater");
//     }

// }

