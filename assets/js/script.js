let startButton = document.querySelector("#start");

const quizQues = {
    one: "Which of the following is the proper way to declare an object?",
    two: "What is the proper way to make a comment in JavaScript?",
    three: "",
    four: "",
    five: ""
};

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

function startQuizOne() {
    const quesAns = {
        one: "",
        two: "",
        three: "",
        four: ""
    }
    let quesBoxOne = document.createElement("div");
    quesBoxOne.className = "quiz-section";

    let questionOne = document.createElement("h1");
    questionOne.textContent = quizQues.one;

    let answersOne = document.createElement("ol");
    answersOne.textContent = `<li>${quesAns.one}</li>`
    quesBoxOne.append(questionOne,)

    timeLimit();
}

startButton.addEventListener("click", startQuizOne);