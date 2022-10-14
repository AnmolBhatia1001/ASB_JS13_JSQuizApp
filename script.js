const quizData = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        a: "while()",
        b: "loop()",
        c: "forEach()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        a: "changeOrder(order)",
        b: "reverse()",
        c: "sort(order)",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        a: "named function",
        b: "anonymous function",
        c: "Both the above",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const question_text = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");;
const c_text = document.getElementById("c_text");;
const d_text = document.getElementById("d_text");;
const submitBtn = document.getElementById("submit");

let currentQuiz = 0
let score = 0

let correctAnswer = quizData[currentQuiz].correct;
let userAnswer ; 

function loadQuiz() {
    question_text.innerText = quizData[currentQuiz].question
    a_text.innerText = quizData[currentQuiz].a
    b_text.innerText = quizData[currentQuiz].b
    c_text.innerText = quizData[currentQuiz].c
    d_text.innerText = quizData[currentQuiz].d
}
loadQuiz()

function selectDeselect(){
    for(let i =0; i<answerEls.length; i++){
        answerEls[i].addEventListener("click",()=>{
            if(answerEls[i].getAttribute("state") === "true"){
                answerEls[i].checked = false
                answerEls[i].setAttribute("state","false")
                userAnswer = "" 
                // console.log(userAnswer);
                // console.log(answerEls[i].getAttribute("state"));
            }else{
                for(let j =0; j<answerEls.length; j++){
                    answerEls[j].checked = false;
                    answerEls[j].setAttribute("state", "false")
                }
                answerEls[i].checked = true
                answerEls[i].setAttribute("state","true")
                userAnswer = answerEls[i].getAttribute("id") 
                // console.log(userAnswer);
                // console.log(answerEls[i].getAttribute("state"));
            }
        })
    }
}
selectDeselect()

submitBtn.addEventListener("click",()=>{
    
        if(userAnswer === quizData[currentQuiz].correct){
            console.log("Correct");
            score++
            if(currentQuiz === (quizData.length -1 )){
                alert(`Your Score is : ${score}`)
            }else{
                currentQuiz++
                loadQuiz()
            }
            
        }else{
            console.log("Wrong");
            if(currentQuiz === (quizData.length -1 )){
                alert(`Your Score is : ${score}`)
            }else{
                currentQuiz++
                loadQuiz()
            }
            
        }
        for(let j =0; j<answerEls.length; j++){
            answerEls[j].checked = false;
            answerEls[j].setAttribute("state", "false")
        }

    
    
})