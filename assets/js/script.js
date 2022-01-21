const introPage = document.getElementById("intro");
const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const answerResult = document.getElementById("showResult");
const finalScoreBox = document.getElementById("final-score-box");
const finalScore = document.getElementsByClassName("final-score");
const showTime = document.getElementById("countdown");
let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);

function startGame() {
  downloadTimer();
  introPage.classList.add("hide");
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

var timeleft = 75;


function downloadTimer() {
  setInterval(function () {
    if (timeleft <= 0 ) {
      clearInterval(downloadTimer);
      showFinalResult()
      document.getElementById("countdown").innerHTML = "time out!";
    } else {
      document.getElementById("countdown").innerHTML = timeleft;
    }
    timeleft -= 1;
  }, 1000);
}

function showFinalResult() {
  questionContainerElement.classList.add("hide");
  finalScoreBox.classList.remove("hide");
  if(timeleft <= 0) {
    timeleft = 0;
  } else {
    showTime.remove();
  }
  finalScore[0].innerText = " " + timeleft;
  finalScore[1].innerText = " " + timeleft;
}

function setNextQuestion(correct) {
  resetState();
  if (correct) {
    if (currentQuestionIndex === 0) {
      answerResult.innerText = "";
    } else {
      answerResult.innerText = "Correct!";
    }
  } else {
    if (currentQuestionIndex === 0) {
      answerResult.innerText = "";
    } else {
      answerResult.innerText = "Wrong!";
      timeleft -=20;
    }
  }
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    currentQuestionIndex++;
    setNextQuestion(correct);
  } else {
    showFinalResult();
  }
}


function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "Commonly used data types DO Not Include:",
    answers: [
      { text: "1.string", correct: false },
      { text: "2.booleans", correct: false },
      { text: "3.alerts", correct: true },
      { text: "4.numbers", correct: false },
    ],
  },
  {
    question:
      "The condition in an if / else statement is enclosed with ______.",
    answers: [
      { text: "1. quotes", correct: false },
      { text: "2. curly brackets", correct: false },
      { text: "3. parenthesis", correct: true },
      { text: "4. square brackets", correct: false },
    ],
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    answers: [
      { text: "1.numbers and strings", correct: false },
      { text: "2. other arrays", correct: false },
      { text: "3. booleans", correct: false },
      { text: "4. all of the above", correct: true },
    ],
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    answers: [
      { text: "1. commas", correct: false },
      { text: "2. curly brackets", correct: false },
      { text: "3. quotes", correct: true },
      { text: "4. parenthesis", correct: false },
    ],
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is: ",
    answers: [
      { text: "1. JavaScript", correct: false },
      { text: "2. terminal/bash", correct: false },
      { text: "3. for loops", correct: true },
      { text: "4. console.log", correct: false },
    ],
  },
];
