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
const option1 = document.querySelector(".quiz__option1");
const option2 = document.querySelector(".quiz__option2");
const option3 = document.querySelector(".quiz__option3");
const option4 = document.querySelector(".quiz__option4");
const answerButtons = document.querySelectorAll(".answerButtons");
const startButton = document.querySelector(".homepage__startButton");
const resultMessage = document.querySelector(".result__message");
const playerScore = document.querySelector(".score");
let currentScore = 0;
playerScore.innerHTML = "Score:" + currentScore;
const quizSection = document.querySelector(".quiz");
quizSection.style.display = "none";
const resultSection = document.querySelector(".result");
resultSection.style.display = "none";
const homeButton = document.querySelector(".home");
const homepage = document.querySelector(".homepage");
let currentIndex = 0;

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
        buttonClicked.style.color = "green";
        console.log("green");
        console.log(quizQuestions[currentIndex].correctAnswer);
        currentScore += 1;
        setTimeout(buttonClicked.style.color = "#000", 3000)
    }
    else {
        buttonClicked.style.color = "red";
        console.log("red");
        console.log(quizQuestions[currentIndex].correctAnswer);
        setTimeout(buttonClicked.style.color = "#000", 3000)
    }
}

// When startQuiz function is run, hopepage is cleared, quizSection is displayed and first fuestion in the questions array is displayed.
const startQuiz = () => {
    console.log("startquiz");
    homepage.style.display = "none";
    getNextQuestion(0);
    startTimer();
    quizSection.style.display = "block";
}
startButton.addEventListener("click", () => startQuiz());



// picks a random index to display next. Adds index to array so knows not to use again. once all dislayed, move on to results screen.
const shuffleQuestions = () => {
     currentIndex = Math.floor(Math.random() * 10)+1;
    if(!usedIndex.includes(currentIndex)) {
        getNextQuestion(currentIndex);
        usedIndex.push(currentIndex);
        console.log(usedIndex);
        startTimer();
    }
    else if(usedIndex.length ==9) {
        quizSection.style.display = "none";
        resultSection.style.display = "block";
    }
}

// create a timer to count 15 seconds for each question
var timeleft = 15;
let questionTimer = 0;

const startTimer = () => {
    timeleft = 15;
    questionTimer = setInterval(function(){
        if(timeleft <= 0){
          clearInterval(questionTimer);
          document.querySelector(".quiz__timer").innerHTML = "Too Slow!";
          shuffleQuestions();
        // } else if (answerButtons.clicked == "true") {
        //     clearInterval(downloadTimer);
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
let usedIndex = [];
answerButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        validateAnswer(e.target);
        stopTimer();
        setTimeout(shuffleQuestions,3000)
    })
})





// When given results message depending on score.
switch (playerScore) {
    case playerScore >= 8:
        resultMessage.innerHTML = "Good job!"
        break;
    case playerScore >= 5:
        resultMessage.innerHTML = "Nice try!"
        break;
    case playerScore >= 3:
        resultMessage.innerHTML = "Better luck next time!"
        break;
    default:
        resultMessage.innerHTML = "Oh dear!"
        break;
}


// When home button is clicked, quizSection and resultSection are hidden and homepage is displayed. current score returns to 0 and usedIndex is emptied.
homeButton.addEventListener("click", () => {
    homepage.style.display = "block";
    quizSection.style.display = "none";
    resultSection.style.display = "none";
    currentScore = 0;
    usedIndex = [];
    clearInterval(downloadTimer);
})

