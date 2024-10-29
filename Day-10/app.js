// let btns = document.querySelectorAll("button");

// for (btn of btns) {
    // btn.onclick = sayHi;//Onclick events when we click a button
    // btn.onmouseenter = function () {//onmousevents when we hover it will prent the outpit
    //     console.log("you hoverd the button")
    // }

    // btn.addEventListener('click', sayHi);
//     btn.addEventListener('dblclick', sayHi);// so addevent listener wait for event and we pass event and call back functions as an arguments
// };

// function sayHi(){
// alert("heloo buddies")
// }

// function sayHelllo(){
// alert("heloo buddies i am addEventListener")
// }


// --------------------------------------------------------

// Activity : we will create a heading which will display color rgb and creteing random rgb colors in div

// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//     let h3 = document.querySelector("h3")
//     let randomColor = generateRandomColor()
//     h3.innerText = randomColor
//     let div = document.querySelector("div")
//     div.style.backgroundColor = randomColor;

//     console.log("color updated")
// })


// function generateRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb( ${red}, ${green}, ${blue})`;
//     return color;
// }

// pracitve on the above activitu
// let btn = document.querySelector("button")

// btn.addEventListener("click", function () {
//     let h3 = document.querySelector("h3")
//     let random = generateColor();
//     h3.innerText = random;
//     let div = document.querySelector("div");
//     div.style.backgroundColor = random;

//     console.log("color updated");
// })

// function generateColor() {
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);

//     let color = `rgb(${red},${green},${blue})`
//     return color;
// }

// for this

// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1")
// let h3 = document.querySelector("h3")
// let p = document.querySelector("p")

// btn.addEventListener("click", function () {
//     console.dir(this.innerHTML = "kick me off !");//dir also check for properties
//     this.style.backgroundColor = "red"
// })

// function changeColor() {
//     console.dir(this.innerText);
//     this.style.backgroundColor="yellow"
// }

// btn.addEventListener("click", changeColor)
// h1.addEventListener("click", changeColor)
// h3.addEventListener("click", changeColor)
// p.addEventListener("click", changeColor)


// ==============================Keyboard Events=================================================

// let input = document.querySelector("input");

// input.addEventListener("keypress", function (event) {
//     console.log("key =",event.key);
//     console.log("code =", event.code);
//     console.log("key was pressed")
// })

// ============game ====================

// input.addEventListener("keydown", function (event) {
//     console.log("code =", event.code)
//     if (event.code == "ArrowUp") {
//         console.log("Character move forward")
//     } else if (event.code == "ArrowRight") {
//         console.log("Character Move right")
//     }else if (event.code == "ArrowDown") {
//         console.log("Character Move Down")
//     }else if (event.code == "ArrowLeft") {
//         console.log("Character Move Left")
//     }
// })

// let form = document.querySelector("form")

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     alert("form wubmitted")
// })

// Extracting data from form after submission '

// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//     event.preventDefault();
    
//     let user = document.querySelector("#username");
//     let pass = document.querySelector("#pass");

//     console.log(user.value)
//     console.log(pass.value)

//     alert(`Hi Welcome ${user.value}, Your password is set to ${pass.value}`)
// })

// More Frequent and easy way for collecting form data
// In this we will not use query selector for user and password

// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//     event.preventDefault();
    // console.dir(form);

//     let user = this.elements[0];//this means form elements and we can acces it through index
//     let pass = this.elements[1];

//     console.log(user.value)
//     console.log(pass.value)
    
//     alert(`Hi welcome ${user.value}, your password is set to ${pass.value} `)
// })

// Change Event and input event
// these events can be worked when changes occur in input , textarea, and select elements

// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//     event.preventDefault();
// });

// let text = document.querySelector("#text")
// text.addEventListener("change", function () {
//     console.log(text.value);
// });
// text.addEventListener("input", function () {
//     console.log(text.value);
// });

// create a typing in which we type something in the input and pritn above word by word of input in pragrph

// let form = document.querySelector("form")
// form.addEventListener("submit", function (event) {
//     event.preventDefault();
// })

// let type = document.querySelector("#text")
// let p = document.querySelector("p")

// type.addEventListener("input", function () {
//     console.log(type.value);
//     p.innerText = type.value;
// })