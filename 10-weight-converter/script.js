
const inputEl = document.getElementById("input");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result");

function updateResults() {
    const value = inputEl.value.trim();

    errorEl.textContent = "";

    if (value === "") {
        resultEl.textContent = "—";
        return;
    }

    const pounds = Number(value);

    if (!Number.isFinite(pounds) || pounds <= 0) {
        resultEl.textContent = "—";
        errorEl.textContent = "Please enter a weight greater than zero.";
        return;
    }

    const kilograms = pounds * 0.45359237;

    resultEl.textContent = kilograms.toFixed(2);
}

inputEl.addEventListener("input", updateResults);
