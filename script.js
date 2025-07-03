//Screen DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

// Start Screen --> Start Quiz BUtton
const startQuizButton = document.querySelector('.start-btn');

// Reuslt Screen --> Restart Quiz Button
const restartQuizButton = document.querySelector('.restart-btn');

const currentQuesitionTag = document.querySelector('.currentQuestion');
const totalQuestion = document.querySelector('.noOfQuestions');
const scoreMaintainer = document.querySelector('.score');

const questionText = document.querySelector('.question-text');
const answerSetDiv = document.querySelector('.answers_set');

const progress = document.querySelector('.progress');

const quiz = [
  {
    question: "What is the capital of France?",
    choices: {
      a: "Paris",
      b: "London",
      c: "Berlin",
      d: "Madrid"
    },
    correct: "Paris"
  },
  {
    question: "Which language runs in a web browser?",
    choices: {
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript"
    },
    correct: "JavaScript"
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    choices: {
      a: "Shakespeare",
      b: "Hemingway",
      c: "Twain",
      d: "Austen"
    },
    correct: "Shakespeare"
  },
  {
    question: "What is the boiling point of water?",
    choices: {
      a: "90°C",
      b: "100°C",
      c: "110°C",
      d: "120°C"
    },
    correct: "100°C"
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: {
      a: "Earth",
      b: "Mars",
      c: "Venus",
      d: "Jupiter"
    },
    correct: "Mars"
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    choices: {
      a: "Shakespeare",
      b: "Hemingway",
      c: "Twain",
      d: "Austen"
    },
    correct: "Shakespeare"
  }
];

let score=0;
let currentQuesition=0;

currentQuesitionTag.textContent = currentQuesition+1;
totalQuestion.textContent = quiz.length;
scoreMaintainer.textContent = score;


//Event Listners for Start and Restart Buttons
startQuizButton.addEventListener('click', startQuiz);
restartQuizButton.addEventListener('click', restartQuiz);


function screenChange(){}

function startQuiz(){
  //Disabling Start Page
  startScreen.classList.remove('active');
  startScreen.classList.add('Inactive');


  //Abling Quiz Page
  quizScreen.classList.remove('Inactive');
  quizScreen.classList.add('active');
  showQuestion();

  const answer_btns = document.querySelectorAll('.answer-btn');
  answer_btns.forEach(element => {
    element.addEventListener('click', function printSelected(){
      if(element.innerHTML == quiz[currentQuesition].correct){
        element.classList.add('correct');
        score++;
        scoreMaintaining(score);
        progressMaintainer(score);

        if(currentQuesition<quiz.length){
                    setTimeout(()=>{
              currentQuesition++;
              currentQuesitionTag.textContent=currentQuesition+1;
              startQuiz();
          }, 2000);
        }else{
            quizScreen.classList.remove('active');
            quizScreen.classList.add('Inactive');

            resultScreen.classList.add('active');
            resultScreen.classList.add('Inactive');
        }

      }else{
        element.classList.add('incorrect');
        progress.style.width = ((score/quiz.length)*100) +'%';

        if(currentQuesition<quiz.length){
                    setTimeout(()=>{
              currentQuesition++;
              currentQuesitionTag.textContent=currentQuesition+1;
              startQuiz();
          }, 2000);
        }else{
            quizScreen.classList.remove('active');
            quizScreen.classList.add('Inactive');

            resultScreen.classList.add('active');
            resultScreen.classList.add('Inactive');
        }
      }
    });
  });


}

function scoreMaintaining(score){
  scoreMaintainer.textContent=score;
} 

function progressMaintainer(score){
  progress.style.width = ((score/quiz.length)*100) +'%';
}

function showQuestion(){
  questionText.textContent = quiz[currentQuesition].question;

  answerSetDiv.innerHTML='';

  for (let key in quiz[currentQuesition].choices) {
  const btn = document.createElement("button");
  btn.innerText = quiz[currentQuesition].choices[key];   // e.g., "Apple"
  btn.className = "answer-btn";
  btn.setAttribute("data-key", key); // Optional: store key (a, b, c, d)
  answerSetDiv.appendChild(btn);
}


}



function restartQuiz(){
  score=0;
  currentQuesition=0;
  resultScreen.classList.remove('active');
  resultScreen.classList.add('Inactive');

  startScreen.classList.add('active');
  startScreen.classList.remove('Inactive');
}

