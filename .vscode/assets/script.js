var startButton = document.getElementById('start-button');
var questionContainer = document.getElementById('game-screen');
var questionElement = document.getElementById('question');
var solutionElement = document.getElementById('choices');
var timerElement = document.getElementById('time');
var gameOverElement = document.getElementById('end-screen');
var finalScoreElement = document.getElementById('final-score');
var highScoresElement = document.getElementById('high-scores-list');
var initialsForm = document.getElementById('initials-form');
var initialsInput = document.getElementById('initials');

var currentQuestionIndex = 0;
var time = 0;
var timerId;
var highScores = [];

var questions = [
    {
      question: "What are strings?",
      solution: [
        "Text", 
        "Used for storing and manipulating text", 
        "A Piece of Fabric", 
        "None of the above",],
      answer: "Used for storing and manipulating text"
    },
    {
      question: "What is a function?",
      solution: [
        "Function", 
        "Used for creating functions", 
        "A Method", 
        "None of the above",],
      answer: "Used for creating functions"
    },
    {
      question: "What is a class?",
      solution: [
        "Class", 
        "A Class", 
        "A Constructor", 
        "None of the above", 
        "Used for creating classes"],
      answer: "Used for creating classes"
    },
    {
      question: "What is an object?",
      solution: [
        "Used for creating objects",
        "Phsycal Attribute", 
        "A Property",
        "None of the above", ],
      answer: "Used for creating objects"
    }
  ];

function startQuiz() {
  startButton.classList.add('hidden');
  questionContainer.classList.remove('hidden');
  time = questions.length * 20;
  timerElement.textContent = time;
  timerId = setInterval(timer, 1000);
  showQuestion();
}

function showQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  solutionElement.innerHTML = '';

  currentQuestion.solution.forEach(function (solution) {
    var button = document.createElement('button');
    button.textContent = solution;
    button.classList.add('solution');
    button.addEventListener('click', handleSolution);
    solutionElement.appendChild(button);
  });
}

function handleSolution(event) {
  var selectedChoice = event.target;
  var selectedSolution = selectedChoice.textContent;
  var currentQuestion = questions[currentQuestionIndex];

  if (selectedSolution === currentQuestion.answer) {
    currentQuestionIndex++;
  }

  if (currentQuestionIndex >= questions.length || time <= 0) {
    endQuiz();
  } else {
    showQuestion();
  }
}

function timer() {
  time--;
  timerElement.textContent = time;
  if (time <= 0) {
    clearInterval(timerId);
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(timerId);
  questionContainer.classList.add('hidden');
  gameOverElement.classList.remove('hidden');
  finalScoreElement.textContent = time;
  saveScore();
  updateHighScoresList();
}

function saveScore() {
  var initials = initialsInput.value.trim();
  if (initials !== '') {
    var newScore = {
      initials: initials,
      score: time
    };
    highScores.push(newScore);
    highScores.sort(function (a, b) {
      return b.score - a.score;
    });
    if (highScores.length > 10) {
      highScores.pop();
    }
    localStorage.setItem('highScores', JSON.stringify(highScores));
    document.getElementById('final-score').textContent = time;
    initialsInput.value = '';
  }
}

function updateHighScoresList() {
  highScoresElement.innerHTML = '';

  highScores.forEach(function (score) {
    var listItem = document.createElement('li');
    listItem.textContent = score.initials + ' - ' + score.score;
    highScoresElement.appendChild(listItem);
  });
}

startButton.addEventListener('click', startQuiz);
initialsForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var intials = initialsInput.value.trim();
    saveScore();
    initialsForm.reset();
    updateHighScoresList();
  });

  function loadHighScores() {
    var savedHighScores = JSON.parse(localStorage.getItem('highScores'));
    if (savedHighScores!== null) {
      highScores = savedHighScores;
      updateHighScoresList();
    }
  }

  loadHighScores();

