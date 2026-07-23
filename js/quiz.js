// ==========================================
// Keith & Anne's Diamond Challenge
// Quiz Version 2
// ==========================================

// Player name
const playerName = localStorage.getItem("playerName") || "Guest";

// Quiz state
let currentQuestion = 0;
let score = 0;
let currentRound = "";

// Page elements
const player = document.getElementById("playerName");
const scoreText = document.getElementById("score");
const questionNumber = document.getElementById("questionNumber");
const question = document.getElementById("question");
const questionImage = document.getElementById("questionImage");
const imageCaption = document.getElementById("imageCaption");
const photoFrame = document.getElementById("photoFrame");
const feedback = document.getElementById("feedback");
const progress = document.getElementById("progress");

const buttons = document.querySelectorAll(".answer");
const correctSound = new Audio("sounds/correct.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");
const card = document.querySelector(".card");

const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");
const roundOverlay = document.getElementById("roundOverlay");
const roundTitle = document.getElementById("roundTitle");
const roundPhoto = document.getElementById("roundPhoto");
const roundMessage = document.getElementById("roundMessage");
const continueRound = document.getElementById("continueRound");
const roundInfo = {

    "💍 Wedding Day": {
        title: "💍 Round 1 – Wedding Day",
        photo: "images/rounds/wedding.jpg",
        message: "Every great love story has a beginning. Let's travel back to where Keith and Anne's wonderful journey together first began."
    },

    "👨‍👩‍👧 Family": {
        title: "👨‍👩‍👧 Round 2 – Family",
        photo: "images/rounds/family.jpg",
        message: "From two became many. Time to see how well you know the children, grandchildren and the memories they've created together."
    },

    "🏖️ Holidays": {
        title: "🏖️ Round 3 – Holidays",
        photo: "images/rounds/holidays.jpg",
        message: "Suitcases packed! Let's revisit some of Keith and Anne's favourite holidays and adventures over the years."
    },

    "📅 Guess the Year": {
        title: "📅 Round 4 – Guess the Year",
        photo: "images/rounds/year.jpg",
        message: "Can you remember when these special moments happened? Let's put your memory to the test!"
    },

    "❤️ Keith & Anne": {
        title: "❤️ Final Round – Keith & Anne",
        photo: "images/rounds/diamond.jpg",
        message: "One last celebration of an incredible 60 years of love, laughter and memories. Good luck!"
    }

};
function showRound(round) {
    const info = roundInfo[round];

    if (!info) {
        displayQuestion();
        return;
    }

    roundTitle.textContent = info.title;
    roundPhoto.src = info.photo;
    roundMessage.textContent = info.message;

    roundOverlay.style.display = "flex";
    document.body.style.overflow = "hidden";
}

continueRound.addEventListener("click", () => {
    roundOverlay.style.display = "none";
    document.body.style.overflow = "auto";
    displayQuestion();
});
// ==========================================
// Load Question
// ==========================================

function loadQuestion() {
    const q = questions[currentQuestion];

    if (q.round !== currentRound) {
        currentRound = q.round;
        showRound(currentRound);
        return;
    }

    displayQuestion();
}
function displayQuestion() {
    const q = questions[currentQuestion];

    player.textContent = `👤 ${playerName}`;
    scoreText.textContent = `⭐ Score: ${score}`;

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    question.textContent = q.question;
    feedback.textContent = "";

    progress.style.width =
        (currentQuestion / questions.length) * 100 + "%";

  if (q.image) {
    questionImage.src = q.image;
    questionImage.className = "question-image";

    imageCaption.textContent = q.caption || "";

    if (q.revealImageAfterAnswer) {
        photoFrame.style.display = "none";
        questionImage.style.display = "none";
        imageCaption.style.display = "none";
    } else {
        photoFrame.style.display = "block";
        questionImage.style.display = "block";
        imageCaption.style.display =
            q.caption ? "block" : "none";
    }

} else {
    photoFrame.style.display = "none";

    questionImage.removeAttribute("src");
    questionImage.style.display = "none";

    imageCaption.textContent = "";
    imageCaption.style.display = "none";
}
    buttons.forEach((button, index) => {
        button.textContent = q.answers[index];
        button.disabled = false;
        button.style.background = "#7a1838";
    });
}
function showCorrectSparkles() {

    const shimmer = document.createElement("div");
    shimmer.className = "diamond-shimmer";

    feedback.appendChild(shimmer);

    setTimeout(() => {
        shimmer.remove();
    }, 1200);

}

