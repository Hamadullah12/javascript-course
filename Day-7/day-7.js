// THIS :
// Why we use this key word ?
// When we have to access the keys and pararmeters in an object from a function .As the function cant directly access to the keys
// so for calling a piece of code in object we use "this" key word.

// const studentData = {
//     name: "Hamad Ullah",
//     maths: 88,
//     physics: 69,
//     english: 58,
//     urdu : 60,
//     avgFunc() {//to find average of marks so here it doest directly access to the object so we will use this
//         let average = (this.maths + this.physics + this.english + this.urdu) / 4;
//         console.log(average);
//     }
// }
// console.log(studentData.avgFunc());

// TRY AND CATCH : these keywords are used for error handling

// console.log("hi");
// console.log("hi");
// console.log("hi");
// try {
//     console.log(a);
// } catch (error) {
//     console.log("We didnt define a to the document")
//     console.log(error)
// }
// console.log("hi");
// console.log("hi");
// console.log("hi");


// ARROW FUNCTION: The shortest syntax for creating a function
// these are nameless function , we will take it as a value mens stores it in a variable, and give the function name to the constant.

// const mathOperations = (a, b) => {
//     console.log(a + b);
//     console.log(a - b);
//     console.log(a * b);
//     console.log(a / b);
//     console.log(a % b);
// }

// mathOperations(5, 9);

// Taking square and cube using return ann arrow function

// const powerOperations = (n) => {
//     // return n * n;
//     return n * n * n;
// }

// let power = powerOperations(3);
// console.log(power);


// create a  program for a to power b means take power of a times b.

// const aToPowerb = (a, b) => {
//     console.log(a ** b);
// }
// aToPowerb(2, 5);

// Implicit return : It maens that function will return automatically

const sum = (a, b) => {
    console.log(a + b);
}
sum(4, 8);