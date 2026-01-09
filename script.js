const screens = document.querySelectorAll(".screen");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const homeBtn = document.getElementById("homeBtn");
const prevBtn = document.getElementById("prevBtn");

const loadingText = document.getElementById("loadingText");
startBtn.disabled = true;


let flashcards = [];
let currentIndex = 0;


const endpoint = "https://pabcl.codelabspace.or.id/flashcards";

fetch(endpoint)
    .then(res => res.json())
    .then(result => {
        flashcards = result.data;
        startBtn.disabled = false;
        loadingText.textContent = "Flashcard siap!";
        console.log("Data dari API:", flashcards);
    })
    .catch(error => {
        console.error("Gagal fetch data:", error);
    });


function showScreen(screenId) {
    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(screenId).classList.add("active");
}

startBtn.addEventListener("click", () => {
    currentIndex = 0;
    renderCard();
    showScreen("flashcard");
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


const questionText = document.getElementById("questionText");
const answerText = document.getElementById("answerText");
const hintTextFront = document.querySelector(".card-front .hint");
const hintTextBack = document.querySelector(".card-back .hint");
const counterText = document.querySelector(".navigation span");
const progressBar = document.querySelector(".progress-bar");
const progressText = document.querySelector(".progress-text");


function renderCard() {
    const currentCard = flashcards[currentIndex];

    questionText.textContent = currentCard.question;
    answerText.textContent = currentCard.answer;

    hintTextFront.textContent = "Klik kartu untuk melihat arti";
    hintTextBack.textContent = "Klik kartu untuk melihat kata";

    counterText.textContent = `${currentIndex + 1} / ${flashcards.length}`;

    const progressPercent = ((currentIndex + 1) / flashcards.length) * 100;
    progressBar.style.width = progressPercent + "%";

    progressText.textContent =
        `Kamu sudah belajar ${currentIndex + 1} dari ${flashcards.length} kata`;

    card.classList.remove("flip");

    prevBtn.disabled = currentIndex === 0;

}


const card = document.getElementById("card");
card.addEventListener("click", () => {
    card.classList.toggle("flip");
});



