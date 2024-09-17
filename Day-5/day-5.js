// JS OBJECTS LITERALS: IT is a data structure that is  used to stored keyed collection and complex entities.
// so in the below programs the syntax is clear that the key is "studentName" and value is the "Hamad Ullah", the sequence is not good but
// it give us clear information insted of arrays and strings.

// const studentData = {
//     studentName : "Hamad Ullah",
//     studentAge  : 19,
//     studentMarks: 511,
//     studentRollNum : 16113
// };
// console.log(studentData);

// let grocery = {
//     items : ['pens', 'pencils', 'soap', 'oil'],
//     food  : ['chicken', 'shwarma', 'burger'],
//     bill  : 5470,
//     dicount : 470,
//     totalBill : 5000
// };
// console.log(grocery);

// Create a thread/twitter post  by using objects literals

// let socialPosts = {
//     userName : "@hamad-Ullah07",
//     content : "personal life",
//     likes : 17,
//     reposts: 0,
//     tags : ['@ahmed-ali', '@jawad-ali']
// };
// console.log(socialPosts);

// GET VALUES: To access the particular key in the objects literals


// let socialPost = {
//     userName : "@hamad-Ullah07",
//     content : "personal life",
//     likes : 17,
//     reposts: 0,
//     tags : ['@ahmed-ali', '@jawad-ali']
// };
// console.log(socialPost["userName"]);
// second method

// console.log(socialPost.content);

// ADD UPDATE VALUES IN OBJECTS LITERALS

// const studentData = {
//     name : "Hamad Ullah",
//     class: 12,
//     result : "awaited",
//     city : "Peshawar"
// } ;
// Add new property
// studentData.gender = "Male"
// value update
// studentData.class = "graduated";
// studentData.result = "Pass";
// console.log(studentData);

// OBJECTS OF OBJECTS MEANS NESTED OBJECTS

// let studentsData = {
//     ahmed: {
//         result: "pass",
//         city: "Pindi"
//     },

//     jawad: {
//         result: "pass",
//         city: "Islamaabad"
//     },

//     hamad: {
//         result: "pass",
//         city: "Peshawar"
//     }

// }

// console.log(studentsData);

// ARRAY OF OBJECTS:

// const studentsData = [
//     {
//         name: "ahmed",
//         result: "pass",
//         city: "Pindi"
//     },

//     {
//         name: "jawad",
//         result: "pass",
//         city: "Islamaabad"
//     },

//     {
//         name: "hamad",
//         result: "pass",
//         city: "Peshawar"
//     }

// ];
// studentsData[1].result = "awaited";
// console.log(studentsData);

// MATH OBJECT: IT is used for different mathematical operatioms

// console.log(Math.PI);
// console.log(Math.E);

// MATH OBJECT MEHTODS: 

// 1: Math.abs(absolute : it is used to convert negative value into positive value)

// console.log(Math.abs(-7));

// 2: Math.pow(It is used to find the power of value)

// console.log(Math.pow(7, 2))

// 3: Math.floor (It is used to roundof the value to nearest of small value)

// console.log(Math.floor(7.895697))

// console.log(Math.floor(-7.895697))


// 4:Math.ceil(it is used to round of to largest number means opposite to floor)

// console.log(Math.ceil(7.895697));

// Math.Random : it is used to pickup any number between 0 and 1 but not 1:

// console.log(Math.random())
// console.log(Math.random())
// console.log(Math.random())
// console.log(Math.random())
// console.log(Math.random())
// console.log(Math.random())
// console.log(Math.random())      

// RANDOM INTEGERS : We can generate random numbers or integers from the math method 
// we have to generate random numbers from 0 to 20.
// As we know that 1 never be come in random numbers so we will never get 20 for this we will add 1 with the math so after we add 1 we will
// never get 0.

// let finalQues = Math.floor(Math.random() * 20) + 1;
// console.log(finalQues);
// let finalQue = Math.floor(Math.random() * 20) + 1;
// console.log(finalQue);

// Generate a random num from 1 to 100.

// let oneToHund = Math.floor(Math.random() * 100) + 1 ;
// console.log(oneToHund);

// from 0 to 10

// let zeroToTen = Math.floor(Math.random() * 10) + 1;
// console.log(zeroToTen );
// Create a logic program in which user have to give maximum num and then he have to guess the number.

// const maxGuess = prompt("Please enter any maximum number");

// const random = Math.floor(Math.random() * maxGuess) + 1;

// let userGuess = prompt("Now guess the correct number");

// while(true) {
//     if(userGuess == "quit") {
//         console.log("user quit");
//         break;
//     }

//     if(userGuess == random) {
//         console.log("You are right, correct number is ", random);
//         break;
//     }

//     else if(userGuess < random) {
//         userGuess = prompt("your guess is small , please enter large num");
//     }
//     else if(userGuess > random) {
//         userGuess = prompt("your guess is larger please enter small number");
//     }

//     else{
//         userGuess = prompt("You are wrong . please try again");
//     }
// }
