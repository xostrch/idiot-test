const questions = [
    {
        question: "What color is the sun?",
        answer: ["Blue","Yellow","Green","Red"],
        correct: 1
    },
    {
        question:"How many legs does a spider have?",
        answer:["Six","Ten","Eight","Four"],
        correct: 2
    },
    {
        question:"Which of these is a fruit?",
        answer: ["carrot","potato","broccoli","banana"],
        correct: 3
    },
    {
        question:"Are you an idiot?",
        answer: ["Yes","No","Maybe","IDK"],
        correct: 0
    }
];




function showQuiz(){
    let welcomeBox = document.getElementById('welcome-box'); 
    let body = document.getElementById('body');
    let quizBox = `
        <div class="quiz-box">
        <div class="quiz-title">The Idiot Test</div>
        <div class="quiz-question">jakies tam pytanie co sadzimy? xdjakies tam pytanie co sadzimy? xdjakies tam pytanie co sadzimy? xd</div>
        <div class="quiz-all-answers">
            <div class="quiz-answer">tak</div>
            <div class="quiz-answer">nie</div>
            <div class="quiz-answer">w sumie to nie wiem</div>
            <div class="quiz-answer">mozliwe</div>
            <div class="quiz-box-button">
                <button class="quiz-button">NEXT</button>
            </div>
            <div class="quiz-number">1 of 4 questions</div>
        </div>
    </div>
    `;
    welcomeBox.style.display="none";
    body.innerHTML=quizBox;
}

