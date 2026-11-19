const ques = document.getElementById("question");
const opt = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const result = document.getElementById("result-container");
const score = document.getElementById("score");
const quizContainer = document.getElementById("quiz-container");

const quiz = [
  {
    ques: "What does HTML stand for?",
    opt: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language"
    ],
    answer: 0
  },

  {
    ques: "What does CSS stand for?",
    opt: [
      "Creative Style Sheets",
      "Computer Style System",
      "Cascading Style Sheets",
      "Color Style Sheets"
    ],
    answer: 2
  },

  {
    ques: "Which language is used to make a website interactive?",
    opt: [
      "HTML",
      "CSS",
      "JavaScript",
      "SQL"
    ],
    answer: 2
  },

  {
    ques: "Which keyword is used to declare a variable in JavaScript?",
    opt: [
      "style",
      "let",
      "print",
      "input"
    ],
    answer: 1
  },

  {
    ques: "Which symbol is used for single-line comments in JavaScript?",
    opt: [
      "/* */",
      "<!-- -->",
      "//",
      "##"
    ],
    answer: 2
  }
];
let currentQuestion = 0;
let currentScore = 0;
let selectedAnswer = null;
function showQuestion() {
  opt.innerHTML = "";
  const currentQuiz = quiz[currentQuestion];
  ques.innerText = currentQuiz.ques;
  for (let i = 0; i < currentQuiz.opt.length; i++) {
    const li = document.createElement("li");
    li.innerText = currentQuiz.opt[i];
    li.addEventListener("click", function () {
      const allOptions = opt.children;
      for (let j = 0; j < allOptions.length; j++) {
        allOptions[j].classList.remove("selected");
      }
      li.classList.add("selected");
      selectedAnswer = i;
    });
    opt.appendChild(li);
  }
}
showQuestion();

nextBtn.addEventListener("click", function () {

  if (selectedAnswer === null) {

    alert("Please select an answer.");

    return;
  }

  if (selectedAnswer === quiz[currentQuestion].answer) {

    currentScore++;

  }

  currentQuestion++;

  if (currentQuestion < quiz.length) {

    showQuestion();

  }

  else {
    quizContainer.style.display = "none";

    result.style.display = "block";

    score.innerText = currentScore + " / " + quiz.length;

  }

});

restartBtn.addEventListener("click", function () {

  currentQuestion = 0;

  currentScore = 0;

  selectedAnswer = null;

  result.style.display = "none";

  quizContainer.style.display = "flex";

  showQuestion();

});


