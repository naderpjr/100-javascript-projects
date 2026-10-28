const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

let imageNum = 6;

btnEl.addEventListener("click", () => {
    imageNum = 6;
    addNewImages();
});

function addNewImages() {
    const fragment = document.createDocumentFragment();

    for (let index = 0; index < imageNum; index++) {
        const newImgEl = document.createElement("img");

        newImgEl.src = `https://picsum.photos/300?random=${Math.floor(
            Math.random() * 2000
        )}`;
        newImgEl.alt = "Random photo";
        newImgEl.loading = "lazy";

        fragment.appendChild(newImgEl);
    }

    imageContainerEl.appendChild(fragment);
}