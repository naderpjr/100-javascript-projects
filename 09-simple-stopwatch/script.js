
const timerEl = document.getElementById("timer");
const startButtonEl = document.getElementById("start");
const stopButtonEl = document.getElementById("stop");
const resetButtonEl = document.getElementById("reset");
const statusTextEl = document.getElementById("status-text");
const statusDotEl = document.getElementById("status-dot");

let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;

function formatTime(milliseconds) {
    const centiseconds = Math.floor(milliseconds / 10);
    const hours = Math.floor(centiseconds / 360000);
    const minutes = Math.floor((centiseconds % 360000) / 6000);
    const seconds = Math.floor((centiseconds % 6000) / 100);
    const hundredths = centiseconds % 100;

    return [
        String(hours).padStart(2, "0"),
        String(minutes).padStart(2, "0"),
        String(seconds).padStart(2, "0")
    ].join(":") + `.${String(hundredths).padStart(2, "0")}`;
}

function updateTimer() {
    elapsedTime = Date.now() - startTime;
    timerEl.textContent = formatTime(elapsedTime);
}

function setStatus(status, isRunning = false) {
    statusTextEl.textContent = status;
    statusDotEl.classList.toggle("running", isRunning);
}

function startTimer() {
    if (timerInterval !== null) return;

    startTime = Date.now() - elapsedTime;

    timerInterval = setInterval(updateTimer, 10);

    startButtonEl.disabled = true;
    stopButtonEl.disabled = false;

    setStatus("Running", true);
}

function stopTimer() {
    if (timerInterval === null) return;

    updateTimer();
    clearInterval(timerInterval);
    timerInterval = null;

    startButtonEl.disabled = false;
    stopButtonEl.disabled = true;

    setStatus("Paused");
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;

    startTime = 0;
    elapsedTime = 0;
    timerEl.textContent = "00:00:00.00";

    startButtonEl.disabled = false;
    stopButtonEl.disabled = true;

    setStatus("Ready");
}

startButtonEl.addEventListener("click", startTimer);
stopButtonEl.addEventListener("click", stopTimer);
resetButtonEl.addEventListener("click", resetTimer);
