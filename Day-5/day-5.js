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

const studentData = {
    name : "Hamad Ullah",
    class: 12,
    result : "awaited",
    city : "Peshawar"
} ;
// Add new property
studentData.gender = "Male"
// value update
studentData.class = "graduated";
studentData.result = "Pass";
console.log(studentData);