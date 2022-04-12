// Quiz game

// Have a home page "Welcome to quiz" etc and start quiz button. 
// make buttons for answer options but only 1 is correct.
// When you click the right answer it turns green and goes to the next question. When you choose the wrong answer it turns red and moves to the next question. 
// When you get a question right the score counter increases by 1. When you get a question wrong the score counter stays the same. 
// Have a home button to exit/ restart the quiz by returning to the homepage.
// At the end have the final score displayed and a well done message / fireworks. Add a start again button to return to the beginning. 
// Have a countdown for each question. If the time runs out, move onto the next question.20 seconds per question. 


const quizQuestions = [
    {image:"./Images/solar-system.jpeg", question:"What is the hottest planet in the solar system?", option1:"Saturn" ,option2:"Mars",option3:"Jupiter", option4:"Venus",correctAnswer:"Venus" },
    {image:"./Images/islands.jpeg", question:"What country has the most islands in the world?", option1:"Indonesia" ,option2:"Sweden",option3:"Japan", option4:"The Philippines",correctAnswer:"Sweden" },
    {image:"./Images/SistineChapel.jpeg", question:"Which artist painted the ceiling of the Sistine Chapel in Rome?", option1:"Michelangelo" ,option2:"Leonardo",option3:"Raphael", option4:"Donatello",correctAnswer:"Michelangelo" },
    {image:"./Images/underground.jpeg", question:"When did they open the London underground?", option1:"1867" ,option2:"1859",option3:"1872", option4:"1863",correctAnswer:"1863" },
    {image:"./Images/piano.jpeg", question:"How many keys does a classic piano have?", option1:"88" ,option2:"92",option3:"82", option4:"78",correctAnswer:"88" },
    {image:"./Images/netflix-logo.jpeg", question:"When was Netflix founded?", option1:"1997" ,option2:"2001",option3:"2009", option4:"2015",correctAnswer:"1997" },
    {image:"./Images/watching-tv.jpeg", question:"What was the most-watched series on Netflix in 2019?", option1:"Black Mirror" ,option2:"Selling Sunsets",option3:"Stranger Things", option4:"Santa Clarita Diet",correctAnswer:"Stranger Things" },
    {image:"./Images/pixar.jpeg", question:"Name Pixar’s first feature-length movie?", option1:"A Bug's Life" ,option2:"Finding Nemo",option3:"Monsters, Inc", option4:"Toy Story",correctAnswer:"Toy Story" },
    {image:"./Images/henry.jpeg", question:"How many of Henry VIII’s wives were called Anne?", option1:"1" ,option2:"2",option3:"3", option4:"4",correctAnswer:"2" },
    {image:"./Images/ravens.jpeg", question:"What is a group of ravens known as?", option1:"Unkindness" ,option2:"Cast",option3:"Pandemonium", option4:"Rafter",correctAnswer:"Unkindness" }
]


