var startButton = document.getElementById('startButton');
var questionContainer = document.getElementById('games-screen');
var questionElement = document.getElementById('question');
var solutionElement = document.getElementById('solution');
var timeElement = document.getElementById('time');
var gameOverElement = document.getElementById('game-gover');
var finalScoreElement = document.getElementById('final-score');

var currentQuestionIndex = 0;
var time = 0;
var timerId;

//We'll need to add more questions in this section. Note to self: Look up questions \\
var questions = {

    question: ["What are strings?"]
    solution: ["Text" , "Storing Text" , "A Piece of Fabric" , "None of the above" , "Used for storing and manipulating text"]
    answer = ["Used for storing and manipulating text"]
}

function startQuiz() {
    startButton.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    time = questions.length * 20;
    timerElement.textContent = time;
    timerId = setInterval(timer, 30);
}

function showQuestion() {
    currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    solutionElement.innerHTML = "";

    currentQuestion.solutions.forEach(solution =>{
        var button = document.createElement("button");
        button.textContent = solution;
        button.classList.add('solution');
        button.addEventListener("click", solution);
        solutionElement.appendChild(button);
    })
}

function handleSolution() {

}

function timer() {

}

function endQuiz() {

}