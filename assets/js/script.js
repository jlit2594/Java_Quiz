// GLOBAL VARIABLES
let startButtonEl = document.querySelector("#start");
let saveEl = document.querySelector("#save")
let quizEl = document.querySelector("#content");
let highScoresEl = document.querySelector("#scores")
let headerEl = document.querySelector("#header")
let welcomeEl = document.querySelector("#welcome-box")

let resultScore = 0;
let timeLeft = 60;


// Functions
// time limit
function timeLimit () {
    let timerEl = document.createElement("h2");
    timerEl.className = ("flex-container"); 
    headerEl.appendChild(timerEl)
    let timer = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = ("Timer: " + timeLeft + " seconds remaining.");
            timeLeft --;
        } else if (timeLeft === 1) {
            timerEl.textContent = ("Timer: " + timeLeft + " second remaining.");
            timeLeft --;
        } else {
            timerEl.textContent = ("Times Up!");
            clearInterval(timer);
            submitResult();
            }
    }, 1000);
};

// Function to black out the welcome box
function blackoutWel () {
    welcomeEl.style.opacity = "10%";
    welcomeEl.style.userSelect = "none";
}

// function to save the user's score
function saveResult () {
    let userName = document.getElementById("name").value
    let userInfo = {
        name: userName,
        score: resultScore
    }

    localStorage.setItem('User Info', JSON.stringify(userInfo))
}

// function to load the user's score when they see the leaderboard
function loadScores () {
    let scoreOne = document.querySelector("#score-one")
    let scoreTwo = document.querySelector("#score-two")
    let scoreThree = document.querySelector("#score-three")
    let scoreFour = document.querySelector("#score-four")
    let scoreFive = document.querySelector("#score-five")

    let jsonString = localStorage.getItem('User Info')
    let user = JSON.parse(jsonString);

    scoreOne.textContent = (" " + user.name + ", " +  user.score + "%")

}

// function to allow user to submit results and finish the quiz
function submitResult () {
    let subBox = document.createElement("div")
    subBox.className = "quiz-section-two"

    let submitBtn = document.createElement("button")
    submitBtn.textContent = "SUBMIT YOUR ANSWERS"
    submitBtn.className = "sub-btn"

    subBox.appendChild(submitBtn)
    quizEl.appendChild(subBox)

    let scoreResult = document.querySelector("#score")
    scoreResult.textContent = (" " + resultScore + "%. ")
   
    $(".sub-btn").on("click", function () {
    $("#dialog").dialog("open");
  });
}

// question five
function questionFive () {
    let quesBoxFive = document.createElement("div");
    quesBoxFive.className = "quiz-section";


    let question = document.createElement("h1");
    question.textContent = "Which of the following is not an event?";
    
    let ans1 = document.createElement("button")
    ans1.textContent = "click";
    ans1.id = "ans5-1";
    ans1.value = "click";

    let ans2 = document.createElement("button")
    ans2.textContent = "hover";
    ans2.id = "ans5-2";
    ans2.value = "hover"

    let ans3 = document.createElement("button")
    ans3.textContent = "check";
    ans3.id = "ans5-3";
    ans3.value = "check"

    let ans4 = document.createElement("button")
    ans4.textContent = "view";
    ans4.id = "ans5-4";
    ans4.value = "view"

    let correctAns = "view";

    let answers = document.createElement("ol")
    answers.className = "quiz-answers"
    answers.append(ans1, ans2, ans3, ans4);

    quesBoxFive.append(question, answers);
    quizEl.appendChild(quesBoxFive);

    quesBoxFive.id = "ques-five";
    document.getElementById("ques-five").focus();
    
    let ans1El = document.querySelector("#ans5-1")
    let ans2El = document.querySelector("#ans5-2")
    let ans3El = document.querySelector("#ans5-3")
    let ans4El = document.querySelector("#ans5-4")
    
    ans1El.addEventListener("click", evaluate);
    ans2El.addEventListener("click", evaluate);
    ans3El.addEventListener("click", evaluate);
    ans4El.addEventListener("click", evaluate);

    function blackout () {
        quesBoxFive.style.opacity = "10%";
        quesBoxFive.style.userSelect = "none";
    }
    
    function evaluate() {
        if (this.value === correctAns) {
            resultScore = resultScore + 20;
            blackout()
            submitResult()
        } else {  
            timeLeft = timeLeft - 20;
            blackout()
            submitResult();   
        };
    };
};

