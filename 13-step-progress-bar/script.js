
const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");
const progressEl = document.querySelector(".progress-bar-front");
const stepsEl = document.querySelectorAll(".step");

let currentChecked = 1;

nextEl.addEventListener("click", () => {
    if (currentChecked < stepsEl.length) {
        currentChecked++;
        updateStepProgress();
    }
});

prevEl.addEventListener("click", () => {
    if (currentChecked > 1) {
        currentChecked--;
        updateStepProgress();
    }
});

function updateStepProgress() {
    stepsEl.forEach((stepEl, idx) => {
        const isChecked = idx < currentChecked;

        stepEl.classList.toggle("checked", isChecked);

        stepEl.innerHTML = isChecked
            ? `<i class="fas fa-check"></i>
         <small>${idx === 0
                ? "Start"
                : idx === stepsEl.length - 1
                    ? "Final"
                    : "Step " + idx
            }</small>`
            : `<i class="fas fa-times"></i>`;
    });

    const progress = ((currentChecked - 1) / (stepsEl.length - 1)) * 100;

    progressEl.style.width = `${progress}%`;

    prevEl.disabled = currentChecked === 1;
    nextEl.disabled = currentChecked === stepsEl.length;
}

updateStepProgress();
