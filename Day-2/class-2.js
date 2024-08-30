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


let marks = 53;
if(!(marks >=33)) {
    console.log("Pass");
    console.log("grade A");
}else{
    console.log("Fail")
}
