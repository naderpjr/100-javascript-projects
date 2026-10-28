
const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");
const timerLabelEl = document.getElementById("timer-label");

const INITIAL_TIME = 25 * 60;

let timeLeft = INITIAL_TIME;
let interval = null;

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerEl.textContent = [
        String(minutes).padStart(2, "0"),
        String(seconds).padStart(2, "0")
    ].join(":");
}

function updateButtons(isRunning) {
    startEl.disabled = isRunning;
    stopEl.disabled = !isRunning;
}

function startTimer() {
    if (interval !== null || timeLeft <= 0) return;

    timerLabelEl.textContent = "Stay focused";
    updateButtons(true);

    interval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft <= 0) {
            clearInterval(interval);
            interval = null;
            timeLeft = 0;
            updateTimer();
            updateButtons(false);
            timerLabelEl.textContent = "Session complete";
            alert("Time's up!");
        }
    }, 1000);
}

function stopTimer() {
    if (interval === null) return;

    clearInterval(interval);
    interval = null;

    updateButtons(false);
    timerLabelEl.textContent = "Timer paused";
}

function resetTimer() {
    clearInterval(interval);
    interval = null;
    timeLeft = INITIAL_TIME;

    updateTimer();
    updateButtons(false);
    timerLabelEl.textContent = "Ready to focus";
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);

updateTimer();
updateButtons(false);
