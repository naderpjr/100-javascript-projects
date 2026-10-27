
const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
    const birthdayValue = birthdayEl.value;

    if (!birthdayValue) {
        resultEl.textContent = "Please enter your date of birth.";
        return;
    }

    const age = getAge(birthdayValue);

    if (age === null) {
        resultEl.textContent = "Please enter a valid date of birth.";
        return;
    }

    resultEl.textContent = `Your age is ${age} ${age === 1 ? "year" : "years"} old.`;
}

function getAge(birthdayValue) {
    const [year, month, day] = birthdayValue.split("-").map(Number);
    const birthdayDate = new Date(year, month - 1, day);
    const currentDate = new Date();

    if (
        birthdayDate.getFullYear() !== year ||
        birthdayDate.getMonth() !== month - 1 ||
        birthdayDate.getDate() !== day ||
        birthdayDate > currentDate
    ) {
        return null;
    }

    let age = currentDate.getFullYear() - year;

    const hasBirthdayPassed =
        currentDate.getMonth() > month - 1 ||
        (
            currentDate.getMonth() === month - 1 &&
            currentDate.getDate() >= day
        );

    if (!hasBirthdayPassed) {
        age--;
    }

    return age;
}

btnEl.addEventListener("click", calculateAge);
