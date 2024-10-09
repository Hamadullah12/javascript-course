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

// const sum = (a, b) => a + b;
// console.log(sum(4, 8)); //we dont have to write return keyword to return a fumction this is the smallest way of performing a function.

// // Set time out function : THis is an inbuilt function means alreday defined and the second thing is that it is window define object
// //Syntax for timeout function
// console.log("Hi brothers ");//first it will print

// setTimeout ( () => {//pass arrow funciton as an argument and also time out (arrow funciton, time out); we use arrow as a call back fumctiom
//     console.log("Some value to be print after the given time ");// after 4s value will print
// }, 4000);

// console.log(" welcome to my place");

// console.log("Welcome to Our website ");

// setTimeout(() => {
//     console.log("Hope you will enjoy your flight");
// }, 800);
// console.log("fly safe");

// set interval: same as the setTImeout fucntion but this will stop it will execute again and again .

// console.log("Hi");
// let id1 = setInterval(() => {//take it as in a variable and tehn pass it to the clearInterval.
//     console.log("Hope you will enjoy your flight");
// }, 400);
// console.log("hellpppppppppppppp");

// clearInterval(id1);//for terminating or stopping it we use clearInterval
// This With Arrow Function.

// const studentData = {
//     name: "Hamad Ullah",
//     age: 19,
//     Qualification: "Fsc",
//     getName: function () {
//         console.log(this);//gloval scope
//         return this.name;
//     },
//     getData: () => {
//         console.log(this);//parent scope --> Window .
//         return this.age;
//     },
//     getInfo1: function () {//use setTImeout inbuild fucntion to chech this
//         setTimeout(() => {
//             console.log(this);//so in this case the arrow function will print correctly
//         }, 2000);
//     },
//     getInfo2: function () {
//         setTimeout(function() {
//             console.log(this);//this will print widnow
//         }, 4000);
// },
// };
// // // console.log(studentData.getName());
// // console.log(studentData.getData());
// console.log(studentData.getInfo1());
// console.log(studentData.getInfo2());

// practive problem
// let square = (n) => {
//     return n * n;
// };
// console.log(square(9));

// let id = setInterval(() => {
//     console.log("hello");
// }, 2000);

// setTimeout(() => {
//     clearInterval(id);
//     console.log("bhai bas kar na pora hogaya")
// }, 10000);

// PRACTICE QUESTIONS

// const arrayAverage = (arr) => {
//     let total = 0;
//     for (let number of arr) {
//         total += number;
//     }
//     return total / arr.length;

// };
// let arr = [1, 2, 3, 4];
// console.log(arrayAverage(arr));

// for even
// const isEven = (num) => num % 2 == 0;
// console.log(isEven(4))