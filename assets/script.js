const javascriptQuestions = [
  {
    question: "What does DOM stand for?",
    choices: ["Document Object Model", "Data Object Model", "Digital Object Model"],
    correctAnswer: 0
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    choices: ["var", "let", "const"],
    correctAnswer: 0
  },
  {
    question: "What is a closure in JavaScript?",
    choices: ["A function inside another function", "A variable with limited scope", "A loop that runs infinitely"],
    correctAnswer: 0
  },
  {
    question: "How do you comment out multiple lines in JavaScript?",
    choices: ["// This is a comment", "/* This is a comment */", "<!-- This is a comment -->"],
    correctAnswer: 1
  },
  {
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    choices: ["To refer to the current function", "To refer to the parent element", "To refer to the current instance of an object"],
    correctAnswer: 2
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    choices: ["string", "boolean", "integer", "object"],
    correctAnswer: 2
  },
  {
    question: "What is an example of a falsy value in JavaScript?",
    choices: ["0", "true", "null", "undefined"],
    correctAnswer: 3
  },
  {
    question: "How do you declare a function in JavaScript?",
    choices: ["function myFunction() {}", "method myFunction() {}", "def myFunction() {}"],
    correctAnswer: 0
  },
  {
    question: "What is the result of '5' + 3 in JavaScript?",
    choices: ["8", "53", "Error", "NaN"],
    correctAnswer: 1
  },
  {
    question: "Which loop is used for iterating over the properties of an object?",
    choices: ["for", "while", "for...in", "do...while"],
    correctAnswer: 2
  },
  {
    question: "What is the purpose of the 'JSON.parse()' method?",
    choices: ["To parse a JSON string into an object", "To stringify an object into a JSON string", "To create a new JSON object"],
    correctAnswer: 0
  },
  {
    question: "What is the output of '2' == 2 in JavaScript?",
    choices: ["true", "false", "Error", "undefined"],
    correctAnswer: 0
  },
  {
    question: "Which event is triggered when a user clicks on an HTML element?",
    choices: ["onhover", "onload", "onclick", "onsubmit"],
    correctAnswer: 2
  },
  {
    question: "What does the 'NaN' stand for?",
    choices: ["Not a Null", "Not a Number", "No Answer Needed"],
    correctAnswer: 1
  },
  {
    question: "Which JavaScript method is used to remove the last element of an array?",
    choices: ["pop()", "shift()", "splice()", "push()"],
    correctAnswer: 0
  },
  {
    question: "What is the result of 4 + '4' in JavaScript?",
    choices: ["44", "8", "Error", "undefined"],
    correctAnswer: 0
  },
  {
    question: "What is the purpose of the 'Array.map()' method?",
    choices: ["To filter an array", "To create a new array by mapping each element", "To remove elements from an array"],
    correctAnswer: 1
  },
  {
    question: "Which operator is used for strict equality in JavaScript?",
    choices: ["==", "===", "=", "!="],
    correctAnswer: 1
  },
  {
    question: "What is the 'typeof' operator used for in JavaScript?",
    choices: ["To check if a variable is defined", "To determine the data type of a value", "To create a new variable"],
    correctAnswer: 1
  },
  {
    question: "What is the result of 'undefined + 5' in JavaScript?",
    choices: ["5", "undefined", "NaN", "Error"],
    correctAnswer: 2
  },
  {
    question: "What is the purpose of the 'Array.filter()' method?",
    choices: ["To sort an array", "To filter out elements that don't satisfy a condition", "To add elements to an array"],
    correctAnswer: 1
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    choices: ["#", "//", "/*", "--"],
    correctAnswer: 1
  },
  {
    question: "What is the result of '10 % 3' in JavaScript?",
    choices: ["7", "3", "1", "0"],
    correctAnswer: 2
  },
  {
    question: "What is the purpose of the 'Array.reduce()' method?",
    choices: ["To increase the size of an array", "To reduce the size of an array", "To reduce an array to a single value"],
    correctAnswer: 2
  },
  {
    question: "What is the output of 'typeof NaN' in JavaScript?",
    choices: ["number", "NaN", "string", "undefined"],
    correctAnswer: 0
  },
  {
    question: "What is the 'strict mode' in JavaScript?",
    choices: ["A mode that allows loose typing", "A mode that enforces stricter rules and better error handling", "A mode for writing comments"],
    correctAnswer: 1
  },
  {
    question: "What is the result of 'Math.random()' in JavaScript?",
    choices: ["0", "1", "A random number between 0 (inclusive) and 1 (exclusive)", "An error"],
    correctAnswer: 2
  },
  {
    question: "Which method is used to add new elements to the end of an array in JavaScript?",
    choices: ["push()", "unshift()", "concat()", "splice()"],
    correctAnswer: 0
  },
  {
    question: "What does 'NaN' represent in JavaScript?",
    choices: ["Not a Null", "Not a Number", "No Answer Needed"],
    correctAnswer: 1
  },
  {
    question: "Which function is used to round a number to the nearest integer in JavaScript?",
    choices: ["Math.floor()", "Math.ceil()", "Math.round()", "Math.trunc()"],
    correctAnswer: 2
  },
  {
    question: "How can you convert a string to lowercase in JavaScript?",
    choices: ["toLowerCase()", "toLower()", "convertToLower()"],
    correctAnswer: 0
  },
  {
    question: "What is the result of 'typeof undefined' in JavaScript?",
    choices: ["number", "undefined", "string", "null"],
    correctAnswer: 1
  },
  {
    question: "Which keyword is used to exit a loop prematurely in JavaScript?",
    choices: ["return", "break", "continue", "exit"],
    correctAnswer: 1
  },
  {
    question: "What is the purpose of the 'Array.includes()' method?",
    choices: ["To check if an array includes a specific element", "To add elements to an array", "To sort an array"],
    correctAnswer: 0
  },
  {
    question: "Which operator is used for concatenating strings in JavaScript?",
    choices: ["+", "&", "|", ":"],
    correctAnswer: 0
  },
  {
    question: "What is the result of '5 === '5' in JavaScript?",
    choices: ["true", "false", "Error", "undefined"],
    correctAnswer: 1
  },
  {
    question: "What is the purpose of the 'JSON.stringify()' method?",
    choices: ["To parse a JSON string into an object", "To stringify an object into a JSON string", "To create a new JSON object"],
    correctAnswer: 1
  },
  {
    question: "What is the output of 'null == undefined' in JavaScript?",
    choices: ["true", "false", "Error", "undefined"],
    correctAnswer: 0
  },
  {
    question: "Which statement is used to declare a function in JavaScript?",
    choices: ["function myFunction() {}", "def myFunction() {}", "method myFunction() {}"],
    correctAnswer: 0
  },
  {
    question: "What is the purpose of the 'Array.splice()' method?",
    choices: ["To join two arrays", "To remove elements from an array and optionally add new ones", "To reverse the order of elements in an array"],
    correctAnswer: 1
  },
  {
    question: "What is the output of 'typeof []' in JavaScript?",
    choices: ["object", "array", "list", "undefined"],
    correctAnswer: 0
  },
  {
    question: "How do you declare a constant variable in JavaScript?",
    choices: ["var", "let", "const"],
    correctAnswer: 2
  },
  {
    question: "What is the result of '10 / 0' in JavaScript?",
    choices: ["0", "Infinity", "Error", "undefined"],
    correctAnswer: 1
  },
  {
    question: "What is the purpose of the 'parseInt()' function in JavaScript?",
    choices: ["To convert a string to an integer", "To find the maximum value in an array", "To check if a variable is defined"],
    correctAnswer: 0
  },
  {
    question: "Which of the following is a valid way to create a JavaScript object?",
    choices: ["{ key: value }", "[ key: value ]", "( key: value )", "< key: value >"],
    correctAnswer: 0
  },
  {
    question: "What is the result of 'typeof true' in JavaScript?",
    choices: ["number", "boolean", "string", "undefined"],
    correctAnswer: 1
  },
  {
    question: "What is the purpose of the 'Array.concat()' method in JavaScript?",
    choices: ["To concatenate two arrays", "To remove elements from an array", "To reverse the order of elements in an array"],
    correctAnswer: 0
  },
  {
    question: "Which symbol is used to access properties and methods of an object in JavaScript?",
    choices: [".", ":", "/", "->"],
    correctAnswer: 0
  },
  {
    question: "What is the output of '5 > 3 && 2 < 4' in JavaScript?",
    choices: ["true", "false", "Error", "undefined"],
    correctAnswer: 0
  },
  {
    question: "How do you create a comment in JavaScript?",
    choices: ["'This is a comment", "// This is a comment", "/* This is a comment */", "<!-- This is a comment -->"],
    correctAnswer: 1
  },
  {
    question: "What is the result of 'typeof []' in JavaScript?",
    choices: ["array", "object", "list", "undefined"],
    correctAnswer: 1
  },
  {
    question: "What is the purpose of the 'Array.indexOf()' method?",
    choices: ["To find the index of a specific element in an array", "To check if an array includes a specific element", "To remove elements from an array"],
    correctAnswer: 0
  },
  {
    question: "Which operator is used for logical OR in JavaScript?",
    choices: ["&&", "||", "!", "&"],
    correctAnswer: 1
  },
  {
    question: "What is the output of '0 == false' in JavaScript?",
    choices: ["true", "false", "Error", "undefined"],
    correctAnswer: 0
  },
  {
    question: "What is the purpose of the 'Array.join()' method in JavaScript?",
    choices: ["To join two arrays", "To convert an array to a string", "To reverse the order of elements in an array"],
    correctAnswer: 1
  },
];

