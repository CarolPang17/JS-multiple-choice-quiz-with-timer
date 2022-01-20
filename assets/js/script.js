const questions = [
  {
    question: "Commonly used data types DO Not Include:",
    answers: [
      { text: "1.string", correct: false },
      { text: "2.booleans", correct: false },
      { text: "3.alerts", correct: true },
      { text: "4.numbers", correct: false }
    ],
  },
  {
    question:
      "The condition in an if / else statement is enclosed with ______.",
    answers: [
      { text: "1. quotes", correct: false },
      { text: "2. curly brackets", correct: false },
      { text: "3. parenthesis", correct: true },
      { text: "4. square brackets", correct: false }
    ]
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    answers: [
      { text:  "1.numbers and strings", correct: false },
      { text:  "2. other arrays", correct: false },
      { text: "3. booleans", correct: false },
      { text: "4. all of the above", correct: true }
    ]
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    answers: [
      { text:  "1. commas", correct: false },
      { text:  "2. curly brackets", correct: false },
      { text: "3. quotes", correct: true },
      { text: "4. parenthesis", correct: false }
    ]
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is: ",
    answers: [
      { text: "1. JavaScript", correct: false },
      { text: "2. terminal/bash", correct: false },
      { text: "3. for loops", correct: true },
      { text: "4. console.log", correct: false }
    ]
  }
];

var timer = 75;
var interval = 1000;
var value = 76;

$("#start").click(function () {
  if (timer !== 75) return;
  timer = setInterval(function () {
    $("#input").val(--value);
  }, 1000);
  var goQ1 = document.getElementsByClassName("intro");
  goQ1[0].innerHTML = "Question 1";
  goQ1[1].innerHTML = "choices";
  $("#start").remove();
  displayCurrentQuestion();
});

const startButton = document.getElementsById("start-btn");
const questionContainerElement = document.getElementsById("question-container");

startButton.addEventListener('click', startGame)

function startGame() {
  console.log("Started");
  startButton.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {}

function selectAnswer() {}
