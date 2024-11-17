// script.js
// script.js

function validateForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorMessage = document.getElementById("error-message");

    if (!username || !email || !password || !confirmPassword) {
        errorMessage.textContent = "All fields are required!";
        return false;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        return false;
    }

    errorMessage.textContent = "";
    alert("Signup successful!");
    return true;
}
function validateForm() {
    // Add your form validation logic here
    // If validation is successful, show the quiz section
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    return false; // Prevent form submission for demonstration purposes
}



const quizData = [
    { question: "What is the capital of France?", options: ["Paris", "London", "Rome", "Berlin"], answer: "Paris" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
    { question: "What is the full form of LPU?", options: ["Lovely Professional University","Landra Professional Univesrity", "Lavish Professional University", "None of these"], answer: "Lovely professional University" },
    { question: "Who is known as the 'Father of Computers?", options: ["Charles Babbage", " Alan Turing", " John von Neumann", " Bill Gates"], answer: "Charles Babbage" },
    { question: "What is the longest river in the world?", options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"], answer: "Amazon River" },

];


let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const nextButton = document.getElementById("next");
const scoreDisplay = document.getElementById("score");
const scoreValue = document.getElementById("score-value");

function loadQuestion() {
    const questionData = quizData[currentQuestionIndex];
    quizContainer.innerHTML = `
        <p>${questionData.question}</p>
        ${questionData.options.map(option => `
            <div class="option">
                <input type="radio" name="answer" value="${option}" id="${option}">
                <label for="${option}">${option}</label>
            </div>
        `).join('')}
    `;
}let timer; // Variable to hold the timer
let timeLeft = 60; // Set the total time for the quiz in seconds

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Time's up!"); // Alert the user that time is up
            // Optionally, you can end the quiz here
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    quizContainer.style.display = "none";
    submitButton.style.display = "none";
    nextButton.style.display = "none";
    scoreDisplay.style.display = "block";
    scoreValue.textContent = score;
}

// Modify the loadQuestion function to start the timer
function loadQuestion() {
    const questionData = quizData[currentQuestionIndex];
    quizContainer.innerHTML = `
        <p>${questionData.question}</p>
        ${questionData.options.map(option => `
            <div class="option">
                <input type="radio" name="answer" value="${option}" id="${option}">
                <label for="${option}">${option}</label>
            </div>
        `).join('')}
    `;
}

// Call startTimer when the quiz starts
function validateForm() {
    // Other validation logic...
    
    // Start the quiz and timer
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    startTimer(); // Start the timer when the quiz starts
    return false; // Prevent form submission for demonstration purposes
}


function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        const answer = selectedOption.value;
        if (answer === quizData[currentQuestionIndex].answer) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            quizContainer.style.display = "none";
            submitButton.style.display = "none";
            nextButton.style.display = "none";
            scoreDisplay.style.display = "block";
            scoreValue.textContent = score;
        }
    } else {
        alert("Please select an answer!");
    }
}

submitButton.addEventListener("click", checkAnswer);
loadQuestion();