// You can access the questions, choices, and correct answers using javascriptQuestions[index].

const mainDiv = document.querySelector('.main-div');
const startingContent = document.querySelector(".content");
const startQuizButton = document.querySelector(".start-quiz");
const questionContainer = document.querySelector(".question-container");
const answerContainer = document.querySelector('.answer-container');
const score = document.querySelector('.score');
const scoreTimer = document.querySelector('.score-timer');
const timer = document.querySelector('.timer');

let intervalId;
let displayedScore = 0;
let timeLeft = 60;

let displayedQuestion = document.querySelector(".question");
let randomQuestion = getRandomFromArr(javascriptQuestions);
let endGameDiv = document.createElement('div')
let playAgain = document.createElement('button');
let highScoreDiv = document.createElement('div');
let endGameScore = document.createElement('h1')
let endGameInitials = document.createElement('h1')

startQuizButton.addEventListener("click", () => {
  startingContent.style.display = "none";
  scoreTimer.style.display = "flex"

  
  intervalId = setInterval(handleTimer, 1000)
  handleQuestion();
});

//Creates the buttons in the HTML and addes a click function to them
function createButtons(question) {
  for (let i = 0; i < question.length; i++) {
    //destructures from the randomQuestion object
    let { choices } = randomQuestion;
    let { correctAnswer } = randomQuestion;

    //Creates the buttons, adds the answers to the text content, and appends it to the questionContainer
    let newButton = document.createElement("button");
    newButton.classList.add("answers");
    newButton.textContent = choices[i];
    answerContainer.appendChild(newButton);

    //Adds an "answers" class to all the buttons and puts them in an array   
    

    //Adds an event listener to the newly created buttons.
    newButton.addEventListener("click", () => {      
      disableButtons()
      
      

      //Checks if the answer is correct or incorrect. If true, the button turns green, if wrong, the button turns red.
      if (i === correctAnswer) {
        newButton.style.backgroundColor = "rgb(108, 170, 108)";

        displayedScore++
        score.textContent = "Score: " + displayedScore
        timeLeft += 2;

        setTimeout(() => {
          randomQuestion = getRandomFromArr(javascriptQuestions);
          answerContainer.innerHTML = "";
          
          handleQuestion();
            
        }, 1000);
      } else {
        newButton.style.backgroundColor = "rgb(198, 141, 141)";
        timeLeft -= 5;

        setTimeout(() => {
          randomQuestion = getRandomFromArr(javascriptQuestions);
          answerContainer.innerHTML = "";

          if (timeLeft > 0) {
            handleQuestion()
          }

        }, 1000);
      }
    });
  }
}






