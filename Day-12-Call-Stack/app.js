// Call Stack
//  It is a data structure that store the function call information in a stack and give us the
// struncture of functions calling or execution
// It work on the principal of LIFO means "Last in First Out "
// It means that the function that enters in stack at the end will be first out form the stack


// function hi() {
//     console.log("Hi")
// }

// function demo() {
//     console.log("Hello baby its demo function")
//     hi()
// }
// console.log("Hello Jan ")
// demo()
// console.log("done");

// so this is the call stacking process

// Visulaization of call stack

// function one() {
//     return 1;
// }

// function two() {
//     return one() + one(); //"3" Then one function will call and placed than remove then call and placed
//  }

// function three() {
//     let ans = two() + one() //"2" it will placed the two function in stack
//     console.log(ans)
// }

// three(); // "1" its the first item that will placed in stack

// so  the process will be continute until the stack become empty

// Call Stack Hell : The nesting of call back is known as call back hell
// It is due to the asynchronus nature of js

// let h1 = document.querySelector("h1");
// h1.style.color = "yellow";//this is the one method now if we have to change more than one

// function changeColor(color, delay,nextColorChange) {//we take a function to make it easy and color and delay are arguments and nextColorChange is call back
//     setTimeout(() => {
//         h1.style.color = color;
//         nextColorChange();//function
//     }, delay)
// }

// now we have to do nesting of call back
//as we pass three arguments color , delay , nextColorChange so the below code is
//written in this sequence .
// changeColor("red", 1000, () => {
//     changeColor("green", 1000, () => {
//         changeColor("yellow", 1000, () => {
//             changeColor("blue", 1000)
//         })
//     })
// })

// Promises : The completion or failure of the asynchronus operation and its resulting value .
// Explaination : To store data in database we have to use promises
// If internet speed is faster than the data will be stored otherwise the data will not be stored
// Taking a Simple example of storing data in database Using function by imagination

// function saveToDb(data, success, failure) {//success and failure are call back.
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }
// saveToDb("ham d gamer ",
//     () => {

//         console.log("fast connection data stored");
// // 1st nesting
//         saveToDb("Hi brothers", () => {

//             console.log("Success 2: fast connection")
// // 2nd nestin in 1st nesting
//             saveToDb("Hamad Ullah", () => {

//                 console.log("success 3: Fast Connection");

//                 saveToDb("Imran khan ", () => {
//                     console.log("Succes 4: Fast connection")
//                 }, () => {
//                     console.log("failure 4 :weak connection")
//                 })
//             },
//                 () => {

//                     console.log("failure 3: weak connection");
//                 })
//         },
//             () => {

//                 console.log("Failure 2: weak connection ");

//             })
//     },
//     () => {

//         console.log("The data has not been stored , Weak connection try again");
//     })

// So here we take arguments and call backs in function saveToDb(), so then we take a random internet speed to get
// the data because data depend on speed of internet if speed is faster data will be stored in database,if speed is
// slower data will not stored in database. we take this function as a imaginary datatbase example

// 2: The important thing is that if first data not stored in database so it will not save other data , if first datat
// completely stored in a database then it will stored the next data . fo for this in js we have to do call back hell
// means nesting of call back

// Promises : there are two cases of promises resolve and reject
// Three states pending , fullfiled, rejected
// we have to pass resolve and reject as an arguments and call back

function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("Fast connection:Promise was resolved");
        } else {
            reject("Weak connection:Promise was rejected");
        }
    })
}
// console.log(saveToDb("Hamad"))

// Then() & catch() method of promises this method is used for catching errrors

// we will take the above code of promises and we will undetand the syntax also
// in then and catch they have default function. so this method is more sufficient

// saveToDb("hi")
//     .then(() => {
//         console.log("promise resolved");
//     })
//     .catch(() => {
//         console.log("Promise rejected")
//     })

// Prmises chaining : Its the more improved way to write promises insted of call back hell
// in this method we have to just write one catch means error for all trys
// we have to return a new data in the then() and then try it outside that will not cause an error
// =========================Method 1=================================
// saveToDb("Hi")
//     .then(() => {
//         console.log("Data 1: saved")
//         // now here we will saved the new data
//         saveToDb("hello")
//             .then(() => {
//                 console.log("data 2: saved ")
//                 saveToDb("bye")
//                     .then(() => {
//                         console.log("data 3:saved")
//                 })
//         })
//     })
//     .catch(() => {
//     console.log("Promise rejected")
// })
// ==============Error undefined occurs================
// ================Method 2============================
// THis is teh more efficent and cleanest way to write it 
saveToDb("hi")
    .then(() => {
        console.log("Data 1: saved");
        return saveToDb("hello")
    })

    .then(() => {
        console.log("Data 2: saved")
        return saveToDb("Bye")
    })

    .then(() => {
        console.log("Data 3: saved")
    })

    .catch(() => {
        console.log("Promise was rejected")
    })

    // =======================done this method ==========