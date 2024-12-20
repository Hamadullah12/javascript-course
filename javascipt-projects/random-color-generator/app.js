// const getColor = () => {
//     // for hex code
//     const randomColor = Math.floor(Math.random() * 16777215);//the value that we use we get from google to make it to the hex code
//     const randomCode = "#" + randomColor.toString(16);//concat the # with randomColor which will convert it to the string and 16 is the hexa unit
//     console.log(randomCode)
//     document.body.style.backgroundColor = randomCode;
//     h2.innerText = randomCode;

// }
// let h2 = document.querySelector("h2")
// let btn = document.querySelector("button")

// // event
// btn.addEventListener("click", getColor)

// getColor()


// =================================Practice by myself============================================

let btn = document.querySelector("button");
let h2 = document.querySelector("h2")


const generateRandomColor = () => {
    const randomCode = Math.floor(Math.random() * 16777215)
    const randomColor = "#" + randomCode.toString(16);
    console.log(randomColor)
    h2.innerText = randomColor;
    document.body.style.backgroundColor = randomColor;
}


btn.addEventListener("click", generateRandomColor)

generateRandomColor()