// ==========================================
// Check Answer
// ==========================================

buttons.forEach((button, index) => {

    button.addEventListener("click", () => {

        // Disable all buttons
        buttons.forEach(btn => btn.disabled = true);

        const correct = questions[currentQuestion].correct;

      if (index === correct) {

    score++;
    button.style.background = "green";
   feedback.innerHTML = '<span class="green-tick">✅</span> <span class="correct-text">Correct!</span>';

    showCorrectSparkles();

    correctSound.currentTime = 0;
    correctSound.play();

} else {

    button.style.background = "red";
    buttons[correct].style.background = "green";
    feedback.textContent = "❌ Not quite!";

    wrongSound.currentTime = 0;
    wrongSound.play();
}
const q = questions[currentQuestion];

if (q.revealImageAfterAnswer && q.image) {

    photoFrame.style.display = "block";
    questionImage.style.display = "block";

    // Restart the fade-in animation
    questionImage.classList.remove("fade-in");
    void questionImage.offsetWidth;
    questionImage.classList.add("fade-in");

   if (q.photoTitle || q.photoText || q.caption) {

    if (q.photoTitle || q.photoText) {
        imageCaption.innerHTML = `
            ${q.photoTitle
                ? `<strong class="photo-note-title">${q.photoTitle}</strong>`
                : ""}
            ${q.photoText
                ? `<span class="photo-note-text">${q.photoText}</span>`
                : ""}
        `;
    } else {
        imageCaption.textContent = q.caption;
    }

    imageCaption.style.display = "block";

    imageCaption.classList.remove("reveal-caption");
    void imageCaption.offsetWidth;
    imageCaption.classList.add("reveal-caption");
}
}
        scoreText.textContent = `⭐ Score: ${score}`;
        
        // Play question audio, if one has been provided
const audioFile = questions[currentQuestion].audio;

if (audioFile) {
    const questionAudio = new Audio(audioFile);
    questionAudio.play();
}

        // Pause before next question

        setTimeout(() => {

            card.classList.add("fade-out");

            setTimeout(() => {

                currentQuestion++;

                if (currentQuestion < questions.length) {

                    loadQuestion();

                    card.classList.remove("fade-out");
                    card.classList.add("fade-in");

                    setTimeout(() => {
                        card.classList.remove("fade-in");
                    }, 300);

                } else {

    card.classList.remove("fade-out");
    card.classList.remove("fade-in");

    showFinalScreen();

}

            }, 300);

      }, questions[currentQuestion].audio
    ? 15000
    : questions[currentQuestion].revealImageAfterAnswer
        ? 5000
        : 1000);

    });

});

// ==========================================
// Final Screen
// ==========================================

// ==========================================
// Confetti
// ==========================================

function launchConfetti() {

    const colours = [
        "#d4af37",
        "#ffd700",
        "#7a1838",
        "#ffffff",
        "#ff69b4",
        "#4CAF50"
    ];

    for (let i = 0; i < 120; i++) {

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.background =
            colours[Math.floor(Math.random() * colours.length)];

        piece.style.width = (6 + Math.random() * 8) + "px";
        piece.style.height = piece.style.width;

        piece.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        document.body.appendChild(piece);

        setTimeout(() => piece.remove(), 5000);

    }

}
function showFinalScreen() {

    progress.style.width = "100%";

    let heading = "";
    let message = "";

    if (score === questions.length) {

        heading = "🌟 PERFECT SCORE! 🌟";
        message = "You really know Keith & Anne!";

    } else if (score >= 4) {

        heading = "🎉 Excellent! 🎉";
        message = "What a fantastic score!";

    } else if (score >= 3) {

        heading = "😊 Well Done! 😊";
        message = "You know Keith & Anne pretty well!";

    } else if (score >= 2) {

        heading = "👏 Thanks for Playing!";
        message = "Every memory is special.";

    } else {

        heading = "❤️ Thanks for Celebrating!";
        message = "We hope you enjoyed the Diamond Challenge.";

    }

    launchConfetti();

    card.innerHTML = `
        <div class="finish-screen">

            <img
                src="images/keith-anne-now.jpg"
                class="finish-photo"
                alt="Keith & Anne">

            <h1 class="finish-title">
                🏆 Congratulations ${playerName}! 🏆
            </h1>

            <div class="finish-score">
                ⭐ ${score} / ${questions.length} ⭐
            </div>

            <h2 class="finish-heading">
                ${heading}
            </h2>

            <p class="finish-message">
                ${message}
            </p>

            <p class="finish-thanks">
    ❤️ Thank you for taking part in
    <strong>Keith & Anne's Diamond Challenge</strong>
    and helping us celebrate
    <strong>60 wonderful years of marriage.</strong>
</p>

<p class="finish-message">
    We hope this quiz brought back happy memories and a few smiles.
</p>

<p class="finish-footer">
    With all our love,<br>
    <strong>The Family ❤️</strong><br><br>
    Diamond Wedding Anniversary • 2026
</p>
<div class="finish-buttons">
    <button id="viewSlideshow" class="start-btn">
        📸 View Slideshow
    </button>

    <button id="playAgain" class="start-btn">
        🔄 Play Again
    </button>
</div>
        </div>
    `;
const viewSlideshowButton = document.getElementById("viewSlideshow");
const playAgainButton = document.getElementById("playAgain");

viewSlideshowButton.addEventListener("click", () => {
    startSlideshow();
});

playAgainButton.addEventListener("click", () => {
    window.location.href = "index.html";
});
}
// ==========================================
// Image Popup
// ==========================================

