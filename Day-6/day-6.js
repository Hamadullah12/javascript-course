// FUNCTIONS : It is defined as the block of code that perform specific tasks.

// function newDay() {
//     console.log("Hello Hamad start your new day with functions")
//     console.log("Start of functions today");
// }

// function print1To5() {
//     for(let i = 1; i<=5; i++) {
//         console.log(i,);
//     }
// }

// function condiIf() {
//     let age = 17;
//     if(age >= 18) {
//         console.log("You can vote");
//     }else{
//         console.log("You can't vote");
//     }
// }
// newDay();
// print1To5();
// condiIf();


// PRACTICE QUESTIONS : create a function which give us random numbers from 1 to 6. for roll dice.

// function rollDice() {
//     let dice = Math.floor(Math.random() * 6) + 1;
//     console.log(dice)
// }

// rollDice();

// FUNCTIONS WITH ARGUMENTS:  It means that we pass any value in functions so the value we pass in fucntions is known as parameters or argumnets.

// function studentName(names) {
//     console.log(names);
// }

// studentName("Haris");
// studentName("ahmed");
// studentName("aizaz");
// studentName("anwer ali");
// Testing on two parameters
// function studentName(name, age) {
//     console.log(`${name} age is ${age}`);
// }

// studentName("Hamad Ullah", 19);


// MATHEMATICAL OPERATIONS USING FUNCTIONS

// function operations(x, y) {
//     console.log(x+y);
//     console.log(x-y);
//     console.log(x*y);
//     console.log(x/y);
//     console.log(x%y);
// }

// operations(70, 5);
// operations(75, 25);
// operations(98, 36);

// FIND THE AVERAGE NUMBER BY USING FUNCTIONS
// as we know that first we have to add all and then divide it by total number

// function averageNumber(x, y, z) {
//     console.log((x+y+z)/3);
// }

// averageNumber(4, 8, 12);

// SECOND MEHTOD

// function averageNumber(x, y, z) {
// let avg = (x+y+z)/3;
//     console.log(avg);
// }

// averageNumber(4, 8, 12);


// CREATE A TABEL USING FUNCTIONS

// function table(num) {
//     for(let i = num; i<= num*10; i+=num) {
//         console.log(i);
//     }
// }

// table(2);
// table(25);
// table(75);

// RETURN FUNCTIONS
// when the return code executes then it will stop there and nothing will run after that.
// function sum(a, b) {
//     console.log("jeo ")
//     console.log("jeo ")
//     return a+b;
//     console.log("jeo ")
//     console.log("jeo ")
// }

// console.log(sum(2, 3));

// pracitce questions : create a program in which it return from 1 to n.
//Create a function that return the concatination of all strings in an array?

function sumData(n) {
    // let sum = 0;
    for(let i=0; i<=n; i++) { 
        // sum+=i;
        console.log(i[n])
    }
    // return sum;
}
console.log(sumData(6));

// SCOPE : It is uased for the accessibility of variable within a specific context . It determine where a variabel have to placed and modified

// TYPES:
// 1: GLOBAL SCOPE  : iT Can be accessed from anywhere in the code.

// let sum = 7;//Global scope

// function myfunct(a, b) {
//     sum = a+b;//functin scope it can be just acces inside the function
//     console.log(sum);
// }
// myfunct(1, 4);
// console.log(sum);


// BLOCK SCOPE : It can be just accessed inside the {} and cant be accessed by outside .

// let age = 28;

// if (age >= 18) {
//     let newStr = "TUm thu buhat bare ho"
//     console.log(newStr);
// }
// console.log(newStr);// it will give us error newStr not defined

// LEXICAL SCOPE: It can be just acceseed in nested functions.
// The other imp concept that we have to keep in mind is that that it starts from outside to inside not from inside to outside.

// function outerFunc() {
//     let a = 7;
//     let b = 6;

//     function innerFunc() {
//         console.log(a+b);
//         console.log(b);
//     }
//     innerFunc();
// }
// outerFunc();

// WHEN WE ACCESS THE VARIABLE FROM INSIDE TO OUTSIDE

function outerFunc() {
    let a = 7;
    let b = 6;

    function innerFunc() {
        console.log(a+b);
        console.log(b);

    }
   return innerFunc;
}
console.log("hi");// THe error will show that c is not defined
outerFunc();


function add(a, b) {
    console.log(a,b)
    return a + b;
}

let sum = add;

function average(a, b, fn) {
    return fn(a, b) / 2;
}

let result = average(10, 20, sum);

console.log(result);
// HOISTIN DO RESEARCH ON THIS BHAIJAN

// WHAT WILL BE THE OUTPUT:

// let greet = "hello";//Global scope

// function outerGreet() {
//     let greet = "salam";//function scope
//     console.log(greet);
//     function innerGreet() {
//         console.log(greet);// lexical scope
//     }
//     innerGreet();
// }
// console.log(greet);
// outerGreet();

// FUNCTIONS EXPRESSION : these fumctions are stored in a variabel and have no name so we can call it by their variabel name

// let checVarFunc = function (x, y) {
//     return x + y;
// }
// console.log(checVarFunc(8, 7));
// HIGHER ORDER FUNCTION : it takes one or more functions as an arguments.
//multisalam is higher order function cause in this we pass functions as arguments.
// function multiSalam(func, n) {// the func that is used is a varialbe for calling a function and store salam function and it will run untio i = n.
//     for (let i = 1; i <= n; i++){
//         func();
//     }
// }

// let salam = function () {
//     console.log("Assalamu Alaikum");
// }

// multiSalam(salam, 15);

// RETURN A FUNCTION :
// WHAT IS FACTORY FUNCTION : It is that type of function which give us new function .

// function oddOrEvenFactory(request) {
//     if (request == "odd") {
//         return function (n) {
//             console.log(!(n % 2 == 0));
//         }
//     } else if (request == "even") {
//      return function (n) {
//             console.log(n % 2 == 0);
//         }
//     } else {
//         console.log("wrong request");
//     }
// }
// let request = "odd";//or even
// let checkRequest = oddOrEvenFactory(request);//as we know that we use return so we cannot directlly call it first we have to store it in a varible.
// checkRequest(75);

// Function method: when a  function is defined in an object then it is calked method< actions that can be performed on an object
// const calculator = {
//     add(a, b) {
//         return a + b;
//     },
//     sub(a, b) {
//         return a - b
//     },
//     mult(a, b) {
//         return a * b;
//     },
//     divide(a, b) {
//         return a / b
//     },
// }

// console.log(calculator.add(5, 7));
// console.log(calculator.sub(5, 7));
// console.log(calculator.mult(5, 7));
// console.log(calculator.divide(5, 7));


