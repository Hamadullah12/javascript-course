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
