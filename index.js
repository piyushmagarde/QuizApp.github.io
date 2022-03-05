var quizData = [
    {
        question: "1.  Javascript is an _______ language?",
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Procedural",
        d: "None of the above",
        correct: "a"
    },
    {
        question: "2.   Which keyword is used to declare a variable in javaScript? ",
        a: "var",
        b: "let",
        c: "const",
        d: "All of the above",
        correct: "d"
    },
    {
        question: "3.   Which of the following method is used to acess the elements using javaScript? ",
        a: "getElementById()",
        b: "getELementsByClassName()",
        c: "Both A and B",
        d: "None of the above",
        correct: "c"
    },
    {
        question: "4.   Which of the following method is used to display data in javascript? ",
        a: "console.log()",
        b: "document.write()",
        c: "window.alert()",
        d: "All of the above",
        correct: "d"
    },
    {
        question: "5.   How can a datatype be declared to be constant? ",
        a: "let",
        b: "cons",
        c: "constant",
        d: "const",
        correct: "d"
    }
];

var question = document.querySelector('#question');
var a = document.querySelector('#a-text')
var b = document.querySelector('#b-text')
var c = document.querySelector('#c-text')
var d = document.querySelector('#d-text')
var quiz = document.getElementById('quiz');
var answeEls = document.querySelectorAll('.answer')

var submit = document.querySelector('.btn');

let currentQuiz = 0;
let score = 0;

function getSelected(){
    let answer = undefined;
     answeEls.forEach((answerEl)=>{
         if(answerEl.checked){
             answer = answerEl.id;
         }
     })
     return answer;
}


function deselectAnswers(){
    answeEls.forEach((answerEl)=>{
        answerEl.checked = false;
    })
}

function loadQuiz() {
    deselectAnswers();

    const quiz = quizData[currentQuiz]
    question.innerText = quiz.question;
    a.innerText = quiz.a;
    b.innerText = quiz.b;
    c.innerText = quiz.c;
    d.innerText = quiz.d;
}
loadQuiz();

submit.addEventListener('click', function () {
    const answer = getSelected();
    
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++
        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = ` <h2> Your Score is ${score}/ ${quizData.length}</h2>
            <button onclick="location.reload()">Reset</button>
            `
        }
    }
    
})
