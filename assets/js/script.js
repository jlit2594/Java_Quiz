let startButtonEl = document.querySelector("#start");
let saveEl = document.querySelector("#save")
let quizEl = document.querySelector("#content");
let resultScore = 0;

function timeLimit() {
    let timeLeft = 60;
    let timerEl = document.createElement("h2");
    timerEl.className = ("flex-container"); 
    let timeInterval = setInterval(function () {
        if (timeLeft >= 60) {
            timerEl.textContent = timeLeft;
            timeLeft --;
        } else {
            timerEl.textContent = timeLeft;
            clearInterval(timeInterval);
            // displayMessage();
        }
    }, 1000)
}

// document.body.onload = startQuizOne;
function saveResult () {
    let userName = document.querySelector("#name")
    let userInfo = {
        name: userName,
        score: resultScore
    }

    localStorage.setItem('User Info', JSON.stringify(userInfo))
}

function loadResult () {
    let subBox = document.createElement("div")
    subBox.className = "quiz-section-two"

    let submitBtn = document.createElement("button")
    submitBtn.textContent = "SUBMIT YOUR ANSWERS"
    submitBtn.className = "sub-btn"

    subBox.appendChild(submitBtn)
    quizEl.appendChild(subBox)

    let scoreResult = document.querySelector("#score")
    scoreResult.textContent = (" " + resultScore + ". ")
  
    $(".sub-btn").on("click", function () {
      $("#dialog").dialog("open");
  });
};

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

    let ans1El = document.querySelector("#ans5-1")
    let ans2El = document.querySelector("#ans5-2")
    let ans3El = document.querySelector("#ans5-3")
    let ans4El = document.querySelector("#ans5-4")
    
    ans1El.addEventListener("click", evaluate);
    ans2El.addEventListener("click", evaluate);
    ans3El.addEventListener("click", evaluate);
    ans4El.addEventListener("click", evaluate);

    
    function evaluate() {
        if (this.value === correctAns) {
            resultScore = resultScore + 20;
            loadResult()
    }
    else {
        loadResult();   
    };
    console.log(resultScore);
};
};

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

    let ans1El = document.querySelector("#ans4-1")
    let ans2El = document.querySelector("#ans4-2")
    let ans3El = document.querySelector("#ans4-3")
    let ans4El = document.querySelector("#ans4-4")
    
    ans1El.addEventListener("click", evaluate);
    ans2El.addEventListener("click", evaluate);
    ans3El.addEventListener("click", evaluate);
    ans4El.addEventListener("click", evaluate);

    
    function evaluate() {
        if (this.value === correctAns) {
            resultScore = resultScore + 20;
            questionFive();
    }
    else {
        questionFive();
    };
    console.log(resultScore);
};
};

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

    let ans1El = document.querySelector("#ans3-1")
    let ans2El = document.querySelector("#ans3-2")
    let ans3El = document.querySelector("#ans3-3")
    let ans4El = document.querySelector("#ans3-4")
    
    ans1El.addEventListener("click", evaluate);
    ans2El.addEventListener("click", evaluate);
    ans3El.addEventListener("click", evaluate);
    ans4El.addEventListener("click", evaluate);

    
    function evaluate() {
        if (this.value === correctAns) {
            resultScore = resultScore + 20;
            questionFour();
    }
    else {
        questionFour();
};
console.log(resultScore);
};
};

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

    let ans1El = document.querySelector("#ans2-1")
    let ans2El = document.querySelector("#ans2-2")
    let ans3El = document.querySelector("#ans2-3")
    let ans4El = document.querySelector("#ans2-4")
    
    ans1El.addEventListener("click", evaluate);
    ans2El.addEventListener("click", evaluate);
    ans3El.addEventListener("click", evaluate);
    ans4El.addEventListener("click", evaluate);

    
    function evaluate() {
        if (this.value === correctAns) {
            resultScore = resultScore + 20;
            questionThree()
    }
    else {
        questionThree()
    }
    console.log(resultScore)
    };
    

    // correct = true;
    // incorrect = false;
}

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

    let ans1El = document.querySelector("#answer-one")
    let ans2El = document.querySelector("#answer-two")
    let ans3El = document.querySelector("#answer-three")
    let ans4El = document.querySelector("#answer-four")
    
    ans1El.addEventListener("click", evaluate);
    ans2El.addEventListener("click", evaluate);
    ans3El.addEventListener("click", evaluate);
    ans4El.addEventListener("click", evaluate);

    function evaluate() {
        if (this.value === correctAns) {
            resultScore = resultScore + 20;
            questionTwo();
        }
        else {
            questionTwo(); 
        }
    };
}


saveEl.addEventListener("click", saveResult);
startButtonEl.addEventListener("click", questionOne);