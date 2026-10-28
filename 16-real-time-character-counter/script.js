const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("input", updateCounter);

function updateCounter() {
    const maxLength = textareaEl.maxLength;
    const currentLength = textareaEl.value.length;

    totalCounterEl.textContent = currentLength;
    remainingCounterEl.textContent = maxLength - currentLength;
}

updateCounter();