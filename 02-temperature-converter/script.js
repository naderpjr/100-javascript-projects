
const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

const inputs = {
    celsius: celsiusEl,
    fahrenheit: fahrenheitEl,
    kelvin: kelvinEl,
};

function computeTemp(event) {
    const input = event.target;
    const value = input.value.trim();

    const otherInputs = Object.values(inputs).filter(
        (element) => element !== input
    );

    if (value === "") {
        otherInputs.forEach((element) => {
            element.value = "";
        });
        return;
    }

    const temperature = Number(value);

    if (!Number.isFinite(temperature)) return;

    if (input.name === "kelvin" && temperature < 0) {
        otherInputs.forEach((element) => {
            element.value = "";
        });
        return;
    }

    let celsius;

    switch (input.name) {
        case "celsius":
            celsius = temperature;
            break;

        case "fahrenheit":
            celsius = (temperature - 32) / 1.8;
            break;

        case "kelvin":
            celsius = temperature - 273.15;
            break;

        default:
            return;
    }

    celsiusEl.value =
        input === celsiusEl ? value : celsius.toFixed(2);

    fahrenheitEl.value =
        input === fahrenheitEl
            ? value
            : (celsius * 1.8 + 32).toFixed(2);

    kelvinEl.value =
        input === kelvinEl
            ? value
            : (celsius + 273.15).toFixed(2);
}
