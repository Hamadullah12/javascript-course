//Selecting Element by Id and class name
//we can slect the element in html document by using their id and class
// to acces the imagess
// let classImages = document.getElementsByClassName("testImages");
// for (let i = 0; i < classImages.length; i++){
//     console.dir(classImages[i].src);
// };

// To change the image using class name and image source
// let tennisChangeTarget = document.getElementsByClassName("tennisImage");
// for (let i = 0; i < tennisChangeTarget.length; i++){
//     tennisChangeTarget[i].src = "informative-images/3dddddddddddddddddddddd.png";
//     console.log(`image source of ${i} has been changed`);
// }

// QUERY SELECTORS: It is used to select single element not collection and use for anny css selector.

// console.dir(document.querySelector("#Main"));
// now if we have to access nested and collection of html elemnts so we will use
// QUERY SELECTORS ALL : This we use when w need the collection of html elements

// console.dir(document.querySelectorAll("div img"));

// Manipulating styles in DOM
// so we have to use loops for collectionof data
// using for loop
// let lists = document.querySelectorAll(".box a");
// for (let i = 0; i < lists.length; i++) {
//     lists[i].style.color = "green";
// };
// using for of loop
// for (list of lists) {
//     list.style.color = "red";
// }
// -------------------------------------------------------------------------------------------------------------------------------------------------
// DOM SELECTORS :
//document.getElementById("");
//document.getElementByClass("");
// document.getElementByTagName("");
// document.querySelector("");
// document.querySelectorAll("");
// obj.getAttribute("")
// obj.setAttribute("")


// Manipulation properties means changing properties
// style.
// Classlist
// Classlist.add()
// Classlist.remove()
// Classlist.contain()
// Classlist.toggle()

// -------------------------------------------------------------------------------------------------------------------------------------------------
// DOM PARACTICVE QUESTIONS
// CREAQTE A PARGARAPH WITH TEXT COLOR RED

// let para1 = document.createElement('p');
// let body = document.querySelector('body');
// para1.innerText = "hey i'm red paragraph"
// para1.classList.add('red')
// body.append(para1);

// // CREATE AN H3 HEADING WITH BLUE COLOR
// let h3 = document.createElement('h3');
// h3.innerText = "hi i am blue h3"
// h3.classList.add('blue')
// body.append(h3);

// // creat a div with black border and pink background color  with one heading and paragraph

// let div = document.createElement('div');
// let h1 = document.createElement('h1');
// let p = document.createElement('p');

// h1.innerText = "hi i am h1"
// p.innerText = "hi i am paragarph"

// div.append(h1);
// div.append(p);

// div.classList.add('box');
// body.append(div);


// --------------------------------------------------------------------
// Qsl. Create a new input and button element on the page using JavaScript only. Set the

// text of button to "Click me'

// Qs2. Add following attributes to the element :

// Change placeholder value of input to "username"
// Change the id of button to "btn'

// Qs3. Access the btn using the querySelector and button id. Change the button background
// color to blue and text color to white.

// Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined.
// Change its color to purple.

// Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice",
// where Delta is bold.


// ANS


// let button = document.createElement('button');
// let input = document.createElement('input');

// button.innerText = "Click Me !";

// document.querySelector("body").append(input);
// document.querySelector("body").append(button);


// button.setAttribute("id", "btn");
// input.setAttribute("placeholder", "username");

// let btn = document.querySelector("#btn");
// btn.classList.add("btnStyle")


// let h1 = document.createElement("h1");
// let p = document.createElement("p");

// h1.innerHTML = "<ul> Hamad Khan </ul>"
// p.innerHTML = "APna College <b> DOM </b>"

// document.querySelector("body").append(h1);
// document.querySelector("body").append(p);
