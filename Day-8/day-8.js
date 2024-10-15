// ARRAY METHODS : THere are different types of array mehtods
//forEach,
//1Map
//2Filter,
//3Every,
//4Some,
//5Reduce.
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

// 2: MAP FUNCTIONS: IT is same as the foreach function but the difference is that it will return a new,
// array with same number of elements

// let arr = [1, 3, 5];
// let doubleArr = arr.map(function (el) {
//     return el * 4;//we can do all maths operation here
// });
// console.log(doubleArr);

// 3: Filter : TO filter elements in an array, and it will give us new arrray

// let arr = [1, 4, 2, 7, 5, 9, 8, 3, 2];
// let evenAndOddArr = arr.filter((el) => {
//     return el % 2 == 0;//for even
//     return el % 2 !== 0;//for odd
//     return el > 3;
// });
// console.log(evenAndOddArr);

// 4: EVERY FUNCTIONS:IT give ys just trye and false value if one condition is false then it will give false.

// let arr = [1, 4, 6, 8];
// let newArr = arr.every((el) => {
//     return el % 2 == 0;
// });
// console.log(newArr);

// 5: Some : It is same as every function but if one condition is true then it will give us true

// let arr = [1, 3, 2, 5];
// let newArr = arr.some((el) => el % 2 == 0);
// console.log(newArr);

// Reduce Function: It is used to reduce the array into single value , And for adding the all numbers in an array

// let arr = [1, 3, 5, 7, 9,];
// let finalReduce = arr.reduce((result, el) => result + el);//*,/,-,+,%
// console.log(finalReduce);

// How to find the largest value using reduced method

// let arr = [3, 5, 1, 8, 15, 7, 13];
// let maxValue = arr.reduce((max, el) => {
//     if (max < el) {
//         return el;
//     } else {
//         return max;
//     }
// })

// console.log(maxValue);

// // Practice question

// let tenArr = [10, 40, 50, 30, 80, 20];
// let newTenArr = tenArr.every(function (el) {
//     return el % 10 == 0;
// })
// console.log(newTenArr);

// FInd the smallest value in array

// let tenArr = [10, 40, 50, 30, 80, 20];
// let minValue = tenArr.reduce((min, el)=>{
//     if (min < el) {
//         return min;
//     } else {
//         return el;
//     }
// })
// console.log(minValue);

// Default Pararmeters: To give the defalut value to the argument

// let newFunc = function sum(a, b = 7) {//assign value to the argument
//     return a + b;
// };
// console.log(newFunc(3));//newFunc(3,5); so now the value for b is 5 not 7.

// Spread: "..." This is used to expand the itereate into multiple values

// let arr = [1, 3, 2, 5, 4,-6, 6, 7, 8, 6, 5, 4, 2, 3, 2, 3, 2, 1, 8];
// let minMath = Math.min(...arr);//It is used to find the minimun value
// console.log(minMath);


// //To acces the indivudual value we use simp;u spred method.
// let arr = [1, 3, 2, 5, 4, -6, 6, 7, 8, 6, 5, 4, 2, 3, 2, 3, 2, 1, 8];

// function newFunc() {
//     console.log(...arr);
// };
// newFunc();

// Spread with Array literals :

// let arr = [1, 3, 2, 5, 4, -6, 6, 7, 8, 6, 5, 4, 2, 3, 2, 3, 2, 1, 8];
// let newArr = [...arr];
// console.log(newArr);

// let arrStr = [..."Helllllloooooooo"];//it will be set individually in array and string
// console.log(arrStr);

// Spread With Object Literals

// const data = {
//     email: "Pakistan@gmail.com",
//     passward: "abceds",
// };

// const dataCopy = { ...data, location: "Pakistan" };
// console.log(dataCopy);

//combine
// let num1 = [1, 3, 5, 7];
// let num2 = [2, 4, 6, 8];

// let combineNum = [...num1, ...num2];
// console.log(combineNum);

// Arrays converting to string and object

// let arr = [2, 3, 4, 5];
// const newObj = { ...arr };
// console.log(newObj);

// const strCon = { ..."helooooooo" };

// Rest : It is opposite to the  spread it merge all the arguments into array

// function sum(...args) {
//     return args.reduce((sum, el) => sum + el);
// };
// console.log(sum(1, 2, 3, 4, 5));//= to 15

// function min(...args) {
//     return args.reduce((min, el) => {
//         if (min > el) {
//             return el;
//         } else{
//             return min;
//         }
//     })
// };
// console.log(min(2, 4, 1, -6, 5, 54));

// Destructuring : To store values of array into multiple variables

// let teamCompe = ["ali", "jaw", "ahm", "ham", "mun", "adi"];
// let [Winner, SecPosition, trdPosition, ...others] = teamCompe;
// console.log(others);