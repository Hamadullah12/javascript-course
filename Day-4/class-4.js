// LOOPS : is used to iterate (means repeat) piece of code 

// 1: FOR LOOP:
// for is loop keyword, let is the initialzation keyword, and i the ending , and i++ is the incrementation.
// for (let i = 1; i <= 7; i++) {
//     console.log(i);
// }
// backward loops

// for (let i = 5; i >= 1; i--) {
// console.log(i);
// }

// print all odd numbers from 1 to 15
// One thing remember that whenever you need to sub or add greater than 1 so you have to equal the i+2  to i >> i= i+2;
// for (let i = 1; i <= 15; i=i+2) {
//     console.log(i);
// }

// FOR EVEN NUMBERS:

// for (let even = 2; even <= 20; even=even+2){
// console.log(even);
// }
// we can do the same for backward

// PRINT 5 TABLE

// for (let i = 5; i <= 50; i= i + 5) {
//     console.log(i);
// }


// by using prompt we will take the valye from customer for the table
// why we use parseInt : we use parseInt to convert string into integers.

// let n = prompt('write any num for the tabel');
// n = parseInt(n);
// for (let i = n; i <= n*10; i = i+n) {
//     console.log(i);
// }

// NESTED LOOPS:

// for (let i = 1; i<=5; i++) {
//     console.log(`outer loop ${i}`)
//     for (let j = 1; j<=3; j++) {
//         console.log(j);
//     }
// }

// so by dry run we know that first i condtion will check then the all inner conditions will check and this process will happern for FIve 5 time
// because i = 5 so after the value become false then the loop will stop there. so the inner loop will repeat for 5 times.

// WHILE LOOP : The usage of both  loop are same
// let i = 1;
// while(i<=29) {
//     console.log(i)
//     i++;
// }

// FOR BACKWARD.
// let i = 10;
// while(i>=1) {
//     console.log(i)
//     i--;
// }

// We have to write a program for guessing our favt game.

// const favGame = 'COD';
// let userGuess = prompt('Guess our favt game ?');

// while( (userGuess != favGame ) && (userGuess != "quit" )) {
//     console.log("wrong");
//     userGuess = prompt("try again");
// }

// if(userGuess == favGame) {
//     console.log("thum thu bare tezz hu");
// }else{
//     console.log("Thum se na hopayga");
// }


// BREAK:TO eleminate the loop , we mostly used it with while loop.

// const favGame = 'COD';
// let userGuess = prompt('Guess our favt game ?');

// while( (userGuess != favGame )) {
//     if(userGuess == "quit") {
//         console.log("you quit");
//         break;
//     }
//     console.log("wrong");
//     userGuess = prompt("try again");
// }

// if(userGuess == favGame) {
//     console.log("thum thu bare tezz hu");
// }
// LOOPS WITH ARRAYS: 

// let fruits = ['apple', 'bannaa', 'grapes', 'pineapple', 'watermelos', 'guvava'];

// for(let i = 0; i < fruits.length; i++) {
//     console.log(i, fruits[i]);
// }

// If we have to print odd fruits name

// let fruits = ['apple', 'bannaa', 'grapes', 'pineapple', 'watermelos', 'guvava'];

// for(let i = 1; i < fruits.length; i = i+2) {
//     console.log(i, fruits[i]);
// }


// For reverse loop

// let fruits = ['apple', 'bannaa', 'grapes', 'pineapple', 'watermelos', 'guvava'];

// for(let i = fruits.length-1; i > 0; i--) {
//     console.log(i, fruits[i]);
// }

// we will also use - 1 because it will then give us undefined

// NESTED LOOPS WITH NESTED ARRAYS

// TO access nested arrays we will always use nested loops
// here in the program the j is used for the index  of individula super heroes.
// let heros = [
//     ['super man', 'iron man', 'spider man'],
//     ['thor', 'flash', 'batman']
// ];

// for (let i = 0; i<heros.length; i++) {
//     console.log(i, heros[i]);

//     for(let j = 0; j < heros[i].length; j++) {
//         console.log(`j = ${j}, ${heros[i][j]}`);
//     }
// }

// FOR FRUITS THE SAME LOGIC 

// let fruits = [
//     ['apple', 'banana', 'cherry'],
//     ['mango', 'orange', 'pineapple'],
//     ['grapes', 'blueberry', 'strawberry']
// ];

// for(let i = 0; i<fruits.length; i++) {
//     console.log(`Category = ${i}`);

//     for(let j = 0; j<fruits[i].length; j++) {

//         console.log(`fruits = ${j},  ${fruits[i][j]}`);
//     }
// }


// FOR OF LOOP : We use for of loop when we have to acces the collections of items.
// it will not work on chrome browsers
// let fruits = ['apple', 'banana', 'cherry'];

// for (char of fruits) {
//     console.log( char);
// }


// TO DO APP

// let todo = [];
// let userReq = prompt("What is your request? Please enter it.");

// while (true) {
//     if (userReq == 'quit') {
//         console.log("User quit the app.");
//         break;
//     }
//     if (userReq == 'list') {
//         console.log("----------------------");
//         for (let i = 0; i < todo.length; i++) {
//             console.log(i, todo[i]);
//         }

//         console.log("----------------------");

//     } else if (userReq == 'add') {
//         let task = prompt('Please add the value you want to add .');
//         todo.push(task);
//         console.log("task added.")
//     }else if(userReq == 'delete') {
//         let delet = prompt("Please enter the value you want to delete");
//         todo.splice(delet, 1);
//         console.log("task delted");
//     }else{
//         console.log("wrong request");
//     }

//     userReq = prompt("Please Enter your next  request.");
// }

// PROBLEM QUESTIONS: 

// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;

// for (let i = 0; i<arr.length; i++) {
//     if(arr[i] == num) {
//         arr.splice(i, 1);
//     }
// }console.log(arr);
