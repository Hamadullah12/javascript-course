// Async Function : IT is the more sufficent way to write
// By default async function will return a promise
// We used "throw" for thrwoing error


// 1: Async keyword

// async function greet() {
//     throw "weak connection page not found"//for thrwoing error
//     return "Hi How are you my freinds ";//It will automatically return the promise.
// }

// greet()
//     .then((result) => {
//         console.log("Promise was resolved");
//         console.log("THe result is ", result);
//     }).catch((err) => {
//         console.log("Error Page not found weak connection", err);
//     })

// // With arrow function
    
// let test = async () => {
//     return 5;
// }

// So these are some examples of async keyword or function


// Await Keyword:  It pasuss the execution of async function in the surronding until the
// PRomise is rejected or resolved.
// It can be just used in await keyword
// await means to wait

// function hi() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let random = Math.floor(Math.random() * 10) + 1;
//             console.log(random);
//             resolve();
//         }, 1000);
//     })
// }
// now without using await it willl print all values at once so we will use await
// async function test() {
//     await hi();
//     await hi();
//     await hi();
//     await hi();
//     await hi();
//     await hi();
//     await hi();
// }
// test();
//so due to the await keyword the async funciton will wait for 1 sec for next value
// ===========Color change Example===================

// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 5) + 1;
//             if (num > 2) {
//                 reject("Promise rejected");
//             }
//             h1.style.color = color;
//             console.log(`Color changed to ${color}`)
//             resolve("Color changed")
//         }, delay);
//     })
// };
// //handling rejection with await.
// async function delayColor() {
//     try {
//         await changeColor("red", 1000);
//         await changeColor("green", 1000);
//         await changeColor("blue", 1000);
//         await changeColor("white", 1000);
//         await changeColor("purple", 1000);
//         await changeColor("grey", 1000);
//         await changeColor("silver", 1000);
//         await changeColor("brown", 1000);
//         await changeColor("dark brown", 1000);

//     } catch(err) {
//         console.log("Error caught");
//         console.log(err);
//     }
//     let a = 5;
//     console.log(a);
// }

// delayColor();