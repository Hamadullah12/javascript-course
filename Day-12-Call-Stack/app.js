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

let h1 = document.querySelector("h1");
// h1.style.color = "yellow";//this is the one method now if we have to change more than one

function changeColor(color, delay,nextColorChange) {//we take a function to make it easy and color and delay are arguments and nextColorChange is call back
    setTimeout(() => {
        h1.style.color = color;
        nextColorChange();//function
    }, delay)
}

// now we have to do nesting of call back
//as we pass three arguments color , delay , nextColorChange so the below code is 
//written in this sequence .
changeColor("red", 1000, () => {
    changeColor("green", 1000, () => {
        changeColor("yellow", 1000, () => {
            changeColor("blue", 1000)
        })
    })
})