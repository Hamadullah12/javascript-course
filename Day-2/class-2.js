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

let color = "red";
if (color === "red") {
console.log("STOP")
}

if(color === "yellow") {
    console.log("ready yourself")
}

if(color === "green") {
    console.log("you can go")
}