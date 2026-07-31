// Redirect anyone who hasn't unlocked the quiz
if (sessionStorage.getItem("diamondQuizUnlocked") !== "true") {
    window.location.href = "index.html";
}
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
let playerAnswers = [];

// Keep track of the currently playing music clip
let currentQuestionAudio = null;

// Page elements
const player = document.getElementById("playerName");
const scoreText = document.getElementById("score");
const questionNumber = document.getElementById("questionNumber");
const question = document.getElementById("question");
const questionImage = document.getElementById("questionImage");
const questionVideo = document.getElementById("questionVideo");
const imageCaption = document.getElementById("imageCaption");
const photoFrame = document.getElementById("photoFrame");
const feedback = document.getElementById("feedback");
const progress = document.getElementById("progress");
const playClip = document.getElementById("playClip");
const nextQuestion = document.getElementById("nextQuestion");


const buttons = document.querySelectorAll(".answer");
const correctSound = new Audio("sounds/correct.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");

const congratulationsSound =
    new Audio("sounds/congratulations.mp3");

const cheerSound =
    new Audio("sounds/cheer.mp3");

// Unlock the final sounds silently on the player's first tap
document.addEventListener("click", () => {

    [congratulationsSound, cheerSound].forEach(sound => {

        sound.muted = true;

        sound.play()
            .then(() => {
                sound.pause();
                sound.currentTime = 0;
                sound.muted = false;
            })
            .catch(() => {
                sound.muted = false;
            });

    });

}, { once: true });

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
"🎬 What Happened Next?": { 
    title: "🎬 Round 7 – What Happened Next?",
    photo: "images/rounds/whatnext.jpg",
    message: "Watch these video clips. Can you guess what happens next?"
},
    "❤️ Keith and Anne in 2026": {
        title: "❤️ Final Round – Keith and Anne in 2026",
        photo: "images/rounds/berninaexpress.jpg",
        message: "The Anniversary Quiz train has nearly reached the station. Just a few more stops left to celebrate an incredible 60 years of love, laughter and memories. Good luck!"
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

        // Hide the previous question's photo before showing the next round
        photoFrame.style.display = "none";
        questionImage.style.display = "none";

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
   
    questionVideo.pause();
    questionVideo.style.display = "none";
    questionVideo.removeAttribute("src");

    progress.style.width =
        (currentQuestion / questions.length) * 100 + "%";

 if (q.image || q.startImage) {
    questionImage.src = q.image || q.startImage;
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
// ==========================================
// Video question
// ==========================================
if (q.type === "video") {

    photoFrame.style.display = "block";

    questionImage.src = q.startImage;
    questionImage.style.display = "block";

    questionVideo.style.display = "none";

    playClip.style.display = "inline-block";
    playClip.textContent = "▶️ Play Clip";

    playClip.onclick = () => {

    questionVideo.src = q.video;
    questionVideo.currentTime = 0;

    playClip.disabled = true;

    questionVideo.onplaying = () => {
        questionImage.style.display = "none";
        questionVideo.style.display = "block";
    };

    questionVideo.play();

    questionVideo.onended = () => {

        questionVideo.style.display = "none";

        questionImage.src = q.endImage;
        questionImage.style.display = "block";

        playClip.disabled = false;
        playClip.textContent = "▶️ Play Again";
    };
};
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

    // Allow the question clip to be played again
playClip.style.display = "inline-block";
playClip.disabled = false;
playClip.textContent = "▶️ Play Again";

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

        playerAnswers[currentQuestion] = index;

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

// Make absolutely sure the Next button can't be tapped yet
nextQuestion.style.display = "none";
nextQuestion.disabled = true;

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

   if (q.revealVideo) {

    buttons.forEach(btn => btn.style.display = "none");

    // Do not allow moving on until the reveal video finishes
    nextQuestion.style.display = "none";
    nextQuestion.disabled = true;

    questionVideo.src = q.revealVideo;
    questionVideo.currentTime = 0;

    questionVideo.onplaying = () => {
        questionImage.style.display = "none";
        questionVideo.style.display = "block";
    };

    questionVideo.onended = () => {

        questionVideo.style.display = "none";

        photoFrame.style.display = "block";
        questionImage.src = q.revealImage;
        questionImage.style.display = "block";

        photoFrame.style.display = "block";
        questionImage.src = q.revealImage;
        questionImage.style.display = "block";


        if (q.photoTitle || q.photoText) {

    imageCaption.innerHTML = `
        ${q.photoTitle
            ? `<strong class="photo-note-title">${q.photoTitle}</strong>`
            : ""}
        ${q.photoText
            ? `<span class="photo-note-text">${q.photoText}</span>`
            : ""}
    `;

    imageCaption.style.display = "block";
} else {
    imageCaption.style.display = "none";
}

       showNextButton();

        playClip.style.display = "inline-block";
        playClip.disabled = false;
    playClip.textContent = "▶️ Play Again";

playClip.onclick = () => {

    nextQuestion.style.display = "none";

    questionImage.style.display = "none";
    questionVideo.style.display = "block";

    questionVideo.currentTime = 0;
    questionVideo.play();

    playClip.disabled = true;
};
    };

    questionVideo.play();
}

    if ((q.revealImageAfterAnswer || q.showPhotoTitleAfterAnswer) && q.image) {

    buttons.forEach(btn => btn.style.display = "none");

  photoFrame.style.display = "block";
questionImage.style.display = "block";
questionImage.src = q.revealImage || q.image;

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

    }
}
}, 1200);
        scoreText.textContent = `⭐ Score: ${score}`;
        
        // Play question audio, if one has been provided
