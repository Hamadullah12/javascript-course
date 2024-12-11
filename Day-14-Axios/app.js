//Axios :Its  a library to make HTTP request
// for axios search axios github then copy the cdn and paste it in the index file
// In Axios we dont have to convert it to the json format like fetch() it give us directly the
// response. SO we dont hace to parse it to json

// syntax

// let url = "https://catfact.ninja/fact/";

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         console.log(res.data.fact);
//     } catch (e) {
//         console.log("Error caught;", e);
//     }
// }
// getFacts()

// NOw we have to create a program in which when we click on the button so the fact should dis
// -play in the paragraph means on webpage .

// let button = document.querySelector("button");
// let p = document.querySelector("#storeFact");

// button.addEventListener("click", async () => {//as we call asyn function in evnet so we have to use asyn and await.
//     let fact = await getFacts();
//     p.innerText = fact;
// })
// let url = "https://catfact.ninja/fact/";

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         return (res.data.fact);
//     } catch (e) {
        
//         console.log("Error caught;", e)
//         return ("No response here");
//     }
// }

// So in this program we get the random facts of cats
//so the procedure will be that when we clikced on the button it will call the getFacts() function
// and it will wait until the function completed then it wiill show us the result in the paragraph

// Now create a program of getting dog images from api

// let button = document.querySelector("button");
// let img = document.querySelector("#result");

// button.addEventListener("click", async () => {
//     let imageRes = await getImages();
//     img.setAttribute("src", imageRes);//we use set attributes when we have source or links
//     console.log(imageRes);
// })

// let url2 = "https://dog.ceo/api/breeds/image/random";
// async function getImages() {
//     try {
//         let res = await axios.get(url2)
//      return res.data.message;
//     } catch (e) {
//         console.log("Error caught;", e);
//         return "Image not found";
//     }
// }

// so by this way we get multiple dog images.

// Api headers

// let url = "https://icanhazdadjoke.com/"//so by preventing it from html format

// async function getJokes() {
//     try {
//         const header = {
//             headers: {
//                 Accept: "application/json"
//             }
//         };
//         let res = await axios.get(url, header);
//         console.log(res.data)
//     } catch (e) {
//         console.log("Error caught;",e)
//     }
// }
// ===========================================================================
// Updating Query string in Axios :

