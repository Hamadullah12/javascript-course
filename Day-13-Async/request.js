// OUr first request
// using fetch (url)

// let url = "https://catfact.ninja/fact/";
// fetch(url)// as this fetch will return us a promise so we will  use promise methods
//     .then((res) => {
//         console.log(res)//so here we will get the information but all headers are not responding so we have to get the readealbe stream
//         return res.json();
//     }).then((data) => {
//         console.log(data.fact);//so we will get the body portion which is not showing in respone readabel stream
//     })
    
//     .catch((err) => {
//     console.log("Error -,", err)
// })


// let url = "https://catfact.ninja/fact/";
// fetch(url)
//     .then((res) => {
//         console.log(res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log("Data 1: ", data.fact);
//         return fetch(url);
//     }).then((res) => {
//         return res.json();
//     }).then((data2) => {
//         console.log("Data 2:", data2.fact);
//     })
//     .catch((err) => {
//     console.log("Error Caught -", err)
//     })

// so this is our first request
    
// first we fetch url then it give us promise then we use then(res) to get the response and
// then we convert it to the json by res.json(), after that we get our first data by using then()chaning method
// as the same process ocuur above .

// Fetch using async and await

let url = "https://catfact.ninja/fact2/";

async function getFacts() {
    try {
        let res = await fetch(url);
    let data = await res.json();
    console.log(res);
    console.log(data)
    } catch (e) {
        console.log("Error caught:", e);    
}
}
getFacts();