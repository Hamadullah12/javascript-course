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

// so at the process will be continute until the stack become empty

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

// Promises : Later i will define it
// Explaination : TO store data in database we have to use promises
// If internet speed is faster than the data will be stored otherwise the data will not be stored
// Taking a Simple example of storing data in database Using function by imagination

function saveToDb(data, success, failure) {//success and failure are call back. 
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}
saveToDb("ham d gamer ",
    () => {

        console.log("fast connection data stored");
// 1st nesting 
        saveToDb("Hi brothers", () => {

            console.log("Success 2: fast connection")
// 2nd nestin in 1st nesting
            saveToDb("Hamad Ullah", () => {

                console.log("success 3: Fast Connection");

                saveToDb("Imran khan ", () => {
                    console.log("Succes 4: Fast connection")
                }, () => {
                    console.log("failure 4 :weak connection")
                })
            },
                () => {

                    console.log("failure 3: weak connection");
                })
        },
            () => {

                console.log("Failure 2: weak connection ");

            })
    },
    () => {

        console.log("The data has not been stored , Weak connection try again");
    })

// So here we take arguments and call backs in function saveToDb(), so then we take a random internet speed to get
// the data because data depend on speed of internet if speed is fast data will be stored in database,if speed is
// slow data will not stored in database. we take this function as a imaginary datatbase example

// 2: The important thing is that if first data not stored in database so it will not save other data , if first datat
// completely stored in a database then it will stored the next data . fo for this in js we have to do call back hell
// means nesting of call back