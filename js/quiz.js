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

// Keep track of the currently playing music clip
let currentQuestionAudio = null;

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
const playClip = document.getElementById("playClip");
const nextQuestion = document.getElementById("nextQuestion");

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
"🎵 Music Round": {
    title: "🎵 Round 5 – Music Round",
    photo: "images/rounds/music.jpg",
    message: "Can you recognise these famous tunes? Listen carefully, then answer the question before the reveal!"
},
"✅ True or False": {
    title: "✅ Round 6 – True or False",
    photo: "images/rounds/true-false.jpg",
    message: "Decide whether each statement is true or false. Some are easy... others might catch you out!"

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
question.style.display = "block";

feedback.textContent = "";
feedback.style.display = "block";
    nextQuestion.style.display = "none";
    playClip.style.display = "none";
    playClip.disabled = false;
    playClip.textContent = "▶️ Play Clip";

    progress.style.width =
        (currentQuestion / questions.length) * 100 + "%";

  if (q.image) {
    questionImage.src = q.image;
    questionImage.className = "question-image";

    imageCaption.textContent = q.caption || "";

   if (q.revealImageAfterAnswer && !q.revealImage) {
        photoFrame.style.display = "none";
        questionImage.style.display = "none";
        imageCaption.style.display =
    (q.caption && !q.showPhotoTitleAfterAnswer) ? "block" : "none";
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
if (q.audioQuestion) {
    playClip.style.display = "inline-block";

    // Disable answer buttons until the clip has played once
    buttons.forEach(btn => btn.disabled = true);

    playClip.onclick = () => {

        if (currentQuestionAudio) {
            currentQuestionAudio.pause();
            currentQuestionAudio.currentTime = 0;
        }

        currentQuestionAudio = new Audio(q.audioQuestion);
        currentQuestionAudio.play();

        playClip.disabled = true;

        currentQuestionAudio.onended = () => {

    // Hide the button once the intro has finished
    playClip.style.display = "none";

    // Now allow the user to answer
    buttons.forEach(btn => btn.disabled = false);
};
    };
}
  buttons.forEach((button, index) => {

    if (q.type === "truefalse") {

        if (index > 1) {
            button.style.display = "none";
            return;
        }

        button.style.display = "block";
        button.style.width = "100%";

    } else {

        button.style.display = "block";
        button.style.width = "";

    }

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

    // Stop the question music if it's still playing
    if (currentQuestionAudio) {
        currentQuestionAudio.pause();
        currentQuestionAudio.currentTime = 0;
    }

    // Hide the Play Again button while the answer audio plays
    playClip.style.display = "none";
    playClip.disabled = true;

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
setTimeout(() => {

    // Make the answer screen more compact
    question.style.display = "none";
    feedback.style.display = "none";

    if ((q.revealImageAfterAnswer || q.showPhotoTitleAfterAnswer) && q.image) {

    buttons.forEach(btn => btn.style.display = "none");

   photoFrame.style.display = "block";
questionImage.style.display = "block";
questionImage.src = q.revealImage || q.image;

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
}, 1200);
        scoreText.textContent = `⭐ Score: ${score}`;
        
        // Play question audio, if one has been provided
const answerAudio =
    questions[currentQuestion].audioAnswer ||
    questions[currentQuestion].audio;

function moveToNextQuestion() {
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
}
nextQuestion.onclick = () => {
    nextQuestion.style.display = "none";
    moveToNextQuestion();
};

if (answerAudio) {
    const revealAudio = new Audio(answerAudio);

    revealAudio.addEventListener("ended", () => {

    if (questions[currentQuestion].audioQuestion || questions[currentQuestion].manualNext) {

        if (questions[currentQuestion].audioFull) {

            playClip.style.display = "inline-block";
            playClip.disabled = false;
            playClip.textContent = "▶️ Play Full Clip";

            playClip.onclick = () => {

    const fullAudio = new Audio(questions[currentQuestion].audioFull);

    // Prevent moving on while the full clip is playing
    nextQuestion.disabled = true;
    playClip.disabled = true;
    playClip.textContent = "🎵 Playing...";

    fullAudio.addEventListener("ended", () => {
        nextQuestion.disabled = false;
        playClip.disabled = false;
        playClip.textContent = "▶️ Play Full Clip";
    });

    fullAudio.play().catch(() => {
        nextQuestion.disabled = false;
        playClip.disabled = false;
        playClip.textContent = "▶️ Play Full Clip";
    });
};
        }

        nextQuestion.style.display = "inline-block";

    } else {

        moveToNextQuestion();

    }

});

    revealAudio.play().catch(() => {

       if (questions[currentQuestion].audioQuestion || questions[currentQuestion].manualNext) {
            nextQuestion.style.display = "inline-block";
        } else {
            setTimeout(moveToNextQuestion, 5000);
        }

    });

} else {

    nextQuestion.style.display = "inline-block";

}
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
let slideshowTimer = null;
let slideshowPaused = false;

const previousSlideButton =
    document.getElementById("previousSlide");

const nextSlideButton =
    document.getElementById("nextSlide");

const pauseSlideshowButton =
    document.getElementById("pauseSlideshow");

const closeSlideshowButton =
    document.getElementById("closeSlideshow");

function displaySlideshowImage() {
    const slideshowImage =
        document.getElementById("slideshow-image");

    if (!slideshowImage) {
        return;
    }

    slideshowImage.src =
        slideshowImages[slideshowIndex];

    slideshowImage.classList.remove("fade-out");
}


function startSlideshowTimer() {
    clearInterval(slideshowTimer);

    slideshowTimer = setInterval(() => {

        if (slideshowPaused) {
            return;
        }

        slideshowIndex++;

        if (slideshowIndex >= slideshowImages.length) {
            clearInterval(slideshowTimer);

            const slideshow =
                document.getElementById("slideshow");

            slideshow.classList.add("hidden");
            showSlideshowEnding();
            return;
        }

        displaySlideshowImage();

    }, 6500);
}


function startSlideshow() {
    const slideshow =
        document.getElementById("slideshow");

    if (!slideshow || slideshowImages.length === 0) {
        return;
    }

    clearInterval(slideshowTimer);

    slideshowIndex = 0;
    slideshowPaused = false;

    pauseSlideshowButton.textContent = "⏸ Pause";

    slideshow.classList.remove("hidden");

    displaySlideshowImage();
    startSlideshowTimer();
}


previousSlideButton.addEventListener("click", () => {
    slideshowIndex--;

    if (slideshowIndex < 0) {
        slideshowIndex = slideshowImages.length - 1;
    }

    displaySlideshowImage();
});


nextSlideButton.addEventListener("click", () => {
    slideshowIndex++;

    if (slideshowIndex >= slideshowImages.length) {
        slideshowIndex = 0;
    }

    displaySlideshowImage();
});


pauseSlideshowButton.addEventListener("click", () => {
    slideshowPaused = !slideshowPaused;

    if (slideshowPaused) {
        clearInterval(slideshowTimer);
        pauseSlideshowButton.textContent = "▶ Play";
    } else {
        pauseSlideshowButton.textContent = "⏸ Pause";
        startSlideshowTimer();
    }
    
});

    closeSlideshowButton.addEventListener("click", () => {

    clearInterval(slideshowTimer);

    const slideshow =
        document.getElementById("slideshow");

    slideshow.classList.add("hidden");

    showSlideshowEnding();

});

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

    <button id="watchSlideshowAgain" class="start-btn">
        📸 Watch Slideshow Again
    </button>

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
    .getElementById("watchSlideshowAgain")
    .addEventListener("click", () => {
        startSlideshow();
    });
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