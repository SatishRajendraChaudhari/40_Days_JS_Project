const questions = [
    {
        question: "which is largest animal in the world ?",
        answers: [
            { text: "shark", correct:false},
            { text: "Blue-Whale", correct:true},
            { text: "Elephant", correct:false},
            { text: "Giraffe", correct:false}
        ]
    },
    {
        question: "What is the Capital of USA ?",
        answers: [
            { text: "washingtone dc", correct:true},
            { text: "florida", correct:false},
            { text: "New York", correct:false},
            { text: "California", correct:false}
        ]
    },
    {
        question: "How Many Bones in Human Body ?",
        answers: [
            { text: "109", correct:false},
            { text: "234", correct:false},
            { text: "322", correct:false},
            { text: "206", correct:true}
        ]
    },
    {
        question: "which is largest river in the world ?",
        answers: [
            { text: "Yellow river", correct:false},
            { text: "Nile", correct:true},
            { text: "Congo river", correct:false},
            { text: "Amazone river", correct:false}
        ]
    },
    {
        question: "What is the pH value of the human body ?",
        answers: [
            { text: "9.2 to 9.8", correct:false},
            { text: "6.1 to 6.3", correct:false},
            { text: "7.0 to 7.8", correct:true},
            { text: "5.4 to 5.6", correct:false}
        ]
    },
    {
        question: "Pustaz grasslands are situated at ?",
        answers: [
            { text: "South Africa", correct:false},
            { text: "China", correct:false},
            { text: "USA", correct:false},
            { text: "Hungary", correct:true}
        ]
    },
    {
        question: "Which of the given devices is used for counting blood cells ?",
        answers: [
            { text: "Hmelethometer", correct:false},
            { text: "Hemocytometer", correct:true},
            { text: "Spyscometer", correct:false},
            { text: "Hamosytometer", correct:false}
        ]
    },
    {
        question: "The term 'barani' refers to in the context of agriculture ?",
        answers: [
            { text: "Mixed farming", correct:false},
            { text: "Rainfed farming", correct:true},
            { text: "Dryland farming", correct:false},
            { text: "None of these", correct:false}
        ]
    },
    {
        question: " Which of the given compounds is used to make fireproof clothing ?",
        answers: [
            { text: "Aluminum chloride", correct:false},
            { text: "Magnesium Chloride", correct:false},
            { text: "Aluminum Sulphate", correct:true},
            { text: "Magnesium Sulphate", correct:false}
        ]
    },
    {
        question: "Digestion of food in human beings begins in which part of the alimentary canal ?",
        answers: [
            { text: "Mouth", correct:true},
            { text: "Liver", correct:false},
            { text: "Kidney", correct:false},
            { text: "Large intestine", correct:false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons  = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz (){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions [currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer)
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML = "play Again ✌";
    nextButton.style.display = "block";
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})


startQuiz();