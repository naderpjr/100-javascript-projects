
const navbarEl = document.querySelector(".navbar");
const bottomContainerEl = document.querySelector(".bottom-container");

function updateNavbar() {
    const threshold =
        bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50;

    navbarEl.classList.toggle("active", window.scrollY > threshold);
}

window.addEventListener("scroll", updateNavbar, { passive: true });
window.addEventListener("resize", updateNavbar);

updateNavbar();
