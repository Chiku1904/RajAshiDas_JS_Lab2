
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

function Question(text, options, answer) {

    this.text = text;
    this.options = options;
    this.answer = answer;

}
Quiz.prototype.getQuestionByIndex = function () {
    return this.questions[this.questionIndex];
}

Quiz.prototype.checkOptionWithAnswer = function (ans) {
    if (this.getQuestionByIndex().answer == ans) {
        this.score++;
    }
    this.questionIndex++;
}

Quiz.prototype.isEnded = function () {
    return this.questionIndex == this.questions.length;
}

let questions = [
    new Question("Javascript supports", ["Functions", "XHTML", "CSS", "HTML"], "Functions"),
    new Question("Which language used for styling web pages", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which is not a Javascript Framework", ["Python", "JQuery", "Django", "NodeJS"], "Django"),
    new Question("Which is used to connect to Database", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("Javascript is a", ["Language", "Programming Language", "Development", "All"], "Programming Language")
];
let quiz = new Quiz(questions);
console.log(quiz.questions[4]);



function displayQuestions() {

    if (quiz.isEnded()) {
        showScores();
    } else {
        let questionElem = document.getElementById("question");
        questionElem.innerText = quiz.getQuestionByIndex().text;
        console.log(questions[quiz.questionIndex]);


        let choices = quiz.getQuestionByIndex().options;
        for (let i = 0; i < choices.length; i++) {
            let elem = document.getElementById("choice" + i);
            elem.innerText = choices[i];
            handleClickOnBtn("btn" + i, choices[i])
        }
        showProgress();
    }

}

function handleClickOnBtn(id, choice) {

    let buttonElem = document.getElementById(id);

    buttonElem.onclick = function () {
        quiz.checkOptionWithAnswer(choice);
        displayQuestions();

    }

}

function showProgress() {
    let current = quiz.questionIndex + 1;
    let elem = document.getElementById("progress");
    elem.innerText = `Question ${current} of ${quiz.questions.length}`;
}

function showScores() {

    let result = `<h1>Result</h1><h2>Your Score: ${quiz.score}. And mark percentage is: ${(quiz.score / questions.length) * 100}</h2>`
    let quizElem = document.getElementById("quiz");
    quizElem.innerHTML = result;
}

displayQuestions();




