// Questions
var quizQuestions = [
    {
        question: "What does CSS stand for?",
        choiceA: "Creative Style Sheets",
        choiceB: "Cascading Style Sheets",
        choiceC: "Computer Style Sheets",
        choiceD: "Colorful Style Sheets",
        correctAnswer: "b"
    },
    {
        question: "Which HTML tag is used to define a hyperlink?",
        choiceA: "&lt;link&gt;",
        choiceB: "&lt;a&gt;",
        choiceC: "&lt;href&gt;",
        choiceD: "&lt;hyperlink&gt;",
        correctAnswer: "b"
    },
    {
        question: "What is the correct way to include an external CSS file in an HTML document?",
        choiceA: "&lt;style&gt;stylesheet.css&lt;/style&gt;",
        choiceB: "&lt;css&gt;stylesheet.css&lt;/css&gt;",
        choiceC: '&lt;link rel="stylesheet" href="stylesheet.css"&gt;',
        choiceD: '&lt;script src="stylesheet.css"&gt;&lt;/script&gt;',
        correctAnswer: "c"
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        choiceA: "background-color",
        choiceB: "font-color",
        choiceC: "text-color",
        choiceD: "color",
        correctAnswer: "d"
    },
    {
        question: "How do you select an element with the ID 'myElement' in CSS?",
        choiceA: "#myElement",
        choiceB: ".myElement",
        choiceC: "element.myElement",
        choiceD: "myElement",
        correctAnswer: "a"
    },
    {
        question: "Which HTML tag is used to define a table row?",
        choiceA: "&lt;tr&gt;",
        choiceB: "&lt;td&gt;",
        choiceC: "&lt;th&gt;",
        choiceD: "&lt;table&gt;",
        correctAnswer: "a"
    },
    {
        question: "What does the CSS property 'margin: 0 auto;' do?",
        choiceA: "Adds a margin to all sides of an element",
        choiceB: "Centers an element horizontally within its parent container",
        choiceC: "Aligns an element to the right",
        choiceD: "Removes the margin from an element",
        correctAnswer: "b"
    },
    {
        question: "Which HTML tag is used to display an image?",
        choiceA: "&lt;img&gt;",
        choiceB: "&lt;src&gt;",
        choiceC: "&lt;image&gt;",
        choiceD: "&lt;picture&gt;",
        correctAnswer: "a"
    },
    {
        question: "Which CSS property is used to control the spacing between lines of text?",
        choiceA: "line-height",
        choiceB: "letter-spacing",
        choiceC: "text-spacing",
        choiceD: "word-spacing",
        correctAnswer: "a"
    },
    {
        question: "What does the HTML acronym 'SEO' stand for?",
        choiceA: "Search Engine Optimization",
        choiceB: "Style Element Output",
        choiceC: "Structured Element Order",
        choiceD: "Source Extension Option",
        correctAnswer: "a"
    }
];



// Start Page Vars
var startPageContent = document.getElementById('startPage');
var startButton = document.getElementById('startquiz');
var highScoresButton = document.getElementById('highscores');
// startPageContent.style.display = 'none'; //DELETE LATER

// Script Vars
var currentIndex;
var score = 0;
var timeLeft;
var playAgainflag = 0;

// Quiz Page Vars
var quizPageContent = document.getElementById('quizpage');
var questionEl = document.getElementById('question');
var choiceAEl = document.getElementById('a');
var choiceBEl = document.getElementById('b');
var choiceCEl = document.getElementById('c');
var choiceDEl = document.getElementById('d');
var resultEl = document.getElementById('result');
var timerEl = document.getElementById('timer');

// User Score Vars
var scorePage = document.getElementById('scorePage');
var userScore = document.getElementById('userScore');
var playAgainbtn = document.getElementById('playAgain');
var saveScorebtn = document.getElementById('saveScore');
var homebtn = document.getElementById('homeButton');

// Save Score Vars
var saveScorePage = document.getElementById('saveScorePage');
var userInitials = document.getElementById('initials');
var saveScorePagebtn = document.getElementById('saveScorePagebtn');
var scoreForm = document.getElementById('scoreForm');