// question four
function questionFour() {
    let quesBoxFour = document.createElement("div");
    quesBoxFour.className = "quiz-section";


    let question = document.createElement("h1");
    question.textContent = "How do you assign a class to a newly created element?";
    
    let ans1 = document.createElement("button")
    ans1.textContent = "setClass";
    ans1.id = "ans4-1";
    ans1.value = "setClass";

    let ans2 = document.createElement("button")
    ans2.textContent = "className";
    ans2.id = "ans4-2";
    ans2.value = "className"

    let ans3 = document.createElement("button")
    ans3.textContent = "getClass";
    ans3.id = "ans4-3";
    ans3.value = "getClass";

    let ans4 = document.createElement("button")
    ans4.textContent = "addClass";
    ans4.id = "ans4-4";
    ans4.value = "addClass"

    let correctAns = "className"

    let answers = document.createElement("ol")
    answers.className = "quiz-answers"
    answers.append(ans1, ans2, ans3, ans4);

    quesBoxFour.append(question, answers);
    quizEl.appendChild(quesBoxFour);

    quesBoxFour.id = "ques-four";
    document.getElementById("ques-four").focus();

    let ans1El = document.querySelector("#ans4-1")
    let ans2El = document.querySelector("#ans4-2")
    let ans3El = document.querySelector("#ans4-3")
    let ans4El = document.querySelector("#ans4-4")
    
    ans1El.addEventListener("click", evaluate);
    ans2El.addEventListener("click", evaluate);
    ans3El.addEventListener("click", evaluate);
    ans4El.addEventListener("click", evaluate);

    function blackout () {
        quesBoxFour.style.opacity = "10%";
        quesBoxFour.style.userSelect = "none";
    }
    
    function evaluate() {
        if (this.value === correctAns) {
            resultScore = resultScore + 20;
            blackout()
            questionFive();
        } else {
            timeLeft = timeLeft - 20;
            blackout()
            questionFive();
        };
    };
};

// question three
function questionThree() {
    let quesBoxThree = document.createElement("div");
    quesBoxThree.className = "quiz-section";


    let question = document.createElement("h1");
    question.textContent = "What is the correct way to comment?";
    
    let ans1 = document.createElement("button")
    ans1.textContent = "<comment>";
    ans1.id = "ans3-1";
    ans1.value = "<comment>";

    let ans2 = document.createElement("button")
    ans2.textContent = "(comment)";
    ans2.id = "ans3-2";
    ans2.value = "(comment)"

    let ans3 = document.createElement("button")
    ans3.textContent = "//comment";
    ans3.id = "ans3-3";
    ans3.value = "//comment"

    let ans4 = document.createElement("button")
    ans4.textContent = "--comment";
    ans4.id = "ans3-4";
    ans4.value = "--comment"

    let correctAns = "//comment";

    let answers = document.createElement("ol")
    answers.className = "quiz-answers"
    answers.append(ans1, ans2, ans3, ans4);

    quesBoxThree.append(question, answers);
    quizEl.appendChild(quesBoxThree);

    quesBoxThree.id = "ques-three";
    document.getElementById("ques-three").focus();

    let ans1El = document.querySelector("#ans3-1")
    let ans2El = document.querySelector("#ans3-2")
    let ans3El = document.querySelector("#ans3-3")
    let ans4El = document.querySelector("#ans3-4")
    
    ans1El.addEventListener("click", evaluate);
    ans2El.addEventListener("click", evaluate);
    ans3El.addEventListener("click", evaluate);
    ans4El.addEventListener("click", evaluate);

    function blackout () {
        quesBoxThree.style.opacity = "10%";
        quesBoxThree.style.userSelect = "none";
    }
    
    function evaluate() {
        if (this.value === correctAns) {
            resultScore = resultScore + 20;
            blackout()
            questionFour();
        } else {
            timeLeft = timeLeft - 20;
            blackout()
            questionFour();
          };
    };
};

