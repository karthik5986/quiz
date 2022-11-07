class Quiz {
    constructor(questions, reward) {
        this.reward= reward;
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score +=this.reward;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

var totalMarks = 0;
function displayQuestion(count, quizElement, hasNext, next) {
    QuizNumber(count);
    if (quizElement.isEnded()) {
        totalMarks += quizElement.score;
        if(hasNext){
            clearInterval(quizTimer1);
            countDown2(15);
            displayQuestion(2, quiz2, false, null);
        }
        else{
            clearInterval(quizTimer2);
            countDown3(8);
            displayLogoQuestion();
        }
    } else {
        let questionElement = document.getElementById("qn");
        questionElement.innerHTML = quizElement.getQuestionIndex().text;

        let choices = quizElement.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i], count, quizElement, hasNext, next);
        }

        showProgress(quizElement);
    }
};

function displayLogoQuestion(){
    QuizNumber(3);
    if (quiz3.isEnded()) {
        totalMarks += quiz3.score;
        showScores();
    }else{
        let questionElement = document.getElementById("qn");
        questionElement.innerHTML = `<img src='${quiz3.getQuestionIndex().text}' style='width:30%; height:70%; display:flex; margin-left:auto; margin-right:auto'></img>`;

        let choices = quiz3.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess2("btn" + i, choices[i]);
        }
        showProgress(quiz3);
    }
}

function QuizNumber(Count){
    let quizNumber = document.getElementById("heading");
    quizNumber.innerHTML = `Round ${Count}`;
}

function guess(id, guess, count, quizElement, hasNext, next) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quizElement.guess(guess);
        displayQuestion(count, quizElement, hasNext, next);
    }
};
function guess2(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz3.guess(guess);
        displayLogoQuestion();
    }
};

function showProgress(quizElement) {
    let currentQuestionNumber = quizElement.questionIndex + 1;
    let ProgressElement = document.getElementById("qnNum");
    ProgressElement.innerHTML =
        `Question ${currentQuestionNumber}`;
};

function showScores() {
    var passed="Your results ",result="";
    totalMarks = totalMarks/6;
    if(totalMarks > 9.5){
        result="Admitted to Vellore Campus";
    }else if(totalMarks > 7.5){
        result="Admitted to Chennai Campus";
    }else if(totalMarks > 6.5){
        result="Admitted to Amaravati Campus";
    }
    else{
        passed="Test Failed, better luck next time!";
    }
    let quizEndHTML =
        `
    <h3 class='message'>FINAL SCORECARD</h3>
    <h3 class='score'> ${totalMarks}</h3>
    <h3 class='score'> ${passed}</h3>
    <h3 class='score'> ${result}</h3>
    `;
    let quizElemnt = document.getElementById("quiz");
    quizElemnt.innerHTML = quizEndHTML;

    let quizElemnt2 = document.getElementById("quizHeading");
    quizElemnt2.innerHTML = "<br><br><br><br>";
};

let questions1 = [
    new Question(
        "Which animal never drinks water in its?", ["Kangaroo", "Hippopotamus", "Rat", "Kangaroo rat"], "Kangaroo rat"
    ),
    new Question(
        "What is the physical phase of life called?", ["protoplasm", "cytoplasm", "Organelles", "None of the above"], "protoplasm"
    ),
    new Question(
        "The largest cell is ?", ["nerve cell", "ovum", "The egg of an ostrich", "None of the above"], "The egg of an ostrich"
    ),
    new Question(
        "Which is the largest human cell?", ["Liver", "Skin", "Spleen", "Ovum"], "Ovum"
    ),
    new Question(
        "What is the full form of DNA?", ["Deoxyribonucleic acid", "Deonucleic acid", "Dendronucleic acid", "Dedanucleic acid"], "Deoxyribonucleic acid"
    ),
    new Question(
        "What is the name of the cells in the body that engulf foreign particles like bacteria?", ["Phagocytes", "Globulin", "Fibrogen", "Albumin"], "Phagocytes"
    ),
    new Question(
        "There are _____ number of muscles in human.?", ["638", "637", "639", "640"], "639"
    ),
    new Question(
        "What is the life span of RBC?", ["130 days", "110 days","100 days", "120 days"], "120 days"
    ),
    new Question(
        "What is the life span of WBC?", ["2-15 DAYS", "3-15 DAYS", "4-15 DAYS", "5-20 DAYS"], "2-15 DAYS"
    ),
    new Question(
        "which is the vertebrate that has a two-chambered heart?", ["Fish", "Snake", "Blue Whale", "Crocodile"], "Fish"
    )
];

let questions2 = [
    new Question(
      "Which one is the smallest ocean in the world?", ["Indian", "pacific", "Atlantic", "Arctic"], "Arctic"  
    ),
    new Question(
      "Which country gifted the 'Statue of Liberty' to USA in 1886?", ["France", "canada", "Brazil", "England"], "France"  
    ),
    new Question(
      "Dead sea is located between which two countries?", ["Jordan and Sudan", "Jordan and Israel", "Turkey and UAE", "UAE and Egypt"], "Jordan and Sudan"  
    ),
    new Question(
      "In which ocean 'Bermuda Triangle region is located? ", ["Atlantic", "Indain", "Pacific", "Pacific"], "Atlantic"  
    ),
    new Question(
      "Which country is also known as the 'Land of Rsing Sun?", ["Japan", "New Zealand", "Fiji", "china"], "Japan"  
    )
];

let questions3 = [
    new Question(
        "Images/11.png", ["Spotify", "Amazon muisc", "Wynk muisc", "Gaana music"], "Spotify"
    ),
    new Question(
        "Images/12.png", ["YSRCP party", "BJP party", "TDP party", "Congress party"], "BJP party"
    ),
    new Question(
        "Images/13.jpeg", ["Apple", "oneplus", "samsung", "Redmi"], "Apple"
    ),
    new Question(
        "Images/14.png", ["Doraemon", "Shinchan", "Ben 10", "Power rangers"], "Doraemon"
    ),
    new Question(
        "Images/15.png", ["Instagram", "Facebook", "Twitter", "Whatsapp"], "Instagram"
    )
];

let quiz1 = new Quiz(questions1, 2);
let quiz2 = new Quiz(questions2, 2);
let quiz3 = new Quiz(questions3, 4)

displayQuestion(1, quiz1, true, quiz2);

let counting = document.getElementById("timer");

var quizTimer1, quizTimer2, quizTimer3;

function countDown1(time) {
    let quizTimeInMinutes = time * 60 * 60;
    let quizTime = quizTimeInMinutes / 60;
    quizTimer1 = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer1);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `Time left: ${min}:${sec}`;
        }
    }, 1000);
}
function countDown2(time) {
    let quizTimeInMinutes = time * 60 * 60;
    let quizTime = quizTimeInMinutes / 60;
    quizTimer2 = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer2);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `Time left: ${min}:${sec}`;
        }
    }, 1000);
}
function countDown3(time) {
    let quizTimeInMinutes = time * 60 * 60;
    let quizTime = quizTimeInMinutes / 60;
    quizTimer3 = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer3);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `Time left: ${min}:${sec}`;
        }
    }, 1000);
}
countDown1(15);
