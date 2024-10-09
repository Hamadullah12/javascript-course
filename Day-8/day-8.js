// ARRAY METHODS : THere are different types of array mehtods
//forEach,Map,
//FOREACH : Its takes call back as input and these are higher order functions ,
//It will run individulay for evey element.
//Syntax for forEach

// let arr = [1, 2, 3, 4, 5];

// function print(el) {
//     console.log(el);
// };

// arr.forEach(print);

// For Arrow Functions
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arrMethod = (el) => {
//     console.log(el);
// };
// arr.forEach(arrMethod);
// The other mehtod for using for each is that we can directly call it in a function.
// arr.forEach(arrMethod = (el) => {
//     console.log(el);
// });

// For OBJECTS:

// let arr = [{
//     name: "Hamad",
//     age: 19
// },
// {
//     name: "AHmed",
//     age :22
// },
// {
//     name: "jawad",
//     age : 22
//     }];

// arr.forEach((data) => {
//     console.log(data.age);
//     })