// High Score Page
var highScorePage = document.getElementById('highScore-Page');
var homebtnHS = document.getElementById('homeButtonHS');
var highScoreList = document.getElementById('highScoresList');


quizPageContent.style.display = 'none';
scorePage.style.display = 'none';
saveScorePage.style.display = 'none';
highScorePage.style.display = 'none';

function startQuiz() {
    timeLeft = 60;
    score = 0;
    currentIndex = 0;
    startPageContent.style.display = 'none';
    quizPageContent.style.display = 'block';
    scorePage.style.display = 'none';
    highScorePage.style.display = 'none';
    getQuestion();

    if (playAgainflag == 1) {

        resultEl.style.opacity = 1;
        resultEl.innerHTML = "";
    }

    timerInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Time Remaining: " + timeLeft;

        if (timeLeft < 0) {
            endQuiz();
        }
    }, 1000);
}

function getQuestion() {
    var question = quizQuestions[currentIndex];
    questionEl.innerHTML = question.question;
    choiceAEl.innerHTML = question.choiceA;
    choiceBEl.innerHTML = question.choiceB;
    choiceCEl.innerHTML = question.choiceC;
    choiceDEl.innerHTML = question.choiceD;

}

function checkAnswer(userAnswer) {
    if (userAnswer === quizQuestions[currentIndex].correctAnswer) {
        score++;
        resultEl.innerHTML = "CORRECT!";
        resultEl.style.color = "green";
        currentIndex++;
        if(currentIndex == quizQuestions.length){
            endQuiz();
        }
        getQuestion();
    } else {
        resultEl.innerHTML = "INCORRECT!";
        resultEl.style.color = "red";
        timeLeft = timeLeft - 10;
        currentIndex++;
        if(currentIndex == quizQuestions.length){
            endQuiz();
        }
        getQuestion();
    }

    resultEl.style.opacity = 1;

    setTimeout(function () {
        resultEl.style.opacity = 0;
    }, 1000);
}



function endQuiz() {
    clearInterval(timerInterval);
    saveScorebtn.disabled = false;
    console.log("QUIZ END");
    userScore.innerHTML = "SCORE: " + score;
    quizPageContent.style.display = 'none';
    scorePage.style.display = 'block';

}

function playAgain() {
    playAgainflag = 1;
    startQuiz();
}


function homePage() {
    quizPageContent.style.display = 'none';
    scorePage.style.display = 'none';
    saveScorePage.style.display = 'none';
    startPageContent.style.display = 'block';
    highScorePage.style.display = 'none';

}

function gotoSaveScore() {
    scorePage.style.display = 'none';
    saveScorePage.style.display = 'block';
    highScorePage.style.display = 'none';
}

function saveScore(initials, score) {
    if (typeof localStorage !== 'undefined') {
        // Gets existing Highscores or initializes an empty array
        let highScores = JSON.parse(localStorage.getItem('highScores')) || [];

        var newScore = { initials, score };
        highScores.push(newScore);

        highScores.sort((a, b) => b.score - a.score);
        localStorage.setItem('highScores', JSON.stringify(highScores));
    }
}

function gotoHighScore() {

    var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    // Sort Highest scores in descending order
    highScores.sort((a, b) => b.score - a.score);

    var top5Scores = highScores.slice(0, 5);
    highScoreList.innerHTML = ''; // Clears any previous list

    for (var i = 0; i < top5Scores.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = `${i + 1}. ${top5Scores[i].initials} - ${top5Scores[i].score}`;
        highScoreList.appendChild(listItem);
    }

    quizPageContent.style.display = 'none';
    scorePage.style.display = 'none';
    saveScorePage.style.display = 'none';
    startPageContent.style.display = 'none';
    highScorePage.style.display = 'block';
}


playAgainbtn.addEventListener("click", playAgain);
startButton.addEventListener("click", startQuiz);
saveScorebtn.addEventListener("click", gotoSaveScore);
highScoresButton.addEventListener("click", gotoHighScore);
homebtn.addEventListener("click", homePage);
homebtnHS.addEventListener("click", homePage);

scoreForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var initialsInput = userInitials;
    var initials = initialsInput.value.trim().substring(0, 3);

    if (initials && score) {
        saveScore(initials, score);
        homePage();
    }
});
