// First step is that we have to create a data means set for lower,upper,number and symbol charaters.

const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";


// Now the next is to get the selectors
const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")


// The next step is that we will get some random data so we will create a funciton and pass a dataSet argument and return the math method by dataset

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];// so here we will pass the above sets to the function to collect random datat
}

// now here we will create  a function for random password generator

const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(upperSet)
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet)
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet)
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet)
    }
    if (password.length < totalChar.value) {
        return generatePassword(password)
    }
    passBox.innerText=password;
}

document.getElementById("btn").addEventListener(
    "click",
    function () {
        generatePassword();

    }
)