const answerAudio =
    questions[currentQuestion].audioAnswer ||
    questions[currentQuestion].audio;

    function showNextButton() {

    nextQuestion.textContent =
        currentQuestion === questions.length - 1
            ? "🎉 That's All Folks!"
            : "Next Question ➜";

    nextQuestion.disabled = false;
    nextQuestion.style.display = "inline-block";
}

function moveToNextQuestion() {
    questionVideo.pause();
    questionVideo.style.display = "none";

    currentQuestion++;

if (currentQuestion < questions.length) {
    loadQuestion();
        } else {
            card.classList.remove("fade-out");
            card.classList.remove("fade-in");
            showFinalScreen();
        }
   
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

       setTimeout(showNextButton, 1200);

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

    // Video questions show this only after the reveal video finishes
if (q.type !== "video") {
    setTimeout(showNextButton, 1200);
}
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

   
congratulationsSound.currentTime = 0;
congratulationsSound.play()

    .catch(error => {
        console.error(
            "Congratulations sound could not play:",
            error
        );
    });

congratulationsSound.onended = () => {

    launchConfetti();

    cheerSound.currentTime = 0;

    cheerSound.play()
        .catch(error => {
            console.error(
                "Cheer sound could not play:",
                error
            );
        });
};

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
    💎 Thank you for taking part in
    <strong>Keith & Anne's Diamond Challenge</strong>
    and helping them celebrate
    <strong>60 wonderful years of marriage.</strong>
</p>

<p class="finish-message">
    We hope this quiz brought back happy memories and a few smiles.
</p>

<p class="finish-footer">
    With all our love,<br>
    <strong>❤️ Kevin & Dawn ❤️</strong><br><br>
    Diamond Wedding Anniversary • 2026
</p>

<div class="finish-buttons">

    <button id="printResults" class="start-btn">
    📄 Download My Results
</button>

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
const printResultsButton =
    document.getElementById("printResults");

printResultsButton.addEventListener("click", () => {

    let questionResults = "";

    questions.forEach((q, index) => {

        const selectedAnswerIndex = playerAnswers[index];
        const correctAnswerIndex = q.correct;

        const selectedAnswer =
            selectedAnswerIndex !== undefined
                ? q.answers[selectedAnswerIndex]
                : "No answer";

        const correctAnswer =
            q.answers[correctAnswerIndex];

        const result =
            selectedAnswerIndex === correctAnswerIndex
                ? "✅ Correct"
                : "❌ Incorrect";

        questionResults += `
            <div class="question-result">
                <h3>${index + 1}. ${q.question}</h3>
                <p><strong>Your answer:</strong> ${selectedAnswer}</p>
                <p><strong>Correct answer:</strong> ${correctAnswer}</p>
                <p><strong>Result:</strong> ${result}</p>
            </div>
        `;
    });

    const printWindow = window.open("", "_blank");

    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${playerName}'s Diamond Challenge Results</title>

            <style>
                body {
                    font-family: Arial, sans-serif;
                    max-width: 800px;
                    margin: 30px auto;
                    padding: 30px;
                    color: #333;
                }

                .results-sheet {
                    border: 4px solid #d4af37;
                    padding: 30px;
                    border-radius: 15px;
                }

               h1 {
    color: #7a1838;
    text-align: center;
    font-size: 1.8rem;
}

                .score {
                    text-align: center;
                    font-size: 26px;
                    font-weight: bold;
                    color: #7a1838;
                    margin: 20px 0;
                }

                .question-result {
                    border-bottom: 1px solid #ccc;
                    padding: 15px 0;
                    page-break-inside: avoid;
                }

                .question-result h3 {
                    color: #7a1838;
                }

                .footer {
                    text-align: center;
                    margin-top: 30px;
                    font-style: italic;
                }

               .print-button {
    display: block;
    margin: 25px auto;
    padding: 12px 25px;
    font-size: 18px;
    cursor: pointer;
}

.results-buttons {
    text-align: center;
    margin: 25px 0;
}

.return-button {
    display: inline-block;
    margin: 0 8px;
    padding: 12px 25px;
    font-size: 18px;
    cursor: pointer;
}

@media print {
    .print-button,
    .return-button {
        display: none;
    }
}
            </style>
        </head>

        <body>

            <div class="results-sheet">

                <h1>💎 Keith & Anne's Diamond Challenge 💎</h1>

                <div class="score">
                    ${playerName}<br>
                    Score: ${score} / ${questions.length}
                </div>

                ${questionResults}

                <div class="footer">
                    ❤️ Thank you for celebrating Keith & Anne's<br>
                    Diamond Wedding Anniversary.<br><br>
                    With love from all the family.
                </div>

            </div>
        
    <div class="results-buttons">

    <button class="print-button" onclick="window.print()">
        🖨️ Print / Save as PDF
    </button>

    <button
        class="return-button"
        onclick="window.close()"
    >
        ← Return to Quiz
    </button>

</div>

        </body>
        </html>
    `);

  printWindow.document.close();
});

viewSlideshowButton.addEventListener("click", () => {
    startSlideshow();
});

playAgainButton.addEventListener("click", () => {
    sessionStorage.removeItem("diamondQuizUnlocked");
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

const slideshowImages = Array.from(
    { length: 77 },
    (_, index) => `images/slideshow/slide${index + 1}.jpg`
);

let slideshowIndex = 0;
let slideshowTimer = null;
let slideshowControlsTimer = null;
let slideshowPaused = false;
let slideshowTouchStartX = 0;
let slideshowTouchStartY = 0;
let slideshowWasSwiped = false;

const previousSlideButton =
    document.getElementById("previousSlide");

const nextSlideButton =
    document.getElementById("nextSlide");

const pauseSlideshowButton =
    document.getElementById("pauseSlideshow");

const closeSlideshowButton =
    document.getElementById("closeSlideshow");

const slideshow =
    document.getElementById("slideshow");

const slideshowImage =
    document.getElementById("slideshow-image");

const slideshowControls =
    document.getElementById("slideshowControls");

// Keep the full-screen slideshow outside the animated quiz card.
// This allows position: fixed to work correctly on iPhones.
if (slideshow && slideshow.parentElement !== document.body) {
    document.body.appendChild(slideshow);
}

function slideshowIsOpen() {
    return slideshow &&
        !slideshow.classList.contains("hidden");
}

function hideSlideshowControls() {
    if (!slideshowControls) {
        return;
    }

    slideshowControls.classList.remove("show");
}

function showSlideshowControls() {
    if (!slideshowControls) {
        return;
    }

    slideshowControls.classList.add("show");

    clearTimeout(slideshowControlsTimer);

    slideshowControlsTimer = setTimeout(() => {
        hideSlideshowControls();
    }, 3000);
}

function displaySlideshowImage() {
    if (
        !slideshowImage ||
        slideshowImages.length === 0
    ) {
        return;
    }

    slideshowImage.src =
        slideshowImages[slideshowIndex];

    slideshowImage.alt =
        `Slideshow photograph ${slideshowIndex + 1} ` +
        `of ${slideshowImages.length}`;
}

function stopSlideshowTimer() {
    clearInterval(slideshowTimer);
    slideshowTimer = null;
}

function closeSlideshow(showEnding = true) {
    stopSlideshowTimer();
    clearTimeout(slideshowControlsTimer);

    if (slideshow) {
        slideshow.classList.add("hidden");
    }

    document.body.classList.remove(
        "slideshow-open"
    );

    hideSlideshowControls();

    // Return to the congratulations screen instead.
}

function showPreviousSlide() {
    slideshowIndex--;

    if (slideshowIndex < 0) {
        slideshowIndex =
            slideshowImages.length - 1;
    }

    displaySlideshowImage();
    showSlideshowControls();
}

function showNextSlide() {
    slideshowIndex++;

    if (
        slideshowIndex >=
        slideshowImages.length
    ) {
        slideshowIndex = 0;
    }

    displaySlideshowImage();
    showSlideshowControls();
}

function startSlideshowTimer() {
    stopSlideshowTimer();

    slideshowTimer = setInterval(() => {
        if (slideshowPaused) {
            return;
        }

        slideshowIndex++;

        // After the final photograph has been shown,
        // close the slideshow and display the
        // thank-you screen.
        if (
            slideshowIndex >=
            slideshowImages.length
        ) {
           closeSlideshow(false);
            return;
        }

        displaySlideshowImage();

    }, 4000);
}

function startSlideshow() {
    if (
        !slideshow ||
        !slideshowImage ||
        slideshowImages.length === 0
    ) {
        return;
    }

    stopSlideshowTimer();

    slideshowIndex = 0;
    slideshowPaused = false;

    if (pauseSlideshowButton) {
        pauseSlideshowButton.textContent =
            "⏸ Pause";
    }

    slideshow.classList.remove("hidden");

    document.body.classList.add(
        "slideshow-open"
    );

    hideSlideshowControls();
    displaySlideshowImage();
    startSlideshowTimer();
}

if (slideshowImage) {
    slideshowImage.addEventListener(
        "click",
        () => {
            if (slideshowWasSwiped) {
                slideshowWasSwiped = false;
                return;
            }

            if (
                slideshowControls &&
                slideshowControls.classList
                    .contains("show")
            ) {
                hideSlideshowControls();

                clearTimeout(
                    slideshowControlsTimer
                );
            } else {
                showSlideshowControls();
            }
        }
    );

    // Swipe left // Swipe left or right anywhere on the slideshow
if (slideshow) {

    slideshow.addEventListener(
        "touchstart",
        (event) => {
            if (event.touches.length !== 1) {
                return;
            }

            slideshowTouchStartX =
                event.touches[0].clientX;

            slideshowTouchStartY =
                event.touches[0].clientY;

            slideshowWasSwiped = false;
        },
        { passive: true }
    );

    slideshow.addEventListener(
        "touchend",
        (event) => {
            if (event.changedTouches.length !== 1) {
                return;
            }

            const touch =
                event.changedTouches[0];

            const horizontalDistance =
                touch.clientX - slideshowTouchStartX;

            const verticalDistance =
                touch.clientY - slideshowTouchStartY;

            // Ignore short movements and vertical gestures
            if (
                Math.abs(horizontalDistance) < 45 ||
                Math.abs(horizontalDistance) <=
                    Math.abs(verticalDistance)
            ) {
                return;
            }

            slideshowWasSwiped = true;

            if (horizontalDistance < 0) {
                showNextSlide();
            } else {
                showPreviousSlide();
            }
        },
        { passive: true }
    );

    slideshow.addEventListener(
        "touchcancel",
        () => {
            slideshowWasSwiped = false;
        },
        { passive: true }
    );
}

// Close: if (slideshowImage)
}

if (previousSlideButton) {
    previousSlideButton.addEventListener(
        "click",
        (event) => {
            event.stopPropagation();
            showPreviousSlide();
        }
    );
}

if (nextSlideButton) {
    nextSlideButton.addEventListener(
        "click",
        (event) => {
            event.stopPropagation();
            showNextSlide();
        }
    );
}

if (pauseSlideshowButton) {
    pauseSlideshowButton.addEventListener(
        "click",
        (event) => {
            event.stopPropagation();

            slideshowPaused =
                !slideshowPaused;

            if (slideshowPaused) {
                stopSlideshowTimer();

                pauseSlideshowButton.textContent =
                    "▶ Play";
            } else {
                pauseSlideshowButton.textContent =
                    "⏸ Pause";

                startSlideshowTimer();
            }

            showSlideshowControls();
        }
    );
}

if (closeSlideshowButton) {
    closeSlideshowButton.addEventListener(
        "click",
        (event) => {
            event.stopPropagation();
            closeSlideshow(false);
        }
    );
}

// Desktop and laptop keyboard controls.
document.addEventListener(
    "keydown",
    (event) => {
        if (!slideshowIsOpen()) {
            return;
        }

        if (event.key === "ArrowLeft") {
            showPreviousSlide();

        } else if (
            event.key === "ArrowRight"
        ) {
            showNextSlide();

        } else if (
            event.key === "Escape"
        ) {
           closeSlideshow(false);

        } else if (
            event.key === " " ||
            event.key === "Spacebar"
        ) {
            event.preventDefault();

            if (pauseSlideshowButton) {
                pauseSlideshowButton.click();
            }
        }
    }
);

function showSlideshowEnding() {
    card.innerHTML = `
        <div class="finish-screen">

            <h1 class="finish-title">
                ❤️ Thank You ❤️
            </h1>

            <p class="finish-message">
                Thank you for celebrating
                <strong>
                    Keith & Anne's Diamond Wedding
                    Anniversary
                </strong>.
            </p>

            <p class="finish-message">
                We hope you've enjoyed looking back
                over
                <strong>60 wonderful years</strong>
                of love, laughter and family memories.
            </p>

            <p class="finish-footer">
                With all our love,<br>
                <strong>
                    ❤️ Kevin & Dawn ❤️
                </strong>
            </p>

            <div class="finish-buttons">

                <button
                    id="watchSlideshowAgain"
                    class="start-btn"
                >
                    📸 Watch Slideshow Again
                </button>

                <button
                    id="slideshowHome"
                    class="start-btn"
                >
                    🏠 Home
                </button>

                <button
                    id="slideshowPlayAgain"
                    class="start-btn"
                >
                    🔄 Play Again
                </button>

            </div>

        </div>
    `;

    document
        .getElementById(
            "watchSlideshowAgain"
        )
        .addEventListener(
            "click",
            () => {
                startSlideshow();
            }
        );

    document
        .getElementById(
            "slideshowHome"
        )
        .addEventListener(
            "click",
            () => {
                sessionStorage.removeItem(
                    "diamondQuizUnlocked"
                );

                window.location.href =
                    "index.html";
            }
        );

    document
        .getElementById(
            "slideshowPlayAgain"
        )
        .addEventListener(
            "click",
            () => {
                sessionStorage.removeItem(
                    "diamondQuizUnlocked"
                );

                window.location.href =
                    "index.html";
            }
        );
}

// Start the quiz
loadQuestion();