questionImage.addEventListener("click", () => {

    if (questionImage.style.display !== "none") {

        modalImage.src = questionImage.src;
        imageModal.classList.add("show");

    }

});

closeModal.addEventListener("click", () => {

    imageModal.classList.remove("show");

});

imageModal.addEventListener("click", (e) => {

    if (e.target === imageModal) {

        imageModal.classList.remove("show");

    }

});

// ==========================================
// Start Quiz
// ==========================================


// Final photo slideshow

const slideshowImages = [
    "images/slideshow/slide1.jpg",
    "images/slideshow/slide2.jpg",
    "images/slideshow/slide3.jpg",
    "images/slideshow/slide4.jpg",
    "images/slideshow/slide5.jpg",
    "images/slideshow/slide6.jpg"
];

let slideshowIndex = 0;
let slideshowTimer;

function startSlideshow() {
    const slideshow =
        document.getElementById("slideshow");

    const slideshowImage =
        document.getElementById("slideshow-image");

    if (
        !slideshow ||
        !slideshowImage ||
        slideshowImages.length === 0
    ) {
        return;
    }

    clearInterval(slideshowTimer);

    slideshowIndex = 0;

    slideshowImage.classList.remove("hidden");
    slideshowImage.classList.remove("fade-out");

    slideshowImage.src =
        slideshowImages[slideshowIndex];

    slideshow.classList.remove("hidden");

    slideshowTimer = setInterval(() => {

        slideshowImage.classList.add("fade-out");

        setTimeout(() => {

            slideshowIndex++;

            if (slideshowIndex >= slideshowImages.length) {

                clearInterval(slideshowTimer);

                slideshow.classList.add("hidden");

                showSlideshowEnding();

                return;
            }

            slideshowImage.src =
                slideshowImages[slideshowIndex];

            slideshowImage.classList.remove("fade-out");

        }, 1800);

    }, 6500);
}

function showSlideshowEnding() {

    card.innerHTML = `
        <div class="finish-screen">

            <h1 class="finish-title">
                ❤️ Thank You ❤️
            </h1>

            <p class="finish-message">
                Thank you for celebrating
                <strong>
                    Keith & Anne's Diamond Wedding Anniversary
                </strong>.
            </p>

            <p class="finish-message">
                We hope you've enjoyed looking back over
                <strong>60 wonderful years</strong>
                of love, laughter and family memories.
            </p>

            <p class="finish-footer">
                With all our love,<br>
                <strong>The Family ❤️</strong>
            </p>

            <div class="finish-buttons">

                <button id="slideshowHome" class="start-btn">
                    🏠 Home
                </button>

                <button id="slideshowPlayAgain" class="start-btn">
                    🔄 Play Again
                </button>

            </div>

        </div>
    `;

    document
        .getElementById("slideshowHome")
        .addEventListener("click", () => {
            window.location.href = "index.html";
        });

    document
        .getElementById("slideshowPlayAgain")
        .addEventListener("click", () => {
            window.location.href = "quiz.html";
        });
}
// Start the quiz
loadQuestion();