// question two
function questionTwo() {
    let quesBoxTwo = document.createElement("div");
    quesBoxTwo.className = "quiz-section";

    let question = document.createElement("h1");
    question.textContent = "What is the correct way to call a function?";
    
    let ans1 = document.createElement("button")
    ans1.textContent = "functionName--";
    ans1.id = "ans2-1";
    ans1.value = "functionName--";

    let ans2 = document.createElement("button")
    ans2.textContent = "(functionName)";
    ans2.id = "ans2-2";
    ans2.value = "(functionName)";

    let ans3 = document.createElement("button")
    ans3.textContent = "//functionName";
    ans3.id = "ans2-3";
    ans3.value = "//functionName";

    let ans4 = document.createElement("button")
    ans4.textContent = "functionName()";
    ans4.id = "ans2-4";
    ans4.value = "functionName()";

    let correctAns = "functionName()";


    let answers = document.createElement("ol")
    answers.className = "quiz-answers"
    answers.append(ans1, ans2, ans3, ans4);

    quesBoxTwo.append(question, answers);
    quizEl.appendChild(quesBoxTwo);

    quesBoxTwo.id = "ques-two";
    document.getElementById("ques-two").focus();

    let ans1El = document.querySelector("#ans2-1")
    let ans2El = document.querySelector("#ans2-2")
    let ans3El = document.querySelector("#ans2-3")
    let ans4El = document.querySelector("#ans2-4")
    
    ans1El.addEventListener("click", evaluate);
    ans2El.addEventListener("click", evaluate);
    ans3El.addEventListener("click", evaluate);
    ans4El.addEventListener("click", evaluate);

    function blackout () {
        quesBoxTwo.style.opacity = "10%";
        quesBoxTwo.style.userSelect = "none";
    }
    
    function evaluate() {
        if (this.value === correctAns) {
            resultScore = resultScore + 20;
            blackout()
            questionThree()
        } else {  
            timeLeft = timeLeft - 20;
            blackout()
            questionThree()
        }
    };
};

//question one
function questionOne() {
    let quesBoxOne = document.createElement("div");
    quesBoxOne.className = "quiz-section";

    let question = document.createElement("h1");
    question.textContent = "What is the name for a value that consists of text input?";
    
    let ans1 = document.createElement("button")
    ans1.textContent = "string";
    ans1.id = "answer-one";
    ans1.value = "string";

    let ans2 = document.createElement("button")
    ans2.textContent = "attribute";
    ans2.id = "answer-two";
    ans2.value = "attribute";

    let ans3 = document.createElement("button")
    ans3.textContent = "element";
    ans3.id = "answer-three";
    ans3.value = "element";

    let ans4 = document.createElement("button")
    ans4.textContent = "object";
    ans4.id = "answer-four";
    ans4.value = "object";

    let correctAns = "string"

    let answers = document.createElement("ol")
    answers.className = "quiz-answers"
    answers.append(ans1, ans2, ans3, ans4)

    quesBoxOne.append(question, answers);
    quizEl.appendChild(quesBoxOne);

    quesBoxOne.id = "ques-one";
    document.getElementById("ques-one").focus();

    let ans1El = document.querySelector("#answer-one")
    let ans2El = document.querySelector("#answer-two")
    let ans3El = document.querySelector("#answer-three")
    let ans4El = document.querySelector("#answer-four")
    
    ans1El.addEventListener("click", evaluate);
    ans2El.addEventListener("click", evaluate);
    ans3El.addEventListener("click", evaluate);
    ans4El.addEventListener("click", evaluate);

    function blackout () {
        quesBoxOne.style.opacity = "10%";
        quesBoxOne.style.userSelect = "none";
    }

    function evaluate() {
        if (this.value === correctAns) {
            resultScore = resultScore + 20;
            blackout();
            questionTwo();
        }
        else {
            timeLeft = timeLeft - 20;
            blackout();
            questionTwo(); 
        }
    };

    blackoutWel();
    timeLimit();
};

// event listeners
highScoresEl.addEventListener("click", loadScores);
saveEl.addEventListener("click", saveResult);
startButtonEl.addEventListener("click", questionOne);