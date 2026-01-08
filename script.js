const screens = document.querySelectorAll(".screen");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const homeBtn = document.getElementById("homeBtn");

function showScreen(screenId) {
    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(screenId).classList.add("active");
}

startBtn.addEventListener("click", () => {
    currentIndex = 0;
    showAnswer = false;
    renderCard();
    showScreen("flashcard")
});

nextBtn.addEventListener("click", () => {
    if (currentIndex < flashcards.length - 1) {
        currentIndex++;
        showAnswer = false;
        renderCard();
    } else {
        showScreen("finish");
    }
});

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        showAnswer = false;
        renderCard();
    }
});

restartBtn.addEventListener("click", () => {
    showScreen("flashcard")
});

homeBtn.addEventListener("click", () => {
    showScreen("home")
});

const flashcards = [
    { question: "RUN", answer: "BERLARI" },
    { question: "EAT", answer: "MAKAN" },
    { question: "SLEEP", answer: "TIDUR" },
    { question: "DRINK", answer: "MINUM" }
];

const cardTitle = document.querySelector(".card h2");
const hintText = document.querySelector(".hint");
const counterText = document.querySelector(".navigation span");
const progressBar = document.querySelector(".progress-bar");
const progressText = document.querySelector(".progress-text");


function renderCard() {
    const currentCard = flashcards[currentIndex];

    if (showAnswer) {
        cardTitle.textContent = currentCard.answer;
        hintText.textContent = "Klik kartu untuk melihat kata";
    } else {
        cardTitle.textContent = currentCard.question;
        hintText.textContent = "Klik kartu untuk melihat arti";
    }

    counterText.textContent = `${currentIndex + 1} / ${flashcards.length}`;

    const progressPercent = ((currentIndex + 1) / flashcards.length) * 100;
    progressBar.style.width = progressPercent + "%";

    progressText.textContent = `Kamu sudah belajar ${currentIndex + 1} dari ${flashcards.length} kata`;
}

const card = document.getElementById("card");
card.addEventListener("click", () => {
    showAnswer = !showAnswer;
    renderCard();
});



