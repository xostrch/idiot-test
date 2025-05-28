const questions = [
    {
        question: "What color is the sun?",
        answer: ["Blue","Yellow","Green","Red"],
        correct: 1,
        number: 1,
    },
    {
        question:"How many legs does a spider have?",
        answer:["Six","Ten","Eight","Four"],
        correct: 2,
        number: 2
    },
    {
        question:"Which of these is a fruit?",
        answer: ["carrot","potato","broccoli","banana"],
        correct: 3,
        number: 3
    },
    {
        question:"Are you an idiot?",
        answer: ["Yes","No","Maybe","IDK"],
        correct: 0,
        number: 4
    }
];



let currentQuestionIndex = 0;
const body = document.getElementById('body');
let answered = false;
let lastAnswer = false;


function nextQuestion() {
    answered = false;
    currentQuestionIndex++; 

    let resultIdiot = `
    <div class="end-box">
        <div class="end-title">The End</div>
        <div class="end-result">Congratulatios! You are an idiot :(</div>
    </div>
    `;

    let resultNotIdiot = `
    <div class="end-box">
        <div class="end-title">The End</div>
        <div class="end-result">Congratulatios! You are not an idiot :)</div>
    </div>
    `;

    if(currentQuestionIndex>=questions.length)
    {
        if(lastAnswer===true)
        {
            body.innerHTML=resultIdiot
        }else if(lastAnswer===false)
        {
            body.innerHTML=resultNotIdiot;
        }
    }else
    {
        showQuiz()
    }
}


function showQuiz(){
    const currentQuestion = questions[currentQuestionIndex];
    
    let quizBox = `
        <div class="quiz-box">
        <div class="quiz-title">The Idiot Test</div>
        <div class="quiz-question">`+currentQuestion.question+`</div>
        <div class="quiz-all-answers">
            <div class="quiz-answer" onclick="checkAnswer(0)">`+currentQuestion.answer[0]+`</div>
            <div class="quiz-answer" onclick="checkAnswer(1)">`+currentQuestion.answer[1]+`</div>
            <div class="quiz-answer" onclick="checkAnswer(2)">`+currentQuestion.answer[2]+`</div>
            <div class="quiz-answer" onclick="checkAnswer(3)">`+currentQuestion.answer[3]+`</div>
            <div class="quiz-box-button">
                <button class="quiz-button" onclick="nextQuestion()">NEXT</button>
            </div>
            <div class="quiz-number">`+currentQuestion.number+` of 4 questions</div>
        </div>
    </div>
    `;
    body.innerHTML=quizBox;
}
    
function checkAnswer(selectedIndex){
    if (answered) return;
    answered = true;

    let quizAnswers = document.getElementsByClassName('quiz-answer');
    const currentQuestion = questions[currentQuestionIndex];
    
    for (let i = 0; i < quizAnswers.length; i++) {
        quizAnswers[i].style.pointerEvents = "none";
    }

    for (let i = 0; i < quizAnswers.length; i++) {
        if(selectedIndex===currentQuestion.correct)
        {   
            quizAnswers[currentQuestion.correct].style.backgroundColor = "rgba(136, 255, 136, 0.534)";
            quizAnswers[currentQuestion.correct].style.border = "1px solid rgb(136, 255, 136)";
            if (currentQuestionIndex === 3) {
                lastAnswer = true;
                }  
        }
        else
        {
            quizAnswers[currentQuestion.correct].style.backgroundColor = "rgba(136, 255, 136, 0.534)";
            quizAnswers[currentQuestion.correct].style.border = "1px solid rgb(136, 255, 136)";          

            quizAnswers[selectedIndex].style.backgroundColor = "rgba(255, 136, 136, 0.53)";
            quizAnswers[selectedIndex].style.border = "1px solid rgb(255, 136, 136)"; 
            if (currentQuestionIndex === 3) {
                lastAnswer = false;
                }
        }
    }
}



