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

// let favGame = 'COD';
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

