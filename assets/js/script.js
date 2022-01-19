
var questions = [
  {
    question: "Commonly used data types DO Not Include:",
    choices: ["1.string", "2.booleans", "3.alerts", "numbers"],
    correctAnswer: 3,
  },
  {
    question:
      "The condition in an if / else statement is enclosed with ______.",
    choices: [
      "1. quotes",
      "2. curly brackets",
      "3. parenthesis",
      "4. square brackets",
    ],
    correctAnswer: 3,
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    choices: [
      "1.numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    correctAnswer: 4,
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
    correctAnswer: 3,
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is: ",
    choices: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    correctAnswer: 4,
  },
];

$(function () {
  var timer = 75,
    interval = 1000,
    value = 76;
  $("#input").val("0");
  $("#start").click(function () {
    if (timer !== 75) return;
    timer = setInterval(function () {
      $("#input").val(--value);
    }, interval);
    var goQ1 = document.getElementsByClassName("intro");
    goQ1[0].innerHTML = "Question 1";
    goQ1[1].innerHTML = "choices";

  });
});
