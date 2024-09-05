// STRING METHOD: methods that can be performed on an object

// let nam = "ali";
// console.log(nam);

// so in the above example .log is the method so there are different methods that we use for different purposes.SOme are discussed below.

// 1:STRING.TRIM METHOD: It is used to cut all white space means extra spaces from string.

// let carName = "      toyota        ";
// carName.trim();

// In js strings are immuntable means that after using trim  method the new string will be created and old one remain same .

//IF WE WANT TO REMOVE EXTRA SPACES FROM START AND END IN PROMPT SO 

// let password = prompt("Enter you password");
// let extraSpace = password.trim();
// console.log(extraSpace);

// 2: str.toUpperCase() > "HAMAD"
// let carName = "toyota";  
// console.log(carName.toUpperCase());

// 3:str.toLowerCase()  > "hamad"

// let bikeName = "HONDA";
// console.log(bikeName.toLowerCase());

// STRING METHOD WITH ARGUMENTS: It is defined as to pass value to the method ."for finding the postion or letter in the string."

// 1: INDEX OF METHOD : It is used to give us the first index of occurance value or give -1 if value not found.

// let houseName = "Happy House";
// console.log(houseName.indexOf("o"));

// METHOD CHAINING:

// let message = "                i love javascript        ";
// console.log(message.trim().toUpperCase());

// 2:SLICE METHOD : It is used to return the cut part of original string as a new string .(for cutting we use slice.)

// let message = "i Love JavaScript";
// console.log(message.slice(2, 6));
// console.log(message.slice(-4));

// 3: REPLACE METHOD: It is used to replace the value and then return us the new string with the new value.

// let message = "I love coding";
// console.log(message.replace("love" , "like"));

// 4:REPEAT: To repeat a string we use repeat method.

// let message = "repeat the value";
// console.log(message.repeat(5));

// PRACTICE QUESTIONS:

// Q:1  TRIM AND CONVERT OT UPPER CASE

// let msg = "        help!";
// console.log(msg.trim().toUpperCase());

// Q:2 slice , index of , replace ,repeat

// let nam = "My name is Hamad";
// console.log(nam.slice(3, 8));
// console.log(nam.indexOf('is'));
// console.log(nam.repeat(4));
// console.log(nam.replace('Hamad', 'Hamad Ullah'));

// ARRAYS: the linear combination of things.

// let students = ["ali", "jawad", "ahmed", "hamad"];
// console.log(students);

// ARRAY Are MUTABLE : It means that when we make changes in array so it will not give us the new array like strings
// It will make changes in the array and give us the array in which we make changes.

// example#1
// let fruits = ['banana', 'apple', 'mango'];
// console.log(fruits[0] = 'mango');
// console.log(fruits);

// example # 2

// let cars = ['toyota', 'honda', 'mehran'];
// console.log(cars[1] = 'toyota');
// console.log(cars);

// example # 3 this is the  most imp example

// let fruits = ['banana', 'apple', 'mango'];
// console.log(fruits[9] = 'grapes');
// console.log(fruits);

// ARRAY METHODS : Following are the methods of arrays .
// 1:push, 2:pop, 3:unshift, 4:shift.
// SO NOW LETS DISCUSS ONE BY ONE.

// 1: PUSH : The push method is used to add things in array at the end of array .

// let cars = ['bmw', 'mercedes', 'fortuner', 'ferrari'];
// console.log(cars.push('toyota', 'lamborghini'));
// console.log(cars);

// 2:POP:It is used to delete anything at the end of the array and then print it .

// let fruits = ['apple', 'banana', 'mango', 'pineapple']
// console.log(fruits.pop());

// 3: UNSHIFT: it is used to add anything at the start of the array.

// let fruits = ['apple', 'banana', 'mango', 'pineapple']
// console.log(fruits.unshift('grapes'));
// console.log(fruits);

// 4: SHIFT : It is used to delete anything from the start of the array.

// let fruits = ['apple', 'banana', 'mango', 'pineapple']
// console.log(fruits.shift());


// PRACTICE QUESTION

// START ['january', 'july', 'march', 'august'];
// FINAL ['july', 'june', 'march', 'august'];

// let months = ['january', 'july', 'march', 'august'];

// console.log(months[0] = 'july');
// console.log(months[1] = 'june');
// console.log(months);

