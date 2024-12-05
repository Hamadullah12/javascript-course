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


// Await Keyword:  It pauses the execution of async function in the surronding until the
// Promise is rejected or resolved.
// It can be just used in async function.
// await means to wait.

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

// So here we use try() and catch() for getting error in clean way

// API : Application programming interface
// When user send request to the api server (link or url ) the  api will search for the
// data that user demands and then in a respone it will send the data to the user.

// JSON: Javascript object notation
// it will return data in string format .
// IT is similar to js object but big differnce betwen them
// It contain data in key value pair

// How to access data from JSON

// We  can access data from json by converting it to js object by using
// JSON.parse(data) method .
// THIs method is used to convert JSON DATA  into object.

// FOr example

// let jsonRes = `{"fact":"If your cat snores, or rolls over on his back to expose his belly, it means he trusts you.","length":90}`
// console.log(jsonRes)if we want to acces fact key so we cant acces in this format because
// it is string in json so first we have to convert it into the object

// let jsonObj = JSON.parse('{"fact":"If your cat snores, or rolls over on his back to expose his belly, it means he trusts you.","length":90}')
// console.log(jsonObj.fact)//lenght now it will act as a obj . so this is the differnce

// now if we have to convert the object into json format so we have to  use JSON.stringify

// let obj = {
//     name: "Hamad",
//     age: 19
// }

// let jsonCon = JSON.stringify(obj);
// console.log(jsonCon)

// so we easily convet this into json by using JSON.stringify.
