const bodyElement = document.querySelector('[data-js="body--dark"]');
const questionsSymbolElement = document.querySelector('[data-js="questions--symbol--dark"]');
const imgElement = document.querySelector('[data-js="bookmark--darkmodus"]');


const buttonToggle = document.querySelector('[data-js="button--toggle"]');
buttonToggle.addEventListener("click", () => {
    bodyElement.classList.toggle("darkModus")
    questionsSymbolElement.classList.toggle("counter__questions--symbol--dark");
    if (bodyElement.classList.contains("darkModus")) {
        imgElement.src = "./icons/icon-bookmark-white.png";
    } else {
        imgElement.src = "./icons/icon-bookmark-filled.png";
    }
});