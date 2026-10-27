const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

function calculateTotal() {
    const billValue = Number(billInput.value);
    const tipValue = Number(tipInput.value);

    if (
        billInput.value.trim() === "" ||
        tipInput.value.trim() === "" ||
        !Number.isFinite(billValue) ||
        !Number.isFinite(tipValue) ||
        billValue < 0 ||
        tipValue < 0
    ) {
        totalSpan.textContent = "";
        return;
    }

    const totalValue = billValue * (1 + tipValue / 100);

    totalSpan.textContent = totalValue.toFixed(2);
}

btnEl.addEventListener("click", calculateTotal);
