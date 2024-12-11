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
// We have two tasks
// 1: FIrst we have to create a program in which user search for country and it display the
// names of colleges of that country.
// 2: The second task is that you have to then fixed any country and then the user have to
// search for state in which state he wants to find colleges .
// so first take university api then start the project


// let url = "http://universities.hipolabs.com/search?name="
// //we empty name because we have to add it with url and from input search user will search for that
// let button = document.querySelector("button");
// let lists = document.querySelector("#collLists")

// button.addEventListener("click", async () => {
//     let country = document.querySelector("input").value;
//     console.log(country);

//     let collArr = await getColleges(country);
//     // here we will take call back for returing college name in list
//     showList(collArr);

// })
// function showList(collArr) {
//     // now we are creating lists in ul to show college on webpage
//     let collLists = document.querySelector("#collLists");
//     collLists.innerText=""
//     //now we will take for of loop for each  college name
//     for (col of collArr) {
// // list item created here
//         let li = document.createElement("li");
//         li.innerText = col.name;
//         collLists.append(li);
//     }

// }

// // let country = "India";

// async function getColleges(country) {
//     try {
//         let res = await axios.get(url + country);
//         return res.data;
//     } catch (e) {
//         console.log("Error caught;", e);
//         return [];
//     }
// }



// practice by myself

// let url = "http://universities.hipolabs.com/search?name=";

// let button = document.querySelector("button");
// let lists = document.querySelector("#collLists");

// button.addEventListener("click", async () => {
//     let country = document.querySelector("input").value;
//     console.log(country);
//     let collArr = await getColleges(country);

//     showCollege(collArr);
// })

// function showCollege(collArr) {
   
//     for (col of collArr) {
//         let liOfColl = document.createElement("li");
//         liOfColl.innerText = col.name;
//         lists.append(liOfColl);
//     }
// }

// async function getColleges(country) {
//   try {
//     let res = await axios.get(url  + country);
//     return(res.data);
//   } catch (e) {
//     console.log("Error Caught", e)
//       return [];
//   }
// }
