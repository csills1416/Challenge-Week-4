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

//https://simplestepscode.com/javascript-quiz-tutorial///
var questions = [
    {
      question: "What are strings?",
      solution: [
        "Text", 
        "a sequence of characters", 
        "A Piece of Fabric", 
        "None of the above",],
      answer: "a sequence of characters"
    },
    {
      question: "What is a function?",
      solution: [
        "Function", 
        "a reusable portion of a program, sometimes called a procedure or subroutine.", 
        "A Method in which a function is called", 
        "None of the above",],
      answer: "a reusable portion of a program, sometimes called a procedure or subroutine."
    },
    {
      question: "What is a class?",
      solution: [
        "A section in school", 
        "Having appropriate manners", 
        "A Constructor", 
        "None of the above", 
        "a template used to create objects and to define object data types and methods"],
      answer: "a template used to create objects and to define object data types and methods"
    },
    {
      question: "What is an object?",
      solution: [
        "an instance of a Java class, meaning it is a copy of a specific class",
        "Phsycal Attribute", 
        "something material that may be perceived by the senses",
        "None of the above", ],
      answer: "an instance of a Java class, meaning it is a copy of a specific class"
    }
  ];

function startQuiz() {
  startButton.classList.add('hidden');
  questionContainer.classList.remove('hidden');
  time = questions.length * 30;
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
  } else {
    time -= 10;
        if (time < 0) {
          time = 0;
  }
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
//https://michael-karen.medium.com/how-to-save-high-scores-in-local-storage-7860baca9d68//
  function loadHighScores() {
    var savedHighScores = JSON.parse(localStorage.getItem('highScores'));
    if (savedHighScores!== null) {
      highScores = savedHighScores;
      updateHighScoresList();
    }
  }

  loadHighScores();

