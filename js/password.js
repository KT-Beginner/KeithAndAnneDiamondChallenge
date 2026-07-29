document.addEventListener("DOMContentLoaded", () => {
    const passwordGate = document.getElementById("passwordGate");
    const passwordInput = document.getElementById("quizPassword");
    const passwordSubmit = document.getElementById("passwordSubmit");
    const passwordMessage = document.getElementById("passwordMessage");

    const quizPassword = "dnomaid";

    function unlockQuiz() {
        const enteredPassword = passwordInput.value.trim();

       if (enteredPassword.toLowerCase() === quizPassword.toLowerCase()) {
    sessionStorage.setItem("diamondQuizUnlocked", "true");

    document.body.classList.remove("quiz-locked");
    passwordGate.style.display = "none";

    document.querySelector(".container").style.display = "block";
} else {
            passwordMessage.textContent =
                "Sorry, that password is incorrect.";

            passwordInput.value = "";
            passwordInput.focus();
        }
    }

    const container = document.querySelector(".container");

if (sessionStorage.getItem("diamondQuizUnlocked") === "true") {
    document.body.classList.remove("quiz-locked");
    passwordGate.style.display = "none";
    container.style.display = "block";
} else {
    container.style.display = "none";
    passwordInput.focus();
}
    passwordSubmit.addEventListener("click", unlockQuiz);

    passwordInput.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            unlockQuiz();
        }
    });
});