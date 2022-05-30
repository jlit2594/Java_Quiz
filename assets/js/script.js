let startButtonEl = document.querySelector("#start");
let quizEl = document.querySelector("#content");

const quizQues = [
    {
    question: "Which is a string?",
    answers: {
        a: ""
    }
};]

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

function startQuizOne(event) {
   

    let quesBoxOne = document.createElement("div");
    quesBoxOne.className = "quiz-section";

    let questionOne = document.createElement("h1");
    questionOne.textContent = quizQues.one;

    let answersOne = document.createElement("ul");
    // answersOne.textContent = "<li> " + quesAns.one + " </li><li> " + quesAns.two + "</li><li>" + quesAns.three + "</li><li>" + quesAns.four + "</li>";
    answersOne.textContent = quesAns.one + quesAns.two + quesAns.three + quesAns.four;

    quesBoxOne.append(questionOne, answersOne);
    quizEl.appendChild(quesBoxOne);

    // timeLimit();
}

startButtonEl.addEventListener("click", startQuizOne);