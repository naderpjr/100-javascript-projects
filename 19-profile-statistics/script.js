const countersEl = document.querySelectorAll(".counter");

countersEl.forEach((counterEl) => {
    counterEl.innerText = "0";

    function incrementCounter() {
        let currentNum = Number(counterEl.innerText);
        const dataCeil = Number(counterEl.dataset.ceil);
        const increment = dataCeil / 15;

        currentNum = Math.ceil(currentNum + increment);

        if (currentNum < dataCeil) {
            counterEl.innerText = currentNum;
            setTimeout(incrementCounter, 50);
        } else {
            counterEl.innerText = dataCeil;
        }
    }

    incrementCounter();
});