//Handles creating the question
function handleQuestion() {
  let { question } = randomQuestion;
  let { choices } = randomQuestion;
  displayedQuestion.textContent = "";

  createButtons(choices);
  displayedQuestion.textContent = question;
  questionContainer.style.display = "flex";
}

function getRandomFromArr(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);

  return arr[randomIndex];
}


function disableButtons() {
  let allButtons = document.querySelectorAll(".answers");
  allButtons.forEach(button => {
    button.setAttribute("disabled", true)
  });
}


function handleTimer() {
  if (timeLeft > 0) {
    timeLeft--
    timer.textContent = `Time Left: ${timeLeft} seconds` 

  } else {
    handleEndGame();
    clearInterval(intervalId)
  }
}

function handleEndGame() {
  questionContainer.setAttribute("style", "display: none;")
  scoreTimer.setAttribute("style", "display: none;")

  
  
  
  
  endGameDiv.classList.add('end-game-div')
  endGameDiv.style.display = 'block'
  mainDiv.appendChild(endGameDiv)


  endGameScore.textContent = `Times up! Your score is ${displayedScore}!`
  endGameInitials.textContent = "Type your initials below!"
  endGameDiv.appendChild(endGameScore)
  endGameDiv.appendChild(endGameInitials)

  
  
  
  

  saveScore()

}



function saveScore() { 
  let handleScores = document.createElement('form');
  let scoreLabel = document.createElement('label')
  let scoreSubmition = document.createElement('input');
  let saveScore = document.createElement('input');

  

  handleScores.classList.add('scores-form');

  scoreLabel.setAttribute("for", 'score')

  scoreSubmition.classList.add('score-submition');
  scoreSubmition.type = 'text';
  scoreSubmition.id = 'score';
  scoreSubmition.name = 'score';
  
  
  saveScore.classList.add('save-score')
  saveScore.textContent = 'Play again?'
  saveScore.type = 'submit';
  saveScore.value = 'Submit Score'

  mainDiv.appendChild(handleScores);
  handleScores.appendChild(scoreSubmition);
  handleScores.append(saveScore)

  saveScore.addEventListener('click', (event) => {
    event.preventDefault();

    highScoreDiv.style.display = 'flex'

    endGameDiv.style.display = "none";
    scoreSubmition.style.display = "none";
    saveScore.style.display = "none";

    let newScore = document.createElement('p');
    let newestScore = scoreSubmition.value

    
    highScoreDiv.classList.add('highscore-div')
    mainDiv.appendChild(highScoreDiv);



    
    newScore.classList.add('new-score')
    newScore.textContent = `${newestScore}: ${displayedScore}`
    highScoreDiv.appendChild(newScore)


    
    playAgain.classList.add('play-again')
    playAgain.textContent = 'Play Again?'
    highScoreDiv.appendChild(playAgain)

  })
}



playAgain.addEventListener('click', () => {
  highScoreDiv.style.display = 'none';

  startingContent.style.display = "flex";
  timeLeft = 3;
  displayedScore = 0;

  answerContainer.textContent = ""

})