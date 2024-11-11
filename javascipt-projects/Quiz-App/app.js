//for questions we will create constant array objcet which will contain question and options and correct answers.

const questions = [
    {
        'que': 'Which one is logical programming language',
        'a': 'HTML',
        'b': 'Css',
        'c': 'Javascript',
        'd': 'None of them',
        'correct': 'c'
    },
    {
        'que': 'Which one is a markup language?',
        'a': 'HTML',
        'b': 'Css',
        'c': 'Javascript',
        'd': 'None of them',
        'correct': 'a'
    },
    {
        'que': 'HTML stands for ...',
        'a': 'Hyper Text Maximum Language',
        'b': 'Higher Text Markup Language',
        'c': 'Hyper Technical Markup Language',
        'd': 'Hyper Text Markup Language',
        'correct': 'd'
    },
    {
        'que': 'Which one is Used for designing?',
        'a': 'HTML',
        'b': 'Css',
        'c': 'Javascript',
        'd': 'None of them',
        'correct': 'b'
    },
    {
        'que': 'Which language is used for creating dynmaic webpages ?',
        'a': 'Javascript',
        'b': 'HTML',
        'c': 'Css',
        'd': 'None of them',
        'correct': 'a'
    },
]

//now we have to acces the question using functions and index
let index = 0;//it decide the first quesiton
let total = questions.length;//check the next question
let right = 0,//if right so the correct will increase
    wrong = 0;
const quesBox = document.getElementById("quesBox");//we select h2 for storing questions in it .
const optionInputs = document.querySelectorAll(".options");
//the purpose of load question functin is that it loads the first question 
const loadQuestion = () => {
    if (index === total) {//if questions ends then we call this function and return it 
        return endQuiz()
    }
    reset()//we have to call reset name fucntion for reseting the options again and again
    const data = questions[index];   //now we will create another constant for getting data  of question for quiz 
    console.log(data);
    quesBox.innerText = `${index + 1} : ${data.que}`;//here we will store the question in h2
    //now we have to add question number so use template literal in innertext

    //now by using navigation we will get options 
    optionInputs[0].nextElementSibling.innerText = data.a;//we take optionsInput we index o then we use next element sibling for next option then we store the options in it by using data.a 
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

}
//for checking answers
//in this we get checked value and we can checked just 1 at a time
const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()

    // -----------------
    
    if (!ans) {
        if (optionContainer) {
            document.getElementById("optionContainer").style.color = "red";
        }
        alert("Please selct any option")
        return;
}

    // =================

    if (ans === data.correct) {
        right++
    } else {
        wrong++
    }
    index++;//move to next question 
    loadQuestion()//we have to call it for again the same metod 
    return;
}
// here this function will chech the answers that correct or not it correct so return the value 
const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;

}


const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
    document.getElementById("optionContainer").style.color = "black";//after selecting the options color will turn into black
}

//and we then get the score and end the quiz here     
const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <h2>Thank you for playing the quiz</h2>,
    <h2>${right} out of ${total}</h2>
    `
}
//initials call
loadQuestion();