const quizImage = document.querySelector(".quiz__img");
const quizQuestion = document.querySelector(".quiz__question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const answerButtons = document.querySelectorAll(".quiz__buttons");
const startButton = document.querySelector(".homepage__startButton");
const resultMessage = document.querySelector(".result__message");
const playerScore = document.querySelector(".score");
let currentScore = 0;
playerScore.innerHTML = "Score: " + currentScore;
const quizSection = document.querySelector(".quiz");
quizSection.style.display = "none";
const resultSection = document.querySelector(".result");
resultSection.style.display = "none";
const homeButton = document.querySelector(".home");
const homepage = document.querySelector(".homepage");
let currentIndex = 0;
const finalScore = document.querySelector(".result__score");
let usedIndex = [];
const questionNumber = document.querySelector(".quiz__qNumber");
let question = 1;
questionNumber.innerHTML = "Question " + question;

// function to display a random question when the index is stated.
const getNextQuestion = (index) => {
    quizImage.setAttribute("src",`${quizQuestions[index].image}`);
            quizQuestion.innerHTML = quizQuestions[index].question;
            option1.innerHTML = quizQuestions[index].option1;
            option2.innerHTML = quizQuestions[index].option2;
            option3.innerHTML = quizQuestions[index].option3;
            option4.innerHTML = quizQuestions[index].option4;
}

// if the answer clicked = the answer to the question, turn green and add 1 to score. If wrong, turn red. After 3 seconds, colors should return to black.
const validateAnswer = (buttonClicked) => {
    if(buttonClicked.innerHTML == quizQuestions[currentIndex].correctAnswer) {
        buttonClicked.classList.add("correctAnswer");
        buttonClicked.classList.remove("quiz__buttons");
        console.log(buttonClicked.classList);
        console.log(quizQuestions[currentIndex].correctAnswer);
        currentScore += 1;
        playerScore.innerHTML = "Score: " + currentScore;
        console.log("current score = " + currentScore);
    }
    else {
        buttonClicked.classList.add("wrongAnswer");
        buttonClicked.classList.remove("quiz__buttons");
        console.log("red");
        console.log(quizQuestions[currentIndex].correctAnswer);
        console.log("current score = " + currentScore);
    }
}

// When startQuiz function is run, hopepage is cleared, quizSection is displayed and first fuestion in the questions array is displayed.
const startQuiz = () => {
    console.log("startquiz");
    homepage.style.display = "none";
    getNextQuestion(0);
    console.log(currentIndex);
    startTimer();
    quizSection.style.display = "block";
}
startButton.addEventListener("click", () => startQuiz());

// function to remove the answer button class and reasign the quiz button class so the colour of the buttons returns to white.
const removeClassList = () => {
    option1.classList.remove("wrongAnswer");
    option1.classList.remove("correctAnswer");
    option1.classList.add("quiz__buttons");
    option2.classList.remove("wrongAnswer");
    option2.classList.remove("correctAnswer");
    option2.classList.add("quiz__buttons");
    option3.classList.remove("wrongAnswer");
    option3.classList.remove("correctAnswer");
    option3.classList.add("quiz__buttons");
    option4.classList.remove("wrongAnswer");
    option4.classList.remove("correctAnswer");
    option4.classList.add("quiz__buttons");
}

// picks a random index to display next. Adds index to array so knows not to use again. once all dislayed, move on to results screen.
const shuffleQuestions = () => {
    removeClassList();
     currentIndex = Math.floor(Math.random() * 9) +1;
    if(!usedIndex.includes(currentIndex)) {
        getNextQuestion(currentIndex);
        usedIndex.push(currentIndex);
        console.log(usedIndex);
        startTimer();
        question +=1;
        questionNumber.innerHTML = "Question " + question;
    }
    else if(usedIndex.length ==9) {
        quizSection.style.display = "none";
        resultSection.style.display = "block";
        createResultMessage();
        playerScore.style.display = "none";
        finalScore.innerHTML = currentScore + "/10";
    }
    else {
        shuffleQuestions();
    }
}

// create a timer to count 15 seconds for each question and a function to stop the timer when needed.
var timeleft = 15;
let questionTimer = 0;

const startTimer = () => {
    timeleft = 15;
    questionTimer = setInterval(function(){
        if(timeleft <= 0){
          clearInterval(questionTimer);
          document.querySelector(".quiz__timer").innerHTML = "Too Slow!";
          shuffleQuestions();
        }
        else {
          document.querySelector(".quiz__timer").innerHTML = timeleft + " s";
        }
        timeleft -= 1;
      }, 1000);
}

const stopTimer = () => {
    if(questionTimer) {
        clearInterval(questionTimer);
    }
}


// When an answer button is clicked, the answer should be validated and coloured green/red. After 3 seconds a new index should be picked and a new question should be displayed. 

answerButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        validateAnswer(e.target);
        stopTimer();
        setTimeout(shuffleQuestions,1000)
    })
})


// A switch case to provide a result message depending on the score.
const createResultMessage = () => {
    switch (currentScore) {
    case 0:
    case 1:
    case 2:
        resultMessage.innerHTML = "Oh dear!";
        console.log("Final score is " + currentScore);
        break;
    
    case 3:
    case 4:
        resultMessage.innerHTML = "Better luck next time!";
        console.log(currentScore);
        break;
    case 5:
    case 6:
    case 7:
        resultMessage.innerHTML = "Nice try!";
        console.log(currentScore);
        break;
    case 8:
    case 9:
        resultMessage.innerHTML = "Goob job!";
        break;
    case 10:
        resultMessage.innerHTML = "You're a star!";
         break;
    default:
            resultMessage.innerHTML = "There's a problem";

}}



// When home button is clicked, quizSection and resultSection are hidden and homepage is displayed. current score returns to 0 and usedIndex is emptied.
homeButton.addEventListener("click", () => {
    homepage.style.display = "block";
    quizSection.style.display = "none";
    resultSection.style.display = "none";
    playerScore.style.display = "block";
    currentScore = 0;
    playerScore.innerHTML = "Score: " + currentScore;
    usedIndex = [];
    stopTimer();
    question = 1;
    questionNumber.innerHTML = "Question " + question;
    currentIndex = 0;
})