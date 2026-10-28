
const buttonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");
const rollHistoryEl = document.getElementById("roll-history");
const rollCountEl = document.getElementById("roll-count");
const emptyStateEl = document.getElementById("empty-state");

const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

let historyList = [];

function rollDice() {
    const result = Math.floor(Math.random() * 6) + 1;

    diceEl.textContent = diceFaces[result - 1];
    diceEl.setAttribute("aria-label", `Dice showing ${result}`);

    historyList.unshift(result);
    updateRollHistory();
}

function updateRollHistory() {
    rollHistoryEl.replaceChildren();

    historyList.forEach((result, index) => {
        const listItem = document.createElement("li");
        const labelEl = document.createElement("span");
        const faceEl = document.createElement("span");

        labelEl.textContent = `Roll ${historyList.length - index}`;
        faceEl.textContent = diceFaces[result - 1];

        listItem.append(labelEl, faceEl);
        rollHistoryEl.appendChild(listItem);
    });

    rollCountEl.textContent =
        `${historyList.length} ${historyList.length === 1 ? "roll" : "rolls"}`;

    emptyStateEl.hidden = historyList.length > 0;
}

buttonEl.addEventListener("click", () => {
    if (buttonEl.disabled) return;

    buttonEl.disabled = true;
    diceEl.classList.remove("roll-animation");

    // Restart the animation for every roll.
    void diceEl.offsetWidth;

    diceEl.classList.add("roll-animation");

    setTimeout(() => {
        rollDice();
        diceEl.classList.remove("roll-animation");
        buttonEl.disabled = false;
    }, 800);
});