// 1:INDEX OF METHOD IN ARRAY:


// let fruits = ['apple', 'grapes', 'banana'];
// console.log(fruits.indexOf('grapes'));


//2: INCLUDES: it will give answer in boolean mean , if value find then true will return if not find then false will return
    
// let fruits = ['apple', 'grapes', 'banana'];
// console.log(fruits.includes('grapes'));


// 3:CONCATINATION "CONCAT" : it is used to merge 2 arrays means add two arrays like strings but the method is different.and 
// the other thing is that the new array will create.

// let bikes = ['united', 'yamaha', 'zxmco'];
// let cars = ['bmw', 'porche', 'honda'];
// console.log(bikes.concat(cars));

// 4: REVERSE METHOD: To reverse the array.

// let bikes = ['united', 'yamaha', 'zxmco'];
// console.log(bikes.reverse());

// 5: SLICE METHOD : This mehtod is used to give us the copy of selected portion.
// let bikes = ['united', 'yamaha', 'zxmco', 'honda', 'scoty', 'crown'];
// console.log(bikes.slice(1, 4));
// console.log(bikes.slice(-4));
// console.log(bikes.slice(3));
// console.log(bikes.slice());

// 6: SPLICE METHOD: This method is used to replace , delete and add new elements in original array.
// days.splice(1 it means index position, 1 it means delete one element, fri it means add this  element in array)
// let days = ['mon', 'tues', 'wed', 'thurs'];
// console.log(days.splice(1, 1));
// console.log(days.splice(4, 0, 'frid', 'saturday'));
// console.log(days);

// 7: SORT METHOD : This method is used arrange the data in ascending or descending form.

// let alphabets = ['v', 'f', 'q', 'k', 'a', 'g'];
// console.log(alphabets.sort());

// for numbers :
// let num = ['5', '8', '1', '4', '45'];
// console.log(num.sort());

// so on numbers the sort method is not effective means it doesnt arrange properly the numbers in form.

// PRACTICE QUESTIONS:
// 1:
// let months = ['january', 'july', 'march', 'august'];
// console.log(months.splice(0, 2, 'july','june'));
// console.log(months);

// 2

// let programmingLanguages = [ "Python", "Java", "C++", "C#", "Ruby", "PHP", "Swift","JavaScript", "Go", "Kotlin", "TypeScript", "Rust", "Dart", "R", "Perl"];
// console.log(programmingLanguages.reverse().indexOf('JavaScript'));

// ARRAY REFERENCE: Its mean that address in memory . as we know that in array rules are different for comparing cuz in array it stores address 
// and every array has different addresses.

// [1] == [1] its false the value are same but the address stores in memory is different. cuz arrays compares addresses.
// let arr = ['a', 'b', 'c'];
// let arrCopy = arr;
// console.log(arr == arrCopy); 
// the answer is true because we store the arr in arrCopy so the addresses will be the same thats why.

// CONSTANT ARRAYS: it is used to make array constant not the elements inside the array , we can make changes in elements but now in array that we cant make new array

// const arr = ['a', 'b', 'c'];
// console.log(arr.push('d'));
// console.log(arr);

// NESTED ARRAYS : It is used for adding more arrays into array means multideimensional .

// let arr = [[1, 2], [3, 4], [5, 6]];
// console.log(arr);
// console.log(arr[0][1]);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// TIC TOE GAME:

// let game = [['x', null,  'o'], [null, 'x', null], ['o', null, 'x']];
// game[0][1] = 'o';
// console.log(game);

// -------------------------------------------------------------------------------------------------------------------------------------------

// ASSIGNMENT:

// 1:     
// let arr = [8, 7, 5, 3];
// let n = 3;

// let ans = arr.slice(0, n);
// console.log(ans);

// 2:
// let arr = [8, 7, 5, 3];
// let n = 3;

// let ans = arr.slice(arr.length-n);
// console.log(ans);

// 3 :

// let str = prompt("Enter any string");

// if(str.length == 0) {
//     console.log("string is emptu");
// }

// 4:

// let smallCase = prompt("write your name");
// let guess = 3;
// if(smallCase[guess] == smallCase[guess].toLowerCase()) {
// console.log("write in capital");
// }else{

// console.log("capita");
// }