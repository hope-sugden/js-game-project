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


const quizImage = document.querySelector(".quiz_image.src");
const quizQuestion = document.querySelector(".quiz_question");
const option1 = document.querySelector(".quiz_option1");
const option2 = document.querySelector(".quiz_option2");
const option3 = document.querySelector(".quiz_option3");
const option4 = document.querySelector(".quiz_option4");
const answerButtons = document.querySelectorAll(".answerButtons");
const startButton = document.querySelector(".homepage_startButton");
const resultMessage = document.querySelector(".result_message");
const quizSection = document.querySelector(".quiz");
quizSection.style.display = "none";


startButton.addEventListener("click", () => {
    startQuiz();
    quizSection.style.display = "block";
})

const startQuiz = () => {
    const homepage = document.querySelector(".homepage");
    console.log("startquiz");
    homepage.remove();
}

// quizImage = quizQuestions[0].image;
quizQuestion.innerHTML = quizQuestions[0].question;
option1.innerHTML = quizQuestions[0].option1;
option2.innerHTML = quizQuestions[0].option2;
option3.innerHTML = quizQuestions[0].option3;
option4.innerHTML = quizQuestions[0].option4;

answerButtons.forEach(button => {
    button.addEventListener("click", () => {
        // loop to next index in the questions array
        quizQuestions.forEach(question => {
            quizQuestion.innerHTML = quizQuestions[question].question;
            option1.innerHTML = quizQuestions[question].option1;
            option2.innerHTML = quizQuestions[question].option2;
            option3.innerHTML = quizQuestions[question].option3;
            option4.innerHTML = quizQuestions[question].option4;
        //     // if(button.innerHTML == quizQuestions[0].correctAnswer) {
            //     button.style.background-color = #00FA9A;
            // }
        })
       
        
    })
});
switch (score) {
    case score >= 8:
        resultMessage.innerHTML = "Good job!"
        break;
    case score >= 5:
        resultMessage.innerHTML = "Nice try!"
        break;
    case score >= 3:
        resultMessage.innerHTML = "Better luck next time!"
        break;
    default:
        resultMessage.innerHTML = "Oh dear!"
        break;
}

